import fs from "fs";
import path from "path";

const ROOT = "c:/MY FOLDER/LIVE PROJECT/ASRAMA-PROJECT";
const ADMIN_DIR = path.join(ROOT, "admin");
const APP_DIR = path.join(ROOT, "frontend-asrama", "app", "(admin)");

function read(filePath) {
  return fs.readFileSync(filePath, "utf8").replace(/\r/g, "");
}

function write(filePath, content) {
  fs.writeFileSync(filePath, content, "utf8");
}

function extractMainContent(filePath) {
  const lines = read(filePath).split("\n");
  let innerDivIdx = -1;
  let innerDivCloseIdx = -1;

  for (let index = 0; index < lines.length; index += 1) {
    if (/max-w-screen-2xl/.test(lines[index])) {
      innerDivIdx = index;
      break;
    }
  }

  if (innerDivIdx === -1) {
    throw new Error(`Could not find max-w-screen-2xl in ${filePath}`);
  }

  let depth = 0;
  for (let index = innerDivIdx; index < lines.length; index += 1) {
    const line = lines[index];
    const opens = (line.match(/<div\b/g) || []).length;
    const closes = (line.match(/<\/div>/g) || []).length;
    depth += opens - closes;

    if (index > innerDivIdx && depth === 0) {
      innerDivCloseIdx = index;
      break;
    }
  }

  if (innerDivCloseIdx === -1) {
    throw new Error(`Could not find matching closing div for ${filePath}`);
  }

  return lines.slice(innerDivIdx + 1, innerDivCloseIdx).join("\n").trim();
}

function toJsx(content) {
  let output = content;

  output = output.replace(/<!--[\s\S]*?-->/g, "");
  output = output.replace(/\bclass=/g, "className=");
  output = output.replace(/\bfor=/g, "htmlFor=");
  output = output.replace(/\btabindex=/g, "tabIndex=");
  output = output.replace(/\bautocomplete=/g, "autoComplete=");
  output = output.replace(/\binputmode=/g, "inputMode=");
  output = output.replace(/\bspellcheck=/g, "spellCheck=");
  output = output.replace(/\bmaxlength=/g, "maxLength=");
  output = output.replace(/\bminlength=/g, "minLength=");
  output = output.replace(/\breadonly=/g, "readOnly=");
  output = output.replace(/\bcolspan=/g, "colSpan=");
  output = output.replace(/\browspan=/g, "rowSpan=");
  output = output.replace(/\bstroke-width=/g, "strokeWidth=");
  output = output.replace(/\bstroke-linecap=/g, "strokeLinecap=");
  output = output.replace(/\bstroke-linejoin=/g, "strokeLinejoin=");
  output = output.replace(/\bfill-rule=/g, "fillRule=");
  output = output.replace(/\bclip-rule=/g, "clipRule=");
  output = output.replace(/\bviewbox=/g, "viewBox=");

  output = output.replace(/\s+on[a-z]+="[^"]*"/g, "");

  output = output.replace(/<div><\/div>\n(\s+<p )/g, "<div>\n$1");
  output = output.replace(/<strong><\/strong>Ditolak<\/strong>/g, "<strong>Ditolak</strong>");
  output = output.replace(/\sselected(?=[\s>])/g, "");
  output = output.replace(/\schecked(?=[\s>])/g, " defaultChecked");
  output = output.replace(/\b(rows|cols|maxLength|minLength|size|colSpan|rowSpan)="(\d+)"/g, (_, prop, value) => `${prop}={${value}}`);

  output = output.replace(/style="([^"]*)"/g, (_, rawStyle) => {
    const style = rawStyle
      .split(";")
      .map((entry) => entry.trim())
      .filter(Boolean)
      .map((entry) => {
        const [prop, ...rest] = entry.split(":");
        const value = rest.join(":").trim();
        const camelProp = prop.trim().replace(/-([a-z])/g, (_, char) => char.toUpperCase());
        return `${camelProp}: '${value}'`;
      })
      .join(", ");

    return `style={{ ${style} }}`;
  });

  for (const tag of ["input", "img", "br", "hr", "meta", "link"]) {
    const regex = new RegExp(`<${tag}(\\b[^>]*?)(?<!/)>`, "g");
    output = output.replace(regex, `<${tag}$1 />`);
  }

  output = output.replace(/tabIndex="(-?\d+)"/g, (_, value) => `tabIndex={${value}}`);

  return output.trim();
}

