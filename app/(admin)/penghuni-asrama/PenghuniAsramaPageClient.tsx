"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

type PenghuniTab = "daftar" | "detail" | "penempatan" | "mutasi" | "keluar";

const activeTabClass =
  "section-tab-btn px-5 py-4 text-sm font-semibold border-b-2 border-indigo-600 text-indigo-600 bg-indigo-50/70 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500";
const inactiveTabClass =
  "section-tab-btn px-5 py-4 text-sm font-medium border-b-2 border-transparent text-slate-500 hover:text-slate-700 hover:bg-slate-50 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500";

function DaftarPenghuniView({ onOpenTab, onOpenDetail }: { onOpenTab: (tab: PenghuniTab) => void; onOpenDetail: () => void }) {
  return (
    <>
        <section id="section-daftar" className="tab-panel space-y-5" role="tabpanel" tabIndex={0} aria-labelledby="tab-daftar judulDaftar">
                                <div className="flex items-start justify-between gap-3 flex-wrap">
                                    <div>
                                        <h2 id="judulDaftar" className="text-xl font-bold text-slate-900 scroll-mt-24 [text-wrap:balance]">
                                            Daftar Penghuni Aktif
                                        </h2>
                                        <p className="text-sm text-slate-500 mt-1">Tabel dapat difilter berdasarkan nama, NIM/NIK, kamar, dan status.</p>
                                    </div>
                                    <button
                                        type="button"
                                        data-section="penempatan"
                                        className="open-section-btn inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                                     onClick={() => onOpenTab("penempatan")}>
                                        <i className="fa-solid fa-plus" aria-hidden="true"></i>
                                        Alokasi Penghuni Baru
                                    </button>
                                </div>
        
                                <article className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
                                    <div className="px-5 py-4 border-b border-slate-100 flex flex-col lg:flex-row gap-3 lg:items-end lg:justify-between">
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 flex-1">
                                            <div className="space-y-1">
                                                <label htmlFor="filterKeyword" className="text-xs font-semibold text-slate-700">Cari Nama atau NIM/NIK</label>
                                                <input
                                                    id="filterKeyword"
                                                    type="search"
                                                    name="filterKeyword"
                                                    autoComplete="off"
                                                    placeholder="Contoh: Budi Santoso atau 2021…"
                                                    className="w-full px-3.5 py-2.5 text-sm border border-slate-200 rounded-xl bg-white placeholder-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                                                />
                                            </div>
                                            <div className="space-y-1">
                                                <label htmlFor="filterStatus" className="text-xs font-semibold text-slate-700">Filter Status</label>
                                                <select
                                                    id="filterStatus"
                                                    name="filterStatus"
                                                    autoComplete="off"
                                                    className="w-full px-3.5 py-2.5 text-sm border border-slate-200 rounded-xl bg-white text-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                                                >
                                                    <option value="">Semua Status</option>
                                                    <option value="Aktif Tinggal">Aktif Tinggal</option>
                                                    <option value="Perpanjangan">Perpanjangan</option>
                                                    <option value="Mutasi Proses">Mutasi Proses</option>
                                                </select>
                                            </div>
                                            <div className="space-y-1">
                                                <label htmlFor="filterRoom" className="text-xs font-semibold text-slate-700">Filter Kamar</label>
                                                <select
                                                    id="filterRoom"
                                                    name="filterRoom"
                                                    autoComplete="off"
                                                    className="w-full px-3.5 py-2.5 text-sm border border-slate-200 rounded-xl bg-white text-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                                                >
                                                    <option value="">Semua Kamar</option>
                                                    <option value="A-101">A-101</option>
                                                    <option value="A-302">A-302</option>
                                                    <option value="B-203">B-203</option>
                                                    <option value="C-115">C-115</option>
                                                    <option value="D-201">D-201</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <button
                                                id="resetFilterBtn"
                                                type="button"
                                                className="px-3.5 py-2.5 text-xs font-semibold border border-slate-200 text-slate-600 rounded-xl hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                                            >
                                                Reset Filter
                                            </button>
                                            <button
                                                type="button"
                                                className="px-3.5 py-2.5 text-xs font-semibold border border-slate-200 text-slate-600 rounded-xl hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                                            >
                                                Export CSV
                                            </button>
                                        </div>
                                    </div>
        
                                    <div className="overflow-x-auto">
                                        <table className="w-full" aria-describedby="tableSummary">
                                            <caption id="tableSummary" className="sr-only">
                                                Tabel daftar penghuni berisi nama, NIM/NIK, kamar, status, dan aksi.
                                            </caption>
                                            <thead>
                                                <tr className="bg-slate-50 border-b border-slate-100">
                                                    <th className="px-5 py-3 text-left text-[11px] uppercase tracking-wider text-slate-500 font-bold">Nama</th>
                                                    <th className="px-4 py-3 text-left text-[11px] uppercase tracking-wider text-slate-500 font-bold">NIM/NIK</th>
                                                    <th className="px-4 py-3 text-left text-[11px] uppercase tracking-wider text-slate-500 font-bold">Kamar</th>
                                                    <th className="px-4 py-3 text-left text-[11px] uppercase tracking-wider text-slate-500 font-bold">Status</th>
                                                    <th className="px-4 py-3 text-right text-[11px] uppercase tracking-wider text-slate-500 font-bold">Aksi</th>
                                                </tr>
                                            </thead>
                                            <tbody id="residentTableBody" className="divide-y divide-slate-50">
                                                <tr data-name="Budi Santoso" data-id="2021310045" data-room="A-101" data-status="Aktif Tinggal">
                                                    <td className="px-5 py-3.5">
                                                        <div className="flex items-center gap-2.5 min-w-0">
                                                            <span className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-700 text-[11px] font-bold flex items-center justify-center shrink-0">BS</span>
                                                            <div className="min-w-0">
                                                                <p className="text-sm font-semibold text-slate-800 truncate">Budi Santoso</p>
                                                                <p className="text-[11px] text-slate-400 truncate">Teknik Informatika</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="px-4 py-3.5 text-sm font-mono text-slate-700 [font-variant-numeric:tabular-nums]">2021310045</td>
                                                    <td className="px-4 py-3.5">
                                                        <span className="text-sm font-semibold text-slate-700 bg-slate-100 px-2 py-1 rounded-lg [font-variant-numeric:tabular-nums]">A-101</span>
                                                    </td>
                                                    <td className="px-4 py-3.5">
                                                        <span className="inline-flex items-center gap-1.5 text-[11px] px-2.5 py-1 rounded-full border border-emerald-200 bg-emerald-100 text-emerald-700 font-bold">
                                                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                                                            Aktif Tinggal
                                                        </span>
                                                    </td>
                                                    <td className="px-4 py-3.5">
                                                        <div className="flex justify-end items-center gap-1.5">
                                                            <button
                                                                type="button"
                                                                className="view-detail-btn p-2 rounded-lg text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                                                                aria-label="Lihat detail Budi Santoso"
                                                                data-resident="2021310045"
                                                             onClick={() => onOpenDetail()}>
                                                                <i className="fa-solid fa-eye text-sm" aria-hidden="true"></i>
                                                            </button>
                                                            <button
                                                                type="button"
                                                                className="open-section-btn p-2 rounded-lg text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                                                                aria-label="Buka alokasi kamar"
                                                                data-section="penempatan"
                                                             onClick={() => onOpenTab("penempatan")}>
                                                                <i className="fa-solid fa-bed text-sm" aria-hidden="true"></i>
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
        
                                                <tr data-name="Ahmad Rizky" data-id="2022410012" data-room="B-203" data-status="Aktif Tinggal">
                                                    <td className="px-5 py-3.5">
                                                        <div className="flex items-center gap-2.5 min-w-0">
                                                            <span className="w-8 h-8 rounded-lg bg-purple-100 text-purple-700 text-[11px] font-bold flex items-center justify-center shrink-0">AR</span>
                                                            <div className="min-w-0">
                                                                <p className="text-sm font-semibold text-slate-800 truncate">Ahmad Rizky</p>
                                                                <p className="text-[11px] text-slate-400 truncate">Manajemen</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="px-4 py-3.5 text-sm font-mono text-slate-700 [font-variant-numeric:tabular-nums]">2022410012</td>
                                                    <td className="px-4 py-3.5">
                                                        <span className="text-sm font-semibold text-slate-700 bg-slate-100 px-2 py-1 rounded-lg [font-variant-numeric:tabular-nums]">B-203</span>
                                                    </td>
                                                    <td className="px-4 py-3.5">
                                                        <span className="inline-flex items-center gap-1.5 text-[11px] px-2.5 py-1 rounded-full border border-emerald-200 bg-emerald-100 text-emerald-700 font-bold">
                                                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                                                            Aktif Tinggal
                                                        </span>
                                                    </td>
                                                    <td className="px-4 py-3.5">
                                                        <div className="flex justify-end items-center gap-1.5">
                                                            <button
                                                                type="button"
                                                                className="view-detail-btn p-2 rounded-lg text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                                                                aria-label="Lihat detail Ahmad Rizky"
                                                                data-resident="2022410012"
                                                             onClick={() => onOpenDetail()}>
                                                                <i className="fa-solid fa-eye text-sm" aria-hidden="true"></i>
                                                            </button>
                                                            <button
                                                                type="button"
                                                                className="open-section-btn p-2 rounded-lg text-slate-400 hover:text-amber-600 hover:bg-amber-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
                                                                aria-label="Buka mutasi kamar"
                                                                data-section="mutasi"
                                                             onClick={() => onOpenTab("mutasi")}>
                                                                <i className="fa-solid fa-right-left text-sm" aria-hidden="true"></i>
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
        
                                                <tr data-name="Dewi Puspita" data-id="2023110087" data-room="C-115" data-status="Perpanjangan">
                                                    <td className="px-5 py-3.5">
                                                        <div className="flex items-center gap-2.5 min-w-0">
                                                            <span className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 text-[11px] font-bold flex items-center justify-center shrink-0">DP</span>
                                                            <div className="min-w-0">
                                                                <p className="text-sm font-semibold text-slate-800 truncate">Dewi Puspita</p>
                                                                <p className="text-[11px] text-slate-400 truncate">Pendidikan Dokter</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="px-4 py-3.5 text-sm font-mono text-slate-700 [font-variant-numeric:tabular-nums]">2023110087</td>
                                                    <td className="px-4 py-3.5">
                                                        <span className="text-sm font-semibold text-slate-700 bg-slate-100 px-2 py-1 rounded-lg [font-variant-numeric:tabular-nums]">C-115</span>
                                                    </td>
                                                    <td className="px-4 py-3.5">
                                                        <span className="inline-flex items-center gap-1.5 text-[11px] px-2.5 py-1 rounded-full border border-blue-200 bg-blue-100 text-blue-700 font-bold">
                                                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                                                            Perpanjangan
                                                        </span>
                                                    </td>
                                                    <td className="px-4 py-3.5">
                                                        <div className="flex justify-end items-center gap-1.5">
                                                            <button
                                                                type="button"
                                                                className="view-detail-btn p-2 rounded-lg text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                                                                aria-label="Lihat detail Dewi Puspita"
                                                                data-resident="2023110087"
                                                             onClick={() => onOpenDetail()}>
                                                                <i className="fa-solid fa-eye text-sm" aria-hidden="true"></i>
                                                            </button>
                                                            <button
                                                                type="button"
                                                                className="open-section-btn p-2 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500"
                                                                aria-label="Buka proses keluar asrama"
                                                                data-section="keluar"
                                                             onClick={() => onOpenTab("keluar")}>
                                                                <i className="fa-solid fa-door-open text-sm" aria-hidden="true"></i>
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
        
                                                <tr data-name="Muhammad Faiz" data-id="2021210033" data-room="A-302" data-status="Mutasi Proses">
                                                    <td className="px-5 py-3.5">
                                                        <div className="flex items-center gap-2.5 min-w-0">
                                                            <span className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 text-[11px] font-bold flex items-center justify-center shrink-0">MF</span>
                                                            <div className="min-w-0">
                                                                <p className="text-sm font-semibold text-slate-800 truncate">Muhammad Faiz</p>
                                                                <p className="text-[11px] text-slate-400 truncate">Ilmu Hukum</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="px-4 py-3.5 text-sm font-mono text-slate-700 [font-variant-numeric:tabular-nums]">2021210033</td>
                                                    <td className="px-4 py-3.5">
                                                        <span className="text-sm font-semibold text-slate-700 bg-slate-100 px-2 py-1 rounded-lg [font-variant-numeric:tabular-nums]">A-302</span>
                                                    </td>
                                                    <td className="px-4 py-3.5">
                                                        <span className="inline-flex items-center gap-1.5 text-[11px] px-2.5 py-1 rounded-full border border-amber-200 bg-amber-100 text-amber-700 font-bold">
                                                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                                                            Mutasi Proses
                                                        </span>
                                                    </td>
                                                    <td className="px-4 py-3.5">
                                                        <div className="flex justify-end items-center gap-1.5">
                                                            <button
                                                                type="button"
                                                                className="view-detail-btn p-2 rounded-lg text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                                                                aria-label="Lihat detail Muhammad Faiz"
                                                                data-resident="2021210033"
                                                             onClick={() => onOpenDetail()}>
                                                                <i className="fa-solid fa-eye text-sm" aria-hidden="true"></i>
                                                            </button>
                                                            <button
                                                                type="button"
                                                                className="open-section-btn p-2 rounded-lg text-slate-400 hover:text-amber-600 hover:bg-amber-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
                                                                aria-label="Lanjutkan proses mutasi"
                                                                data-section="mutasi"
                                                             onClick={() => onOpenTab("mutasi")}>
                                                                <i className="fa-solid fa-right-left text-sm" aria-hidden="true"></i>
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
        
                                                <tr data-name="Nurul Aini" data-id="2022310056" data-room="D-201" data-status="Aktif Tinggal">
                                                    <td className="px-5 py-3.5">
                                                        <div className="flex items-center gap-2.5 min-w-0">
                                                            <span className="w-8 h-8 rounded-lg bg-rose-100 text-rose-700 text-[11px] font-bold flex items-center justify-center shrink-0">NA</span>
                                                            <div className="min-w-0">
                                                                <p className="text-sm font-semibold text-slate-800 truncate">Nurul Aini</p>
                                                                <p className="text-[11px] text-slate-400 truncate">Teknik Informatika</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="px-4 py-3.5 text-sm font-mono text-slate-700 [font-variant-numeric:tabular-nums]">2022310056</td>
                                                    <td className="px-4 py-3.5">
                                                        <span className="text-sm font-semibold text-slate-700 bg-slate-100 px-2 py-1 rounded-lg [font-variant-numeric:tabular-nums]">D-201</span>
                                                    </td>
                                                    <td className="px-4 py-3.5">
                                                        <span className="inline-flex items-center gap-1.5 text-[11px] px-2.5 py-1 rounded-full border border-emerald-200 bg-emerald-100 text-emerald-700 font-bold">
                                                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                                                            Aktif Tinggal
                                                        </span>
                                                    </td>
                                                    <td className="px-4 py-3.5">
                                                        <div className="flex justify-end items-center gap-1.5">
                                                            <button
                                                                type="button"
                                                                className="view-detail-btn p-2 rounded-lg text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                                                                aria-label="Lihat detail Nurul Aini"
                                                                data-resident="2022310056"
                                                             onClick={() => onOpenDetail()}>
                                                                <i className="fa-solid fa-eye text-sm" aria-hidden="true"></i>
                                                            </button>
                                                            <button
                                                                type="button"
                                                                className="open-section-btn p-2 rounded-lg text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                                                                aria-label="Buka alokasi kamar"
                                                                data-section="penempatan"
                                                             onClick={() => onOpenTab("penempatan")}>
                                                                <i className="fa-solid fa-bed text-sm" aria-hidden="true"></i>
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
        
                                    <div id="emptyState" className="hidden px-5 py-8 border-t border-slate-100 text-center">
                                        <p className="text-sm font-semibold text-slate-700">Data penghuni tidak ditemukan.</p>
                                        <p className="text-xs text-slate-500 mt-1">Ubah kata kunci atau reset filter untuk melihat semua data.</p>
                                    </div>
        
                                    <div className="px-5 py-3.5 border-t border-slate-100 bg-slate-50/70 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                                        <p id="resultCount" className="text-xs text-slate-500">Menampilkan 5 dari 5 penghuni.</p>
                                        <div className="flex items-center gap-1">
                                            <button type="button" className="px-2.5 py-1.5 text-xs text-slate-500 rounded-lg hover:bg-slate-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500" aria-label="Halaman sebelumnya">
                                                <i className="fa-solid fa-chevron-left" aria-hidden="true"></i>
                                            </button>
                                            <button type="button" className="px-3 py-1.5 text-xs rounded-lg bg-indigo-600 text-white font-bold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500">1</button>
                                            <button type="button" className="px-3 py-1.5 text-xs rounded-lg text-slate-600 hover:bg-slate-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500">2</button>
                                            <button type="button" className="px-2.5 py-1.5 text-xs text-slate-500 rounded-lg hover:bg-slate-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500" aria-label="Halaman berikutnya">
                                                <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
                                            </button>
                                        </div>
                                    </div>
                                </article>
                            </section>
    </>
  );
}

