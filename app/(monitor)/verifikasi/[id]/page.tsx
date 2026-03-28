"use client";

import Link from "next/link";
import { use } from "react";

export default function VerificationDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = use(params);
  
  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-12">
      {/* ===== HEADER ===== */}
      <section className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs text-gray-400 mb-2">
            <Link href="/monitor" className="hover:text-indigo-500 transition-colors">
              <i className="fa-solid fa-house" aria-hidden="true"></i>
            </Link>
            <span>/</span>
            <Link href="/verifikasi" className="hover:text-indigo-500 transition-colors">
              Verifikasi Pendaftaran
            </Link>
            <span>/</span>
            <span className="text-indigo-500 font-semibold">{resolvedParams.id}</span>
          </div>
          <h1 className="text-2xl sm:text-[28px] font-bold text-gray-900 leading-tight">
            Detail Verifikasi
          </h1>
          <p className="text-gray-500 text-sm mt-1.5 max-w-2xl">
            Tinjau kelengkapan data dan dokumen untuk pendaftar {resolvedParams.id}.
          </p>
        </div>
        
        <div className="flex items-center gap-3">
           <span className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full bg-amber-100 text-amber-700 border border-amber-200">
             <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></span>
             Status: Diajukan
           </span>
        </div>
      </section>

      {/* ===== APPLICANT CARD ===== */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6 md:p-8 flex items-start gap-5 flex-col md:flex-row border-b border-gray-100">
          <div className="w-20 h-20 bg-gradient-to-br from-indigo-100 to-indigo-50 rounded-2xl flex items-center justify-center shrink-0 border border-indigo-100 shadow-inner">
            <span className="text-indigo-700 text-2xl font-bold">SS</span>
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-bold text-gray-900">Siti Salimah</h2>
            <div className="mt-2 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-lg font-medium border border-gray-200">
                <i className="fa-solid fa-id-badge text-gray-400"></i>2024110098
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-lg font-medium border border-gray-200">
                <i className="fa-solid fa-graduation-cap text-gray-400"></i>Teknik Informatika
              </span>
            </div>
          </div>
          <div className="shrink-0 space-y-2 w-full md:w-auto mt-4 md:mt-0">
             <div className="text-sm font-semibold text-gray-700 mb-1">Pilihan Gedung:</div>
             <div className="bg-blue-50 border border-blue-100 p-3 rounded-xl flex items-center gap-3">
               <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm text-blue-600">
                 <i className="fa-solid fa-building"></i>
               </div>
               <div>
                  <div className="text-xs text-blue-600 font-bold">Gedung C (Putri)</div>
                  <div className="text-[10px] text-blue-500">Kapasitas Tersedia: 12</div>
               </div>
             </div>
          </div>
        </div>

        {/* ===== DETAILS GRID ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-100">
          {/* Biodata */}
          <div className="p-6 md:p-8">
            <h3 className="text-sm font-bold text-gray-900 mb-4 flex items-center gap-2">
              <i className="fa-solid fa-user text-indigo-500"></i> Biodata Lengkap
            </h3>
            <div className="space-y-4">
               <div>
                 <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-0.5">Email</div>
                 <div className="text-sm font-medium text-gray-800">siti.salimah@mahasiswa.ac.id</div>
               </div>
               <div>
                 <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-0.5">Nomor Handphone</div>
                 <div className="text-sm font-medium text-gray-800">0812-3456-7890</div>
               </div>
               <div>
                 <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-0.5">Kontak Darurat (Wali)</div>
                 <div className="text-sm font-medium text-gray-800">0811-9876-5432 (Ayah)</div>
               </div>
               <div>
                 <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-0.5">Alasan Mendaftar</div>
                 <div className="text-sm text-gray-600 bg-gray-50 p-3 rounded-xl border border-gray-100 italic">
                  &quot;Saya dari luar kota dan membutuhkan tempat tinggal yang mendukung akademik agar saya dapat fokus belajar di tahun pertama.&quot;
                 </div>
               </div>
            </div>
          </div>

          {/* Documents */}
          <div className="p-6 md:p-8 bg-gray-50/50">
            <h3 className="text-sm font-bold text-gray-900 mb-4 flex items-center gap-2">
              <i className="fa-solid fa-file-shield text-indigo-500"></i> Kelengkapan Dokumen
            </h3>
            <div className="space-y-3">
               {/* Doc 1 */}
               <div className="flex items-center justify-between p-3 bg-white border border-gray-200 rounded-xl hover:border-indigo-300 transition-colors group cursor-pointer shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                       <i className="fa-solid fa-id-card"></i>
                    </div>
                    <div>
                       <div className="text-sm font-semibold text-gray-800 group-hover:text-indigo-700 transition-colors">KTM / KTP</div>
                       <div className="text-[10px] text-gray-400">ktm_salimah.pdf &bull; 1.2 MB</div>
                    </div>
                  </div>
                  <i className="fa-solid fa-arrow-up-right-from-square text-gray-400 text-xs"></i>
               </div>

               {/* Doc 2 */}
               <div className="flex items-center justify-between p-3 bg-white border border-gray-200 rounded-xl hover:border-indigo-300 transition-colors group cursor-pointer shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                       <i className="fa-solid fa-file-lines"></i>
                    </div>
                    <div>
                       <div className="text-sm font-semibold text-gray-800 group-hover:text-indigo-700 transition-colors">KHS Terakhir</div>
                       <div className="text-[10px] text-gray-400">khs_sem2.pdf &bull; 800 KB</div>
                    </div>
                  </div>
                  <i className="fa-solid fa-arrow-up-right-from-square text-gray-400 text-xs"></i>
               </div>

               {/* Doc 3 */}
               <div className="flex items-center justify-between p-3 bg-white border border-gray-200 rounded-xl hover:border-indigo-300 transition-colors group cursor-pointer shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                       <i className="fa-solid fa-file-signature"></i>
                    </div>
                    <div>
                       <div className="text-sm font-semibold text-gray-800 group-hover:text-indigo-700 transition-colors">Surat Persetujuan Orang Tua</div>
                       <div className="text-[10px] text-gray-400">surat_ot_salimah.pdf &bull; 2.1 MB</div>
                    </div>
                  </div>
                  <i className="fa-solid fa-arrow-up-right-from-square text-gray-400 text-xs"></i>
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== ACTION BAR ===== */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
           <div className="text-sm font-bold text-gray-900">Keputusan Verifikasi</div>
           <div className="text-xs text-gray-500 mt-1">Pastikan seluruh data valid sebelum membuat keputusan.</div>
        </div>
        <div className="flex w-full md:w-auto gap-3">
          <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-3 border border-gray-200 text-gray-600 bg-white hover:bg-gray-50 rounded-xl font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 shadow-sm text-sm">
             <i className="fa-solid fa-comment-dots text-gray-400"></i>
             Minta Revisi
          </button>
          <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-3 bg-rose-50 text-rose-700 hover:bg-rose-100 rounded-xl font-bold transition-colors border border-rose-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 shadow-sm text-sm">
             <i className="fa-solid fa-circle-xmark"></i>
             Tolak
          </button>
          <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-8 py-3 bg-emerald-600 text-white hover:bg-emerald-700 rounded-xl font-bold transition-colors shadow-md shadow-emerald-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 text-sm">
             <i className="fa-solid fa-check"></i>
             Terima &amp; Alokasikan
          </button>
        </div>
      </div>
    </div>
  );
}