function findIdStart(markup, id) {
  const idIndex = markup.indexOf(`id="${id}"`);
  if (idIndex === -1) {
    throw new Error(`Could not find id="${id}"`);
  }

  const openIndex = markup.lastIndexOf("<", idIndex);
  if (openIndex === -1) {
    throw new Error(`Could not find opening tag for id="${id}"`);
  }

  return openIndex;
}

function findLiteralStart(markup, literal) {
  const index = markup.indexOf(literal);
  if (index === -1) {
    throw new Error(`Could not find marker "${literal}"`);
  }

  return index;
}

function sliceByIds(markup, startId, endId) {
  return markup.slice(findIdStart(markup, startId), findIdStart(markup, endId)).trim();
}

function sliceToLiteral(markup, startId, literal) {
  return markup.slice(findIdStart(markup, startId), findLiteralStart(markup, literal)).trim();
}

function sliceFromLiteral(markup, literal) {
  return markup.slice(findLiteralStart(markup, literal)).trim();
}

function sliceElementByLiteral(markup, literal) {
  const start = findLiteralStart(markup, literal);
  const tagMatch = markup.slice(start).match(/^<([a-zA-Z0-9]+)/);

  if (!tagMatch) {
    throw new Error(`Could not determine tag for marker "${literal}"`);
  }

  const tagName = tagMatch[1];
  const tagRegex = new RegExp(`<\\/?${tagName}\\b[^>]*>`, "g");
  tagRegex.lastIndex = start;

  let depth = 0;
  let current;
  let end = -1;

  while ((current = tagRegex.exec(markup)) !== null) {
    const token = current[0];
    const isClosing = token.startsWith(`</${tagName}`);
    const isSelfClosing = token.endsWith("/>");

    if (!isClosing) {
      depth += 1;
    }

    if (isClosing) {
      depth -= 1;
    } else if (isSelfClosing) {
      depth -= 1;
    }

    if (depth === 0) {
      end = tagRegex.lastIndex;
      break;
    }
  }

  if (end === -1) {
    throw new Error(`Could not find closing tag for marker "${literal}"`);
  }

  return markup.slice(start, end).trim();
}

function makeVisibleSection(markup) {
  return markup
    .replace(/\shidden(?=[\s>])/, "")
    .replace(/^(<div\b[^>]*className=")hidden(")/, '$1block$2')
    .replace(/^(<div\b[^>]*className=")block(")/, '$1block$2');
}

function injectButtonHandlers(markup, options) {
  return markup.replace(/<button\b([\s\S]*?)>/g, (full, attrs) => {
    if (/onClick=/.test(attrs)) {
      return full;
    }

    if (options?.openSectionHandler && /className="open-section-btn/.test(attrs)) {
      const match = attrs.match(/data-section="([^"]+)"/);
      if (match) {
        return `<button${attrs} onClick={() => ${options.openSectionHandler}("${match[1]}")}>`;
      }
    }

    if (options?.detailHandler && /className="view-detail-btn/.test(attrs)) {
      return `<button${attrs} onClick={() => ${options.detailHandler}()}>`;
    }

    if (options?.openModalHandler && /id="openScheduleModalBtn"/.test(attrs)) {
      return `<button${attrs} onClick={() => ${options.openModalHandler}(true)}>`;
    }

    if (options?.closeModalHandler && /id="closeScheduleModalBtn"/.test(attrs)) {
      return `<button${attrs} onClick={() => ${options.closeModalHandler}(false)}>`;
    }

    if (options?.closeModalHandler && /id="cancelScheduleModalBtn"/.test(attrs)) {
      return `<button${attrs} onClick={() => ${options.closeModalHandler}(false)}>`;
    }

    return full;
  });
}

function injectBackdropHandler(markup, handlerName) {
  return markup.replace(/<div\b([\s\S]*?)id="scheduleModalBackdrop"([\s\S]*?)>/, `<div$1id="scheduleModalBackdrop"$2 onClick={() => ${handlerName}(false)}>`); 
}

