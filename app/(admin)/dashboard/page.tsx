import type { Metadata } from "next";
import { DashboardEnhancer } from "@/components/dashboard/DashboardEnhancer";

export const metadata: Metadata = {
  title: "Dashboard Admin | SiMARA",
};

export default function DashboardPage() {
  return (
    <>
                    <DashboardEnhancer />
                    
                    <div
                        className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-8"
                    >
                        <div>
                            
                            <div
                                className="flex items-center gap-2 text-xs text-gray-400 mb-2"
                            >
                                <i className="fa-solid fa-house text-gray-300"></i>
                                <span className="text-gray-300">/</span>
                                <span className="text-indigo-500 font-semibold"
                                    >Dashboard</span
                                >
                            </div>
                            <h1
                                className="text-2xl sm:text-[28px] font-bold text-gray-900 leading-tight"
                            >
                                Overview Dashboard
                            </h1>
                            <p
                                className="text-gray-500 text-sm mt-1.5 flex items-center gap-2"
                            >
                                
                                <span
                                    className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-600 text-xs font-semibold px-2.5 py-1 rounded-full border border-emerald-200"
                                >
                                    <span
                                        className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"
                                    ></span>
                                    Live
                                </span>
                                Senin, 9 Juni 2025 — Data diperbarui
                                secara real-time
                            </p>
                        </div>
                        
                        <div className="flex items-center gap-2.5 shrink-0">
                            <button
                                className="flex items-center gap-2 px-4 py-2.5 text-sm border border-gray-200 text-gray-600 rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all font-medium"
                            >
                                <i
                                    className="fa-solid fa-download text-gray-400 text-xs"
                                ></i>
                                Export
                            </button>
                            <button
                                className="flex items-center gap-2 px-4 py-2.5 text-sm bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-colors font-semibold shadow-md shadow-indigo-200 active:scale-95"
                            >
                                <i className="fa-solid fa-plus text-xs"></i>
                                Tambah Mahasiswa
                            </button>
                        </div>
                    </div>

                    
                    <section
                        className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-6"
                    >
                        
                        <div
                            className="metric-card bg-white rounded-2xl p-5 shadow-sm border border-gray-100 relative overflow-hidden cursor-pointer"
                        >
                            <div className="flex items-start justify-between mb-3">
                                <p
                                    className="text-xs font-semibold text-gray-500 uppercase tracking-wider"
                                >
                                    Penghuni Aktif
                                </p>
                                <div
                                    className="w-11 h-11 bg-indigo-50 rounded-xl flex items-center justify-center shrink-0"
                                >
                                    <i
                                        className="fa-solid fa-users text-indigo-600 text-lg"
                                    ></i>
                                </div>
                            </div>
                            <p
                                className="text-[34px] font-bold text-gray-900 leading-none mb-3"
                            >
                                247
                            </p>
                            <div className="flex items-center gap-2">
                                <span
                                    className="inline-flex items-center gap-1 text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full"
                                >
                                    <i
                                        className="fa-solid fa-arrow-trend-up text-[10px]"
                                    ></i>
                                    +4.8%
                                </span>
                                <span className="text-xs text-gray-400"
                                    >dari bulan lalu</span
                                >
                            </div>
                            
                            <div
                                className="absolute -bottom-5 -right-5 w-28 h-28 bg-indigo-50 rounded-full opacity-70 pointer-events-none"
                            ></div>
                            <div
                                className="absolute -bottom-10 -right-10 w-28 h-28 bg-indigo-100/40 rounded-full pointer-events-none"
                            ></div>
                        </div>

                        
                        <div
                            className="metric-card bg-white rounded-2xl p-5 shadow-sm border border-gray-100 relative overflow-hidden cursor-pointer"
                        >
                            <div className="flex items-start justify-between mb-3">
                                <p
                                    className="text-xs font-semibold text-gray-500 uppercase tracking-wider"
                                >
                                    Menunggu Verifikasi
                                </p>
                                <div
                                    className="w-11 h-11 bg-amber-50 rounded-xl flex items-center justify-center shrink-0"
                                >
                                    <i
                                        className="fa-solid fa-file-pen text-amber-500 text-lg"
                                    ></i>
                                </div>
                            </div>
                            <p
                                className="text-[34px] font-bold text-gray-900 leading-none mb-3"
                            >
                                18
                            </p>
                            <div className="flex items-center gap-2">
                                <span
                                    className="inline-flex items-center gap-1 text-xs font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full"
                                >
                                    <i
                                        className="fa-solid fa-clock text-[10px]"
                                    ></i>
                                    Mendesak
                                </span>
                                <span className="text-xs text-gray-400"
                                    >pendaftar baru</span
                                >
                            </div>
                            <div
                                className="absolute -bottom-5 -right-5 w-28 h-28 bg-amber-50 rounded-full opacity-70 pointer-events-none"
                            ></div>
                            <div
                                className="absolute -bottom-10 -right-10 w-28 h-28 bg-amber-100/40 rounded-full pointer-events-none"
                            ></div>
                        </div>

                        
                        <div
                            className="metric-card bg-white rounded-2xl p-5 shadow-sm border border-gray-100 relative overflow-hidden cursor-pointer"
                        >
                            <div className="flex items-start justify-between mb-3">
                                <p
                                    className="text-xs font-semibold text-gray-500 uppercase tracking-wider"
                                >
                                    Kamar Tersedia
                                </p>
                                <div
                                    className="w-11 h-11 bg-emerald-50 rounded-xl flex items-center justify-center shrink-0"
                                >
                                    <i
                                        className="fa-solid fa-door-open text-emerald-600 text-lg"
                                    ></i>
                                </div>
                            </div>
                            <p
                                className="text-[34px] font-bold text-gray-900 leading-none mb-1"
                            >
                                12
                            </p>
                            <div className="flex items-center justify-between mt-2">
                                <span className="text-xs text-gray-400"
                                    >dari
                                    <strong className="text-gray-600">45</strong>
                                    total kamar</span
                                >
                                <span className="text-xs font-bold text-emerald-600"
                                    >73% terisi</span
                                >
                            </div>
                            
                            <div
                                className="w-full bg-gray-100 rounded-full h-1.5 mt-2"
                            >
                                <div
                                    className="bg-emerald-500 h-1.5 rounded-full"
                                    style={{ width: '73%' }}
                                ></div>
                            </div>
                            <div
                                className="absolute -bottom-5 -right-5 w-28 h-28 bg-emerald-50 rounded-full opacity-70 pointer-events-none"
                            ></div>
                        </div>

                        
                        <div
                            className="metric-card bg-white rounded-2xl p-5 shadow-sm border border-gray-100 relative overflow-hidden cursor-pointer"
                        >
                            <div className="flex items-start justify-between mb-3">
                                <p
                                    className="text-xs font-semibold text-gray-500 uppercase tracking-wider"
                                >
                                    Pelanggaran Bulan Ini
                                </p>
                                <div
                                    className="w-11 h-11 bg-rose-50 rounded-xl flex items-center justify-center shrink-0"
                                >
                                    <i
                                        className="fa-solid fa-triangle-exclamation text-rose-500 text-lg"
                                    ></i>
                                </div>
                            </div>
                            <p
                                className="text-[34px] font-bold text-gray-900 leading-none mb-3"
                            >
                                34
                            </p>
                            <div className="flex items-center gap-2">
                                <span
                                    className="inline-flex items-center gap-1 text-xs font-bold text-rose-600 bg-rose-50 px-2 py-0.5 rounded-full"
                                >
                                    <i
                                        className="fa-solid fa-arrow-trend-up text-[10px]"
                                    ></i>
                                    +12.3%
                                </span>
                                <span className="text-xs text-gray-400"
                                    >dari bulan lalu</span
                                >
                            </div>
                            <div
                                className="absolute -bottom-5 -right-5 w-28 h-28 bg-rose-50 rounded-full opacity-70 pointer-events-none"
                            ></div>
                            <div
                                className="absolute -bottom-10 -right-10 w-28 h-28 bg-rose-100/40 rounded-full pointer-events-none"
                            ></div>
                        </div>
                    </section>
                    

                    
                    <section className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-6">
                        
                        <div
                            className="lg:col-span-2 bg-white rounded-2xl p-5 shadow-sm border border-gray-100"
                        >
                            
                            <div
                                className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4"
                            >
                                <div>
                                    <h2
                                        className="text-base font-bold text-gray-900"
                                    >
                                        Tren Hunian & Pelanggaran
                                    </h2>
                                    <p className="text-xs text-gray-400 mt-0.5">
                                        6 bulan terakhir (Januari — Juni
                                        2025)
                                    </p>
                                </div>
                                <div className="flex items-center gap-1.5 shrink-0">
                                    <button
                                        className="text-xs px-3 py-1.5 bg-indigo-600 text-white rounded-lg font-semibold shadow-sm"
                                    >
                                        Bulanan
                                    </button>
                                    <button
                                        className="text-xs px-3 py-1.5 bg-gray-100 text-gray-500 rounded-lg font-medium hover:bg-gray-200 transition-colors"
                                    >
                                        Mingguan
                                    </button>
                                </div>
                            </div>
                            
                            <div className="flex items-center gap-5 mb-4">
                                <div className="flex items-center gap-2">
                                    <div
                                        className="w-3 h-3 rounded bg-indigo-500"
                                    ></div>
                                    <span
                                        className="text-xs text-gray-500 font-medium"
                                        >Penghuni Aktif</span
                                    >
                                </div>
                                <div className="flex items-center gap-2">
                                    <div
                                        className="w-3 h-3 rounded bg-rose-400"
                                    ></div>
                                    <span
                                        className="text-xs text-gray-500 font-medium"
                                        >Pelanggaran</span
                                    >
                                </div>
                            </div>
                            
                            <div className="relative h-56 sm:h-64">
                                <canvas id="trendChart"></canvas>
                            </div>
                        </div>

                        
                        <div
                            className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex flex-col"
                        >
                            <div className="mb-4">
                                <h2 className="text-base font-bold text-gray-900">
                                    Status Kamar
                                </h2>
                                <p className="text-xs text-gray-400 mt-0.5">
                                    Distribusi 45 kamar saat ini
                                </p>
                            </div>
                            
                            <div
                                className="relative h-44 flex items-center justify-center mb-5"
                            >
                                <canvas id="roomStatusChart"></canvas>
                                <div
                                    className="absolute text-center pointer-events-none"
                                >
                                    <p className="text-2xl font-bold text-gray-900">
                                        45
                                    </p>
                                    <p
                                        className="text-[10.5px] text-gray-400 font-medium"
                                    >
                                        Total Kamar
                                    </p>
                                </div>
                            </div>
                            
                            <div className="space-y-3 flex-1">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2.5">
                                        <div
                                            className="w-3 h-3 rounded-full bg-rose-500 shrink-0"
                                        ></div>
                                        <span className="text-sm text-gray-600"
                                            >Penuh</span
                                        >
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span
                                            className="text-sm font-bold text-gray-800"
                                            >15 kamar</span
                                        >
                                        <span
                                            className="text-xs font-bold text-rose-500 bg-rose-50 px-1.5 py-0.5 rounded-full"
                                            >33%</span
                                        >
                                    </div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2.5">
                                        <div
                                            className="w-3 h-3 rounded-full bg-amber-400 shrink-0"
                                        ></div>
                                        <span className="text-sm text-gray-600"
                                            >Terisi Sebagian</span
                                        >
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span
                                            className="text-sm font-bold text-gray-800"
                                            >18 kamar</span
                                        >
                                        <span
                                            className="text-xs font-bold text-amber-600 bg-amber-50 px-1.5 py-0.5 rounded-full"
                                            >40%</span
                                        >
                                    </div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2.5">
                                        <div
                                            className="w-3 h-3 rounded-full bg-emerald-500 shrink-0"
                                        ></div>
                                        <span className="text-sm text-gray-600"
                                            >Kosong</span
                                        >
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span
                                            className="text-sm font-bold text-gray-800"
                                            >12 kamar</span
                                        >
                                        <span
                                            className="text-xs font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-full"
                                            >27%</span
                                        >
                                    </div>
                                </div>
                            </div>
                            
                            <div className="mt-5 pt-4 border-t border-gray-100">
                                <a
                                    href="#"
                                    className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-semibold text-indigo-600 bg-indigo-50 hover:bg-indigo-100 rounded-xl transition-colors"
                                >
                                    <i
                                        className="fa-solid fa-building text-[11px]"
                                    ></i>
                                    Lihat Detail per Gedung
                                </a>
                            </div>
                        </div>
                    </section>
                    

                    
                    <section className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-6">
                        
                        <div
                            className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col"
                        >
                            
                            <div
                                className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-5 py-4 border-b border-gray-100 shrink-0"
                            >
                                <div>
                                    <h2
                                        className="text-base font-bold text-gray-900"
                                    >
                                        Pelanggaran Terbaru
                                    </h2>
                                    <p className="text-xs text-gray-400 mt-0.5">
                                        Catatan pelanggaran 7 hari terakhir
                                    </p>
                                </div>
                                <div className="flex items-center gap-2 shrink-0">
                                    <select
                                        className="text-xs border border-gray-200 text-gray-600 rounded-lg px-3 py-1.5 outline-none focus:ring-2 focus:ring-indigo-500 bg-white cursor-pointer"
                                    >
                                        <option>Semua Jenis</option>
                                        <option>Tidak Hadir CP</option>
                                        <option>Pulang Terlambat</option>
                                        <option>Tata Tertib</option>
                                        <option>Tidak Ikut Kegiatan</option>
                                    </select>
                                    <a
                                        href="#"
                                        className="text-xs px-3 py-1.5 bg-indigo-50 text-indigo-600 rounded-lg font-semibold hover:bg-indigo-100 transition-colors whitespace-nowrap"
                                        >Lihat Semua</a
                                    >
                                </div>
                            </div>

                            
                            <div className="overflow-x-auto flex-1">
                                <table className="w-full">
                                    <thead>
                                        <tr
                                            className="bg-gray-50/80 border-b border-gray-100"
                                        >
                                            <th
                                                className="px-5 py-3 text-left text-[11px] font-bold text-gray-500 uppercase tracking-wider"
                                            >
                                                Mahasiswa
                                            </th>
                                            <th
                                                className="px-4 py-3 text-left text-[11px] font-bold text-gray-500 uppercase tracking-wider hidden sm:table-cell"
                                            >
                                                Kamar
                                            </th>
                                            <th
                                                className="px-4 py-3 text-left text-[11px] font-bold text-gray-500 uppercase tracking-wider"
                                            >
                                                Pelanggaran
                                            </th>
                                            <th
                                                className="px-4 py-3 text-left text-[11px] font-bold text-gray-500 uppercase tracking-wider hidden md:table-cell"
                                            >
                                                Tanggal
                                            </th>
                                            <th
                                                className="px-4 py-3 text-center text-[11px] font-bold text-gray-500 uppercase tracking-wider"
                                            >
                                                Poin
                                            </th>
                                            <th
                                                className="px-4 py-3 text-center text-[11px] font-bold text-gray-500 uppercase tracking-wider"
                                            >
                                                Status
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-50">
                                        
                                        <tr
                                            className="table-row hover:bg-indigo-50/30"
                                        >
                                            <td className="px-5 py-3.5">
                                                <div
                                                    className="flex items-center gap-3"
                                                >
                                                    <div
                                                        className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center shrink-0"
                                                    >
                                                        <span
                                                            className="text-indigo-700 text-[10px] font-bold"
                                                            >BS</span
                                                        >
                                                    </div>
                                                    <div>
                                                        <p
                                                            className="text-sm font-semibold text-gray-800"
                                                        >
                                                            Budi Santoso
                                                        </p>
                                                        <p
                                                            className="text-[10.5px] text-gray-400"
                                                        >
                                                            2021310045
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td
                                                className="px-4 py-3.5 hidden sm:table-cell"
                                            >
                                                <span
                                                    className="text-sm font-semibold text-gray-700 bg-gray-100 px-2 py-0.5 rounded-md"
                                                    >A-101</span
                                                >
                                            </td>
                                            <td className="px-4 py-3.5">
                                                <span
                                                    className="inline-flex items-center gap-1 text-xs font-medium bg-rose-50 text-rose-700 px-2.5 py-1 rounded-lg border border-rose-100"
                                                >
                                                    <i
                                                        className="fa-solid fa-circle-xmark text-[9px]"
                                                    ></i>
                                                    Tidak Hadir CP
                                                </span>
                                            </td>
                                            <td
                                                className="px-4 py-3.5 hidden md:table-cell"
                                            >
                                                <span
                                                    className="text-sm text-gray-500"
                                                    >09 Jun 2025</span
                                                >
                                            </td>
                                            <td className="px-4 py-3.5 text-center">
                                                <span
                                                    className="text-sm font-extrabold text-rose-600"
                                                    >+5</span
                                                >
                                            </td>
                                            <td className="px-4 py-3.5 text-center">
                                                <span
                                                    className="inline-flex items-center gap-1 text-[10.5px] font-bold px-2 py-1 rounded-full bg-emerald-100 text-emerald-700"
                                                >
                                                    <i
                                                        className="fa-solid fa-circle-check text-[9px]"
                                                    ></i>
                                                    Tervalidasi
                                                </span>
                                            </td>
                                        </tr>

                                        
                                        <tr
                                            className="table-row hover:bg-indigo-50/30"
                                        >
                                            <td className="px-5 py-3.5">
                                                <div
                                                    className="flex items-center gap-3"
                                                >
                                                    <div
                                                        className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center shrink-0"
                                                    >
                                                        <span
                                                            className="text-purple-700 text-[10px] font-bold"
                                                            >AR</span
                                                        >
                                                    </div>
                                                    <div>
                                                        <p
                                                            className="text-sm font-semibold text-gray-800"
                                                        >
                                                            Ahmad Rizky
                                                        </p>
                                                        <p
                                                            className="text-[10.5px] text-gray-400"
                                                        >
                                                            2022410012
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td
                                                className="px-4 py-3.5 hidden sm:table-cell"
                                            >
                                                <span
                                                    className="text-sm font-semibold text-gray-700 bg-gray-100 px-2 py-0.5 rounded-md"
                                                    >B-203</span
                                                >
                                            </td>
                                            <td className="px-4 py-3.5">
                                                <span
                                                    className="inline-flex items-center gap-1 text-xs font-medium bg-amber-50 text-amber-700 px-2.5 py-1 rounded-lg border border-amber-100"
                                                >
                                                    <i
                                                        className="fa-solid fa-clock text-[9px]"
                                                    ></i>
                                                    Pulang Terlambat
                                                </span>
                                            </td>
                                            <td
                                                className="px-4 py-3.5 hidden md:table-cell"
                                            >
                                                <span
                                                    className="text-sm text-gray-500"
                                                    >08 Jun 2025</span
                                                >
                                            </td>
                                            <td className="px-4 py-3.5 text-center">
                                                <span
                                                    className="text-sm font-extrabold text-amber-600"
                                                    >+3</span
                                                >
                                            </td>
                                            <td className="px-4 py-3.5 text-center">
                                                <span
                                                    className="inline-flex items-center gap-1 text-[10.5px] font-bold px-2 py-1 rounded-full bg-emerald-100 text-emerald-700"
                                                >
                                                    <i
                                                        className="fa-solid fa-circle-check text-[9px]"
                                                    ></i>
                                                    Tervalidasi
                                                </span>
                                            </td>
                                        </tr>

                                        
                                        <tr
                                            className="table-row hover:bg-indigo-50/30"
                                        >
                                            <td className="px-5 py-3.5">
                                                <div
                                                    className="flex items-center gap-3"
                                                >
                                                    <div
                                                        className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center shrink-0"
                                                    >
                                                        <span
                                                            className="text-emerald-700 text-[10px] font-bold"
                                                            >DP</span
                                                        >
                                                    </div>
                                                    <div>
                                                        <p
                                                            className="text-sm font-semibold text-gray-800"
                                                        >
                                                            Dewi Puspita
                                                        </p>
                                                        <p
                                                            className="text-[10.5px] text-gray-400"
                                                        >
                                                            2023110087
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td
                                                className="px-4 py-3.5 hidden sm:table-cell"
                                            >
                                                <span
                                                    className="text-sm font-semibold text-gray-700 bg-gray-100 px-2 py-0.5 rounded-md"
                                                    >C-115</span
                                                >
                                            </td>
                                            <td className="px-4 py-3.5">
                                                <span
                                                    className="inline-flex items-center gap-1 text-xs font-medium bg-red-50 text-red-700 px-2.5 py-1 rounded-lg border border-red-100"
                                                >
                                                    <i
                                                        className="fa-solid fa-ban text-[9px]"
                                                    ></i>
                                                    Tata Tertib Berat
                                                </span>
                                            </td>
                                            <td
                                                className="px-4 py-3.5 hidden md:table-cell"
                                            >
                                                <span
                                                    className="text-sm text-gray-500"
                                                    >08 Jun 2025</span
                                                >
                                            </td>
                                            <td className="px-4 py-3.5 text-center">
                                                <span
                                                    className="text-sm font-extrabold text-red-600"
                                                    >+10</span
                                                >
                                            </td>
                                            <td className="px-4 py-3.5 text-center">
                                                <span
                                                    className="inline-flex items-center gap-1 text-[10.5px] font-bold px-2 py-1 rounded-full bg-amber-100 text-amber-700"
                                                >
                                                    <i
                                                        className="fa-solid fa-clock text-[9px]"
                                                    ></i>
                                                    Menunggu
                                                </span>
                                            </td>
                                        </tr>

                                        
                                        <tr
                                            className="table-row hover:bg-indigo-50/30"
                                        >
                                            <td className="px-5 py-3.5">
                                                <div
                                                    className="flex items-center gap-3"
                                                >
                                                    <div
                                                        className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center shrink-0"
                                                    >
                                                        <span
                                                            className="text-blue-700 text-[10px] font-bold"
                                                            >MF</span
                                                        >
                                                    </div>
                                                    <div>
                                                        <p
                                                            className="text-sm font-semibold text-gray-800"
                                                        >
                                                            Muhammad Faiz
                                                        </p>
                                                        <p
                                                            className="text-[10.5px] text-gray-400"
                                                        >
                                                            2021210033
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td
                                                className="px-4 py-3.5 hidden sm:table-cell"
                                            >
                                                <span
                                                    className="text-sm font-semibold text-gray-700 bg-gray-100 px-2 py-0.5 rounded-md"
                                                    >A-302</span
                                                >
                                            </td>
                                            <td className="px-4 py-3.5">
                                                <span
                                                    className="inline-flex items-center gap-1 text-xs font-medium bg-rose-50 text-rose-700 px-2.5 py-1 rounded-lg border border-rose-100"
                                                >
                                                    <i
                                                        className="fa-solid fa-circle-xmark text-[9px]"
                                                    ></i>
                                                    Tidak Hadir CP
                                                </span>
                                            </td>
                                            <td
                                                className="px-4 py-3.5 hidden md:table-cell"
                                            >
                                                <span
                                                    className="text-sm text-gray-500"
                                                    >07 Jun 2025</span
                                                >
                                            </td>
                                            <td className="px-4 py-3.5 text-center">
                                                <span
                                                    className="text-sm font-extrabold text-rose-600"
                                                    >+5</span
                                                >
                                            </td>
                                            <td className="px-4 py-3.5 text-center">
                                                <span
                                                    className="inline-flex items-center gap-1 text-[10.5px] font-bold px-2 py-1 rounded-full bg-emerald-100 text-emerald-700"
                                                >
                                                    <i
                                                        className="fa-solid fa-circle-check text-[9px]"
                                                    ></i>
                                                    Tervalidasi
                                                </span>
                                            </td>
                                        </tr>

                                        
                                        <tr
                                            className="table-row hover:bg-indigo-50/30"
                                        >
                                            <td className="px-5 py-3.5">
                                                <div
                                                    className="flex items-center gap-3"
                                                >
                                                    <div
                                                        className="w-8 h-8 bg-rose-100 rounded-lg flex items-center justify-center shrink-0"
                                                    >
                                                        <span
                                                            className="text-rose-700 text-[10px] font-bold"
                                                            >NA</span
                                                        >
                                                    </div>
                                                    <div>
                                                        <p
                                                            className="text-sm font-semibold text-gray-800"
                                                        >
                                                            Nurul Aini
                                                        </p>
                                                        <p
                                                            className="text-[10.5px] text-gray-400"
                                                        >
                                                            2022310056
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td
                                                className="px-4 py-3.5 hidden sm:table-cell"
                                            >
                                                <span
                                                    className="text-sm font-semibold text-gray-700 bg-gray-100 px-2 py-0.5 rounded-md"
                                                    >D-201</span
                                                >
                                            </td>
                                            <td className="px-4 py-3.5">
                                                <span
                                                    className="inline-flex items-center gap-1 text-xs font-medium bg-orange-50 text-orange-700 px-2.5 py-1 rounded-lg border border-orange-100"
                                                >
                                                    <i
                                                        className="fa-solid fa-person-running text-[9px]"
                                                    ></i>
                                                    Tidak Ikut Kegiatan
                                                </span>
                                            </td>
                                            <td
                                                className="px-4 py-3.5 hidden md:table-cell"
                                            >
                                                <span
                                                    className="text-sm text-gray-500"
                                                    >07 Jun 2025</span
                                                >
                                            </td>
                                            <td className="px-4 py-3.5 text-center">
                                                <span
                                                    className="text-sm font-extrabold text-orange-600"
                                                    >+5</span
                                                >
                                            </td>
                                            <td className="px-4 py-3.5 text-center">
                                                <span
                                                    className="inline-flex items-center gap-1 text-[10.5px] font-bold px-2 py-1 rounded-full bg-emerald-100 text-emerald-700"
                                                >
                                                    <i
                                                        className="fa-solid fa-circle-check text-[9px]"
                                                    ></i>
                                                    Tervalidasi
                                                </span>
                                            </td>
                                        </tr>

                                        
                                        <tr
                                            className="table-row hover:bg-indigo-50/30"
                                        >
                                            <td className="px-5 py-3.5">
                                                <div
                                                    className="flex items-center gap-3"
                                                >
                                                    <div
                                                        className="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center shrink-0"
                                                    >
                                                        <span
                                                            className="text-teal-700 text-[10px] font-bold"
                                                            >RP</span
                                                        >
                                                    </div>
                                                    <div>
                                                        <p
                                                            className="text-sm font-semibold text-gray-800"
                                                        >
                                                            Rizki Pratama
                                                        </p>
                                                        <p
                                                            className="text-[10.5px] text-gray-400"
                                                        >
                                                            2020510071
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td
                                                className="px-4 py-3.5 hidden sm:table-cell"
                                            >
                                                <span
                                                    className="text-sm font-semibold text-gray-700 bg-gray-100 px-2 py-0.5 rounded-md"
                                                    >B-105</span
                                                >
                                            </td>
                                            <td className="px-4 py-3.5">
                                                <span
                                                    className="inline-flex items-center gap-1 text-xs font-medium bg-amber-50 text-amber-700 px-2.5 py-1 rounded-lg border border-amber-100"
                                                >
                                                    <i
                                                        className="fa-solid fa-clock text-[9px]"
                                                    ></i>
                                                    Pulang Terlambat
                                                </span>
                                            </td>
                                            <td
                                                className="px-4 py-3.5 hidden md:table-cell"
                                            >
                                                <span
                                                    className="text-sm text-gray-500"
                                                    >06 Jun 2025</span
                                                >
                                            </td>
                                            <td className="px-4 py-3.5 text-center">
                                                <span
                                                    className="text-sm font-extrabold text-amber-600"
                                                    >+3</span
                                                >
                                            </td>
                                            <td className="px-4 py-3.5 text-center">
                                                <span
                                                    className="inline-flex items-center gap-1 text-[10.5px] font-bold px-2 py-1 rounded-full bg-gray-100 text-gray-500"
                                                >
                                                    <i
                                                        className="fa-solid fa-pen-to-square text-[9px]"
                                                    ></i>
                                                    Draft
                                                </span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            
                            <div
                                className="flex flex-col sm:flex-row items-center justify-between gap-3 px-5 py-3.5 border-t border-gray-100 bg-gray-50/60 shrink-0"
                            >
                                <p className="text-xs text-gray-500">
                                    Menampilkan
                                    <span className="font-bold text-gray-700"
                                        >1–6</span
                                    >
                                    dari
                                    <span className="font-bold text-gray-700"
                                        >34</span
                                    >
                                    pelanggaran
                                </p>
                                <div className="flex items-center gap-1">
                                    <button
                                        className="px-2.5 py-1.5 text-xs text-gray-500 hover:bg-gray-200 rounded-lg transition-colors"
                                    >
                                        <i className="fa-solid fa-chevron-left"></i>
                                    </button>
                                    <button
                                        className="px-3 py-1.5 text-xs bg-indigo-600 text-white rounded-lg font-bold shadow-sm"
                                    >
                                        1
                                    </button>
                                    <button
                                        className="px-3 py-1.5 text-xs text-gray-600 hover:bg-gray-200 rounded-lg transition-colors font-medium"
                                    >
                                        2
                                    </button>
                                    <button
                                        className="px-3 py-1.5 text-xs text-gray-600 hover:bg-gray-200 rounded-lg transition-colors font-medium"
                                    >
                                        3
                                    </button>
                                    <span className="px-1.5 text-gray-300 text-xs"
                                        >···</span
                                    >
                                    <button
                                        className="px-3 py-1.5 text-xs text-gray-600 hover:bg-gray-200 rounded-lg transition-colors font-medium"
                                    >
                                        6
                                    </button>
                                    <button
                                        className="px-2.5 py-1.5 text-xs text-gray-500 hover:bg-gray-200 rounded-lg transition-colors"
                                    >
                                        <i
                                            className="fa-solid fa-chevron-right"
                                        ></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        

                        
                        <div className="flex flex-col gap-5">
                            
                            <div
                                className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex-1"
                            >
                                <div
                                    className="flex items-center justify-between mb-5"
                                >
                                    <div>
                                        <h2
                                            className="text-sm font-bold text-gray-900"
                                        >
                                            Top Pelanggaran
                                        </h2>
                                        <p
                                            className="text-[10.5px] text-gray-400 mt-0.5"
                                        >
                                            Akumulasi poin tertinggi
                                        </p>
                                    </div>
                                    <a
                                        href="#"
                                        className="text-xs text-indigo-600 font-semibold hover:text-indigo-700 transition-colors"
                                        >Lihat Semua</a
                                    >
                                </div>
                                <div className="space-y-4">
                                    
                                    <div className="flex items-center gap-3">
                                        <div
                                            className="w-8 h-8 bg-rose-100 rounded-lg flex items-center justify-center shrink-0"
                                        >
                                            <span
                                                className="text-rose-700 text-[10px] font-bold"
                                                >BS</span
                                            >
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div
                                                className="flex items-center justify-between mb-1.5"
                                            >
                                                <p
                                                    className="text-xs font-semibold text-gray-800 truncate mr-2"
                                                >
                                                    Budi Santoso
                                                </p>
                                                <div
                                                    className="flex items-center gap-1 shrink-0"
                                                >
                                                    <span
                                                        className="text-xs font-bold text-rose-600"
                                                        >52</span
                                                    >
                                                    <span
                                                        className="text-[9px] bg-rose-500 text-white px-1.5 py-0.5 rounded font-bold leading-tight"
                                                        >KRITIS</span
                                                    >
                                                </div>
                                            </div>
                                            <div
                                                className="w-full bg-gray-100 rounded-full h-1.5"
                                            >
                                                <div
                                                    className="bg-rose-500 h-1.5 rounded-full"
                                                    style={{ width: '100%' }}
                                                ></div>
                                            </div>
                                            <p
                                                className="text-[9.5px] text-rose-500 font-medium mt-1"
                                            >
                                                Rekomendasi dikeluarkan ({'>'}50
                                                poin)
                                            </p>
                                        </div>
                                    </div>

                                    
                                    <div className="flex items-center gap-3">
                                        <div
                                            className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center shrink-0"
                                        >
                                            <span
                                                className="text-orange-700 text-[10px] font-bold"
                                                >DP</span
                                            >
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div
                                                className="flex items-center justify-between mb-1.5"
                                            >
                                                <p
                                                    className="text-xs font-semibold text-gray-800 truncate mr-2"
                                                >
                                                    Dewi Puspita
                                                </p>
                                                <div
                                                    className="flex items-center gap-1 shrink-0"
                                                >
                                                    <span
                                                        className="text-xs font-bold text-orange-600"
                                                        >38</span
                                                    >
                                                    <span
                                                        className="text-[9px] bg-orange-100 text-orange-700 px-1.5 py-0.5 rounded font-bold leading-tight border border-orange-200"
                                                        >Pembinaan</span
                                                    >
                                                </div>
                                            </div>
                                            <div
                                                className="w-full bg-gray-100 rounded-full h-1.5"
                                            >
                                                <div
                                                    className="bg-orange-400 h-1.5 rounded-full"
                                                    style={{ width: '76%' }}
                                                ></div>
                                            </div>
                                            <p
                                                className="text-[9.5px] text-gray-400 mt-1"
                                            >
                                                Pembinaan khusus ({'>'}30 poin)
                                            </p>
                                        </div>
                                    </div>

                                    
                                    <div className="flex items-center gap-3">
                                        <div
                                            className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center shrink-0"
                                        >
                                            <span
                                                className="text-amber-700 text-[10px] font-bold"
                                                >MF</span
                                            >
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div
                                                className="flex items-center justify-between mb-1.5"
                                            >
                                                <p
                                                    className="text-xs font-semibold text-gray-800 truncate mr-2"
                                                >
                                                    M. Faiz
                                                </p>
                                                <div
                                                    className="flex items-center gap-1 shrink-0"
                                                >
                                                    <span
                                                        className="text-xs font-bold text-amber-600"
                                                        >25</span
                                                    >
                                                    <span
                                                        className="text-[9px] bg-amber-100 text-amber-700 px-1.5 py-0.5 rounded font-bold leading-tight border border-amber-200"
                                                        >Peringatan 2</span
                                                    >
                                                </div>
                                            </div>
                                            <div
                                                className="w-full bg-gray-100 rounded-full h-1.5"
                                            >
                                                <div
                                                    className="bg-amber-400 h-1.5 rounded-full"
                                                    style={{ width: '50%' }}
                                                ></div>
                                            </div>
                                            <p
                                                className="text-[9.5px] text-gray-400 mt-1"
                                            >
                                                Peringatan ke-2 ({'>'}20 poin)
                                            </p>
                                        </div>
                                    </div>

                                    
                                    <div className="flex items-center gap-3">
                                        <div
                                            className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center shrink-0"
                                        >
                                            <span
                                                className="text-blue-700 text-[10px] font-bold"
                                                >NA</span
                                            >
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div
                                                className="flex items-center justify-between mb-1.5"
                                            >
                                                <p
                                                    className="text-xs font-semibold text-gray-800 truncate mr-2"
                                                >
                                                    Nurul Aini
                                                </p>
                                                <div
                                                    className="flex items-center gap-1 shrink-0"
                                                >
                                                    <span
                                                        className="text-xs font-bold text-blue-600"
                                                        >15</span
                                                    >
                                                    <span
                                                        className="text-[9px] bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded font-bold leading-tight border border-blue-200"
                                                        >Peringatan 1</span
                                                    >
                                                </div>
                                            </div>
                                            <div
                                                className="w-full bg-gray-100 rounded-full h-1.5"
                                            >
                                                <div
                                                    className="bg-blue-400 h-1.5 rounded-full"
                                                    style={{ width: '30%' }}
                                                ></div>
                                            </div>
                                            <p
                                                className="text-[9.5px] text-gray-400 mt-1"
                                            >
                                                Peringatan ke-1 ({'>'}10 poin)
                                            </p>
                                        </div>
                                    </div>

                                    
                                    <div className="flex items-center gap-3">
                                        <div
                                            className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center shrink-0"
                                        >
                                            <span
                                                className="text-slate-600 text-[10px] font-bold"
                                                >RP</span
                                            >
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div
                                                className="flex items-center justify-between mb-1.5"
                                            >
                                                <p
                                                    className="text-xs font-semibold text-gray-800 truncate mr-2"
                                                >
                                                    Rizki Pratama
                                                </p>
                                                <div
                                                    className="flex items-center gap-1 shrink-0"
                                                >
                                                    <span
                                                        className="text-xs font-bold text-slate-600"
                                                        >11</span
                                                    >
                                                    <span
                                                        className="text-[9px] bg-gray-100 text-gray-500 px-1.5 py-0.5 rounded font-bold leading-tight border border-gray-200"
                                                        >Peringatan 1</span
                                                    >
                                                </div>
                                            </div>
                                            <div
                                                className="w-full bg-gray-100 rounded-full h-1.5"
                                            >
                                                <div
                                                    className="bg-slate-400 h-1.5 rounded-full"
                                                    style={{ width: '22%' }}
                                                ></div>
                                            </div>
                                            <p
                                                className="text-[9.5px] text-gray-400 mt-1"
                                            >
                                                Peringatan ke-1 ({'>'}10 poin)
                                            </p>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            
                            <div
                                className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100"
                            >
                                <div
                                    className="flex items-center justify-between mb-4"
                                >
                                    <div>
                                        <h2
                                            className="text-sm font-bold text-gray-900"
                                        >
                                            Pendaftar Terbaru
                                        </h2>
                                        <p
                                            className="text-[10.5px] text-gray-400 mt-0.5"
                                        >
                                            Menunggu verifikasi admin
                                        </p>
                                    </div>
                                    <span
                                        className="text-[11px] bg-amber-100 text-amber-700 font-bold px-2.5 py-1 rounded-full border border-amber-200"
                                        >18 Pending</span
                                    >
                                </div>
                                <div className="space-y-2">
                                    
                                    <div
                                        className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-gray-50 cursor-pointer transition-colors"
                                    >
                                        <div
                                            className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center shrink-0"
                                        >
                                            <span
                                                className="text-indigo-700 text-[10px] font-bold"
                                                >SS</span
                                            >
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p
                                                className="text-xs font-semibold text-gray-800 truncate"
                                            >
                                                Siti Salimah
                                            </p>
                                            <p
                                                className="text-[10px] text-gray-400"
                                            >
                                                2024110098 — Tek.
                                                Informatika
                                            </p>
                                        </div>
                                        <div className="shrink-0 text-right">
                                            <span
                                                className="text-[10px] bg-amber-100 text-amber-700 px-1.5 py-0.5 rounded-full font-bold border border-amber-200"
                                                >Diajukan</span
                                            >
                                            <p
                                                className="text-[10px] text-gray-400 mt-0.5"
                                            >
                                                2 jam lalu
                                            </p>
                                        </div>
                                    </div>
                                    
                                    <div
                                        className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-gray-50 cursor-pointer transition-colors"
                                    >
                                        <div
                                            className="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center shrink-0"
                                        >
                                            <span
                                                className="text-teal-700 text-[10px] font-bold"
                                                >AW</span
                                            >
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p
                                                className="text-xs font-semibold text-gray-800 truncate"
                                            >
                                                Andi Wijaya
                                            </p>
                                            <p
                                                className="text-[10px] text-gray-400"
                                            >
                                                2024210045 — Manajemen
                                            </p>
                                        </div>
                                        <div className="shrink-0 text-right">
                                            <span
                                                className="text-[10px] bg-amber-100 text-amber-700 px-1.5 py-0.5 rounded-full font-bold border border-amber-200"
                                                >Diajukan</span
                                            >
                                            <p
                                                className="text-[10px] text-gray-400 mt-0.5"
                                            >
                                                5 jam lalu
                                            </p>
                                        </div>
                                    </div>
                                    
                                    <div
                                        className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-gray-50 cursor-pointer transition-colors"
                                    >
                                        <div
                                            className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center shrink-0"
                                        >
                                            <span
                                                className="text-purple-700 text-[10px] font-bold"
                                                >LF</span
                                            >
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p
                                                className="text-xs font-semibold text-gray-800 truncate"
                                            >
                                                Linda Fitri
                                            </p>
                                            <p
                                                className="text-[10px] text-gray-400"
                                            >
                                                2024310021 — Akuntansi
                                            </p>
                                        </div>
                                        <div className="shrink-0 text-right">
                                            <span
                                                className="text-[10px] bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded-full font-bold border border-blue-200"
                                                >Diverif.</span
                                            >
                                            <p
                                                className="text-[10px] text-gray-400 mt-0.5"
                                            >
                                                1 hari lalu
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                
                                <button
                                    className="mt-4 w-full flex items-center justify-center gap-2 py-2.5 text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl transition-colors shadow-sm shadow-indigo-200 active:scale-95"
                                >
                                    <i
                                        className="fa-solid fa-shield-check text-[11px]"
                                    ></i>
                                    Proses Semua Pendaftaran
                                </button>
                            </div>
                        </div>
                        
                    </section>
                    

                    
                    <section
                        className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 mb-6"
                    >
                        
                        <div
                            className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6"
                        >
                            <div>
                                <h2 className="text-base font-bold text-gray-900">
                                    Overview Kapasitas per Lantai {'&'} Hall
                                </h2>
                                <p className="text-xs text-gray-400 mt-0.5">
                                    Kapasitas, tingkat hunian, dan status kamar
                                    per lantai dan hall dalam satu gedung asrama
                                </p>
                            </div>
                            <a
                                href="#"
                                className="inline-flex items-center gap-2 text-xs px-3.5 py-2 bg-gray-100 text-gray-600 rounded-xl font-semibold hover:bg-gray-200 transition-colors self-start sm:self-auto whitespace-nowrap"
                            >
                                <i
                                    className="fa-solid fa-table-cells-large text-[11px]"
                                ></i>
                                Detail Semua Kamar
                            </a>
                        </div>

                        
                        
                        <div
                            className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4"
                        >
                            
                            <div
                                id="openFloorPlanModalBtn"
                                role="button"
                                tabIndex={0}
                                aria-haspopup="dialog"
                                aria-controls="floorPlanModal"
                                aria-label="Buka visualisasi denah kamar Lantai 1 - Hall A"
                                data-floor-plan-trigger="true"
                                data-floor-plan-title="Lantai 1 - Hall A"
                                className="p-4 border-2 border-gray-100 hover:border-indigo-200 rounded-2xl transition-all cursor-pointer hover:shadow-md"
                            >
                                <div
                                    className="flex items-center justify-between mb-4"
                                >
                                    <div className="flex items-center gap-2.5">
                                        <div
                                            className="w-9 h-9 bg-indigo-100 rounded-xl flex items-center justify-center shrink-0"
                                        >
                                            <i
                                                className="fa-solid fa-layer-group text-indigo-600"
                                            ></i>
                                        </div>
                                        <div>
                                            <p
                                                className="text-sm font-bold text-gray-800"
                                            >
                                                Lantai 1 - Hall A
                                            </p>
                                            <p
                                                className="text-[10px] text-gray-400"
                                            >
                                                Zona hunian aktif lantai 1
                                            </p>
                                        </div>
                                    </div>
                                    <span
                                        className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full border border-emerald-200"
                                        >Sebagian</span
                                    >
                                </div>
                                <div className="mb-3">
                                    <div
                                        className="flex justify-between text-xs mb-1.5"
                                    >
                                        <span className="text-gray-500"
                                            >Penghuni</span
                                        >
                                        <span className="font-bold text-gray-800"
                                            >64
                                            <span
                                                className="text-gray-400 font-normal"
                                                >/ 72</span
                                            ></span
                                        >
                                    </div>
                                    <div
                                        className="w-full bg-gray-100 rounded-full h-2.5"
                                    >
                                        <div
                                            className="bg-indigo-500 h-2.5 rounded-full"
                                            style={{ width: '89%' }}
                                        ></div>
                                    </div>
                                    <p
                                        className="text-right text-[10px] text-indigo-500 font-semibold mt-1"
                                    >
                                        89% terisi
                                    </p>
                                </div>
                                <div
                                    className="grid grid-cols-3 gap-1 pt-2 border-t border-gray-100"
                                >
                                    <div className="text-center py-1">
                                        <p
                                            className="text-sm font-bold text-rose-500"
                                        >
                                            5
                                        </p>
                                        <p
                                            className="text-[9.5px] text-gray-400 font-medium"
                                        >
                                            Penuh
                                        </p>
                                    </div>
                                    <div
                                        className="text-center py-1 border-x border-gray-100"
                                    >
                                        <p
                                            className="text-sm font-bold text-amber-500"
                                        >
                                            4
                                        </p>
                                        <p
                                            className="text-[9.5px] text-gray-400 font-medium"
                                        >
                                            Sebagian
                                        </p>
                                    </div>
                                    <div className="text-center py-1">
                                        <p
                                            className="text-sm font-bold text-emerald-500"
                                        >
                                            3
                                        </p>
                                        <p
                                            className="text-[9.5px] text-gray-400 font-medium"
                                        >
                                            Kosong
                                        </p>
                                    </div>
                                </div>
                            </div>

                            
                            <div
                                id="openFloorPlanModalBtnL1B"
                                role="button"
                                tabIndex={0}
                                aria-haspopup="dialog"
                                aria-controls="floorPlanModal"
                                aria-label="Buka visualisasi denah kamar Lantai 1 - Hall B"
                                data-floor-plan-trigger="true"
                                data-floor-plan-title="Lantai 1 - Hall B"
                                className="p-4 border-2 border-gray-100 hover:border-emerald-200 rounded-2xl transition-all cursor-pointer hover:shadow-md"
                            >
                                <div
                                    className="flex items-center justify-between mb-4"
                                >
                                    <div className="flex items-center gap-2.5">
                                        <div
                                            className="w-9 h-9 bg-emerald-100 rounded-xl flex items-center justify-center shrink-0"
                                        >
                                            <i
                                                className="fa-solid fa-layer-group text-emerald-600"
                                            ></i>
                                        </div>
                                        <div>
                                            <p
                                                className="text-sm font-bold text-gray-800"
                                            >
                                                Lantai 1 - Hall B
                                            </p>
                                            <p
                                                className="text-[10px] text-gray-400"
                                            >
                                                Zona hunian sisi barat lantai 1
                                            </p>
                                        </div>
                                    </div>
                                    <span
                                        className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full border border-emerald-200"
                                        >Sebagian</span
                                    >
                                </div>
                                <div className="mb-3">
                                    <div
                                        className="flex justify-between text-xs mb-1.5"
                                    >
                                        <span className="text-gray-500"
                                            >Penghuni</span
                                        >
                                        <span className="font-bold text-gray-800"
                                            >61
                                            <span
                                                className="text-gray-400 font-normal"
                                                >/ 72</span
                                            ></span
                                        >
                                    </div>
                                    <div
                                        className="w-full bg-gray-100 rounded-full h-2.5"
                                    >
                                        <div
                                            className="bg-emerald-500 h-2.5 rounded-full"
                                            style={{ width: '85%' }}
                                        ></div>
                                    </div>
                                    <p
                                        className="text-right text-[10px] text-emerald-500 font-semibold mt-1"
                                    >
                                        85% terisi
                                    </p>
                                </div>
                                <div
                                    className="grid grid-cols-3 gap-1 pt-2 border-t border-gray-100"
                                >
                                    <div className="text-center py-1">
                                        <p
                                            className="text-sm font-bold text-rose-500"
                                        >
                                            4
                                        </p>
                                        <p
                                            className="text-[9.5px] text-gray-400 font-medium"
                                        >
                                            Penuh
                                        </p>
                                    </div>
                                    <div
                                        className="text-center py-1 border-x border-gray-100"
                                    >
                                        <p
                                            className="text-sm font-bold text-amber-500"
                                        >
                                            5
                                        </p>
                                        <p
                                            className="text-[9.5px] text-gray-400 font-medium"
                                        >
                                            Sebagian
                                        </p>
                                    </div>
                                    <div className="text-center py-1">
                                        <p
                                            className="text-sm font-bold text-emerald-500"
                                        >
                                            3
                                        </p>
                                        <p
                                            className="text-[9.5px] text-gray-400 font-medium"
                                        >
                                            Kosong
                                        </p>
                                    </div>
                                </div>
                            </div>

                            
                            <div
                                id="openFloorPlanModalBtnL2A"
                                role="button"
                                tabIndex={0}
                                aria-haspopup="dialog"
                                aria-controls="floorPlanModal"
                                aria-label="Buka visualisasi denah kamar Lantai 2 - Hall A"
                                data-floor-plan-trigger="true"
                                data-floor-plan-title="Lantai 2 - Hall A"
                                className="p-4 border-2 border-amber-200 rounded-2xl transition-all cursor-pointer hover:shadow-md bg-amber-50/20"
                            >
                                <div
                                    className="flex items-center justify-between mb-4"
                                >
                                    <div className="flex items-center gap-2.5">
                                        <div
                                            className="w-9 h-9 bg-purple-100 rounded-xl flex items-center justify-center shrink-0"
                                        >
                                            <i
                                                className="fa-solid fa-layer-group text-purple-600"
                                            ></i>
                                        </div>
                                        <div>
                                            <p
                                                className="text-sm font-bold text-gray-800"
                                            >
                                                Lantai 2 - Hall A
                                            </p>
                                            <p
                                                className="text-[10px] text-gray-400"
                                            >
                                                Zona padat penghuni lantai 2
                                            </p>
                                        </div>
                                    </div>
                                    <span
                                        className="text-[10px] font-bold text-rose-600 bg-rose-50 px-2 py-1 rounded-full border border-rose-200"
                                        >Penuh</span
                                    >
                                </div>
                                <div className="mb-3">
                                    <div
                                        className="flex justify-between text-xs mb-1.5"
                                    >
                                        <span className="text-gray-500"
                                            >Penghuni</span
                                        >
                                        <span className="font-bold text-gray-800"
                                            >60
                                            <span
                                                className="text-gray-400 font-normal"
                                                >/ 60</span
                                            ></span
                                        >
                                    </div>
                                    <div
                                        className="w-full bg-gray-100 rounded-full h-2.5"
                                    >
                                        <div
                                            className="bg-amber-400 h-2.5 rounded-full"
                                            style={{ width: '100%' }}
                                        ></div>
                                    </div>
                                    <p
                                        className="text-right text-[10px] text-amber-500 font-semibold mt-1"
                                    >
                                        100% terisi
                                    </p>
                                </div>
                                <div
                                    className="grid grid-cols-3 gap-1 pt-2 border-t border-amber-100"
                                >
                                    <div className="text-center py-1">
                                        <p
                                            className="text-sm font-bold text-rose-500"
                                        >
                                            7
                                        </p>
                                        <p
                                            className="text-[9.5px] text-gray-400 font-medium"
                                        >
                                            Penuh
                                        </p>
                                    </div>
                                    <div
                                        className="text-center py-1 border-x border-amber-100"
                                    >
                                        <p
                                            className="text-sm font-bold text-amber-500"
                                        >
                                            3
                                        </p>
                                        <p
                                            className="text-[9.5px] text-gray-400 font-medium"
                                        >
                                            Sebagian
                                        </p>
                                    </div>
                                    <div className="text-center py-1">
                                        <p
                                            className="text-sm font-bold text-emerald-500"
                                        >
                                            0
                                        </p>
                                        <p
                                            className="text-[9.5px] text-gray-400 font-medium"
                                        >
                                            Kosong
                                        </p>
                                    </div>
                                </div>
                            </div>

                            
                            <div
                                id="openFloorPlanModalBtnL2B"
                                role="button"
                                tabIndex={0}
                                aria-haspopup="dialog"
                                aria-controls="floorPlanModal"
                                aria-label="Buka visualisasi denah kamar Lantai 2 - Hall B"
                                data-floor-plan-trigger="true"
                                data-floor-plan-title="Lantai 2 - Hall B"
                                className="p-4 border-2 border-gray-100 hover:border-blue-200 rounded-2xl transition-all cursor-pointer hover:shadow-md"
                            >
                                <div
                                    className="flex items-center justify-between mb-4"
                                >
                                    <div className="flex items-center gap-2.5">
                                        <div
                                            className="w-9 h-9 bg-rose-100 rounded-xl flex items-center justify-center shrink-0"
                                        >
                                            <i
                                                className="fa-solid fa-layer-group text-rose-500"
                                            ></i>
                                        </div>
                                        <div>
                                            <p
                                                className="text-sm font-bold text-gray-800"
                                            >
                                                Lantai 2 - Hall B
                                            </p>
                                            <p
                                                className="text-[10px] text-gray-400"
                                            >
                                                Zona hunian sisi timur lantai 2
                                            </p>
                                        </div>
                                    </div>
                                    <span
                                        className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full border border-emerald-200"
                                        >Sebagian</span
                                    >
                                </div>
                                <div className="mb-3">
                                    <div
                                        className="flex justify-between text-xs mb-1.5"
                                    >
                                        <span className="text-gray-500"
                                            >Penghuni</span
                                        >
                                        <span className="font-bold text-gray-800"
                                            >58
                                            <span
                                                className="text-gray-400 font-normal"
                                                >/ 60</span
                                            ></span
                                        >
                                    </div>
                                    <div
                                        className="w-full bg-gray-100 rounded-full h-2.5"
                                    >
                                        <div
                                            className="bg-blue-400 h-2.5 rounded-full"
                                            style={{ width: '97%' }}
                                        ></div>
                                    </div>
                                    <p
                                        className="text-right text-[10px] text-blue-500 font-semibold mt-1"
                                    >
                                        97% terisi
                                    </p>
                                </div>
                                <div
                                    className="grid grid-cols-3 gap-1 pt-2 border-t border-gray-100"
                                >
                                    <div className="text-center py-1">
                                        <p
                                            className="text-sm font-bold text-rose-500"
                                        >
                                            6
                                        </p>
                                        <p
                                            className="text-[9.5px] text-gray-400 font-medium"
                                        >
                                            Penuh
                                        </p>
                                    </div>
                                    <div
                                        className="text-center py-1 border-x border-gray-100"
                                    >
                                        <p
                                            className="text-sm font-bold text-amber-500"
                                        >
                                            3
                                        </p>
                                        <p
                                            className="text-[9.5px] text-gray-400 font-medium"
                                        >
                                            Sebagian
                                        </p>
                                    </div>
                                    <div className="text-center py-1">
                                        <p
                                            className="text-sm font-bold text-emerald-500"
                                        >
                                            1
                                        </p>
                                        <p
                                            className="text-[9.5px] text-gray-400 font-medium"
                                        >
                                            Kosong
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        
                        <div
                            className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 pt-4 border-t border-gray-100"
                        >
                            <div
                                className="flex items-center gap-2 text-xs text-gray-500"
                            >
                                <i
                                    className="fa-solid fa-users text-indigo-400"
                                ></i>
                                Total Penghuni:
                                <strong className="text-gray-800 ml-0.5"
                                    >243 mahasiswa</strong
                                >
                            </div>
                            <div
                                className="flex items-center gap-2 text-xs text-gray-500"
                            >
                                <i
                                    className="fa-solid fa-door-closed text-gray-400"
                                ></i>
                                Total Kapasitas:
                                <strong className="text-gray-800 ml-0.5"
                                    >264 tempat</strong
                                >
                            </div>
                            <div
                                className="flex items-center gap-2 text-xs text-gray-500"
                            >
                                <i
                                    className="fa-solid fa-chart-pie text-emerald-400"
                                ></i>
                                Tingkat Hunian:
                                <strong className="text-gray-800 ml-0.5"
                                    >92.0%</strong
                                >
                            </div>
                            <div
                                className="flex items-center gap-2 text-xs text-gray-500"
                            >
                                <i className="fa-solid fa-bed text-rose-400"></i>
                                Slot Tersisa:
                                <strong className="text-gray-800 ml-0.5"
                                    >21 tempat</strong
                                >
                            </div>
                        </div>
                    </section>
                    

                    
                    <div
                        id="floorPlanModal"
                        className="fixed inset-0 z-[80] hidden"
                        aria-hidden="true"
                    >
                        <div
                            id="floorPlanModalBackdrop"
                            className="absolute inset-0 bg-slate-900/60 backdrop-blur-[1px]"
                        ></div>

                        <div className="relative z-10 min-h-full w-full px-4 py-6 sm:px-6 lg:px-8 flex items-center justify-center">
                            <div
                                className="w-full max-w-6xl max-h-[90vh] rounded-3xl bg-white shadow-2xl border border-slate-200 overflow-hidden flex flex-col"
                                role="dialog"
                                aria-modal="true"
                                aria-labelledby="floorPlanModalTitle"
                            >
                                <div className="px-5 sm:px-6 py-4 border-b border-slate-100 bg-slate-50/95 backdrop-blur sticky top-0 z-20 flex items-start justify-between gap-4">
                                    <div>
                                        <h3 id="floorPlanModalTitle" className="text-lg font-bold text-slate-900">
                                            Visualisasi Denah Kamar Lantai 1 - Hall A
                                        </h3>
                                        <p className="text-xs sm:text-sm text-slate-500 mt-1">
                                            Monitor kapasitas kamar secara cepat melalui denah lorong hall.
                                        </p>
                                    </div>
                                    <button
                                        type="button"
                                        id="closeFloorPlanModalIcon"
                                        className="inline-flex items-center justify-center w-9 h-9 rounded-xl border border-slate-200 text-slate-500 hover:text-slate-700 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                                        aria-label="Tutup denah"
                                    >
                                        <i className="fa-solid fa-xmark"></i>
                                    </button>
                                </div>

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

                                <div className="px-5 sm:px-6 py-4 border-t border-slate-100 bg-white flex justify-end shrink-0">
                                    <button
                                        type="button"
                                        id="closeFloorPlanModalBtn"
                                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold border border-slate-200 text-slate-600 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                                    >
                                        Tutup
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    
                    <footer className="text-center py-4">
                        <p className="text-xs text-gray-400">
                            © 2025
                            <span className="font-semibold text-gray-500"
                                >SiMARA</span
                            >
                            — Sistem Informasi Manajemen Asrama. Versi
                            1.0.0 • Dikembangkan oleh Tim IT Asrama
                        </p>
                    </footer>
    </>
  );
}