function DetailPenghuniView() {
  return (
    <>
        <section id="section-detail" className="tab-panel space-y-5" role="tabpanel" tabIndex={0} aria-labelledby="tab-detail judulDetail">
                                <div>
                                    <h2 id="judulDetail" className="text-xl font-bold text-slate-900 scroll-mt-24 [text-wrap:balance]">Detail Penghuni</h2>
                                    <p className="text-sm text-slate-500 mt-1">Kartu informasi lengkap: data pribadi, data akademik, dan riwayat kamar penghuni.</p>
                                </div>
        
                                <div className="grid grid-cols-1 xl:grid-cols-12 gap-5">
                                    <aside className="xl:col-span-4 bg-white border border-slate-200 rounded-2xl p-4 space-y-3 h-fit">
                                        <div className="space-y-1">
                                            <label htmlFor="detailResidentSearch" className="text-xs font-semibold text-slate-700">Cari Penghuni</label>
                                            <input
                                                id="detailResidentSearch"
                                                type="search"
                                                name="detailResidentSearch"
                                                autoComplete="off"
                                                placeholder="Cari nama penghuni…"
                                                className="w-full px-3.5 py-2.5 text-sm border border-slate-200 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                                            />
                                        </div>
        
                                        <div id="residentList" className="space-y-2 max-h-[540px] overflow-y-auto pr-1">
                                            <button
                                                type="button"
                                                className="resident-list-btn w-full text-left p-3 rounded-xl border border-indigo-200 bg-indigo-50"
                                                data-resident="2021310045"
                                            >
                                                <p className="text-sm font-semibold text-slate-800 truncate">Budi Santoso</p>
                                                <p className="text-[11px] text-slate-500 truncate">2021310045 • A-101 • Aktif Tinggal</p>
                                            </button>
                                            <button type="button" className="resident-list-btn w-full text-left p-3 rounded-xl border border-slate-200 hover:border-indigo-200 hover:bg-indigo-50/50" data-resident="2022410012">
                                                <p className="text-sm font-semibold text-slate-800 truncate">Ahmad Rizky</p>
                                                <p className="text-[11px] text-slate-500 truncate">2022410012 • B-203 • Aktif Tinggal</p>
                                            </button>
                                            <button type="button" className="resident-list-btn w-full text-left p-3 rounded-xl border border-slate-200 hover:border-indigo-200 hover:bg-indigo-50/50" data-resident="2023110087">
                                                <p className="text-sm font-semibold text-slate-800 truncate">Dewi Puspita</p>
                                                <p className="text-[11px] text-slate-500 truncate">2023110087 • C-115 • Perpanjangan</p>
                                            </button>
                                            <button type="button" className="resident-list-btn w-full text-left p-3 rounded-xl border border-slate-200 hover:border-indigo-200 hover:bg-indigo-50/50" data-resident="2021210033">
                                                <p className="text-sm font-semibold text-slate-800 truncate">Muhammad Faiz</p>
                                                <p className="text-[11px] text-slate-500 truncate">2021210033 • A-302 • Mutasi Proses</p>
                                            </button>
                                            <button type="button" className="resident-list-btn w-full text-left p-3 rounded-xl border border-slate-200 hover:border-indigo-200 hover:bg-indigo-50/50" data-resident="2022310056">
                                                <p className="text-sm font-semibold text-slate-800 truncate">Nurul Aini</p>
                                                <p className="text-[11px] text-slate-500 truncate">2022310056 • D-201 • Aktif Tinggal</p>
                                            </button>
                                        </div>
                                    </aside>
        
                                    <article className="xl:col-span-8 bg-white border border-slate-200 rounded-2xl overflow-hidden">
                                        <header className="px-5 sm:px-6 py-5 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                                            <div className="flex items-center gap-3 min-w-0">
                                                <div id="detailAvatar" className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold">BS</div>
                                                <div className="min-w-0">
                                                    <h3 id="detailName" className="text-lg font-bold text-slate-900 truncate">Budi Santoso</h3>
                                                    <p id="detailMeta" className="text-sm text-slate-500 truncate">NIM 2021310045 • Kamar A-101</p>
                                                </div>
                                            </div>
                                            <span id="detailStatus" className="inline-flex w-fit items-center gap-1.5 text-[11px] px-2.5 py-1 rounded-full border border-emerald-200 bg-emerald-100 text-emerald-700 font-bold">
                                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                                                Aktif Tinggal
                                            </span>
                                        </header>
        
                                        <div className="p-5 sm:p-6 space-y-6">
                                            <section>
                                                <h4 className="text-sm font-bold text-slate-900 mb-3">Informasi Pribadi</h4>
                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                                    <article className="border border-slate-100 rounded-xl p-3">
                                                        <p className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">NIK</p>
                                                        <p id="detailNik" className="text-sm font-semibold text-slate-800 [font-variant-numeric:tabular-nums]">3201121801030001</p>
                                                    </article>
                                                    <article className="border border-slate-100 rounded-xl p-3">
                                                        <p className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">Nomor Telepon</p>
                                                        <p id="detailPhone" className="text-sm font-semibold text-slate-800 [font-variant-numeric:tabular-nums]">081234567890</p>
                                                    </article>
                                                    <article className="border border-slate-100 rounded-xl p-3">
                                                        <p className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">Orang Tua/Wali</p>
                                                        <p id="detailGuardian" className="text-sm font-semibold text-slate-800">Slamet Santoso</p>
                                                    </article>
                                                    <article className="border border-slate-100 rounded-xl p-3">
                                                        <p className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">Kontak Darurat</p>
                                                        <p id="detailEmergency" className="text-sm font-semibold text-slate-800 [font-variant-numeric:tabular-nums]">081112223334</p>
                                                    </article>
                                                </div>
                                            </section>
        
                                            <section>
                                                <h4 className="text-sm font-bold text-slate-900 mb-3">Informasi Akademik</h4>
                                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                                    <article className="border border-slate-100 rounded-xl p-3">
                                                        <p className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">Fakultas</p>
                                                        <p id="detailFaculty" className="text-sm font-semibold text-slate-800">Teknik</p>
                                                    </article>
                                                    <article className="border border-slate-100 rounded-xl p-3">
                                                        <p className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">Program Studi</p>
                                                        <p id="detailProgram" className="text-sm font-semibold text-slate-800">Teknik Informatika</p>
                                                    </article>
                                                    <article className="border border-slate-100 rounded-xl p-3">
                                                        <p className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">Angkatan</p>
                                                        <p id="detailYear" className="text-sm font-semibold text-slate-800 [font-variant-numeric:tabular-nums]">2021</p>
                                                    </article>
                                                </div>
                                            </section>
        
                                            <section>
                                                <h4 className="text-sm font-bold text-slate-900 mb-3">Riwayat Kamar</h4>
                                                <div className="border border-slate-100 rounded-xl overflow-x-auto">
                                                    <table className="w-full">
                                                        <thead>
                                                            <tr className="bg-slate-50 border-b border-slate-100">
                                                                <th className="px-3 py-2.5 text-left text-[11px] uppercase tracking-wider text-slate-500 font-bold">Periode</th>
                                                                <th className="px-3 py-2.5 text-left text-[11px] uppercase tracking-wider text-slate-500 font-bold">Kamar</th>
                                                                <th className="px-3 py-2.5 text-left text-[11px] uppercase tracking-wider text-slate-500 font-bold">Keterangan</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody id="roomHistoryBody" className="divide-y divide-slate-50">
                                                            <tr>
                                                                <td className="px-3 py-2.5 text-xs text-slate-700 [font-variant-numeric:tabular-nums]">2023/2024 Ganjil</td>
                                                                <td className="px-3 py-2.5 text-xs font-semibold text-slate-700">A-103</td>
                                                                <td className="px-3 py-2.5 text-xs text-slate-600">Penempatan awal</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="px-3 py-2.5 text-xs text-slate-700 [font-variant-numeric:tabular-nums]">2024/2025 Genap</td>
                                                                <td className="px-3 py-2.5 text-xs font-semibold text-slate-700">A-101</td>
                                                                <td className="px-3 py-2.5 text-xs text-slate-600">Mutasi karena penyesuaian blok</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </section>
                                        </div>
                                    </article>
                                </div>
                            </section>
    </>
  );
}