function injectFormSubmit(markup, handlerName) {
  return markup.replace(/<form\b([\s\S]*?)id="scheduleUpdateForm"([\s\S]*?)>/, `<form$1id="scheduleUpdateForm"$2 onSubmit={(event) => { event.preventDefault(); ${handlerName}(false); }}>`);
}

function indent(markup, spaces = 8) {
  const pad = " ".repeat(spaces);
  return markup
    .trim()
    .split("\n")
    .map((line) => `${pad}${line}`)
    .join("\n");
}

function buildPendaftaranPage() {
  const raw = read(path.join(ADMIN_DIR, "pendaftaran.html"));
  const formSection = makeVisibleSection(toJsx(sliceByIds(raw, "content-form", "content-daftar")));
  const daftarSection = makeVisibleSection(toJsx(sliceByIds(raw, "content-daftar", "content-verifikasi")));
  const verifikasiSection = makeVisibleSection(toJsx(sliceByIds(raw, "content-verifikasi", "content-riwayat")));
  const riwayatSection = makeVisibleSection(toJsx(sliceToLiteral(raw, "content-riwayat", "<footer")));
  const footer = toJsx(sliceElementByLiteral(raw, "<footer"));
  const overlays = toJsx(raw.slice(findIdStart(raw, "detailModal"), findLiteralStart(raw, "<script>")).trim());

  return `"use client";

import { useEffect, useState } from "react";

type PendaftaranTab = "form" | "daftar" | "verifikasi" | "riwayat";

const activeTabClass =
  "tab-btn flex items-center gap-2.5 px-5 py-4 text-sm font-semibold border-b-2 whitespace-nowrap shrink-0 border-indigo-600 text-indigo-600 bg-indigo-50/60";
const inactiveTabClass =
  "tab-btn flex items-center gap-2.5 px-5 py-4 text-sm font-medium border-b-2 whitespace-nowrap shrink-0 border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50";

const tabConfig: Record<PendaftaranTab, { breadcrumb: string; addLabel: string }> = {
  form: { breadcrumb: "Form Pendaftaran", addLabel: "Form Pendaftaran" },
  daftar: { breadcrumb: "Daftar Pendaftar", addLabel: "Tambah Pendaftar" },
  verifikasi: { breadcrumb: "Verifikasi", addLabel: "Proses Verifikasi" },
  riwayat: { breadcrumb: "Riwayat Pendaftaran", addLabel: "Riwayat" },
};

function FormPendaftaranView() {
  return (
    <>
${indent(formSection)}
    </>
  );
}

function DaftarPendaftarView() {
  return (
    <>
${indent(daftarSection)}
    </>
  );
}

function VerifikasiPendaftaranView() {
  return (
    <>
${indent(verifikasiSection)}
    </>
  );
}

function RiwayatPendaftaranView() {
  return (
    <>
${indent(riwayatSection)}
    </>
  );
}

function PendaftaranFooter() {
  return (
    <>
${indent(footer)}
    </>
  );
}

function PendaftaranOverlayView() {
  return (
    <>
${indent(overlays)}
    </>
  );
}

export default function PendaftaranPage() {
  const [activeTab, setActiveTab] = useState<PendaftaranTab>("form");

  useEffect(() => {
    document.title = "Pendaftaran | SiMARA";
  }, []);

  return (
    <>
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-2 text-xs text-gray-400 mb-2">
            <i className="fa-solid fa-house text-gray-300"></i>
            <span className="text-gray-300">/</span>
            <span className="text-indigo-500 font-semibold">{tabConfig[activeTab].breadcrumb}</span>
          </div>
          <h1 className="text-2xl sm:text-[28px] font-bold text-gray-900 leading-tight">Pendaftaran Asrama</h1>
          <p className="text-gray-500 text-sm mt-1.5">Kelola seluruh proses pendaftaran masuk asrama mahasiswa</p>
        </div>
        <div className="flex items-center gap-2.5 shrink-0">
          <button className="flex items-center gap-2 px-4 py-2.5 text-sm border border-gray-200 text-gray-600 rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all font-medium">
            <i className="fa-solid fa-download text-gray-400 text-xs"></i>Export
          </button>
          <button className="flex items-center gap-2 px-4 py-2.5 text-sm bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-colors font-semibold shadow-md shadow-indigo-200 active:scale-95">
            <i className="fa-solid fa-plus text-xs"></i>
            <span id="mainAddBtnLabel">{tabConfig[activeTab].addLabel}</span>
          </button>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 mb-6 overflow-hidden">
        <div className="flex overflow-x-auto">
          <button id="tab-form" type="button" onClick={() => setActiveTab("form")} className={activeTab === "form" ? activeTabClass : inactiveTabClass}>
            <i className="fa-solid fa-file-pen text-indigo-500 text-base"></i>
            Form Pendaftaran
          </button>
          <button id="tab-daftar" type="button" onClick={() => setActiveTab("daftar")} className={activeTab === "daftar" ? activeTabClass : inactiveTabClass}>
            <i className="fa-solid fa-list text-gray-400 text-base"></i>
            Daftar Pendaftar
            <span className="bg-gray-100 text-gray-600 text-[10px] font-bold px-1.5 py-0.5 rounded-full">68</span>
          </button>
          <button id="tab-verifikasi" type="button" onClick={() => setActiveTab("verifikasi")} className={activeTab === "verifikasi" ? activeTabClass : inactiveTabClass}>
            <i className="fa-solid fa-shield-check text-gray-400 text-base"></i>
            Verifikasi
            <span className="bg-amber-100 text-amber-700 text-[10px] font-bold px-1.5 py-0.5 rounded-full border border-amber-200">18</span>
          </button>
          <button id="tab-riwayat" type="button" onClick={() => setActiveTab("riwayat")} className={activeTab === "riwayat" ? activeTabClass : inactiveTabClass}>
            <i className="fa-solid fa-clock-rotate-left text-gray-400 text-base"></i>
            Riwayat Pendaftaran
            <span className="bg-gray-100 text-gray-600 text-[10px] font-bold px-1.5 py-0.5 rounded-full">61</span>
          </button>
        </div>
      </div>

      {activeTab === "form" && <FormPendaftaranView />}
      {activeTab === "daftar" && <DaftarPendaftarView />}
      {activeTab === "verifikasi" && <VerifikasiPendaftaranView />}
      {activeTab === "riwayat" && <RiwayatPendaftaranView />}
      <PendaftaranFooter />
      <PendaftaranOverlayView />
    </>
  );
}
`;
}

