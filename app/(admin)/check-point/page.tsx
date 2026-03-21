"use client";

import { useEffect, useState } from "react";

type CheckPointTab = "jadwal" | "input" | "hasil" | "pelanggaran";

const activeTabClass =
  "section-tab-btn px-5 py-4 text-sm font-semibold border-b-2 border-indigo-600 text-indigo-600 bg-indigo-50/70 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500";
const inactiveTabClass =
  "section-tab-btn px-5 py-4 text-sm font-medium border-b-2 border-transparent text-slate-500 hover:text-slate-700 hover:bg-slate-50 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500";

function JadwalCheckPointView({ onOpenTab, setModalOpen }: { onOpenTab: (tab: CheckPointTab) => void; setModalOpen: (open: boolean) => void }) {
  return (
    <>
        <section id="section-jadwal" className="tab-panel space-y-5" role="tabpanel" tabIndex={0} aria-labelledby="tab-jadwal judulJadwal">
                                <div className="flex items-start justify-between gap-3 flex-wrap">
                                    <div>
                                        <h2 id="judulJadwal" className="text-xl font-bold text-slate-900 scroll-mt-24 [text-wrap:balance]">Jadwal Check Point</h2>
                                        <p className="text-sm text-slate-500 mt-1">Kelola agenda absensi asrama berdasarkan sesi, blok gedung, dan petugas jaga.</p>
                                    </div>
                                    <button
                                        type="button"
                                        data-section="input"
                                        className="open-section-btn inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                                     onClick={() => onOpenTab("input")}>
                                        <i className="fa-solid fa-play" aria-hidden="true"></i>
                                        Mulai Input Kehadiran
                                    </button>
                                </div>
        
                                <div id="view-jadwal" className="space-y-5">
                                    <article className="bg-gradient-to-r from-indigo-600 via-indigo-500 to-violet-600 rounded-2xl p-5 sm:p-6 text-white shadow-lg shadow-indigo-200/70">
                                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                                            <div>
                                                <p className="text-[11px] uppercase tracking-[0.18em] text-indigo-100 font-semibold">Jadwal Mingguan Wajib</p>
                                                <h3 className="text-lg sm:text-xl font-bold mt-1">Agenda Worship &amp; Sabat Check Point</h3>
                                                <p className="text-sm text-indigo-100 mt-2 max-w-2xl">
                                                    Gunakan tampilan ini untuk memantau semua sesi ibadah harian dan kegiatan khusus mingguan dalam satu panel yang ringkas.
                                                </p>
                                            </div>
                                            <div className="grid grid-cols-3 gap-2.5 text-center min-w-[220px]">
                                                <div className="rounded-xl bg-white/15 border border-white/20 px-3 py-2">
                                                    <p className="text-[10px] uppercase tracking-wide text-indigo-100">Hari Aktif</p>
                                                    <p className="text-lg font-bold [font-variant-numeric:tabular-nums]">7</p>
                                                </div>
                                                <div className="rounded-xl bg-white/15 border border-white/20 px-3 py-2">
                                                    <p className="text-[10px] uppercase tracking-wide text-indigo-100">Event Harian</p>
                                                    <p className="text-lg font-bold [font-variant-numeric:tabular-nums]">14</p>
                                                </div>
                                                <div className="rounded-xl bg-white/15 border border-white/20 px-3 py-2">
                                                    <p className="text-[10px] uppercase tracking-wide text-indigo-100">Event Khusus</p>
                                                    <p className="text-lg font-bold [font-variant-numeric:tabular-nums]">4</p>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
        
                                    <article className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
                                        <header className="px-5 py-4 border-b border-slate-100 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
                                            <div>
                                                <h3 className="text-sm font-bold text-slate-900">Grid Jadwal Check Point per Hari</h3>
                                                <p className="text-xs text-slate-500 mt-1">Semua jadwal bersifat statis sesuai ketentuan ibadah rutin asrama.</p>
                                            </div>
                                            <div className="flex flex-col items-start lg:items-end gap-2.5">
                                                <button
                                                    id="openScheduleModalBtn"
                                                    type="button"
                                                    className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold bg-indigo-600 text-white rounded-xl shadow-sm shadow-indigo-200 hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                                                 onClick={() => setModalOpen(true)}>
                                                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                                        <path d="M12 20h9" />
                                                        <path d="M16.5 3.5a2.12 2.12 0 1 1 3 3L7 19l-4 1 1-4 12.5-12.5z" />
                                                    </svg>
                                                    Update Jadwal
                                                </button>
                                                <div className="flex flex-wrap items-center gap-2 text-[11px] font-semibold">
                                                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-blue-200 bg-blue-100 text-blue-700">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                                                        Ibadah Harian Rutin
                                                    </span>
                                                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-fuchsia-200 bg-fuchsia-100 text-fuchsia-700">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-fuchsia-500"></span>
                                                        Ibadah Rabu Malam
                                                    </span>
                                                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-violet-200 bg-violet-100 text-violet-700">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-violet-500"></span>
                                                        Vesper &amp; Sabat
                                                    </span>
                                                </div>
                                            </div>
                                        </header>
        
                                        <div className="p-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-7 gap-4">
                                            <article className="rounded-2xl border border-slate-200 bg-slate-50/80 p-4 space-y-3">
                                                <h4 className="text-sm font-bold text-slate-900">Senin</h4>
                                                <ul className="space-y-2.5 text-xs">
                                                    <li className="rounded-xl border border-slate-100 bg-white p-2.5">
                                                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold border border-blue-200 bg-blue-100 text-blue-700">Harian</span>
                                                        <p className="mt-1 font-semibold text-slate-800">Worship Pagi</p>
                                                        <p className="text-slate-500 [font-variant-numeric:tabular-nums]">05:00</p>
                                                    </li>
                                                    <li className="rounded-xl border border-slate-100 bg-white p-2.5">
                                                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold border border-blue-200 bg-blue-100 text-blue-700">Harian</span>
                                                        <p className="mt-1 font-semibold text-slate-800">Worship Malam</p>
                                                        <p className="text-slate-500 [font-variant-numeric:tabular-nums]">19:00</p>
                                                    </li>
                                                    <li className="rounded-xl border border-slate-100 bg-white p-2.5">
                                                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold border border-blue-200 bg-blue-100 text-blue-700">Harian</span>
                                                        <p className="mt-1 font-semibold text-slate-800">Check room</p>
                                                        <p className="text-slate-500 [font-variant-numeric:tabular-nums]">21:00</p>
                                                    </li>
                                                </ul>
                                            </article>
        
                                            <article className="rounded-2xl border border-slate-200 bg-slate-50/80 p-4 space-y-3">
                                                <h4 className="text-sm font-bold text-slate-900">Selasa</h4>
                                                <ul className="space-y-2.5 text-xs">
                                                    <li className="rounded-xl border border-slate-100 bg-white p-2.5">
                                                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold border border-blue-200 bg-blue-100 text-blue-700">Harian</span>
                                                        <p className="mt-1 font-semibold text-slate-800">Worship Pagi</p>
                                                        <p className="text-slate-500 [font-variant-numeric:tabular-nums]">05:00</p>
                                                    </li>
                                                    <li className="rounded-xl border border-slate-100 bg-white p-2.5">
                                                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold border border-blue-200 bg-blue-100 text-blue-700">Harian</span>
                                                        <p className="mt-1 font-semibold text-slate-800">Worship Malam</p>
                                                        <p className="text-slate-500 [font-variant-numeric:tabular-nums]">19:00</p>
                                                    </li>
                                                    <li className="rounded-xl border border-slate-100 bg-white p-2.5">
                                                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold border border-blue-200 bg-blue-100 text-blue-700">Harian</span>
                                                        <p className="mt-1 font-semibold text-slate-800">Check room</p>
                                                        <p className="text-slate-500 [font-variant-numeric:tabular-nums]">21:00</p>
                                                    </li>
                                                </ul>
                                            </article>
        
                                            <article className="rounded-2xl border border-indigo-200 bg-indigo-50/80 p-4 space-y-3">
                                                <h4 className="text-sm font-bold text-slate-900">Rabu</h4>
                                                <ul className="space-y-2.5 text-xs">
                                                    <li className="rounded-xl border border-slate-100 bg-white p-2.5">
                                                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold border border-blue-200 bg-blue-100 text-blue-700">Harian</span>
                                                        <p className="mt-1 font-semibold text-slate-800">Worship Pagi</p>
                                                        <p className="text-slate-500 [font-variant-numeric:tabular-nums]">05:00</p>
                                                    </li>
                                                    <li className="rounded-xl border border-fuchsia-200 bg-fuchsia-50 p-2.5">
                                                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold border border-fuchsia-200 bg-fuchsia-100 text-fuchsia-700">Khusus</span>
                                                        <p className="mt-1 font-semibold text-slate-800">Ibadah Rabu Malam</p>
                                                        <p className="text-slate-500 [font-variant-numeric:tabular-nums]">19:00</p>
                                                    </li>
                                                    <li className="rounded-xl border border-slate-100 bg-white p-2.5">
                                                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold border border-blue-200 bg-blue-100 text-blue-700">Harian</span>
                                                        <p className="mt-1 font-semibold text-slate-800">Check room</p>
                                                        <p className="text-slate-500 [font-variant-numeric:tabular-nums]">21:00</p>
                                                    </li>
                                                </ul>
                                            </article>
        
                                            <article className="rounded-2xl border border-slate-200 bg-slate-50/80 p-4 space-y-3">
                                                <h4 className="text-sm font-bold text-slate-900">Kamis</h4>
                                                <ul className="space-y-2.5 text-xs">
                                                    <li className="rounded-xl border border-slate-100 bg-white p-2.5">
                                                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold border border-blue-200 bg-blue-100 text-blue-700">Harian</span>
                                                        <p className="mt-1 font-semibold text-slate-800">Worship Pagi</p>
                                                        <p className="text-slate-500 [font-variant-numeric:tabular-nums]">05:00</p>
                                                    </li>
                                                    <li className="rounded-xl border border-slate-100 bg-white p-2.5">
                                                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold border border-blue-200 bg-blue-100 text-blue-700">Harian</span>
                                                        <p className="mt-1 font-semibold text-slate-800">Worship Malam</p>
                                                        <p className="text-slate-500 [font-variant-numeric:tabular-nums]">19:00</p>
                                                    </li>
                                                    <li className="rounded-xl border border-slate-100 bg-white p-2.5">
                                                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold border border-blue-200 bg-blue-100 text-blue-700">Harian</span>
                                                        <p className="mt-1 font-semibold text-slate-800">Check room</p>
                                                        <p className="text-slate-500 [font-variant-numeric:tabular-nums]">21:00</p>
                                                    </li>
                                                </ul>
                                            </article>
        
                                            <article className="rounded-2xl border border-violet-200 bg-violet-50/70 p-4 space-y-3">
                                                <h4 className="text-sm font-bold text-slate-900">Jumat</h4>
                                                <ul className="space-y-2.5 text-xs">
                                                    <li className="rounded-xl border border-slate-100 bg-white p-2.5">
                                                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold border border-blue-200 bg-blue-100 text-blue-700">Harian</span>
                                                        <p className="mt-1 font-semibold text-slate-800">Worship Pagi</p>
                                                        <p className="text-slate-500 [font-variant-numeric:tabular-nums]">05:00</p>
                                                    </li>
                                                    <li className="rounded-xl border border-violet-200 bg-violet-50 p-2.5">
                                                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold border border-violet-200 bg-violet-100 text-violet-700">Vesper</span>
                                                        <p className="mt-1 font-semibold text-slate-800">Vesper</p>
                                                        <p className="text-slate-500 [font-variant-numeric:tabular-nums]">19:00</p>
                                                    </li>
                                                    <li className="rounded-xl border border-slate-100 bg-white p-2.5">
                                                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold border border-blue-200 bg-blue-100 text-blue-700">Harian</span>
                                                        <p className="mt-1 font-semibold text-slate-800">Check room</p>
                                                        <p className="text-slate-500 [font-variant-numeric:tabular-nums]">21:00</p>
                                                    </li>
                                                </ul>
                                            </article>
        
                                            <article className="rounded-2xl border border-violet-300 bg-violet-50 p-4 space-y-3 ring-1 ring-violet-200/70">
                                                <h4 className="text-sm font-bold text-slate-900">Sabtu (Sabat)</h4>
                                                <ul className="space-y-2.5 text-xs">
                                                    <li className="rounded-xl border border-slate-100 bg-white p-2.5">
                                                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold border border-blue-200 bg-blue-100 text-blue-700">Harian</span>
                                                        <p className="mt-1 font-semibold text-slate-800">Worship Pagi</p>
                                                        <p className="text-slate-500 [font-variant-numeric:tabular-nums]">05:00</p>
                                                    </li>
                                                    <li className="rounded-xl border border-violet-200 bg-violet-50 p-2.5">
                                                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold border border-violet-200 bg-violet-100 text-violet-700">Sabat</span>
                                                        <p className="mt-1 font-semibold text-slate-800">Sabat Pagi</p>
                                                        <p className="text-slate-500 [font-variant-numeric:tabular-nums]">09:00 - 11:00</p>
                                                    </li>
                                                    <li className="rounded-xl border border-violet-200 bg-violet-50 p-2.5">
                                                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold border border-violet-200 bg-violet-100 text-violet-700">Sabat</span>
                                                        <p className="mt-1 font-semibold text-slate-800">Sabat Sore</p>
                                                        <p className="text-slate-500 [font-variant-numeric:tabular-nums]">15:00</p>
                                                    </li>
                                                    <li className="rounded-xl border border-slate-100 bg-white p-2.5">
                                                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold border border-blue-200 bg-blue-100 text-blue-700">Harian</span>
                                                        <p className="mt-1 font-semibold text-slate-800">Check room</p>
                                                        <p className="text-slate-500 [font-variant-numeric:tabular-nums]">21:00</p>
                                                    </li>
                                                </ul>
                                            </article>
        
                                            <article className="rounded-2xl border border-slate-200 bg-slate-50/80 p-4 space-y-3">
                                                <h4 className="text-sm font-bold text-slate-900">Minggu</h4>
                                                <ul className="space-y-2.5 text-xs">
                                                    <li className="rounded-xl border border-slate-100 bg-white p-2.5">
                                                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold border border-blue-200 bg-blue-100 text-blue-700">Harian</span>
                                                        <p className="mt-1 font-semibold text-slate-800">Worship Pagi</p>
                                                        <p className="text-slate-500 [font-variant-numeric:tabular-nums]">05:00</p>
                                                    </li>
                                                    <li className="rounded-xl border border-slate-100 bg-white p-2.5">
                                                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold border border-blue-200 bg-blue-100 text-blue-700">Harian</span>
                                                        <p className="mt-1 font-semibold text-slate-800">Worship Malam</p>
                                                        <p className="text-slate-500 [font-variant-numeric:tabular-nums]">19:00</p>
                                                    </li>
                                                    <li className="rounded-xl border border-slate-100 bg-white p-2.5">
                                                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold border border-blue-200 bg-blue-100 text-blue-700">Harian</span>
                                                        <p className="mt-1 font-semibold text-slate-800">Check room</p>
                                                        <p className="text-slate-500 [font-variant-numeric:tabular-nums]">21:00</p>
                                                    </li>
                                                </ul>
                                            </article>
                                        </div>
                                    </article>
                                </div>
        </section>
    </>
  );
}