function PenempatanKamarView() {
  return (
    <>
        <section id="section-penempatan" className="tab-panel space-y-5" role="tabpanel" tabIndex={0} aria-labelledby="tab-penempatan judulPenempatan">
                                <div>
                                    <h2 id="judulPenempatan" className="text-xl font-bold text-slate-900 scroll-mt-24 [text-wrap:balance]">Penempatan Kamar</h2>
                                    <p className="text-sm text-slate-500 mt-1">Form alokasi kamar profesional dengan validasi dasar dan catatan penempatan.</p>
                                </div>
        
                                <form className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-6" autoComplete="off">
                                    <fieldset className="space-y-4">
                                        <legend className="text-sm font-bold text-slate-900 mb-3">Data Penghuni</legend>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="space-y-1">
                                                <label htmlFor="allocResidentId" className="text-xs font-semibold text-slate-700">NIM/NIK</label>
                                                <input
                                                    id="allocResidentId"
                                                    name="allocResidentId"
                                                    type="text"
                                                    inputMode="numeric"
                                                    spellCheck="false"
                                                    autoComplete="off"
                                                    placeholder="Masukkan NIM atau NIK penghuni…"
                                                    className="w-full px-3.5 py-2.5 text-sm border border-slate-200 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                                                />
                                            </div>
                                            <div className="space-y-1">
                                                <label htmlFor="allocResidentName" className="text-xs font-semibold text-slate-700">Nama Lengkap</label>
                                                <input
                                                    id="allocResidentName"
                                                    name="allocResidentName"
                                                    type="text"
                                                    autoComplete="name"
                                                    placeholder="Nama lengkap penghuni…"
                                                    className="w-full px-3.5 py-2.5 text-sm border border-slate-200 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                                                />
                                            </div>
                                            <div className="space-y-1">
                                                <label htmlFor="allocFaculty" className="text-xs font-semibold text-slate-700">Fakultas</label>
                                                <input
                                                    id="allocFaculty"
                                                    name="allocFaculty"
                                                    type="text"
                                                    autoComplete="organization"
                                                    placeholder="Contoh: Teknik…"
                                                    className="w-full px-3.5 py-2.5 text-sm border border-slate-200 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                                                />
                                            </div>
                                            <div className="space-y-1">
                                                <label htmlFor="allocProgram" className="text-xs font-semibold text-slate-700">Program Studi</label>
                                                <input
                                                    id="allocProgram"
                                                    name="allocProgram"
                                                    type="text"
                                                    autoComplete="off"
                                                    placeholder="Contoh: Teknik Informatika…"
                                                    className="w-full px-3.5 py-2.5 text-sm border border-slate-200 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                                                />
                                            </div>
                                        </div>
                                    </fieldset>
        
                                    <fieldset className="space-y-4">
                                        <legend className="text-sm font-bold text-slate-900 mb-3">Alokasi Kamar</legend>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                            <div className="space-y-1">
                                                <label htmlFor="allocBuilding" className="text-xs font-semibold text-slate-700">Gedung</label>
                                                <select
                                                    id="allocBuilding"
                                                    name="allocBuilding"
                                                    autoComplete="off"
                                                    className="w-full px-3.5 py-2.5 text-sm border border-slate-200 rounded-xl bg-white text-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                                                >
                                                    <option value="">Pilih gedung</option>
                                                    <option>Gedung A (Putra)</option>
                                                    <option>Gedung B (Putra)</option>
                                                    <option>Gedung C (Putri)</option>
                                                    <option>Gedung D (Putri)</option>
                                                </select>
                                            </div>
                                            <div className="space-y-1">
                                                <label htmlFor="allocRoom" className="text-xs font-semibold text-slate-700">Nomor Kamar</label>
                                                <select
                                                    id="allocRoom"
                                                    name="allocRoom"
                                                    autoComplete="off"
                                                    className="w-full px-3.5 py-2.5 text-sm border border-slate-200 rounded-xl bg-white text-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                                                >
                                                    <option value="">Pilih kamar tersedia</option>
                                                    <option>A-104 (Sisa 1 bed)</option>
                                                    <option>B-202 (Sisa 2 bed)</option>
                                                    <option>C-116 (Sisa 1 bed)</option>
                                                    <option>D-203 (Sisa 2 bed)</option>
                                                </select>
                                            </div>
                                            <div className="space-y-1">
                                                <label htmlFor="allocCheckIn" className="text-xs font-semibold text-slate-700">Tanggal Masuk</label>
                                                <input
                                                    id="allocCheckIn"
                                                    name="allocCheckIn"
                                                    type="date"
                                                    autoComplete="off"
                                                    className="w-full px-3.5 py-2.5 text-sm border border-slate-200 rounded-xl bg-white text-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-1">
                                            <label htmlFor="allocNotes" className="text-xs font-semibold text-slate-700">Catatan Penempatan</label>
                                            <textarea
                                                id="allocNotes"
                                                name="allocNotes"
                                                rows={3}
                                                autoComplete="off"
                                                placeholder="Tambahkan catatan kebutuhan khusus atau preferensi penghuni…"
                                                className="w-full px-3.5 py-2.5 text-sm border border-slate-200 rounded-xl resize-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                                            ></textarea>
                                        </div>
                                    </fieldset>
        
                                    <div className="flex items-center justify-end gap-2">
                                        <button
                                            type="reset"
                                            className="px-4 py-2.5 text-sm font-semibold border border-slate-200 text-slate-600 rounded-xl hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                                        >
                                            Reset
                                        </button>
                                        <button
                                            type="submit"
                                            className="px-4 py-2.5 text-sm font-semibold bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                                        >
                                            Simpan Penempatan
                                        </button>
                                    </div>
                                </form>
                            </section>
    </>
  );
}

