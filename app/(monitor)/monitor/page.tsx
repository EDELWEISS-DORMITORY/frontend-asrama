"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

/* ──────────────────────────────────────────────
   Static demo data – replace with API calls
   ────────────────────────────────────────────── */

const pendaftarQueue = [
  { id: "REG-2025-001", name: "Siti Salimah", initials: "SS", nim: "2024110098", fakultas: "Teknik Informatika", color: "indigo" },
  { id: "REG-2025-002", name: "Andi Wijaya",  initials: "AW", nim: "2024210045", fakultas: "Manajemen",           color: "teal" },
  { id: "REG-2025-003", name: "Linda Fitri",  initials: "LF", nim: "2024310021", fakultas: "Akuntansi",           color: "purple" },
  { id: "REG-2025-004", name: "Reza Maulana", initials: "RM", nim: "2024410033", fakultas: "Ilmu Hukum",          color: "orange" },
  { id: "REG-2025-005", name: "Maya Sari",    initials: "MS", nim: "2024510012", fakultas: "Psikologi",           color: "pink" },
];

const pelanggaranRecent = [
  { name: "Rafael Aditya",  initials: "RA", kamar: "A-108", pelanggaran: "Terlambat Check Point",     poin: 5,  color: "indigo" },
  { name: "Nabila Azizah",  initials: "NA", kamar: "B-117", pelanggaran: "Absen Worship Malam",       poin: 15, color: "teal" },
  { name: "Bagas Pratama",  initials: "BP", kamar: "A-204", pelanggaran: "Keluar Tanpa Izin",         poin: 30, color: "rose" },
  { name: "Dina Karina",    initials: "DK", kamar: "B-221", pelanggaran: "Tidak Ikut Check Room",     poin: 5,  color: "emerald" },
  { name: "Fajar Maulana",  initials: "FM", kamar: "A-102", pelanggaran: "Tidak Hadir Sabat Sore",    poin: 20, color: "blue" },
];

/* Avatar bg helper – maps a short colour key to Tailwind classes */
const avatarBg: Record<string, string> = {
  indigo:  "bg-indigo-100 text-indigo-700",
  teal:    "bg-teal-100 text-teal-700",
  purple:  "bg-purple-100 text-purple-700",
  orange:  "bg-orange-100 text-orange-700",
  pink:    "bg-pink-100 text-pink-700",
  rose:    "bg-rose-100 text-rose-700",
  emerald: "bg-emerald-100 text-emerald-700",
  blue:    "bg-blue-100 text-blue-700",
};

/* ──────────────────────────────────────────────
   Page Component
   ────────────────────────────────────────────── */