function ScheduleModal({ isModalOpen, setModalOpen }: { isModalOpen: boolean; setModalOpen: (open: boolean) => void }) {
  return (
    <>
        <div id="scheduleModal" className={isModalOpen ? "fixed inset-0 z-40" : "fixed inset-0 z-40 hidden"} aria-hidden={isModalOpen ? "false" : "true"}>
                                    <div id="scheduleModalBackdrop" className="absolute inset-0 bg-slate-900/55 backdrop-blur-[1px]" onClick={() => setModalOpen(false)}></div>
                                    <div className="relative min-h-full flex items-center justify-center p-4 sm:p-6">
                                        <div role="dialog" aria-modal="true" aria-labelledby="scheduleModalTitle" className="w-full max-w-lg bg-white border border-slate-200 rounded-2xl shadow-2xl shadow-slate-900/20 overflow-hidden">
                                            <header className="px-5 py-4 border-b border-slate-100 flex items-center justify-between gap-3">
                                                <div>
                                                    <h3 id="scheduleModalTitle" className="text-base font-bold text-slate-900">Update Jadwal Check Point</h3>
                                                    <p className="text-xs text-slate-500 mt-1">Atur hari, waktu, dan kategori ibadah/acara.</p>
                                                </div>
                                                <button id="closeScheduleModalBtn" type="button" className="p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500" aria-label="Tutup modal update jadwal" onClick={() => setModalOpen(false)}>
                                                    <i className="fa-solid fa-xmark" aria-hidden="true"></i>
                                                </button>
                                            </header>
        
                                            <form id="scheduleUpdateForm" className="p-5 space-y-4" autoComplete="off" onSubmit={(event) => { event.preventDefault(); setModalOpen(false); }}>
                                                <div className="space-y-1.5">
                                                    <label htmlFor="scheduleDay" className="text-xs font-semibold text-slate-700">Hari</label>
                                                    <select id="scheduleDay" name="scheduleDay" className="w-full px-3.5 py-3 text-sm border border-slate-200 rounded-xl bg-white text-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500">
                                                        <option value="senin">Senin</option>
                                                        <option value="selasa">Selasa</option>
                                                        <option value="rabu">Rabu</option>
                                                        <option value="kamis">Kamis</option>
                                                        <option value="jumat">Jumat</option>
                                                        <option value="sabtu">Sabtu</option>
                                                        <option value="minggu">Minggu</option>
                                                    </select>
                                                </div>
        
                                                <div className="space-y-1.5">
                                                    <label htmlFor="scheduleTime" className="text-xs font-semibold text-slate-700">Waktu</label>
                                                    <input id="scheduleTime" name="scheduleTime" type="time" className="w-full px-3.5 py-3 text-sm border border-slate-200 rounded-xl bg-white text-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500" />
                                                </div>
        
                                                <div className="space-y-1.5">
                                                    <label htmlFor="scheduleCategory" className="text-xs font-semibold text-slate-700">Kategori Ibadah/Acara</label>
                                                    <select id="scheduleCategory" name="scheduleCategory" className="w-full px-3.5 py-3 text-sm border border-slate-200 rounded-xl bg-white text-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500">
                                                        <option value="ibadah-harian">Ibadah Harian Rutin</option>
                                                        <option value="rabu-malam">Ibadah Rabu Malam</option>
                                                        <option value="vesper">Vesper</option>
                                                        <option value="sabat">Sabat</option>
                                                        <option value="custom">Lainnya (Input Manual)</option>
                                                    </select>
                                                    <div id="scheduleCategoryCustomWrap" className="hidden pt-1">
                                                        <label htmlFor="scheduleCategoryCustom" className="text-xs font-semibold text-slate-700">Kategori Custom</label>
                                                        <input id="scheduleCategoryCustom" name="scheduleCategoryCustom" type="text" placeholder="Masukkan kategori ibadah/acara..." className="mt-1.5 w-full px-3.5 py-3 text-sm border border-slate-200 rounded-xl bg-white text-slate-700 placeholder-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500" />
                                                    </div>
                                                </div>
        
                                                <div className="pt-1 flex items-center justify-end gap-2.5">
                                                    <button id="cancelScheduleModalBtn" type="button" className="px-4 py-2.5 text-sm font-semibold border border-slate-200 text-slate-600 rounded-xl hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500" onClick={() => setModalOpen(false)}>Batal</button>
                                                    <button type="submit" className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500">
                                                        <i className="fa-solid fa-floppy-disk" aria-hidden="true"></i>
                                                        Simpan
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
    </>
  );
}