function MutasiKamarView() {
  return (
    <>
        <section id="section-mutasi" className="tab-panel space-y-5" role="tabpanel" tabIndex={0} aria-labelledby="tab-mutasi judulMutasi">
                                <div>
                                    <h2 id="judulMutasi" className="text-xl font-bold text-slate-900 scroll-mt-24 [text-wrap:balance]">Mutasi Kamar</h2>
                                    <p className="text-sm text-slate-500 mt-1">Proses pemindahan kamar tertata, terdokumentasi, dan mudah ditelusuri.</p>
                                </div>
        
                                <div className="grid grid-cols-1 xl:grid-cols-12 gap-5">
                                    <article className="xl:col-span-4 bg-white border border-slate-200 rounded-2xl p-5 space-y-4">
                                        <h3 className="text-sm font-bold text-slate-900">Tahapan Mutasi</h3>
                                        <ol className="space-y-3 text-sm" aria-label="Tahapan mutasi kamar">
                                            <li className="flex gap-3">
                                                <span className="w-6 h-6 rounded-full bg-indigo-600 text-white text-xs font-bold flex items-center justify-center shrink-0">1</span>
                                                <div>
                                                    <p className="font-semibold text-slate-800">Pengajuan</p>
                                                    <p className="text-xs text-slate-500">Data penghuni dan alasan mutasi diverifikasi.</p>
                                                </div>
                                            </li>
                                            <li className="flex gap-3">
                                                <span className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold flex items-center justify-center shrink-0">2</span>
                                                <div>
                                                    <p className="font-semibold text-slate-800">Validasi Kamar Tujuan</p>
                                                    <p className="text-xs text-slate-500">Ketersediaan kapasitas dan kesesuaian blok diperiksa.</p>
                                                </div>
                                            </li>
                                            <li className="flex gap-3">
                                                <span className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold flex items-center justify-center shrink-0">3</span>
                                                <div>
                                                    <p className="font-semibold text-slate-800">Persetujuan Pembina</p>
                                                    <p className="text-xs text-slate-500">Persetujuan akhir dicatat sebelum relokasi.</p>
                                                </div>
                                            </li>
                                            <li className="flex gap-3">
                                                <span className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold flex items-center justify-center shrink-0">4</span>
                                                <div>
                                                    <p className="font-semibold text-slate-800">Eksekusi Mutasi</p>
                                                    <p className="text-xs text-slate-500">Data kamar lama dan baru diperbarui otomatis.</p>
                                                </div>
                                            </li>
                                        </ol>
                                    </article>
        
                                    <form className="xl:col-span-8 bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-6" autoComplete="off">
                                        <fieldset className="space-y-4">
                                            <legend className="text-sm font-bold text-slate-900 mb-3">Form Mutasi</legend>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <div className="space-y-1">
                                                    <label htmlFor="mutResident" className="text-xs font-semibold text-slate-700">Pilih Penghuni</label>
                                                    <select
                                                        id="mutResident"
                                                        name="mutResident"
                                                        autoComplete="off"
                                                        className="w-full px-3.5 py-2.5 text-sm border border-slate-200 rounded-xl bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                                                    >
                                                        <option value="">Pilih penghuni aktif</option>
                                                        <option>Muhammad Faiz (A-302)</option>
                                                        <option>Nurul Aini (D-201)</option>
                                                        <option>Ahmad Rizky (B-203)</option>
                                                    </select>
                                                </div>
                                                <div className="space-y-1">
                                                    <label htmlFor="mutReason" className="text-xs font-semibold text-slate-700">Alasan Mutasi</label>
                                                    <select
                                                        id="mutReason"
                                                        name="mutReason"
                                                        autoComplete="off"
                                                        className="w-full px-3.5 py-2.5 text-sm border border-slate-200 rounded-xl bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                                                    >
                                                        <option value="">Pilih alasan</option>
                                                        <option>Kapasitas kamar terlalu padat</option>
                                                        <option>Kebutuhan akademik</option>
                                                        <option>Permintaan penghuni</option>
                                                        <option>Rekomendasi pembina</option>
                                                    </select>
                                                </div>
                                                <div className="space-y-1">
                                                    <label htmlFor="mutCurrentRoom" className="text-xs font-semibold text-slate-700">Kamar Saat Ini</label>
                                                    <input
                                                        id="mutCurrentRoom"
                                                        name="mutCurrentRoom"
                                                        type="text"
                                                        autoComplete="off"
                                                        placeholder="Contoh: A-302…"
                                                        className="w-full px-3.5 py-2.5 text-sm border border-slate-200 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                                                    />
                                                </div>
                                                <div className="space-y-1">
                                                    <label htmlFor="mutTargetRoom" className="text-xs font-semibold text-slate-700">Kamar Tujuan</label>
                                                    <select
                                                        id="mutTargetRoom"
                                                        name="mutTargetRoom"
                                                        autoComplete="off"
                                                        className="w-full px-3.5 py-2.5 text-sm border border-slate-200 rounded-xl bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                                                    >
                                                        <option value="">Pilih kamar tujuan</option>
                                                        <option>A-104 (Sisa 1 bed)</option>
                                                        <option>B-205 (Sisa 2 bed)</option>
                                                        <option>C-117 (Sisa 1 bed)</option>
                                                    </select>
                                                </div>
                                                <div className="space-y-1 md:col-span-2">
                                                    <label htmlFor="mutEffectiveDate" className="text-xs font-semibold text-slate-700">Tanggal Efektif Mutasi</label>
                                                    <input
                                                        id="mutEffectiveDate"
                                                        name="mutEffectiveDate"
                                                        type="date"
                                                        autoComplete="off"
                                                        className="w-full md:max-w-xs px-3.5 py-2.5 text-sm border border-slate-200 rounded-xl bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                                                    />
                                                </div>
                                            </div>
                                        </fieldset>
        
                                        <fieldset className="space-y-2">
                                            <legend className="text-sm font-bold text-slate-900 mb-2">Checklist Administrasi</legend>
                                            <label className="flex items-start gap-2.5 p-3 border border-slate-200 rounded-xl cursor-pointer">
                                                <input type="checkbox" name="mutChecklistInventory" className="mt-0.5" />
                                                <span className="text-sm text-slate-700">Inventaris kamar lama sudah diperiksa.</span>
                                            </label>
                                            <label className="flex items-start gap-2.5 p-3 border border-slate-200 rounded-xl cursor-pointer">
                                                <input type="checkbox" name="mutChecklistApproval" className="mt-0.5" />
                                                <span className="text-sm text-slate-700">Persetujuan pembina asrama sudah diterima.</span>
                                            </label>
                                            <label className="flex items-start gap-2.5 p-3 border border-slate-200 rounded-xl cursor-pointer">
                                                <input type="checkbox" name="mutChecklistNotification" className="mt-0.5" />
                                                <span className="text-sm text-slate-700">Penghuni tujuan kamar baru telah diinformasikan.</span>
                                            </label>
                                        </fieldset>
        
                                        <div className="flex items-center justify-end gap-2">
                                            <button type="reset" className="px-4 py-2.5 text-sm font-semibold border border-slate-200 text-slate-600 rounded-xl hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500">
                                                Bersihkan
                                            </button>
                                            <button type="submit" className="px-4 py-2.5 text-sm font-semibold bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500">
                                                Ajukan Mutasi
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </section>
    </>
  );
}