export default function MonitorDashboardPage() {
  const [floorPlanTitle, setFloorPlanTitle] = useState<string | null>(null);

  useEffect(() => {
    if (floorPlanTitle) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [floorPlanTitle]);

  const handleEscape = (e: KeyboardEvent) => {
    if (e.key === "Escape") setFloorPlanTitle(null);
  };

  useEffect(() => {
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <>
      {/* ===== HEADER & QUICK ACTIONS ===== */}
      <section className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-8">
        <div>
          {/* breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-gray-400 mb-2">
            <i className="fa-solid fa-house text-gray-300" aria-hidden="true"></i>
            <span className="text-gray-300">/</span>
            <span className="text-indigo-500 font-semibold">Monitor Asrama</span>
          </div>

          <h1 className="text-2xl sm:text-[28px] font-bold text-gray-900 leading-tight [text-wrap:balance]">
            Dashboard Monitor Asrama
          </h1>

          <p className="text-gray-500 text-sm mt-1.5 max-w-2xl flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-600 text-xs font-semibold px-2.5 py-1 rounded-full border border-emerald-200">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
              Live
            </span>
            Pantau antrean pendaftaran dan catat pelanggaran harian
          </p>
        </div>

        {/* action buttons */}
        <div className="flex items-center gap-2.5 shrink-0">
          <Link
            href="/verifikasi"
            className="flex items-center gap-2 px-4 py-2.5 text-sm border border-gray-200 text-gray-600 rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
          >
            <i className="fa-solid fa-clipboard-check text-gray-400 text-xs" aria-hidden="true"></i>
            Tinjau Pendaftaran
          </Link>

          <Link
            href="/catat-pelanggaran"
            className="flex items-center gap-2 px-4 py-2.5 text-sm bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-colors font-semibold shadow-md shadow-indigo-200 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
          >
            <i className="fa-solid fa-plus text-xs" aria-hidden="true"></i>
            Catat Pelanggaran
          </Link>
        </div>
      </section>

      {/* ===== SUMMARY CARDS ===== */}
      <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 mb-6">
        {/* Pending verification – warning/amber */}
        <article className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 relative overflow-hidden cursor-pointer group hover:shadow-md transition-shadow">
          <div className="flex items-start justify-between mb-3">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Pendaftar Menunggu Verifikasi
            </p>
            <div className="w-11 h-11 bg-amber-50 rounded-xl flex items-center justify-center shrink-0">
              <i className="fa-solid fa-file-pen text-amber-500 text-lg" aria-hidden="true"></i>
            </div>
          </div>
          <p className="text-[34px] font-bold text-gray-900 leading-none mb-3 [font-variant-numeric:tabular-nums]">18</p>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 text-xs font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full">
              <i className="fa-solid fa-clock text-[10px]" aria-hidden="true"></i>
              Mendesak
            </span>
            <span className="text-xs text-gray-400">segera proses</span>
          </div>
          {/* decorative blobs */}
          <div className="absolute -bottom-5 -right-5 w-28 h-28 bg-amber-50 rounded-full opacity-70 pointer-events-none"></div>
          <div className="absolute -bottom-10 -right-10 w-28 h-28 bg-amber-100/40 rounded-full pointer-events-none"></div>
        </article>

        {/* Violations this week – rose/alert */}
        <article className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 relative overflow-hidden cursor-pointer group hover:shadow-md transition-shadow">
          <div className="flex items-start justify-between mb-3">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Total Pelanggaran Minggu Ini
            </p>
            <div className="w-11 h-11 bg-rose-50 rounded-xl flex items-center justify-center shrink-0">
              <i className="fa-solid fa-triangle-exclamation text-rose-500 text-lg" aria-hidden="true"></i>
            </div>
          </div>
          <p className="text-[34px] font-bold text-gray-900 leading-none mb-3 [font-variant-numeric:tabular-nums]">12</p>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 text-xs font-bold text-rose-600 bg-rose-50 px-2 py-0.5 rounded-full">
              <i className="fa-solid fa-arrow-trend-up text-[10px]" aria-hidden="true"></i>
              +18%
            </span>
            <span className="text-xs text-gray-400">dari minggu lalu</span>
          </div>
          <div className="absolute -bottom-5 -right-5 w-28 h-28 bg-rose-50 rounded-full opacity-70 pointer-events-none"></div>
          <div className="absolute -bottom-10 -right-10 w-28 h-28 bg-rose-100/40 rounded-full pointer-events-none"></div>
        </article>

        {/* Available capacity – emerald/green */}
        <article className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 relative overflow-hidden cursor-pointer group hover:shadow-md transition-shadow sm:col-span-2 xl:col-span-1">
          <div className="flex items-start justify-between mb-3">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Kapasitas Tersedia
            </p>
            <div className="w-11 h-11 bg-emerald-50 rounded-xl flex items-center justify-center shrink-0">
              <i className="fa-solid fa-door-open text-emerald-600 text-lg" aria-hidden="true"></i>
            </div>
          </div>
          <p className="text-[34px] font-bold text-gray-900 leading-none mb-1 [font-variant-numeric:tabular-nums]">12</p>
          <div className="flex items-center justify-between mt-2">
            <span className="text-xs text-gray-400">
              dari <strong className="text-gray-600">45</strong> total kamar
            </span>
            <span className="text-xs font-bold text-emerald-600">73% terisi</span>
          </div>
          {/* capacity bar */}
          <div className="w-full bg-gray-100 rounded-full h-1.5 mt-2">
            <div className="bg-emerald-500 h-1.5 rounded-full" style={{ width: "73%" }}></div>
          </div>
          <div className="absolute -bottom-5 -right-5 w-28 h-28 bg-emerald-50 rounded-full opacity-70 pointer-events-none"></div>
        </article>
      </section>

      {/* ===== OVERVIEW KAPASITAS & DENAH ===== */}
      <section className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
          <div>
            <h2 className="text-base font-bold text-gray-900">Overview Kapasitas per Lantai &amp; Hall</h2>
            <p className="text-xs text-gray-400 mt-0.5">Kapasitas, tingkat hunian, dan status kamar per lantai dan hall dalam satu gedung asrama</p>
          </div>
          <button
            type="button"
            className="inline-flex items-center gap-2 text-xs px-3.5 py-2 bg-gray-100 text-gray-600 rounded-xl font-semibold hover:bg-gray-200 transition-colors self-start sm:self-auto whitespace-nowrap"
          >
            <i className="fa-solid fa-table-cells-large text-[11px]" aria-hidden="true"></i>
            Detail Semua Kamar
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          
          {/* Hall L1A */}
          <div
            role="button"
            tabIndex={0}
            onClick={() => setFloorPlanTitle("Lantai 1 - Hall A")}
            className="p-4 border-2 border-gray-100 hover:border-indigo-200 rounded-2xl transition-all cursor-pointer hover:shadow-md"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 bg-indigo-100 rounded-xl flex items-center justify-center shrink-0">
                  <i className="fa-solid fa-layer-group text-indigo-600"></i>
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-800">Lantai 1 - Hall A</p>
                  <p className="text-[10px] text-gray-400">Zona hunian aktif lantai 1</p>
                </div>
              </div>
              <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full border border-emerald-200">Sebagian</span>
            </div>
            <div className="mb-3">
              <div className="flex justify-between text-xs mb-1.5">
                <span className="text-gray-500">Penghuni</span>
                <span className="font-bold text-gray-800">64 <span className="text-gray-400 font-normal">/ 72</span></span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2.5">
                <div className="bg-indigo-500 h-2.5 rounded-full" style={{ width: '89%' }}></div>
              </div>
              <p className="text-right text-[10px] text-indigo-500 font-semibold mt-1">89% terisi</p>
            </div>
            <div className="grid grid-cols-3 gap-1 pt-2 border-t border-gray-100">
              <div className="text-center py-1">
                <p className="text-sm font-bold text-rose-500">5</p>
                <p className="text-[9.5px] text-gray-400 font-medium">Penuh</p>
              </div>
              <div className="text-center py-1 border-x border-gray-100">
                <p className="text-sm font-bold text-amber-500">4</p>
                <p className="text-[9.5px] text-gray-400 font-medium">Sebagian</p>
              </div>
              <div className="text-center py-1">
                <p className="text-sm font-bold text-emerald-500">3</p>
                <p className="text-[9.5px] text-gray-400 font-medium">Kosong</p>
              </div>
            </div>
          </div>

          {/* Hall L1B */}
          <div
            role="button"
            tabIndex={0}
            onClick={() => setFloorPlanTitle("Lantai 1 - Hall B")}
            className="p-4 border-2 border-gray-100 hover:border-emerald-200 rounded-2xl transition-all cursor-pointer hover:shadow-md"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 bg-emerald-100 rounded-xl flex items-center justify-center shrink-0">
                  <i className="fa-solid fa-layer-group text-emerald-600"></i>
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-800">Lantai 1 - Hall B</p>
                  <p className="text-[10px] text-gray-400">Zona hunian sisi barat lantai 1</p>
                </div>
              </div>
              <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full border border-emerald-200">Sebagian</span>
            </div>
            <div className="mb-3">
              <div className="flex justify-between text-xs mb-1.5">
                <span className="text-gray-500">Penghuni</span>
                <span className="font-bold text-gray-800">61 <span className="text-gray-400 font-normal">/ 72</span></span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2.5">
                <div className="bg-emerald-500 h-2.5 rounded-full" style={{ width: '85%' }}></div>
              </div>
              <p className="text-right text-[10px] text-emerald-500 font-semibold mt-1">85% terisi</p>
            </div>
            <div className="grid grid-cols-3 gap-1 pt-2 border-t border-gray-100">
              <div className="text-center py-1">
                <p className="text-sm font-bold text-rose-500">4</p>
                <p className="text-[9.5px] text-gray-400 font-medium">Penuh</p>
              </div>
              <div className="text-center py-1 border-x border-gray-100">
                <p className="text-sm font-bold text-amber-500">5</p>
                <p className="text-[9.5px] text-gray-400 font-medium">Sebagian</p>
              </div>
              <div className="text-center py-1">
                <p className="text-sm font-bold text-emerald-500">3</p>
                <p className="text-[9.5px] text-gray-400 font-medium">Kosong</p>
              </div>
            </div>
          </div>

          {/* Hall L2A */}
          <div
            role="button"
            tabIndex={0}
            onClick={() => setFloorPlanTitle("Lantai 2 - Hall A")}
            className="p-4 border-2 border-amber-200 hover:border-amber-300 rounded-2xl transition-all cursor-pointer hover:shadow-md bg-amber-50/20"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 bg-purple-100 rounded-xl flex items-center justify-center shrink-0">
                  <i className="fa-solid fa-layer-group text-purple-600"></i>
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-800">Lantai 2 - Hall A</p>
                  <p className="text-[10px] text-gray-400">Zona padat penghuni lantai 2</p>
                </div>
              </div>
              <span className="text-[10px] font-bold text-rose-600 bg-rose-50 px-2 py-1 rounded-full border border-rose-200">Penuh</span>
            </div>
            <div className="mb-3">
              <div className="flex justify-between text-xs mb-1.5">
                <span className="text-gray-500">Penghuni</span>
                <span className="font-bold text-gray-800">60 <span className="text-gray-400 font-normal">/ 60</span></span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2.5">
                <div className="bg-amber-400 h-2.5 rounded-full" style={{ width: '100%' }}></div>
              </div>
              <p className="text-right text-[10px] text-amber-500 font-semibold mt-1">100% terisi</p>
            </div>
            <div className="grid grid-cols-3 gap-1 pt-2 border-t border-amber-100">
              <div className="text-center py-1">
                <p className="text-sm font-bold text-rose-500">7</p>
                <p className="text-[9.5px] text-gray-400 font-medium">Penuh</p>
              </div>
              <div className="text-center py-1 border-x border-amber-100">
                <p className="text-sm font-bold text-amber-500">3</p>
                <p className="text-[9.5px] text-gray-400 font-medium">Sebagian</p>
              </div>
              <div className="text-center py-1">
                <p className="text-sm font-bold text-emerald-500">0</p>
                <p className="text-[9.5px] text-gray-400 font-medium">Kosong</p>
              </div>
            </div>
          </div>

          {/* Hall L2B */}
          <div
            role="button"
            tabIndex={0}
            onClick={() => setFloorPlanTitle("Lantai 2 - Hall B")}
            className="p-4 border-2 border-gray-100 hover:border-blue-200 rounded-2xl transition-all cursor-pointer hover:shadow-md"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 bg-rose-100 rounded-xl flex items-center justify-center shrink-0">
                  <i className="fa-solid fa-layer-group text-rose-500"></i>
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-800">Lantai 2 - Hall B</p>
                  <p className="text-[10px] text-gray-400">Zona hunian sisi timur lantai 2</p>
                </div>
              </div>
              <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full border border-emerald-200">Sebagian</span>
            </div>
            <div className="mb-3">
              <div className="flex justify-between text-xs mb-1.5">
                <span className="text-gray-500">Penghuni</span>
                <span className="font-bold text-gray-800">58 <span className="text-gray-400 font-normal">/ 60</span></span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2.5">
                <div className="bg-blue-400 h-2.5 rounded-full" style={{ width: '97%' }}></div>
              </div>
              <p className="text-right text-[10px] text-blue-500 font-semibold mt-1">97% terisi</p>
            </div>
            <div className="grid grid-cols-3 gap-1 pt-2 border-t border-gray-100">
              <div className="text-center py-1">
                <p className="text-sm font-bold text-rose-500">6</p>
                <p className="text-[9.5px] text-gray-400 font-medium">Penuh</p>
              </div>
              <div className="text-center py-1 border-x border-gray-100">
                <p className="text-sm font-bold text-amber-500">3</p>
                <p className="text-[9.5px] text-gray-400 font-medium">Sebagian</p>
              </div>
              <div className="text-center py-1">
                <p className="text-sm font-bold text-emerald-500">1</p>
                <p className="text-[9.5px] text-gray-400 font-medium">Kosong</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SPLIT VIEW – REGISTRATION QUEUE & VIOLATIONS ===== */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* ── PANEL KIRI: Antrean Pendaftaran ── */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col">
          {/* panel header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 shrink-0">
            <div>
              <h2 className="text-base font-bold text-gray-900">Antrean Pendaftaran Terbaru</h2>
              <p className="text-xs text-gray-400 mt-0.5">5 pendaftar teratas menunggu proses</p>
            </div>
            <span className="inline-flex items-center gap-1.5 text-[10.5px] font-bold px-2.5 py-1 rounded-full bg-amber-100 text-amber-700 border border-amber-200">
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-pulse"></span>
              18 menunggu
            </span>
          </div>

          {/* mini table */}
          <div className="overflow-x-auto flex-1">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50/80 border-b border-gray-100">
                  <th className="px-5 py-3 text-left text-[11px] font-bold text-gray-500 uppercase tracking-wider">Mahasiswa</th>
                  <th className="px-4 py-3 text-left text-[11px] font-bold text-gray-500 uppercase tracking-wider hidden sm:table-cell">Fakultas</th>
                  <th className="px-4 py-3 text-center text-[11px] font-bold text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-4 py-3 text-center text-[11px] font-bold text-gray-500 uppercase tracking-wider">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {pendaftarQueue.map((p) => (
                  <tr key={p.id} className="hover:bg-indigo-50/30 transition-colors">
                    <td className="px-5 py-3.5">
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 ${avatarBg[p.color] ?? "bg-gray-100 text-gray-700"} rounded-lg flex items-center justify-center shrink-0`}>
                          <span className="text-[10px] font-bold">{p.initials}</span>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-800">{p.name}</p>
                          <p className="text-[10.5px] text-gray-400">{p.nim}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3.5 hidden sm:table-cell">
                      <span className="text-sm text-gray-600">{p.fakultas}</span>
                    </td>
                    <td className="px-4 py-3.5 text-center">
                      <span className="inline-flex items-center gap-1.5 text-[10.5px] font-bold px-2.5 py-1 rounded-full bg-amber-100 text-amber-700 border border-amber-200">
                        <span className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-pulse"></span>
                        Menunggu
                      </span>
                    </td>
                    <td className="px-4 py-3.5 text-center">
                      <Link
                        href={`/verifikasi/${p.id}`}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-600 bg-indigo-50 hover:bg-indigo-100 px-3 py-1.5 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                      >
                        <i className="fa-solid fa-arrow-right text-[10px]" aria-hidden="true"></i>
                        Proses
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* footer link */}
          <div className="px-5 py-3.5 border-t border-gray-100 bg-gray-50/60">
            <Link
              href="/verifikasi"
              className="flex items-center justify-center gap-2 py-2 text-xs font-semibold text-indigo-600 bg-indigo-50 hover:bg-indigo-100 rounded-xl transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
            >
              <i className="fa-solid fa-list-check text-[11px]" aria-hidden="true"></i>
              Lihat Semua Pendaftar &rarr;
            </Link>
          </div>
        </div>

        {/* ── PANEL KANAN: Aktivitas Pelanggaran ── */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col">
          {/* panel header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 shrink-0">
            <div>
              <h2 className="text-base font-bold text-gray-900">Aktivitas Pelanggaran Terakhir</h2>
              <p className="text-xs text-gray-400 mt-0.5">5 catatan pelanggaran terbaru</p>
            </div>
            <span className="inline-flex items-center gap-1.5 text-[10.5px] font-bold px-2.5 py-1 rounded-full bg-rose-100 text-rose-700 border border-rose-200">
              <i className="fa-solid fa-triangle-exclamation text-[9px]" aria-hidden="true"></i>
              12 minggu ini
            </span>
          </div>

          {/* mini table */}
          <div className="overflow-x-auto flex-1">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50/80 border-b border-gray-100">
                  <th className="px-5 py-3 text-left text-[11px] font-bold text-gray-500 uppercase tracking-wider">Mahasiswa</th>
                  <th className="px-4 py-3 text-left text-[11px] font-bold text-gray-500 uppercase tracking-wider hidden sm:table-cell">Kamar</th>
                  <th className="px-4 py-3 text-left text-[11px] font-bold text-gray-500 uppercase tracking-wider">Pelanggaran</th>
                  <th className="px-4 py-3 text-center text-[11px] font-bold text-gray-500 uppercase tracking-wider">Poin</th>
                  <th className="px-4 py-3 text-center text-[11px] font-bold text-gray-500 uppercase tracking-wider">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {pelanggaranRecent.map((v, i) => (
                  <tr key={i} className="hover:bg-indigo-50/30 transition-colors">
                    <td className="px-5 py-3.5">
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 ${avatarBg[v.color] ?? "bg-gray-100 text-gray-700"} rounded-lg flex items-center justify-center shrink-0`}>
                          <span className="text-[10px] font-bold">{v.initials}</span>
                        </div>
                        <p className="text-sm font-semibold text-gray-800">{v.name}</p>
                      </div>
                    </td>
                    <td className="px-4 py-3.5 hidden sm:table-cell">
                      <span className="text-sm font-semibold text-gray-700 bg-gray-100 px-2 py-0.5 rounded-md">{v.kamar}</span>
                    </td>
                    <td className="px-4 py-3.5">
                      <span className="text-sm text-gray-700">{v.pelanggaran}</span>
                    </td>
                    <td className="px-4 py-3.5 text-center">
                      <span className="text-sm font-extrabold text-rose-600">-{v.poin}</span>
                    </td>
                    <td className="px-4 py-3.5 text-center">
                      <button
                        type="button"
                        className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-600 bg-indigo-50 hover:bg-indigo-100 px-3 py-1.5 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                      >
                        <i className="fa-solid fa-eye text-[10px]" aria-hidden="true"></i>
                        Detail
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* footer link */}
          <div className="px-5 py-3.5 border-t border-gray-100 bg-gray-50/60">
            <Link
              href="/catat-pelanggaran"
              className="flex items-center justify-center gap-2 py-2 text-xs font-semibold text-indigo-600 bg-indigo-50 hover:bg-indigo-100 rounded-xl transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
            >
              <i className="fa-solid fa-clock-rotate-left text-[11px]" aria-hidden="true"></i>
              Lihat Semua Riwayat &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ===== LAYOUT & FLOOR PLAN MODAL ===== */}
      {floorPlanTitle && (
        <div className="fixed inset-0 z-[80] block" aria-modal="true" aria-labelledby="floorPlanModalTitle">
          <div
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-[1px]"
            onClick={() => setFloorPlanTitle(null)}
          ></div>

          <div className="relative z-10 min-h-full w-full px-4 py-6 sm:px-6 lg:px-8 flex items-center justify-center pointer-events-none">
            <div className="w-full max-w-6xl max-h-[90vh] rounded-3xl bg-white shadow-2xl border border-slate-200 overflow-hidden flex flex-col pointer-events-auto">
              {/* Header */}
              <div className="px-5 sm:px-6 py-4 border-b border-slate-100 bg-slate-50/95 backdrop-blur sticky top-0 z-20 flex items-start justify-between gap-4">
                <div>
                  <h3 id="floorPlanModalTitle" className="text-lg font-bold text-slate-900">
                    Visualisasi Denah Kamar {floorPlanTitle}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    Monitor kapasitas kamar secara cepat melalui denah lorong hall.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setFloorPlanTitle(null)}
                  className="inline-flex items-center justify-center w-9 h-9 rounded-xl border border-slate-200 text-slate-500 hover:text-slate-700 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 shrink-0"
                  aria-label="Tutup denah"
                >
                  <i className="fa-solid fa-xmark"></i>
                </button>
              </div>

              {/* Body visualisasi */}
              <div className="flex-1 max-h-[70vh] overflow-y-auto p-4 sm:p-6 space-y-4">
                <div className="flex flex-wrap gap-2 text-[11px] font-semibold">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-emerald-200 bg-emerald-50 text-emerald-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    Tersedia
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-slate-200 bg-slate-100 text-slate-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-500"></span>
                    Penuh
                  </span>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-gradient-to-b from-slate-50 to-white p-3 sm:p-4 overflow-x-auto">
                  <div className="min-w-[860px] grid grid-cols-[minmax(0,1fr)_minmax(220px,0.7fr)_minmax(0,1fr)] gap-4 items-start">
                    <div className="grid grid-cols-1 gap-2.5">
                      <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-2.5">
                        <p className="text-xs font-bold text-slate-800">Kamar 101</p>
                        <p className="mt-1 text-[11px] text-emerald-700 inline-flex items-center gap-1"><i className="fa-solid fa-users text-[10px]"></i>2/4 Tersedia</p>
                      </div>
                      <div className="rounded-xl border border-slate-200 bg-slate-100 p-2.5">
                        <p className="text-xs font-bold text-slate-800">Kamar 102</p>
                        <p className="mt-1 text-[11px] text-slate-700 inline-flex items-center gap-1"><i className="fa-solid fa-users text-[10px]"></i>4/4 Penuh</p>
                      </div>
                      <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-2.5">
                        <p className="text-xs font-bold text-slate-800">Kamar 103</p>
                        <p className="mt-1 text-[11px] text-emerald-700 inline-flex items-center gap-1"><i className="fa-solid fa-users text-[10px]"></i>3/4 Tersedia</p>
                      </div>
                      <div className="rounded-xl border border-slate-200 bg-slate-100 p-2.5">
                        <p className="text-xs font-bold text-slate-800">Kamar 104</p>
                        <p className="mt-1 text-[11px] text-slate-700 inline-flex items-center gap-1"><i className="fa-solid fa-users text-[10px]"></i>4/4 Penuh</p>
                      </div>
                      <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-2.5">
                        <p className="text-xs font-bold text-slate-800">Kamar 105</p>
                        <p className="mt-1 text-[11px] text-emerald-700 inline-flex items-center gap-1"><i className="fa-solid fa-users text-[10px]"></i>2/4 Tersedia</p>
                      </div>
                      <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-2.5">
                        <p className="text-xs font-bold text-slate-800">Kamar 106</p>
                        <p className="mt-1 text-[11px] text-emerald-700 inline-flex items-center gap-1"><i className="fa-solid fa-users text-[10px]"></i>1/4 Tersedia</p>
                      </div>
                      <div className="rounded-xl border border-slate-200 bg-slate-100 p-2.5">
                        <p className="text-xs font-bold text-slate-800">Kamar 107</p>
                        <p className="mt-1 text-[11px] text-slate-700 inline-flex items-center gap-1"><i className="fa-solid fa-users text-[10px]"></i>4/4 Penuh</p>
                      </div>
                      <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-2.5">
                        <p className="text-xs font-bold text-slate-800">Kamar 108</p>
                        <p className="mt-1 text-[11px] text-emerald-700 inline-flex items-center gap-1"><i className="fa-solid fa-users text-[10px]"></i>3/4 Tersedia</p>
                      </div>
                      <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-2.5">
                        <p className="text-xs font-bold text-slate-800">Kamar 109</p>
                        <p className="mt-1 text-[11px] text-emerald-700 inline-flex items-center gap-1"><i className="fa-solid fa-users text-[10px]"></i>2/4 Tersedia</p>
                      </div>
                      <div className="rounded-xl border border-slate-200 bg-slate-100 p-2.5">
                        <p className="text-xs font-bold text-slate-800">Kamar 110</p>
                        <p className="mt-1 text-[11px] text-slate-700 inline-flex items-center gap-1"><i className="fa-solid fa-users text-[10px]"></i>4/4 Penuh</p>
                      </div>
                    </div>

                    <div className="h-full min-h-[560px] rounded-2xl border border-dashed border-indigo-200 bg-indigo-50/60 flex flex-col items-center gap-4 py-4 px-2">
                      <div className="w-full grid grid-cols-2 gap-2">
                        <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-2.5">
                          <p className="text-xs font-bold text-slate-800">Kamar 121</p>
                          <p className="mt-1 text-[11px] text-emerald-700 inline-flex items-center gap-1"><i className="fa-solid fa-users text-[10px]"></i>2/4 Tersedia</p>
                        </div>
                        <div className="rounded-xl border border-slate-200 bg-slate-100 p-2.5">
                          <p className="text-xs font-bold text-slate-800">Kamar 122</p>
                          <p className="mt-1 text-[11px] text-slate-700 inline-flex items-center gap-1"><i className="fa-solid fa-users text-[10px]"></i>4/4 Penuh</p>
                        </div>
                      </div>
                      <div className="flex-1 w-full rounded-xl border border-indigo-200/70 bg-white/40 flex flex-col items-center justify-center text-center px-3">
                        <p className="text-xs font-bold text-indigo-700">Lorong Hall</p>
                        <p className="text-[11px] text-indigo-500">Akses mobilitas monitor</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-2.5">
                      <div className="rounded-xl border border-slate-200 bg-slate-100 p-2.5">
                        <p className="text-xs font-bold text-slate-800">Kamar 111</p>
                        <p className="mt-1 text-[11px] text-slate-700 inline-flex items-center gap-1"><i className="fa-solid fa-users text-[10px]"></i>4/4 Penuh</p>
                      </div>
                      <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-2.5">
                        <p className="text-xs font-bold text-slate-800">Kamar 112</p>
                        <p className="mt-1 text-[11px] text-emerald-700 inline-flex items-center gap-1"><i className="fa-solid fa-users text-[10px]"></i>2/4 Tersedia</p>
                      </div>
                      <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-2.5">
                        <p className="text-xs font-bold text-slate-800">Kamar 113</p>
                        <p className="mt-1 text-[11px] text-emerald-700 inline-flex items-center gap-1"><i className="fa-solid fa-users text-[10px]"></i>1/4 Tersedia</p>
                      </div>
                      <div className="rounded-xl border border-slate-200 bg-slate-100 p-2.5">
                        <p className="text-xs font-bold text-slate-800">Kamar 114</p>
                        <p className="mt-1 text-[11px] text-slate-700 inline-flex items-center gap-1"><i className="fa-solid fa-users text-[10px]"></i>4/4 Penuh</p>
                      </div>
                      <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-2.5">
                        <p className="text-xs font-bold text-slate-800">Kamar 115</p>
                        <p className="mt-1 text-[11px] text-emerald-700 inline-flex items-center gap-1"><i className="fa-solid fa-users text-[10px]"></i>3/4 Tersedia</p>
                      </div>
                      <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-2.5">
                        <p className="text-xs font-bold text-slate-800">Kamar 116</p>
                        <p className="mt-1 text-[11px] text-emerald-700 inline-flex items-center gap-1"><i className="fa-solid fa-users text-[10px]"></i>2/4 Tersedia</p>
                      </div>
                      <div className="rounded-xl border border-slate-200 bg-slate-100 p-2.5">
                        <p className="text-xs font-bold text-slate-800">Kamar 117</p>
                        <p className="mt-1 text-[11px] text-slate-700 inline-flex items-center gap-1"><i className="fa-solid fa-users text-[10px]"></i>4/4 Penuh</p>
                      </div>
                      <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-2.5">
                        <p className="text-xs font-bold text-slate-800">Kamar 118</p>
                        <p className="mt-1 text-[11px] text-emerald-700 inline-flex items-center gap-1"><i className="fa-solid fa-users text-[10px]"></i>2/4 Tersedia</p>
                      </div>
                      <div className="rounded-xl border border-slate-200 bg-slate-100 p-2.5">
                        <p className="text-xs font-bold text-slate-800">Kamar 119</p>
                        <p className="mt-1 text-[11px] text-slate-700 inline-flex items-center gap-1"><i className="fa-solid fa-users text-[10px]"></i>4/4 Penuh</p>
                      </div>
                      <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-2.5">
                        <p className="text-xs font-bold text-slate-800">Kamar 120</p>
                        <p className="mt-1 text-[11px] text-emerald-700 inline-flex items-center gap-1"><i className="fa-solid fa-users text-[10px]"></i>3/4 Tersedia</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="px-5 sm:px-6 py-4 border-t border-slate-100 bg-white flex justify-end shrink-0">
                <button
                  type="button"
                  onClick={() => setFloorPlanTitle(null)}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold border border-slate-200 text-slate-600 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                >
                  Tutup
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