function InputKehadiranView() {
  return (
    <>
        <section id="section-input" className="tab-panel space-y-5" role="tabpanel" tabIndex={0} aria-labelledby="tab-input judulInput">
                                <div className="flex items-start justify-between gap-3 flex-wrap">
                                    <div>
                                        <h2 id="judulInput" className="text-xl font-bold text-slate-900 scroll-mt-24 [text-wrap:balance]">Input Kehadiran</h2>
                                        <p className="text-sm text-slate-500 mt-1">Input absensi penghuni secara cepat berdasarkan kamar dengan status hadir, alpa, sakit, atau izin.</p>
                                    </div>
                                    <button
                                        id="markAllPresentBtn"
                                        type="button"
                                        className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold border border-slate-200 text-slate-600 rounded-xl hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                                    >
                                        <i className="fa-solid fa-check-double" aria-hidden="true"></i>
                                        Tandai Semua Hadir
                                    </button>
                                </div>
        
                                <form className="space-y-5" autoComplete="off">
                                    <article className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6">
                                        <fieldset className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                            <div className="space-y-1">
                                                <label htmlFor="inputSession" className="text-xs font-semibold text-slate-700">Sesi Check Point</label>
                                                <select id="inputSession" name="inputSession" autoComplete="off" className="w-full px-3.5 py-3 text-sm border border-slate-200 rounded-xl bg-white text-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500">
                                                    <option value="">Pilih sesi</option>
                                                    <option value="worship-pagi">Worship Pagi (05:00)</option>
                                                    <option value="worship-malam">Worship Malam (19:00)</option>
                                                    <option value="check-room">Check room (21:00)</option>
                                                    <option value="ibadah-rabu">Ibadah Rabu Malam (19:00)</option>
                                                    <option value="vesper">Vesper (19:00)</option>
                                                    <option value="sabat-pagi">Sabat Pagi (09:00 - 11:00)</option>
                                                    <option value="sabat-sore">Sabat Sore (15:00)</option>
                                                </select>
                                            </div>
                                            <div className="space-y-1">
                                                <label htmlFor="inputDate" className="text-xs font-semibold text-slate-700">Tanggal</label>
                                                <input id="inputDate" name="inputDate" type="date" autoComplete="off" className="w-full px-3.5 py-3 text-sm border border-slate-200 rounded-xl bg-white text-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500" />
                                            </div>
                                            <div className="space-y-1">
                                                <label htmlFor="inputOfficer" className="text-xs font-semibold text-slate-700">Monitor</label>
                                                <input id="inputOfficer" name="inputOfficer" type="text" autoComplete="off" placeholder="Nama monitor…" className="w-full px-3.5 py-3 text-sm border border-slate-200 rounded-xl bg-white placeholder-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500" />
                                            </div>
                                        </fieldset>
                                    </article>
        
                                    <article className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-4">
                                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3">
                                            <div>
                                                <h3 className="text-sm font-bold text-slate-900">Filter Area Asrama</h3>
                                                <p className="text-xs text-slate-500 mt-1">Pilih area patroli untuk menampilkan daftar kamar dan penghuni secara instan.</p>
                                            </div>
                                            <div className="flex items-center gap-2.5">
                                                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Area Aktif</span>
                                                <span id="activeAreaLabel" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold border border-indigo-200 bg-indigo-50 text-indigo-700">Lantai 1 - Hall Kiri</span>
                                            </div>
                                        </div>
        
                                        <div className="flex flex-wrap gap-2.5">
                                            <button
                                                type="button"
                                                data-area="l1-kiri"
                                                data-label="Lantai 1 - Hall Kiri"
                                                aria-pressed="true"
                                                className="area-filter-btn inline-flex items-center justify-center px-4 py-2.5 rounded-xl text-sm font-semibold border border-indigo-600 bg-indigo-600 text-white shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                                            >
                                                Lantai 1 - Hall Kiri
                                            </button>
                                            <button
                                                type="button"
                                                data-area="l1-kanan"
                                                data-label="Lantai 1 - Hall Kanan"
                                                aria-pressed="false"
                                                className="area-filter-btn inline-flex items-center justify-center px-4 py-2.5 rounded-xl text-sm font-semibold border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                                            >
                                                Lantai 1 - Hall Kanan
                                            </button>
                                            <button
                                                type="button"
                                                data-area="l2-kiri"
                                                data-label="Lantai 2 - Hall Kiri"
                                                aria-pressed="false"
                                                className="area-filter-btn inline-flex items-center justify-center px-4 py-2.5 rounded-xl text-sm font-semibold border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                                            >
                                                Lantai 2 - Hall Kiri
                                            </button>
                                            <button
                                                type="button"
                                                data-area="l2-kanan"
                                                data-label="Lantai 2 - Hall Kanan"
                                                aria-pressed="false"
                                                className="area-filter-btn inline-flex items-center justify-center px-4 py-2.5 rounded-xl text-sm font-semibold border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                                            >
                                                Lantai 2 - Hall Kanan
                                            </button>
                                        </div>
        
                                        <div className="max-w-sm">
                                            <label htmlFor="areaQuickSelect" className="text-xs font-semibold text-slate-700">Pilih area cepat (dropdown)</label>
                                            <select id="areaQuickSelect" autoComplete="off" className="mt-1.5 w-full px-3.5 py-3 text-sm border border-slate-200 rounded-xl bg-white text-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500">
                                                <option value="l1-kiri">Lantai 1 - Hall Kiri</option>
                                                <option value="l1-kanan">Lantai 1 - Hall Kanan</option>
                                                <option value="l2-kiri">Lantai 2 - Hall Kiri</option>
                                                <option value="l2-kanan">Lantai 2 - Hall Kanan</option>
                                            </select>
                                        </div>
                                    </article>
        
                                    <div id="inputAreaPanels" className="space-y-4">
                                        <section data-area-panel="l1-kiri" className="area-panel bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-4">
                                            <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                                                <h3 className="text-sm font-bold text-slate-900">Lantai 1 - Hall Kiri</h3>
                                                <span className="text-xs text-slate-500">2 kamar • 4 penghuni</span>
                                            </header>
                                            <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
                                                <article className="border border-slate-200 rounded-2xl overflow-hidden">
                                                    <header className="px-4 py-3 border-b border-slate-100 bg-slate-50 flex items-center justify-between">
                                                        <h4 className="text-sm font-bold text-slate-900">Kamar 101</h4>
                                                        <span className="text-xs text-slate-500">2 penghuni</span>
                                                    </header>
                                                    <div className="p-4 space-y-4">
                                                        <div className="rounded-xl border border-slate-200 p-3.5">
                                                            <p className="text-sm font-semibold text-slate-800">Andi Pratama</p>
                                                            <p className="text-[11px] text-slate-500">2024101001</p>
                                                            <div className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-2">
                                                                <label className="cursor-pointer">
                                                                    <input id="status-l1kiri-101-andi-hadir" type="radio" name="status_l1kiri_101_andi" value="hadir" className="sr-only peer" defaultChecked />
                                                                    <span className="h-10 inline-flex items-center justify-center w-full rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 peer-checked:border-emerald-500 peer-checked:bg-emerald-500 peer-checked:text-white">Hadir</span>
                                                                </label>
                                                                <label className="cursor-pointer">
                                                                    <input id="status-l1kiri-101-andi-alpa" type="radio" name="status_l1kiri_101_andi" value="alpa" className="sr-only peer" />
                                                                    <span className="h-10 inline-flex items-center justify-center w-full rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 peer-checked:border-rose-500 peer-checked:bg-rose-500 peer-checked:text-white">Alpa</span>
                                                                </label>
                                                                <label className="cursor-pointer">
                                                                    <input id="status-l1kiri-101-andi-sakit" type="radio" name="status_l1kiri_101_andi" value="sakit" className="sr-only peer" />
                                                                    <span className="h-10 inline-flex items-center justify-center w-full rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 peer-checked:border-amber-500 peer-checked:bg-amber-500 peer-checked:text-white">Sakit</span>
                                                                </label>
                                                                <label className="cursor-pointer">
                                                                    <input id="status-l1kiri-101-andi-izin" type="radio" name="status_l1kiri_101_andi" value="izin" className="sr-only peer" />
                                                                    <span className="h-10 inline-flex items-center justify-center w-full rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 peer-checked:border-sky-500 peer-checked:bg-sky-500 peer-checked:text-white">Izin</span>
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div className="rounded-xl border border-slate-200 p-3.5">
                                                            <p className="text-sm font-semibold text-slate-800">Raka Saputra</p>
                                                            <p className="text-[11px] text-slate-500">2024101002</p>
                                                            <div className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-2">
                                                                <label className="cursor-pointer"><input type="radio" name="status_l1kiri_101_raka" value="hadir" className="sr-only peer" defaultChecked /><span className="h-10 inline-flex items-center justify-center w-full rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 peer-checked:border-emerald-500 peer-checked:bg-emerald-500 peer-checked:text-white">Hadir</span></label>
                                                                <label className="cursor-pointer"><input type="radio" name="status_l1kiri_101_raka" value="alpa" className="sr-only peer" /><span className="h-10 inline-flex items-center justify-center w-full rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 peer-checked:border-rose-500 peer-checked:bg-rose-500 peer-checked:text-white">Alpa</span></label>
                                                                <label className="cursor-pointer"><input type="radio" name="status_l1kiri_101_raka" value="sakit" className="sr-only peer" /><span className="h-10 inline-flex items-center justify-center w-full rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 peer-checked:border-amber-500 peer-checked:bg-amber-500 peer-checked:text-white">Sakit</span></label>
                                                                <label className="cursor-pointer"><input type="radio" name="status_l1kiri_101_raka" value="izin" className="sr-only peer" /><span className="h-10 inline-flex items-center justify-center w-full rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 peer-checked:border-sky-500 peer-checked:bg-sky-500 peer-checked:text-white">Izin</span></label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </article>
        
                                                <article className="border border-slate-200 rounded-2xl overflow-hidden">
                                                    <header className="px-4 py-3 border-b border-slate-100 bg-slate-50 flex items-center justify-between">
                                                        <h4 className="text-sm font-bold text-slate-900">Kamar 102</h4>
                                                        <span className="text-xs text-slate-500">2 penghuni</span>
                                                    </header>
                                                    <div className="p-4 space-y-4">
                                                        <div className="rounded-xl border border-slate-200 p-3.5">
                                                            <p className="text-sm font-semibold text-slate-800">Ilham Fauzi</p>
                                                            <p className="text-[11px] text-slate-500">2024101003</p>
                                                            <div className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-2">
                                                                <label className="cursor-pointer"><input type="radio" name="status_l1kiri_102_ilham" value="hadir" className="sr-only peer" defaultChecked /><span className="h-10 inline-flex items-center justify-center w-full rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 peer-checked:border-emerald-500 peer-checked:bg-emerald-500 peer-checked:text-white">Hadir</span></label>
                                                                <label className="cursor-pointer"><input type="radio" name="status_l1kiri_102_ilham" value="alpa" className="sr-only peer" /><span className="h-10 inline-flex items-center justify-center w-full rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 peer-checked:border-rose-500 peer-checked:bg-rose-500 peer-checked:text-white">Alpa</span></label>
                                                                <label className="cursor-pointer"><input type="radio" name="status_l1kiri_102_ilham" value="sakit" className="sr-only peer" /><span className="h-10 inline-flex items-center justify-center w-full rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 peer-checked:border-amber-500 peer-checked:bg-amber-500 peer-checked:text-white">Sakit</span></label>
                                                                <label className="cursor-pointer"><input type="radio" name="status_l1kiri_102_ilham" value="izin" className="sr-only peer" /><span className="h-10 inline-flex items-center justify-center w-full rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 peer-checked:border-sky-500 peer-checked:bg-sky-500 peer-checked:text-white">Izin</span></label>
                                                            </div>
                                                        </div>
                                                        <div className="rounded-xl border border-slate-200 p-3.5">
                                                            <p className="text-sm font-semibold text-slate-800">Bima Yudhistira</p>
                                                            <p className="text-[11px] text-slate-500">2024101004</p>
                                                            <div className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-2">
                                                                <label className="cursor-pointer"><input type="radio" name="status_l1kiri_102_bima" value="hadir" className="sr-only peer" defaultChecked /><span className="h-10 inline-flex items-center justify-center w-full rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 peer-checked:border-emerald-500 peer-checked:bg-emerald-500 peer-checked:text-white">Hadir</span></label>
                                                                <label className="cursor-pointer"><input type="radio" name="status_l1kiri_102_bima" value="alpa" className="sr-only peer" /><span className="h-10 inline-flex items-center justify-center w-full rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 peer-checked:border-rose-500 peer-checked:bg-rose-500 peer-checked:text-white">Alpa</span></label>
                                                                <label className="cursor-pointer"><input type="radio" name="status_l1kiri_102_bima" value="sakit" className="sr-only peer" /><span className="h-10 inline-flex items-center justify-center w-full rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 peer-checked:border-amber-500 peer-checked:bg-amber-500 peer-checked:text-white">Sakit</span></label>
                                                                <label className="cursor-pointer"><input type="radio" name="status_l1kiri_102_bima" value="izin" className="sr-only peer" /><span className="h-10 inline-flex items-center justify-center w-full rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 peer-checked:border-sky-500 peer-checked:bg-sky-500 peer-checked:text-white">Izin</span></label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </article>
                                            </div>
                                        </section>
        
                                        <section data-area-panel="l1-kanan" className="area-panel bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-4" hidden>
                                            <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                                                <h3 className="text-sm font-bold text-slate-900">Lantai 1 - Hall Kanan</h3>
                                                <span className="text-xs text-slate-500">2 kamar • 4 penghuni</span>
                                            </header>
                                            <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
                                                <article className="border border-slate-200 rounded-2xl overflow-hidden">
                                                    <header className="px-4 py-3 border-b border-slate-100 bg-slate-50 flex items-center justify-between">
                                                        <h4 className="text-sm font-bold text-slate-900">Kamar 103</h4>
                                                        <span className="text-xs text-slate-500">2 penghuni</span>
                                                    </header>
                                                    <div className="p-4 space-y-4">
                                                        <div className="rounded-xl border border-slate-200 p-3.5">
                                                            <p className="text-sm font-semibold text-slate-800">Fajar Ramadhan</p>
                                                            <p className="text-[11px] text-slate-500">2024101005</p>
                                                            <div className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-2">
                                                                <label className="cursor-pointer"><input type="radio" name="status_l1kanan_103_fajar" value="hadir" className="sr-only peer" defaultChecked /><span className="h-10 inline-flex items-center justify-center w-full rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 peer-checked:border-emerald-500 peer-checked:bg-emerald-500 peer-checked:text-white">Hadir</span></label>
                                                                <label className="cursor-pointer"><input type="radio" name="status_l1kanan_103_fajar" value="alpa" className="sr-only peer" /><span className="h-10 inline-flex items-center justify-center w-full rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 peer-checked:border-rose-500 peer-checked:bg-rose-500 peer-checked:text-white">Alpa</span></label>
                                                                <label className="cursor-pointer"><input type="radio" name="status_l1kanan_103_fajar" value="sakit" className="sr-only peer" /><span className="h-10 inline-flex items-center justify-center w-full rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 peer-checked:border-amber-500 peer-checked:bg-amber-500 peer-checked:text-white">Sakit</span></label>
                                                                <label className="cursor-pointer"><input type="radio" name="status_l1kanan_103_fajar" value="izin" className="sr-only peer" /><span className="h-10 inline-flex items-center justify-center w-full rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 peer-checked:border-sky-500 peer-checked:bg-sky-500 peer-checked:text-white">Izin</span></label>
                                                            </div>
                                                        </div>
                                                        <div className="rounded-xl border border-slate-200 p-3.5">
                                                            <p className="text-sm font-semibold text-slate-800">Dion Pangestu</p>
                                                            <p className="text-[11px] text-slate-500">2024101006</p>
                                                            <div className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-2">
                                                                <label className="cursor-pointer"><input type="radio" name="status_l1kanan_103_dion" value="hadir" className="sr-only peer" defaultChecked /><span className="h-10 inline-flex items-center justify-center w-full rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 peer-checked:border-emerald-500 peer-checked:bg-emerald-500 peer-checked:text-white">Hadir</span></label>
                                                                <label className="cursor-pointer"><input type="radio" name="status_l1kanan_103_dion" value="alpa" className="sr-only peer" /><span className="h-10 inline-flex items-center justify-center w-full rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 peer-checked:border-rose-500 peer-checked:bg-rose-500 peer-checked:text-white">Alpa</span></label>
                                                                <label className="cursor-pointer"><input type="radio" name="status_l1kanan_103_dion" value="sakit" className="sr-only peer" /><span className="h-10 inline-flex items-center justify-center w-full rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 peer-checked:border-amber-500 peer-checked:bg-amber-500 peer-checked:text-white">Sakit</span></label>
                                                                <label className="cursor-pointer"><input type="radio" name="status_l1kanan_103_dion" value="izin" className="sr-only peer" /><span className="h-10 inline-flex items-center justify-center w-full rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 peer-checked:border-sky-500 peer-checked:bg-sky-500 peer-checked:text-white">Izin</span></label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </article>
        
                                                <article className="border border-slate-200 rounded-2xl overflow-hidden">
                                                    <header className="px-4 py-3 border-b border-slate-100 bg-slate-50 flex items-center justify-between">
                                                        <h4 className="text-sm font-bold text-slate-900">Kamar 104</h4>
                                                        <span className="text-xs text-slate-500">2 penghuni</span>
                                                    </header>
                                                    <div className="p-4 space-y-4">
                                                        <div className="rounded-xl border border-slate-200 p-3.5">
                                                            <p className="text-sm font-semibold text-slate-800">Yoga Mahendra</p>
                                                            <p className="text-[11px] text-slate-500">2024101007</p>
                                                            <div className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-2">
                                                                <label className="cursor-pointer"><input type="radio" name="status_l1kanan_104_yoga" value="hadir" className="sr-only peer" defaultChecked /><span className="h-10 inline-flex items-center justify-center w-full rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 peer-checked:border-emerald-500 peer-checked:bg-emerald-500 peer-checked:text-white">Hadir</span></label>
                                                                <label className="cursor-pointer"><input type="radio" name="status_l1kanan_104_yoga" value="alpa" className="sr-only peer" /><span className="h-10 inline-flex items-center justify-center w-full rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 peer-checked:border-rose-500 peer-checked:bg-rose-500 peer-checked:text-white">Alpa</span></label>
                                                                <label className="cursor-pointer"><input type="radio" name="status_l1kanan_104_yoga" value="sakit" className="sr-only peer" /><span className="h-10 inline-flex items-center justify-center w-full rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 peer-checked:border-amber-500 peer-checked:bg-amber-500 peer-checked:text-white">Sakit</span></label>
                                                                <label className="cursor-pointer"><input type="radio" name="status_l1kanan_104_yoga" value="izin" className="sr-only peer" /><span className="h-10 inline-flex items-center justify-center w-full rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 peer-checked:border-sky-500 peer-checked:bg-sky-500 peer-checked:text-white">Izin</span></label>
                                                            </div>
                                                        </div>
                                                        <div className="rounded-xl border border-slate-200 p-3.5">
                                                            <p className="text-sm font-semibold text-slate-800">Bagus Wibowo</p>
                                                            <p className="text-[11px] text-slate-500">2024101008</p>
                                                            <div className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-2">
                                                                <label className="cursor-pointer"><input type="radio" name="status_l1kanan_104_bagus" value="hadir" className="sr-only peer" defaultChecked /><span className="h-10 inline-flex items-center justify-center w-full rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 peer-checked:border-emerald-500 peer-checked:bg-emerald-500 peer-checked:text-white">Hadir</span></label>
                                                                <label className="cursor-pointer"><input type="radio" name="status_l1kanan_104_bagus" value="alpa" className="sr-only peer" /><span className="h-10 inline-flex items-center justify-center w-full rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 peer-checked:border-rose-500 peer-checked:bg-rose-500 peer-checked:text-white">Alpa</span></label>
                                                                <label className="cursor-pointer"><input type="radio" name="status_l1kanan_104_bagus" value="sakit" className="sr-only peer" /><span className="h-10 inline-flex items-center justify-center w-full rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 peer-checked:border-amber-500 peer-checked:bg-amber-500 peer-checked:text-white">Sakit</span></label>
                                                                <label className="cursor-pointer"><input type="radio" name="status_l1kanan_104_bagus" value="izin" className="sr-only peer" /><span className="h-10 inline-flex items-center justify-center w-full rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 peer-checked:border-sky-500 peer-checked:bg-sky-500 peer-checked:text-white">Izin</span></label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </article>
                                            </div>
                                        </section>
        
                                        <section data-area-panel="l2-kiri" className="area-panel bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-4" hidden>
                                            <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                                                <h3 className="text-sm font-bold text-slate-900">Lantai 2 - Hall Kiri</h3>
                                                <span className="text-xs text-slate-500">2 kamar • 4 penghuni</span>
                                            </header>
                                            <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
                                                <article className="border border-slate-200 rounded-2xl overflow-hidden">
                                                    <header className="px-4 py-3 border-b border-slate-100 bg-slate-50 flex items-center justify-between">
                                                        <h4 className="text-sm font-bold text-slate-900">Kamar 201</h4>
                                                        <span className="text-xs text-slate-500">2 penghuni</span>
                                                    </header>
                                                    <div className="p-4 space-y-4">
                                                        <div className="rounded-xl border border-slate-200 p-3.5">
                                                            <p className="text-sm font-semibold text-slate-800">Sinta Maharani</p>
                                                            <p className="text-[11px] text-slate-500">2024202001</p>
                                                            <div className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-2">
                                                                <label className="cursor-pointer"><input type="radio" name="status_l2kiri_201_sinta" value="hadir" className="sr-only peer" defaultChecked /><span className="h-10 inline-flex items-center justify-center w-full rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 peer-checked:border-emerald-500 peer-checked:bg-emerald-500 peer-checked:text-white">Hadir</span></label>
                                                                <label className="cursor-pointer"><input type="radio" name="status_l2kiri_201_sinta" value="alpa" className="sr-only peer" /><span className="h-10 inline-flex items-center justify-center w-full rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 peer-checked:border-rose-500 peer-checked:bg-rose-500 peer-checked:text-white">Alpa</span></label>
                                                                <label className="cursor-pointer"><input type="radio" name="status_l2kiri_201_sinta" value="sakit" className="sr-only peer" /><span className="h-10 inline-flex items-center justify-center w-full rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 peer-checked:border-amber-500 peer-checked:bg-amber-500 peer-checked:text-white">Sakit</span></label>
                                                                <label className="cursor-pointer"><input type="radio" name="status_l2kiri_201_sinta" value="izin" className="sr-only peer" /><span className="h-10 inline-flex items-center justify-center w-full rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 peer-checked:border-sky-500 peer-checked:bg-sky-500 peer-checked:text-white">Izin</span></label>
                                                            </div>
                                                        </div>
                                                        <div className="rounded-xl border border-slate-200 p-3.5">
                                                            <p className="text-sm font-semibold text-slate-800">Nabila Putri</p>
                                                            <p className="text-[11px] text-slate-500">2024202002</p>
                                                            <div className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-2">
                                                                <label className="cursor-pointer"><input type="radio" name="status_l2kiri_201_nabila" value="hadir" className="sr-only peer" defaultChecked /><span className="h-10 inline-flex items-center justify-center w-full rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 peer-checked:border-emerald-500 peer-checked:bg-emerald-500 peer-checked:text-white">Hadir</span></label>
                                                                <label className="cursor-pointer"><input type="radio" name="status_l2kiri_201_nabila" value="alpa" className="sr-only peer" /><span className="h-10 inline-flex items-center justify-center w-full rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 peer-checked:border-rose-500 peer-checked:bg-rose-500 peer-checked:text-white">Alpa</span></label>
                                                                <label className="cursor-pointer"><input type="radio" name="status_l2kiri_201_nabila" value="sakit" className="sr-only peer" /><span className="h-10 inline-flex items-center justify-center w-full rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 peer-checked:border-amber-500 peer-checked:bg-amber-500 peer-checked:text-white">Sakit</span></label>
                                                                <label className="cursor-pointer"><input type="radio" name="status_l2kiri_201_nabila" value="izin" className="sr-only peer" /><span className="h-10 inline-flex items-center justify-center w-full rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 peer-checked:border-sky-500 peer-checked:bg-sky-500 peer-checked:text-white">Izin</span></label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </article>
        
                                                <article className="border border-slate-200 rounded-2xl overflow-hidden">
                                                    <header className="px-4 py-3 border-b border-slate-100 bg-slate-50 flex items-center justify-between">
                                                        <h4 className="text-sm font-bold text-slate-900">Kamar 202</h4>
                                                        <span className="text-xs text-slate-500">2 penghuni</span>
                                                    </header>
                                                    <div className="p-4 space-y-4">
                                                        <div className="rounded-xl border border-slate-200 p-3.5">
                                                            <p className="text-sm font-semibold text-slate-800">Larasati Ayu</p>
                                                            <p className="text-[11px] text-slate-500">2024202003</p>
                                                            <div className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-2">
                                                                <label className="cursor-pointer"><input type="radio" name="status_l2kiri_202_laras" value="hadir" className="sr-only peer" defaultChecked /><span className="h-10 inline-flex items-center justify-center w-full rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 peer-checked:border-emerald-500 peer-checked:bg-emerald-500 peer-checked:text-white">Hadir</span></label>
                                                                <label className="cursor-pointer"><input type="radio" name="status_l2kiri_202_laras" value="alpa" className="sr-only peer" /><span className="h-10 inline-flex items-center justify-center w-full rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 peer-checked:border-rose-500 peer-checked:bg-rose-500 peer-checked:text-white">Alpa</span></label>
                                                                <label className="cursor-pointer"><input type="radio" name="status_l2kiri_202_laras" value="sakit" className="sr-only peer" /><span className="h-10 inline-flex items-center justify-center w-full rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 peer-checked:border-amber-500 peer-checked:bg-amber-500 peer-checked:text-white">Sakit</span></label>
                                                                <label className="cursor-pointer"><input type="radio" name="status_l2kiri_202_laras" value="izin" className="sr-only peer" /><span className="h-10 inline-flex items-center justify-center w-full rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 peer-checked:border-sky-500 peer-checked:bg-sky-500 peer-checked:text-white">Izin</span></label>
                                                            </div>
                                                        </div>
                                                        <div className="rounded-xl border border-slate-200 p-3.5">
                                                            <p className="text-sm font-semibold text-slate-800">Dinda Oktavia</p>
                                                            <p className="text-[11px] text-slate-500">2024202004</p>
                                                            <div className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-2">
                                                                <label className="cursor-pointer"><input type="radio" name="status_l2kiri_202_dinda" value="hadir" className="sr-only peer" defaultChecked /><span className="h-10 inline-flex items-center justify-center w-full rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 peer-checked:border-emerald-500 peer-checked:bg-emerald-500 peer-checked:text-white">Hadir</span></label>
                                                                <label className="cursor-pointer"><input type="radio" name="status_l2kiri_202_dinda" value="alpa" className="sr-only peer" /><span className="h-10 inline-flex items-center justify-center w-full rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 peer-checked:border-rose-500 peer-checked:bg-rose-500 peer-checked:text-white">Alpa</span></label>
                                                                <label className="cursor-pointer"><input type="radio" name="status_l2kiri_202_dinda" value="sakit" className="sr-only peer" /><span className="h-10 inline-flex items-center justify-center w-full rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 peer-checked:border-amber-500 peer-checked:bg-amber-500 peer-checked:text-white">Sakit</span></label>
                                                                <label className="cursor-pointer"><input type="radio" name="status_l2kiri_202_dinda" value="izin" className="sr-only peer" /><span className="h-10 inline-flex items-center justify-center w-full rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 peer-checked:border-sky-500 peer-checked:bg-sky-500 peer-checked:text-white">Izin</span></label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </article>
                                            </div>
                                        </section>
        
                                        <section data-area-panel="l2-kanan" className="area-panel bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-4" hidden>
                                            <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                                                <h3 className="text-sm font-bold text-slate-900">Lantai 2 - Hall Kanan</h3>
                                                <span className="text-xs text-slate-500">2 kamar • 4 penghuni</span>
                                            </header>
                                            <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
                                                <article className="border border-slate-200 rounded-2xl overflow-hidden">
                                                    <header className="px-4 py-3 border-b border-slate-100 bg-slate-50 flex items-center justify-between">
                                                        <h4 className="text-sm font-bold text-slate-900">Kamar 203</h4>
                                                        <span className="text-xs text-slate-500">2 penghuni</span>
                                                    </header>
                                                    <div className="p-4 space-y-4">
                                                        <div className="rounded-xl border border-slate-200 p-3.5">
                                                            <p className="text-sm font-semibold text-slate-800">Rina Septiani</p>
                                                            <p className="text-[11px] text-slate-500">2024202005</p>
                                                            <div className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-2">
                                                                <label className="cursor-pointer"><input type="radio" name="status_l2kanan_203_rina" value="hadir" className="sr-only peer" defaultChecked /><span className="h-10 inline-flex items-center justify-center w-full rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 peer-checked:border-emerald-500 peer-checked:bg-emerald-500 peer-checked:text-white">Hadir</span></label>
                                                                <label className="cursor-pointer"><input type="radio" name="status_l2kanan_203_rina" value="alpa" className="sr-only peer" /><span className="h-10 inline-flex items-center justify-center w-full rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 peer-checked:border-rose-500 peer-checked:bg-rose-500 peer-checked:text-white">Alpa</span></label>
                                                                <label className="cursor-pointer"><input type="radio" name="status_l2kanan_203_rina" value="sakit" className="sr-only peer" /><span className="h-10 inline-flex items-center justify-center w-full rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 peer-checked:border-amber-500 peer-checked:bg-amber-500 peer-checked:text-white">Sakit</span></label>
                                                                <label className="cursor-pointer"><input type="radio" name="status_l2kanan_203_rina" value="izin" className="sr-only peer" /><span className="h-10 inline-flex items-center justify-center w-full rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 peer-checked:border-sky-500 peer-checked:bg-sky-500 peer-checked:text-white">Izin</span></label>
                                                            </div>
                                                        </div>
                                                        <div className="rounded-xl border border-slate-200 p-3.5">
                                                            <p className="text-sm font-semibold text-slate-800">Melati Zahra</p>
                                                            <p className="text-[11px] text-slate-500">2024202006</p>
                                                            <div className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-2">
                                                                <label className="cursor-pointer"><input type="radio" name="status_l2kanan_203_melati" value="hadir" className="sr-only peer" defaultChecked /><span className="h-10 inline-flex items-center justify-center w-full rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 peer-checked:border-emerald-500 peer-checked:bg-emerald-500 peer-checked:text-white">Hadir</span></label>
                                                                <label className="cursor-pointer"><input type="radio" name="status_l2kanan_203_melati" value="alpa" className="sr-only peer" /><span className="h-10 inline-flex items-center justify-center w-full rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 peer-checked:border-rose-500 peer-checked:bg-rose-500 peer-checked:text-white">Alpa</span></label>
                                                                <label className="cursor-pointer"><input type="radio" name="status_l2kanan_203_melati" value="sakit" className="sr-only peer" /><span className="h-10 inline-flex items-center justify-center w-full rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 peer-checked:border-amber-500 peer-checked:bg-amber-500 peer-checked:text-white">Sakit</span></label>
                                                                <label className="cursor-pointer"><input type="radio" name="status_l2kanan_203_melati" value="izin" className="sr-only peer" /><span className="h-10 inline-flex items-center justify-center w-full rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 peer-checked:border-sky-500 peer-checked:bg-sky-500 peer-checked:text-white">Izin</span></label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </article>
        
                                                <article className="border border-slate-200 rounded-2xl overflow-hidden">
                                                    <header className="px-4 py-3 border-b border-slate-100 bg-slate-50 flex items-center justify-between">
                                                        <h4 className="text-sm font-bold text-slate-900">Kamar 204</h4>
                                                        <span className="text-xs text-slate-500">2 penghuni</span>
                                                    </header>
                                                    <div className="p-4 space-y-4">
                                                        <div className="rounded-xl border border-slate-200 p-3.5">
                                                            <p className="text-sm font-semibold text-slate-800">Nadya Syafitri</p>
                                                            <p className="text-[11px] text-slate-500">2024202007</p>
                                                            <div className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-2">
                                                                <label className="cursor-pointer"><input type="radio" name="status_l2kanan_204_nadya" value="hadir" className="sr-only peer" defaultChecked /><span className="h-10 inline-flex items-center justify-center w-full rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 peer-checked:border-emerald-500 peer-checked:bg-emerald-500 peer-checked:text-white">Hadir</span></label>
                                                                <label className="cursor-pointer"><input type="radio" name="status_l2kanan_204_nadya" value="alpa" className="sr-only peer" /><span className="h-10 inline-flex items-center justify-center w-full rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 peer-checked:border-rose-500 peer-checked:bg-rose-500 peer-checked:text-white">Alpa</span></label>
                                                                <label className="cursor-pointer"><input type="radio" name="status_l2kanan_204_nadya" value="sakit" className="sr-only peer" /><span className="h-10 inline-flex items-center justify-center w-full rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 peer-checked:border-amber-500 peer-checked:bg-amber-500 peer-checked:text-white">Sakit</span></label>
                                                                <label className="cursor-pointer"><input type="radio" name="status_l2kanan_204_nadya" value="izin" className="sr-only peer" /><span className="h-10 inline-flex items-center justify-center w-full rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 peer-checked:border-sky-500 peer-checked:bg-sky-500 peer-checked:text-white">Izin</span></label>
                                                            </div>
                                                        </div>
                                                        <div className="rounded-xl border border-slate-200 p-3.5">
                                                            <p className="text-sm font-semibold text-slate-800">Putri Hanifa</p>
                                                            <p className="text-[11px] text-slate-500">2024202008</p>
                                                            <div className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-2">
                                                                <label className="cursor-pointer"><input type="radio" name="status_l2kanan_204_putri" value="hadir" className="sr-only peer" defaultChecked /><span className="h-10 inline-flex items-center justify-center w-full rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 peer-checked:border-emerald-500 peer-checked:bg-emerald-500 peer-checked:text-white">Hadir</span></label>
                                                                <label className="cursor-pointer"><input type="radio" name="status_l2kanan_204_putri" value="alpa" className="sr-only peer" /><span className="h-10 inline-flex items-center justify-center w-full rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 peer-checked:border-rose-500 peer-checked:bg-rose-500 peer-checked:text-white">Alpa</span></label>
                                                                <label className="cursor-pointer"><input type="radio" name="status_l2kanan_204_putri" value="sakit" className="sr-only peer" /><span className="h-10 inline-flex items-center justify-center w-full rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 peer-checked:border-amber-500 peer-checked:bg-amber-500 peer-checked:text-white">Sakit</span></label>
                                                                <label className="cursor-pointer"><input type="radio" name="status_l2kanan_204_putri" value="izin" className="sr-only peer" /><span className="h-10 inline-flex items-center justify-center w-full rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 peer-checked:border-sky-500 peer-checked:bg-sky-500 peer-checked:text-white">Izin</span></label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </article>
                                            </div>
                                        </section>
                                    </div>
        
                                    <article className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6">
                                        <label htmlFor="inputNotes" className="text-xs font-semibold text-slate-700">Catatan Sesi</label>
                                        <textarea id="inputNotes" name="inputNotes" rows={3} autoComplete="off" placeholder="Tambahkan catatan patroli, kamar yang perlu follow-up, atau kendala di lapangan…" className="mt-1.5 w-full px-3.5 py-2.5 text-sm border border-slate-200 rounded-xl resize-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"></textarea>
                                        <div className="mt-4 flex items-center justify-end gap-2">
                                            <button type="reset" className="px-4 py-2.5 text-sm font-semibold border border-slate-200 text-slate-600 rounded-xl hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500">Reset Form</button>
                                            <button type="submit" className="px-4 py-2.5 text-sm font-semibold bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500">Simpan Absensi</button>
                                        </div>
                                    </article>
                                </form>
                            </section>
    </>
  );
}