function KeluarAsramaView() {
  return (
    <>
        <section id="section-keluar" className="tab-panel space-y-5" role="tabpanel" tabIndex={0} aria-labelledby="tab-keluar judulKeluar">
                                <div>
                                    <h2 id="judulKeluar" className="text-xl font-bold text-slate-900 scroll-mt-24 [text-wrap:balance]">Keluar Asrama</h2>
                                    <p className="text-sm text-slate-500 mt-1">Form pengurusan checkout untuk administrasi akhir dan serah terima kamar.</p>
                                </div>
        
                                <form className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-6" autoComplete="off">
                                    <fieldset className="space-y-4">
                                        <legend className="text-sm font-bold text-slate-900 mb-3">Data Checkout</legend>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="space-y-1">
                                                <label htmlFor="outResidentId" className="text-xs font-semibold text-slate-700">NIM/NIK Penghuni</label>
                                                <input
                                                    id="outResidentId"
                                                    name="outResidentId"
                                                    type="text"
                                                    inputMode="numeric"
                                                    spellCheck="false"
                                                    autoComplete="off"
                                                    placeholder="Masukkan NIM/NIK penghuni…"
                                                    className="w-full px-3.5 py-2.5 text-sm border border-slate-200 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                                                />
                                            </div>
                                            <div className="space-y-1">
                                                <label htmlFor="outResidentName" className="text-xs font-semibold text-slate-700">Nama Penghuni</label>
                                                <input
                                                    id="outResidentName"
                                                    name="outResidentName"
                                                    type="text"
                                                    autoComplete="name"
                                                    placeholder="Nama lengkap penghuni…"
                                                    className="w-full px-3.5 py-2.5 text-sm border border-slate-200 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                                                />
                                            </div>
                                            <div className="space-y-1">
                                                <label htmlFor="outRoom" className="text-xs font-semibold text-slate-700">Kamar Terakhir</label>
                                                <input
                                                    id="outRoom"
                                                    name="outRoom"
                                                    type="text"
                                                    autoComplete="off"
                                                    placeholder="Contoh: D-201…"
                                                    className="w-full px-3.5 py-2.5 text-sm border border-slate-200 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                                                />
                                            </div>
                                            <div className="space-y-1">
                                                <label htmlFor="outDate" className="text-xs font-semibold text-slate-700">Tanggal Checkout</label>
                                                <input
                                                    id="outDate"
                                                    name="outDate"
                                                    type="date"
                                                    autoComplete="off"
                                                    className="w-full px-3.5 py-2.5 text-sm border border-slate-200 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                                                />
                                            </div>
                                            <div className="space-y-1 md:col-span-2">
                                                <label htmlFor="outReason" className="text-xs font-semibold text-slate-700">Alasan Keluar</label>
                                                <textarea
                                                    id="outReason"
                                                    name="outReason"
                                                    rows={3}
                                                    autoComplete="off"
                                                    placeholder="Tuliskan alasan keluar asrama secara ringkas dan jelas…"
                                                    className="w-full px-3.5 py-2.5 text-sm border border-slate-200 rounded-xl resize-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                                                ></textarea>
                                            </div>
                                        </div>
                                    </fieldset>
        
                                    <fieldset className="space-y-2">
                                        <legend className="text-sm font-bold text-slate-900 mb-2">Checklist Serah Terima</legend>
                                        <label className="flex items-start gap-2.5 p-3 border border-slate-200 rounded-xl cursor-pointer">
                                            <input type="checkbox" name="outChecklistKey" className="mt-0.5" />
                                            <span className="text-sm text-slate-700">Kunci kamar telah dikembalikan ke admin.</span>
                                        </label>
                                        <label className="flex items-start gap-2.5 p-3 border border-slate-200 rounded-xl cursor-pointer">
                                            <input type="checkbox" name="outChecklistInventory" className="mt-0.5" />
                                            <span className="text-sm text-slate-700">Inventaris kamar sudah diverifikasi dalam kondisi baik.</span>
                                        </label>
                                        <label className="flex items-start gap-2.5 p-3 border border-slate-200 rounded-xl cursor-pointer">
                                            <input type="checkbox" name="outChecklistFinance" className="mt-0.5" />
                                            <span className="text-sm text-slate-700">Kewajiban administrasi dan denda sudah diselesaikan.</span>
                                        </label>
                                    </fieldset>
        
                                    <div className="flex items-center justify-end gap-2">
                                        <button type="reset" className="px-4 py-2.5 text-sm font-semibold border border-slate-200 text-slate-600 rounded-xl hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500">
                                            Reset Form
                                        </button>
                                        <button type="submit" className="px-4 py-2.5 text-sm font-semibold bg-rose-600 text-white rounded-xl hover:bg-rose-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500">
                                            Proses Checkout
                                        </button>
                                    </div>
                                </form>
                            </section>
    </>
  );
}