function buildPenghuniPage() {
  const content = toJsx(extractMainContent(path.join(ADMIN_DIR, "penghuniAsrama.html")));
  const daftarSection = injectButtonHandlers(makeVisibleSection(sliceByIds(content, "section-daftar", "section-detail")), {
    openSectionHandler: "onOpenTab",
    detailHandler: "onOpenDetail",
  });
  const detailSection = makeVisibleSection(sliceByIds(content, "section-detail", "section-penempatan"));
  const penempatanSection = makeVisibleSection(sliceByIds(content, "section-penempatan", "section-mutasi"));
  const mutasiSection = makeVisibleSection(sliceByIds(content, "section-mutasi", "section-keluar"));
  const keluarSection = makeVisibleSection(sliceToLiteral(content, "section-keluar", "<footer"));
  const footer = sliceFromLiteral(content, "<footer");

  return `"use client";

import { useEffect, useState } from "react";

type PenghuniTab = "daftar" | "detail" | "penempatan" | "mutasi" | "keluar";

const activeTabClass =
  "section-tab-btn px-5 py-4 text-sm font-semibold border-b-2 border-indigo-600 text-indigo-600 bg-indigo-50/70 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500";
const inactiveTabClass =
  "section-tab-btn px-5 py-4 text-sm font-medium border-b-2 border-transparent text-slate-500 hover:text-slate-700 hover:bg-slate-50 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500";

function DaftarPenghuniView({ onOpenTab, onOpenDetail }: { onOpenTab: (tab: PenghuniTab) => void; onOpenDetail: () => void }) {
  return (
    <>
${indent(daftarSection)}
    </>
  );
}

function DetailPenghuniView() {
  return (
    <>
${indent(detailSection)}
    </>
  );
}

function PenempatanKamarView() {
  return (
    <>
${indent(penempatanSection)}
    </>
  );
}

function MutasiKamarView() {
  return (
    <>
${indent(mutasiSection)}
    </>
  );
}

function KeluarAsramaView() {
  return (
    <>
${indent(keluarSection)}
    </>
  );
}

function PenghuniFooter() {
  return (
    <>
${indent(footer)}
    </>
  );
}

export default function PenghuniAsramaPage() {
  const [activeTab, setActiveTab] = useState<PenghuniTab>("daftar");

  useEffect(() => {
    document.title = "Penghuni Asrama | SiMARA";
  }, []);

  return (
    <>
      <section className="mb-6">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
          <div>
            <p className="text-xs text-indigo-600 font-semibold tracking-wide uppercase mb-2">Dashboard Operasional</p>
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 [text-wrap:balance]">
              Manajemen Penghuni Asrama
            </h1>
            <p className="text-sm text-slate-500 mt-1.5 max-w-2xl">
              Kelola data penghuni aktif, alokasi kamar, mutasi, hingga proses checkout dalam satu antarmuka yang konsisten.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 shrink-0">
            <article className="bg-white border border-slate-200 rounded-xl px-3 py-2.5">
              <p className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">Aktif</p>
              <p className="text-lg font-bold text-emerald-600 [font-variant-numeric:tabular-nums]">198</p>
            </article>
            <article className="bg-white border border-slate-200 rounded-xl px-3 py-2.5">
              <p className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">Mutasi</p>
              <p className="text-lg font-bold text-amber-500 [font-variant-numeric:tabular-nums]">12</p>
            </article>
            <article className="bg-white border border-slate-200 rounded-xl px-3 py-2.5">
              <p className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">Checkout</p>
              <p className="text-lg font-bold text-rose-500 [font-variant-numeric:tabular-nums]">4</p>
            </article>
            <article className="bg-white border border-slate-200 rounded-xl px-3 py-2.5">
              <p className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">Okupansi</p>
              <p className="text-lg font-bold text-indigo-600 [font-variant-numeric:tabular-nums]">86%</p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-white border border-slate-200 rounded-2xl overflow-hidden mb-6" aria-label="Navigasi fitur penghuni">
        <div className="flex overflow-x-auto" role="tablist" aria-label="Navigasi modul penghuni asrama">
          <button id="tab-daftar" type="button" role="tab" aria-selected={activeTab === "daftar"} aria-controls="section-daftar" tabIndex={activeTab === "daftar" ? 0 : -1} data-section="daftar" onClick={() => setActiveTab("daftar")} className={activeTab === "daftar" ? activeTabClass : inactiveTabClass}>
            <i className="fa-solid fa-table-list mr-2" aria-hidden="true"></i>
            Daftar Penghuni
          </button>
          <button id="tab-detail" type="button" role="tab" aria-selected={activeTab === "detail"} aria-controls="section-detail" tabIndex={activeTab === "detail" ? 0 : -1} data-section="detail" onClick={() => setActiveTab("detail")} className={activeTab === "detail" ? activeTabClass : inactiveTabClass}>
            <i className="fa-solid fa-address-card mr-2" aria-hidden="true"></i>
            Detail Penghuni
          </button>
          <button id="tab-penempatan" type="button" role="tab" aria-selected={activeTab === "penempatan"} aria-controls="section-penempatan" tabIndex={activeTab === "penempatan" ? 0 : -1} data-section="penempatan" onClick={() => setActiveTab("penempatan")} className={activeTab === "penempatan" ? activeTabClass : inactiveTabClass}>
            <i className="fa-solid fa-bed mr-2" aria-hidden="true"></i>
            Penempatan Kamar
          </button>
          <button id="tab-mutasi" type="button" role="tab" aria-selected={activeTab === "mutasi"} aria-controls="section-mutasi" tabIndex={activeTab === "mutasi" ? 0 : -1} data-section="mutasi" onClick={() => setActiveTab("mutasi")} className={activeTab === "mutasi" ? activeTabClass : inactiveTabClass}>
            <i className="fa-solid fa-right-left mr-2" aria-hidden="true"></i>
            Mutasi Kamar
          </button>
          <button id="tab-keluar" type="button" role="tab" aria-selected={activeTab === "keluar"} aria-controls="section-keluar" tabIndex={activeTab === "keluar" ? 0 : -1} data-section="keluar" onClick={() => setActiveTab("keluar")} className={activeTab === "keluar" ? activeTabClass : inactiveTabClass}>
            <i className="fa-solid fa-door-open mr-2" aria-hidden="true"></i>
            Keluar Asrama
          </button>
        </div>
      </section>

      {activeTab === "daftar" && <DaftarPenghuniView onOpenTab={setActiveTab} onOpenDetail={() => setActiveTab("detail")} />}
      {activeTab === "detail" && <DetailPenghuniView />}
      {activeTab === "penempatan" && <PenempatanKamarView />}
      {activeTab === "mutasi" && <MutasiKamarView />}
      {activeTab === "keluar" && <KeluarAsramaView />}
      <PenghuniFooter />
    </>
  );
}
`;
}