function HasilCheckPointView() {
  return (
    <>
        <section id="section-hasil" className="tab-panel space-y-5" role="tabpanel" tabIndex={0} aria-labelledby="tab-hasil judulHasil">
                                <div>
                                    <h2 id="judulHasil" className="text-xl font-bold text-slate-900 scroll-mt-24 [text-wrap:balance]">Hasil Check Point</h2>
                                    <p className="text-sm text-slate-500 mt-1">Rekapitulasi performa kehadiran harian, statistik mingguan, dan riwayat pelaksanaan.</p>
                                </div>
        
                                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                                    <article className="bg-white border border-slate-200 rounded-2xl p-4">
                                        <p className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold">Total Penghuni Dipantau</p>
                                        <p className="text-2xl font-bold text-slate-900 mt-1 [font-variant-numeric:tabular-nums]">198</p>
                                        <p className="text-xs text-slate-500 mt-1">Data periode Maret 2026</p>
                                    </article>
                                    <article className="bg-white border border-slate-200 rounded-2xl p-4">
                                        <p className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold">Rata-rata Kehadiran</p>
                                        <p className="text-2xl font-bold text-emerald-600 mt-1 [font-variant-numeric:tabular-nums]">95.6%</p>
                                        <p className="text-xs text-slate-500 mt-1">Naik 1.8% dari pekan lalu</p>
                                    </article>
                                    <article className="bg-white border border-slate-200 rounded-2xl p-4">
                                        <p className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold">Izin Tercatat</p>
                                        <p className="text-2xl font-bold text-amber-500 mt-1 [font-variant-numeric:tabular-nums]">11</p>
                                        <p className="text-xs text-slate-500 mt-1">Dengan lampiran valid</p>
                                    </article>
                                    <article className="bg-white border border-slate-200 rounded-2xl p-4">
                                        <p className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold">Alpa</p>
                                        <p className="text-2xl font-bold text-rose-500 mt-1 [font-variant-numeric:tabular-nums]">9</p>
                                        <p className="text-xs text-slate-500 mt-1">Perlu tindak lanjut pembina</p>
                                    </article>
                                </div>
        
                                <div className="grid grid-cols-1 xl:grid-cols-12 gap-5">
                                    <article className="xl:col-span-5 bg-white border border-slate-200 rounded-2xl p-5 space-y-4">
                                        <header>
                                            <h3 className="text-sm font-bold text-slate-900">Distribusi Status Pekan Ini</h3>
                                            <p className="text-xs text-slate-500 mt-1">Visual proporsi status kehadiran.</p>
                                        </header>
                                        <div className="space-y-3">
                                            <div>
                                                <div className="flex items-center justify-between text-xs text-slate-600 mb-1">
                                                    <span>Hadir</span>
                                                    <span className="font-semibold [font-variant-numeric:tabular-nums]">182</span>
                                                </div>
                                                <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden">
                                                    <div className="h-full bg-emerald-500 rounded-full" style={{ width: '92%' }}></div>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="flex items-center justify-between text-xs text-slate-600 mb-1">
                                                    <span>Terlambat</span>
                                                    <span className="font-semibold [font-variant-numeric:tabular-nums]">6</span>
                                                </div>
                                                <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden">
                                                    <div className="h-full bg-amber-500 rounded-full" style={{ width: '32%' }}></div>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="flex items-center justify-between text-xs text-slate-600 mb-1">
                                                    <span>Izin</span>
                                                    <span className="font-semibold [font-variant-numeric:tabular-nums]">11</span>
                                                </div>
                                                <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden">
                                                    <div className="h-full bg-indigo-500 rounded-full" style={{ width: '48%' }}></div>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="flex items-center justify-between text-xs text-slate-600 mb-1">
                                                    <span>Alpa</span>
                                                    <span className="font-semibold [font-variant-numeric:tabular-nums]">9</span>
                                                </div>
                                                <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden">
                                                    <div className="h-full bg-rose-500 rounded-full" style={{ width: '40%' }}></div>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
        
                                    <article className="xl:col-span-7 bg-white border border-slate-200 rounded-2xl overflow-hidden">
                                        <header className="px-5 py-4 border-b border-slate-100 flex flex-wrap items-center justify-between gap-2">
                                            <h3 className="text-sm font-bold text-slate-900">Riwayat Pelaksanaan Check Point</h3>
                                            <button type="button" className="px-3 py-2 text-xs font-semibold border border-slate-200 rounded-xl text-slate-600 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500">Unduh Laporan</button>
                                        </header>
                                        <div className="overflow-x-auto">
                                            <table className="w-full" aria-describedby="historySummary">
                                                <caption id="historySummary" className="sr-only">Riwayat check point berisi tanggal, sesi, jumlah hadir, izin, alpa, dan petugas.</caption>
                                                <thead>
                                                    <tr className="bg-slate-50 border-b border-slate-100">
                                                        <th className="px-5 py-3 text-left text-[11px] uppercase tracking-wider text-slate-500 font-bold">Tanggal</th>
                                                        <th className="px-4 py-3 text-left text-[11px] uppercase tracking-wider text-slate-500 font-bold">Sesi</th>
                                                        <th className="px-4 py-3 text-left text-[11px] uppercase tracking-wider text-slate-500 font-bold">Hadir</th>
                                                        <th className="px-4 py-3 text-left text-[11px] uppercase tracking-wider text-slate-500 font-bold">Izin</th>
                                                        <th className="px-4 py-3 text-left text-[11px] uppercase tracking-wider text-slate-500 font-bold">Alpa</th>
                                                        <th className="px-4 py-3 text-left text-[11px] uppercase tracking-wider text-slate-500 font-bold">Petugas</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-slate-50">
                                                    <tr>
                                                        <td className="px-5 py-3 text-sm text-slate-700 [font-variant-numeric:tabular-nums]">18 Mar 2026</td>
                                                        <td className="px-4 py-3 text-sm text-slate-700">Rabu Malam</td>
                                                        <td className="px-4 py-3 text-sm font-semibold text-emerald-600 [font-variant-numeric:tabular-nums]">184</td>
                                                        <td className="px-4 py-3 text-sm font-semibold text-indigo-600 [font-variant-numeric:tabular-nums]">8</td>
                                                        <td className="px-4 py-3 text-sm font-semibold text-rose-600 [font-variant-numeric:tabular-nums]">6</td>
                                                        <td className="px-4 py-3 text-sm text-slate-700">Pembina Siska</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="px-5 py-3 text-sm text-slate-700 [font-variant-numeric:tabular-nums]">16 Mar 2026</td>
                                                        <td className="px-4 py-3 text-sm text-slate-700">Senin Malam</td>
                                                        <td className="px-4 py-3 text-sm font-semibold text-emerald-600 [font-variant-numeric:tabular-nums]">180</td>
                                                        <td className="px-4 py-3 text-sm font-semibold text-indigo-600 [font-variant-numeric:tabular-nums]">11</td>
                                                        <td className="px-4 py-3 text-sm font-semibold text-rose-600 [font-variant-numeric:tabular-nums]">7</td>
                                                        <td className="px-4 py-3 text-sm text-slate-700">Pembina Malik</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="px-5 py-3 text-sm text-slate-700 [font-variant-numeric:tabular-nums]">14 Mar 2026</td>
                                                        <td className="px-4 py-3 text-sm text-slate-700">Jumat Evaluasi</td>
                                                        <td className="px-4 py-3 text-sm font-semibold text-emerald-600 [font-variant-numeric:tabular-nums]">178</td>
                                                        <td className="px-4 py-3 text-sm font-semibold text-indigo-600 [font-variant-numeric:tabular-nums]">12</td>
                                                        <td className="px-4 py-3 text-sm font-semibold text-rose-600 [font-variant-numeric:tabular-nums]">8</td>
                                                        <td className="px-4 py-3 text-sm text-slate-700">Koordinator Malam</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </article>
                                </div>
                            </section>
    </>
  );
}