function PenghuniFooter() {
  return (
    <>
        <footer className="py-8 text-center">
                                <p className="text-xs text-slate-400">© 2026 SiMARA — Sistem Informasi Manajemen Asrama</p>
                            </footer>
    </>
  );
}

export default function PenghuniAsramaPageClient({
  initialTab,
}: Readonly<{
  initialTab: PenghuniTab;
}>) {
  const router = useRouter();
  const activeTab = initialTab;

  const handleTabChange = (tab: PenghuniTab) => {
    router.push(`?tab=${tab}`);
  };

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
          <button id="tab-daftar" type="button" role="tab" aria-selected={activeTab === "daftar"} aria-controls="section-daftar" tabIndex={activeTab === "daftar" ? 0 : -1} data-section="daftar" onClick={() => handleTabChange("daftar")} className={activeTab === "daftar" ? activeTabClass : inactiveTabClass}>
            <i className="fa-solid fa-table-list mr-2" aria-hidden="true"></i>
            Daftar Penghuni
          </button>
          <button id="tab-detail" type="button" role="tab" aria-selected={activeTab === "detail"} aria-controls="section-detail" tabIndex={activeTab === "detail" ? 0 : -1} data-section="detail" onClick={() => handleTabChange("detail")} className={activeTab === "detail" ? activeTabClass : inactiveTabClass}>
            <i className="fa-solid fa-address-card mr-2" aria-hidden="true"></i>
            Detail Penghuni
          </button>
          <button id="tab-penempatan" type="button" role="tab" aria-selected={activeTab === "penempatan"} aria-controls="section-penempatan" tabIndex={activeTab === "penempatan" ? 0 : -1} data-section="penempatan" onClick={() => handleTabChange("penempatan")} className={activeTab === "penempatan" ? activeTabClass : inactiveTabClass}>
            <i className="fa-solid fa-bed mr-2" aria-hidden="true"></i>
            Penempatan Kamar
          </button>
          <button id="tab-mutasi" type="button" role="tab" aria-selected={activeTab === "mutasi"} aria-controls="section-mutasi" tabIndex={activeTab === "mutasi" ? 0 : -1} data-section="mutasi" onClick={() => handleTabChange("mutasi")} className={activeTab === "mutasi" ? activeTabClass : inactiveTabClass}>
            <i className="fa-solid fa-right-left mr-2" aria-hidden="true"></i>
            Mutasi Kamar
          </button>
          <button id="tab-keluar" type="button" role="tab" aria-selected={activeTab === "keluar"} aria-controls="section-keluar" tabIndex={activeTab === "keluar" ? 0 : -1} data-section="keluar" onClick={() => handleTabChange("keluar")} className={activeTab === "keluar" ? activeTabClass : inactiveTabClass}>
            <i className="fa-solid fa-door-open mr-2" aria-hidden="true"></i>
            Keluar Asrama
          </button>
        </div>
      </section>

      {activeTab === "daftar" && <DaftarPenghuniView onOpenTab={handleTabChange} onOpenDetail={() => handleTabChange("detail")} />}
      {activeTab === "detail" && <DetailPenghuniView />}
      {activeTab === "penempatan" && <PenempatanKamarView />}
      {activeTab === "mutasi" && <MutasiKamarView />}
      {activeTab === "keluar" && <KeluarAsramaView />}
      <PenghuniFooter />
    </>
  );
}