function buildCheckPointPage() {
  const content = toJsx(extractMainContent(path.join(ADMIN_DIR, "checkPoint.html")));
  const jadwalSection = injectButtonHandlers(
    `${makeVisibleSection(sliceByIds(content, "section-jadwal", "scheduleModal"))}\n</section>`,
    {
      openSectionHandler: "onOpenTab",
      openModalHandler: "setModalOpen",
    },
  );
  const modalSection = injectFormSubmit(
    injectBackdropHandler(
      injectButtonHandlers(sliceByIds(content, "scheduleModal", "section-input"), {
        closeModalHandler: "setModalOpen",
      }),
      "setModalOpen",
    ),
    "setModalOpen",
  )
    .replace(/<\/section>\s*$/, "")
    .replace(
      /^<div id="scheduleModal" className="fixed inset-0 z-40 hidden" aria-hidden="true">/,
      '<div id="scheduleModal" className={isModalOpen ? "fixed inset-0 z-40" : "fixed inset-0 z-40 hidden"} aria-hidden={isModalOpen ? "false" : "true"}>',
    );
  const inputSection = makeVisibleSection(sliceByIds(content, "section-input", "section-hasil"));
  const hasilSection = makeVisibleSection(sliceByIds(content, "section-hasil", "section-pelanggaran"));
  const pelanggaranSection = makeVisibleSection(sliceToLiteral(content, "section-pelanggaran", "<footer"));
  const footer = sliceFromLiteral(content, "<footer");

  return `"use client";

import { useEffect, useState } from "react";

type CheckPointTab = "jadwal" | "input" | "hasil" | "pelanggaran";

const activeTabClass =
  "section-tab-btn px-5 py-4 text-sm font-semibold border-b-2 border-indigo-600 text-indigo-600 bg-indigo-50/70 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500";
const inactiveTabClass =
  "section-tab-btn px-5 py-4 text-sm font-medium border-b-2 border-transparent text-slate-500 hover:text-slate-700 hover:bg-slate-50 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500";

function JadwalCheckPointView({ onOpenTab, setModalOpen }: { onOpenTab: (tab: CheckPointTab) => void; setModalOpen: (open: boolean) => void }) {
  return (
    <>
${indent(jadwalSection)}
    </>
  );
}

function ScheduleModal({ isModalOpen, setModalOpen }: { isModalOpen: boolean; setModalOpen: (open: boolean) => void }) {
  return (
    <>
${indent(modalSection)}
    </>
  );
}

function InputKehadiranView() {
  return (
    <>
${indent(inputSection)}
    </>
  );
}

function HasilCheckPointView() {
  return (
    <>
${indent(hasilSection)}
    </>
  );
}

function PelanggaranCpView() {
  return (
    <>
${indent(pelanggaranSection)}
    </>
  );
}

function CheckPointFooter() {
  return (
    <>
${indent(footer)}
    </>
  );
}

export default function CheckPointPage() {
  const [activeTab, setActiveTab] = useState<CheckPointTab>("jadwal");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    document.title = "Check Point | SiMARA";
  }, []);

  useEffect(() => {
    if (!isModalOpen) {
      return undefined;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsModalOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModalOpen]);

  return (
    <>
      <section className="mb-6">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
          <div>
            <p className="text-xs text-indigo-600 font-semibold tracking-wide uppercase mb-2">Dashboard Operasional</p>
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 [text-wrap:balance]">
              Manajemen Check Point Asrama
            </h1>
            <p className="text-sm text-slate-500 mt-1.5 max-w-2xl">
              Kelola jadwal check point, input absensi kamar, pemantauan hasil, dan tindak lanjut pelanggaran dalam satu workflow terpadu.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 shrink-0">
            <article className="bg-white border border-slate-200 rounded-xl px-3 py-2.5">
              <p className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">Sesi Hari Ini</p>
              <p className="text-lg font-bold text-indigo-600 [font-variant-numeric:tabular-nums]">3</p>
            </article>
            <article className="bg-white border border-slate-200 rounded-xl px-3 py-2.5">
              <p className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">Hadir</p>
              <p className="text-lg font-bold text-emerald-600 [font-variant-numeric:tabular-nums]">182</p>
            </article>
            <article className="bg-white border border-slate-200 rounded-xl px-3 py-2.5">
              <p className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">Pelanggaran</p>
              <p className="text-lg font-bold text-rose-500 [font-variant-numeric:tabular-nums]">9</p>
            </article>
            <article className="bg-white border border-slate-200 rounded-xl px-3 py-2.5">
              <p className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">Kepatuhan</p>
              <p className="text-lg font-bold text-amber-500 [font-variant-numeric:tabular-nums]">95%</p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-white border border-slate-200 rounded-2xl overflow-hidden mb-6" aria-label="Navigasi fitur check point">
        <div className="flex overflow-x-auto" role="tablist" aria-label="Navigasi modul check point">
          <button id="tab-jadwal" type="button" role="tab" aria-selected={activeTab === "jadwal"} aria-controls="section-jadwal" tabIndex={activeTab === "jadwal" ? 0 : -1} data-section="jadwal" onClick={() => setActiveTab("jadwal")} className={activeTab === "jadwal" ? activeTabClass : inactiveTabClass}>
            <i className="fa-solid fa-calendar-days mr-2" aria-hidden="true"></i>
            Jadwal Check Point
          </button>
          <button id="tab-input" type="button" role="tab" aria-selected={activeTab === "input"} aria-controls="section-input" tabIndex={activeTab === "input" ? 0 : -1} data-section="input" onClick={() => setActiveTab("input")} className={activeTab === "input" ? activeTabClass : inactiveTabClass}>
            <i className="fa-solid fa-clipboard-check mr-2" aria-hidden="true"></i>
            Input Kehadiran
          </button>
          <button id="tab-hasil" type="button" role="tab" aria-selected={activeTab === "hasil"} aria-controls="section-hasil" tabIndex={activeTab === "hasil" ? 0 : -1} data-section="hasil" onClick={() => setActiveTab("hasil")} className={activeTab === "hasil" ? activeTabClass : inactiveTabClass}>
            <i className="fa-solid fa-chart-line mr-2" aria-hidden="true"></i>
            Hasil Check Point
          </button>
          <button id="tab-pelanggaran" type="button" role="tab" aria-selected={activeTab === "pelanggaran"} aria-controls="section-pelanggaran" tabIndex={activeTab === "pelanggaran" ? 0 : -1} data-section="pelanggaran" onClick={() => setActiveTab("pelanggaran")} className={activeTab === "pelanggaran" ? activeTabClass : inactiveTabClass}>
            <i className="fa-solid fa-triangle-exclamation mr-2" aria-hidden="true"></i>
            Pelanggaran CP
          </button>
        </div>
      </section>

      {activeTab === "jadwal" && <JadwalCheckPointView onOpenTab={setActiveTab} setModalOpen={setIsModalOpen} />}
      {activeTab === "input" && <InputKehadiranView />}
      {activeTab === "hasil" && <HasilCheckPointView />}
      {activeTab === "pelanggaran" && <PelanggaranCpView />}
      <ScheduleModal isModalOpen={isModalOpen} setModalOpen={setIsModalOpen} />
      <CheckPointFooter />
    </>
  );
}
`;
}

write(path.join(APP_DIR, "pendaftaran", "page.tsx"), buildPendaftaranPage());
write(path.join(APP_DIR, "penghuni-asrama", "page.tsx"), buildPenghuniPage());
write(path.join(APP_DIR, "check-point", "page.tsx"), buildCheckPointPage());

console.log("Operational pages regenerated.");
