"use client";

import { useState } from "react";
import CatatPelanggaranModal from "./CatatPelanggaranModal";

export default function CatatPelanggaranClient() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="space-y-6">
      <section className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
        <div>
          <p className="text-xs text-indigo-600 font-semibold tracking-wide uppercase mb-2">Panel Monitor</p>
          <h1 className="text-2xl sm:text-[28px] font-bold text-gray-900 leading-tight">
            Catat &amp; Riwayat Pelanggaran
          </h1>
          <p className="text-gray-500 text-sm mt-1.5 max-w-2xl">
            Pantau tren pelanggaran asrama, tindak lanjut pembinaan, dan histori catatan secara mandiri.
          </p>
        </div>
        <button
          id="openViolationModalBtn"
          type="button"
          onClick={() => setIsModalOpen(true)}
          className="inline-flex items-center gap-2 px-4 py-2.5 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 font-semibold text-sm shadow-md shadow-indigo-200 transition-all active:scale-95"
        >
          <i className="fa-solid fa-plus text-xs" aria-hidden="true"></i>
          Catat Pelanggaran Baru
        </button>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <article className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
          <div className="flex items-start justify-between mb-3">
             <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
               Total Bulan Ini
             </p>
             <div className="w-10 h-10 bg-rose-50 rounded-xl flex items-center justify-center shrink-0">
               <i className="fa-solid fa-chart-line text-rose-500"></i>
             </div>
          </div>
          <p className="text-[32px] font-bold text-gray-900 leading-none mb-3">34</p>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 text-xs font-bold text-rose-600 bg-rose-50 px-2.5 py-1 rounded-lg">
              <i className="fa-solid fa-arrow-trend-up text-[10px]"></i>+6
            </span>
            <span className="text-xs text-slate-500">dibanding bulan lalu</span>
          </div>
          <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-rose-50 rounded-full opacity-50 border border-rose-100/50"></div>
        </article>

        <article className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
          <div className="flex items-start justify-between mb-3">
             <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
               Perlu Ditindaklanjuti
             </p>
             <div className="w-10 h-10 bg-amber-50 rounded-xl flex items-center justify-center shrink-0">
               <i className="fa-solid fa-triangle-exclamation text-amber-500"></i>
             </div>
          </div>
          <p className="text-[32px] font-bold text-gray-900 leading-none mb-3">4</p>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 text-xs font-bold text-amber-600 bg-amber-50 px-2.5 py-1 rounded-lg">
              Dalam pantauan
            </span>
          </div>
           <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-amber-50 rounded-full opacity-50 border border-amber-100/50"></div>
        </article>

        <article className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
           <div className="flex items-start justify-between mb-3">
             <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
               Kategori Terbanyak
             </p>
             <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center shrink-0">
               <i className="fa-solid fa-clock text-indigo-500"></i>
             </div>
          </div>
          <p className="text-lg font-bold text-slate-900 mb-1 leading-tight">Kedisiplinan Waktu</p>
          <p className="text-xs text-slate-500 mt-2">12 kejadian dalam 30 hari terakhir</p>
           <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-indigo-50 rounded-full opacity-50 border border-indigo-100/50"></div>
        </article>
      </section>

      <section className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col">
        <div className="px-5 py-4 border-b border-gray-100 bg-gray-50/50 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h2 className="text-base font-bold text-gray-900">Riwayat Pelanggaran Mahasiswa</h2>
            <p className="text-xs text-gray-500 mt-0.5">Menampilkan seluruh catatan pelanggaran yang dilaporkan</p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3">
            <div className="w-full sm:w-auto relative">
               <i className="fa-solid fa-magnifying-glass absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs"></i>
               <input
                 type="search"
                 placeholder="Cari mahasiswa, kamar..."
                 className="w-full sm:w-56 pl-9 pr-3 py-2 text-sm bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all font-medium"
               />
            </div>
            
            <select className="w-full sm:w-auto text-sm bg-white border border-gray-200 rounded-xl px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer font-medium hover:bg-gray-50 transition-colors">
              <option value="all">Semua Kategori</option>
              <option value="ringan">Ringan</option>
              <option value="sedang">Sedang</option>
              <option value="berat">Berat/Kritis</option>
            </select>
            
            <select className="w-full sm:w-auto text-sm bg-white border border-gray-200 rounded-xl px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer font-medium hover:bg-gray-50 transition-colors">
              <option value="all">Bulan Ini</option>
              <option value="2026-02">Februari 2026</option>
              <option value="2026-01">Januari 2026</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto flex-1">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-50/80 border-b border-gray-100">
              <tr>
                <th className="px-5 py-3.5 text-left text-[11px] font-bold uppercase tracking-wider text-gray-500">Tanggal</th>
                <th className="px-5 py-3.5 text-left text-[11px] font-bold uppercase tracking-wider text-gray-500">Mahasiswa</th>
                <th className="px-5 py-3.5 text-left text-[11px] font-bold uppercase tracking-wider text-gray-500">Kamar</th>
                <th className="px-5 py-3.5 text-left text-[11px] font-bold uppercase tracking-wider text-gray-500">Detail Pelanggaran</th>
                <th className="px-5 py-3.5 text-center text-[11px] font-bold uppercase tracking-wider text-gray-500">Poin</th>
                <th className="px-5 py-3.5 text-center text-[11px] font-bold uppercase tracking-wider text-gray-500">Opsi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50 bg-white">
              {/* Row 1 */}
              <tr className="hover:bg-indigo-50/30 transition-colors">
                <td className="px-5 py-3.5 text-xs text-gray-600 font-medium whitespace-nowrap">18 Mar 2026</td>
                <td className="px-5 py-3.5">
                   <div className="flex flex-col">
                      <span className="font-bold text-gray-800">Rafael Aditya</span>
                      <span className="text-[10px] text-gray-400">Teknik Informatika</span>
                   </div>
                </td>
                <td className="px-5 py-3.5">
                   <span className="text-xs font-semibold text-gray-600 bg-gray-100 px-2 py-1 rounded-md">A-108</span>
                </td>
                <td className="px-5 py-3.5">
                  <div className="flex flex-col gap-1">
                    <span className="text-xs text-gray-700 font-medium">Terlambat Check Point Malam</span>
                    <div>
                      <span className="inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-bold bg-amber-100 text-amber-700 border border-amber-200">
                        Ringan
                      </span>
                    </div>
                  </div>
                </td>
                <td className="px-5 py-3.5 text-center font-black text-rose-500">-5</td>
                <td className="px-5 py-3.5 text-center">
                  <div className="flex items-center justify-center gap-2">
                     <span className="inline-flex items-center justify-center text-[10px] font-bold text-emerald-600 bg-emerald-50 border border-emerald-200 px-2 py-1 rounded-lg">
                       Selesai
                     </span>
                     <button type="button" title="Detail" className="text-indigo-600 hover:bg-indigo-100 p-1.5 rounded-lg transition-colors border border-transparent hover:border-indigo-200">
                       <i className="fa-solid fa-eye text-xs"></i>
                     </button>
                  </div>
                </td>
              </tr>

              {/* Row 2 */}
              <tr className="hover:bg-indigo-50/30 transition-colors">
                <td className="px-5 py-3.5 text-xs text-gray-600 font-medium whitespace-nowrap">17 Mar 2026</td>
                <td className="px-5 py-3.5">
                   <div className="flex flex-col">
                      <span className="font-bold text-gray-800">Nabila Azizah</span>
                      <span className="text-[10px] text-gray-400">Psikologi</span>
                   </div>
                </td>
                <td className="px-5 py-3.5">
                   <span className="text-xs font-semibold text-gray-600 bg-gray-100 px-2 py-1 rounded-md">B-117</span>
                </td>
                <td className="px-5 py-3.5">
                  <div className="flex flex-col gap-1">
                    <span className="text-xs text-gray-700 font-medium">Absen Worship Malam</span>
                    <div>
                      <span className="inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-bold bg-orange-100 text-orange-700 border border-orange-200">
                        Sedang
                      </span>
                    </div>
                  </div>
                </td>
                <td className="px-5 py-3.5 text-center font-black text-rose-500">-15</td>
                <td className="px-5 py-3.5 text-center">
                  <div className="flex items-center justify-center gap-2">
                     <span className="inline-flex items-center justify-center text-[10px] font-bold text-amber-600 bg-amber-50 border border-amber-200 px-2 py-1 rounded-lg">
                       Monitoring
                     </span>
                     <button type="button" title="Detail" className="text-indigo-600 hover:bg-indigo-100 p-1.5 rounded-lg transition-colors border border-transparent hover:border-indigo-200">
                       <i className="fa-solid fa-eye text-xs"></i>
                     </button>
                  </div>
                </td>
              </tr>

              {/* Row 3 */}
              <tr className="hover:bg-indigo-50/30 transition-colors">
                <td className="px-5 py-3.5 text-xs text-gray-600 font-medium whitespace-nowrap">15 Mar 2026</td>
                <td className="px-5 py-3.5">
                   <div className="flex flex-col">
                      <span className="font-bold text-gray-800">Bagas Pratama</span>
                      <span className="text-[10px] text-gray-400">Manajemen</span>
                   </div>
                </td>
                <td className="px-5 py-3.5">
                   <span className="text-xs font-semibold text-gray-600 bg-gray-100 px-2 py-1 rounded-md">A-204</span>
                </td>
                <td className="px-5 py-3.5">
                  <div className="flex flex-col gap-1">
                    <span className="text-xs text-gray-700 font-medium">Keluar Asrama Tanpa Izin</span>
                    <div>
                      <span className="inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-bold bg-rose-100 text-rose-700 border border-rose-200">
                        Berat
                      </span>
                    </div>
                  </div>
                </td>
                <td className="px-5 py-3.5 text-center font-black text-rose-500">-30</td>
                <td className="px-5 py-3.5 text-center">
                  <div className="flex items-center justify-center gap-2">
                     <span className="inline-flex items-center justify-center text-[10px] font-bold text-rose-600 bg-rose-50 border border-rose-200 px-2 py-1 rounded-lg animate-pulse">
                       SP1
                     </span>
                     <button type="button" title="Detail / Tindak Lanjut" className="text-indigo-600 hover:bg-indigo-100 p-1.5 rounded-lg transition-colors border border-transparent hover:border-indigo-200">
                       <i className="fa-solid fa-file-pen text-xs"></i>
                     </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="px-5 py-3.5 border-t border-gray-100 bg-gray-50/60 flex items-center justify-between text-xs text-gray-500">
           <span>Menampilkan 3 laporan terbaru</span>
           <button className="font-semibold text-indigo-600 hover:text-indigo-700">Lihat halaman selanjutnya &rarr;</button>
        </div>
      </section>

      <CatatPelanggaranModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