function PelanggaranCpView() {
  return (
    <>
        <section id="section-pelanggaran" className="tab-panel space-y-5" role="tabpanel" tabIndex={0} aria-labelledby="tab-pelanggaran judulPelanggaran">
                                <div>
                                    <h2 id="judulPelanggaran" className="text-xl font-bold text-slate-900 scroll-mt-24 [text-wrap:balance]">Pelanggaran Check Point</h2>
                                    <p className="text-sm text-slate-500 mt-1">Pantau penghuni yang mangkir, lakukan validasi, dan catat tindak lanjut secara terstruktur.</p>
                                </div>
        
                                <div className="grid grid-cols-1 xl:grid-cols-12 gap-5">
                                    <article className="xl:col-span-8 bg-white border border-slate-200 rounded-2xl overflow-hidden">
                                        <header className="px-5 py-4 border-b border-slate-100 flex flex-col sm:flex-row gap-3 sm:items-end sm:justify-between">
                                            <div>
                                                <h3 className="text-sm font-bold text-slate-900">Daftar Pelanggaran Aktif</h3>
                                                <p className="text-xs text-slate-500 mt-1">Kasus yang menunggu konfirmasi atau penindakan.</p>
                                            </div>
                                            <button type="button" className="px-3.5 py-2 text-xs font-semibold border border-slate-200 rounded-xl text-slate-600 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500">Filter Minggu Ini</button>
                                        </header>
                                        <div className="overflow-x-auto">
                                            <table className="w-full" aria-describedby="violationSummary">
                                                <caption id="violationSummary" className="sr-only">Tabel pelanggaran berisi nama penghuni, NIM/NIK, kamar, waktu, jenis pelanggaran, dan aksi.</caption>
                                                <thead>
                                                    <tr className="bg-slate-50 border-b border-slate-100">
                                                        <th className="px-5 py-3 text-left text-[11px] uppercase tracking-wider text-slate-500 font-bold">Nama</th>
                                                        <th className="px-4 py-3 text-left text-[11px] uppercase tracking-wider text-slate-500 font-bold">NIM/NIK</th>
                                                        <th className="px-4 py-3 text-left text-[11px] uppercase tracking-wider text-slate-500 font-bold">Kamar</th>
                                                        <th className="px-4 py-3 text-left text-[11px] uppercase tracking-wider text-slate-500 font-bold">Waktu</th>
                                                        <th className="px-4 py-3 text-left text-[11px] uppercase tracking-wider text-slate-500 font-bold">Jenis</th>
                                                        <th className="px-4 py-3 text-right text-[11px] uppercase tracking-wider text-slate-500 font-bold">Aksi</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-slate-50">
                                                    <tr>
                                                        <td className="px-5 py-3.5 text-sm font-semibold text-slate-800">Muhammad Faiz</td>
                                                        <td className="px-4 py-3.5 text-sm font-mono text-slate-700 [font-variant-numeric:tabular-nums]">2021210033</td>
                                                        <td className="px-4 py-3.5 text-sm text-slate-700">A-302</td>
                                                        <td className="px-4 py-3.5 text-sm text-slate-700 [font-variant-numeric:tabular-nums]">18 Mar 2026 • 20.45</td>
                                                        <td className="px-4 py-3.5"><span className="inline-flex items-center gap-1.5 text-[11px] px-2.5 py-1 rounded-full border border-rose-200 bg-rose-100 text-rose-700 font-bold"><span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>Alpa</span></td>
                                                        <td className="px-4 py-3.5">
                                                            <div className="flex justify-end gap-1.5">
                                                                <button type="button" className="p-2 rounded-lg text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500" aria-label="Lihat detail pelanggaran Muhammad Faiz"><i className="fa-solid fa-eye text-sm" aria-hidden="true"></i></button>
                                                                <button type="button" className="p-2 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500" aria-label="Tindak lanjuti pelanggaran Muhammad Faiz"><i className="fa-solid fa-gavel text-sm" aria-hidden="true"></i></button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="px-5 py-3.5 text-sm font-semibold text-slate-800">Nurul Aini</td>
                                                        <td className="px-4 py-3.5 text-sm font-mono text-slate-700 [font-variant-numeric:tabular-nums]">2022310056</td>
                                                        <td className="px-4 py-3.5 text-sm text-slate-700">D-201</td>
                                                        <td className="px-4 py-3.5 text-sm text-slate-700 [font-variant-numeric:tabular-nums]">16 Mar 2026 • 20.55</td>
                                                        <td className="px-4 py-3.5"><span className="inline-flex items-center gap-1.5 text-[11px] px-2.5 py-1 rounded-full border border-amber-200 bg-amber-100 text-amber-700 font-bold"><span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>Terlambat</span></td>
                                                        <td className="px-4 py-3.5">
                                                            <div className="flex justify-end gap-1.5">
                                                                <button type="button" className="p-2 rounded-lg text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500" aria-label="Lihat detail pelanggaran Nurul Aini"><i className="fa-solid fa-eye text-sm" aria-hidden="true"></i></button>
                                                                <button type="button" className="p-2 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500" aria-label="Tindak lanjuti pelanggaran Nurul Aini"><i className="fa-solid fa-gavel text-sm" aria-hidden="true"></i></button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="px-5 py-3.5 text-sm font-semibold text-slate-800">Ahmad Rizky</td>
                                                        <td className="px-4 py-3.5 text-sm font-mono text-slate-700 [font-variant-numeric:tabular-nums]">2022410012</td>
                                                        <td className="px-4 py-3.5 text-sm text-slate-700">B-203</td>
                                                        <td className="px-4 py-3.5 text-sm text-slate-700 [font-variant-numeric:tabular-nums]">14 Mar 2026 • 21.10</td>
                                                        <td className="px-4 py-3.5"><span className="inline-flex items-center gap-1.5 text-[11px] px-2.5 py-1 rounded-full border border-rose-200 bg-rose-100 text-rose-700 font-bold"><span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>Mangkir</span></td>
                                                        <td className="px-4 py-3.5">
                                                            <div className="flex justify-end gap-1.5">
                                                                <button type="button" className="p-2 rounded-lg text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500" aria-label="Lihat detail pelanggaran Ahmad Rizky"><i className="fa-solid fa-eye text-sm" aria-hidden="true"></i></button>
                                                                <button type="button" className="p-2 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500" aria-label="Tindak lanjuti pelanggaran Ahmad Rizky"><i className="fa-solid fa-gavel text-sm" aria-hidden="true"></i></button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </article>
        
                                    <form className="xl:col-span-4 bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-5" autoComplete="off">
                                        <header>
                                            <h3 className="text-sm font-bold text-slate-900">Form Penindakan</h3>
                                            <p className="text-xs text-slate-500 mt-1">Dokumentasikan tindakan untuk pelanggaran check point.</p>
                                        </header>
        
                                        <div className="space-y-1">
                                            <label htmlFor="violResident" className="text-xs font-semibold text-slate-700">Penghuni</label>
                                            <select id="violResident" name="violResident" autoComplete="off" className="w-full px-3.5 py-2.5 text-sm border border-slate-200 rounded-xl bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500">
                                                <option value="">Pilih penghuni bermasalah</option>
                                                <option>Muhammad Faiz (A-302)</option>
                                                <option>Nurul Aini (D-201)</option>
                                                <option>Ahmad Rizky (B-203)</option>
                                            </select>
                                        </div>
        
                                        <div className="space-y-1">
                                            <label htmlFor="violAction" className="text-xs font-semibold text-slate-700">Jenis Penindakan</label>
                                            <select id="violAction" name="violAction" autoComplete="off" className="w-full px-3.5 py-2.5 text-sm border border-slate-200 rounded-xl bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500">
                                                <option value="">Pilih tindakan</option>
                                                <option>Teguran Lisan</option>
                                                <option>Teguran Tertulis</option>
                                                <option>Pembinaan Khusus</option>
                                                <option>Panggilan Wali</option>
                                            </select>
                                        </div>
        
                                        <div className="space-y-1">
                                            <label htmlFor="violDeadline" className="text-xs font-semibold text-slate-700">Batas Follow-up</label>
                                            <input id="violDeadline" name="violDeadline" type="date" autoComplete="off" className="w-full px-3.5 py-2.5 text-sm border border-slate-200 rounded-xl bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500" />
                                        </div>
        
                                        <div className="space-y-1">
                                            <label htmlFor="violNotes" className="text-xs font-semibold text-slate-700">Catatan Penindakan</label>
                                            <textarea id="violNotes" name="violNotes" rows={4} autoComplete="off" placeholder="Tuliskan kronologi singkat dan langkah pembinaan…" className="w-full px-3.5 py-2.5 text-sm border border-slate-200 rounded-xl resize-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"></textarea>
                                        </div>
        
                                        <label className="flex items-start gap-2.5 p-3 border border-slate-200 rounded-xl cursor-pointer">
                                            <input type="checkbox" name="violNotifyGuardian" className="mt-0.5" />
                                            <span className="text-sm text-slate-700">Kirim notifikasi ke wali/pembina akademik.</span>
                                        </label>
        
                                        <div className="flex items-center justify-end gap-2">
                                            <button type="reset" className="px-4 py-2.5 text-sm font-semibold border border-slate-200 text-slate-600 rounded-xl hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500">Reset</button>
                                            <button type="submit" className="px-4 py-2.5 text-sm font-semibold bg-rose-600 text-white rounded-xl hover:bg-rose-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500">Simpan Tindakan</button>
                                        </div>
                                    </form>
                                </div>
                            </section>
    </>
  );
}

function CheckPointFooter() {
  return (
    <>
        <footer className="py-8 text-center">
                                <p className="text-xs text-slate-400">© 2026 SiMARA — Sistem Informasi Manajemen Asrama</p>
                            </footer>
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
