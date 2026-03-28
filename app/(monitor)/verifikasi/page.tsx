"use client";

import Link from "next/link";

export default function VerifikasiPendaftaranPage() {
  return (
    <div className="space-y-6">
      {/* ===== HEADER ===== */}
      <section className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs text-gray-400 mb-2">
            <Link href="/monitor" className="hover:text-indigo-500 transition-colors">
              <i className="fa-solid fa-house" aria-hidden="true"></i>
            </Link>
            <span>/</span>
            <span className="text-indigo-500 font-semibold">Verifikasi Pendaftaran</span>
          </div>
          <h1 className="text-2xl sm:text-[28px] font-bold text-gray-900 leading-tight">
            Verifikasi Pendaftaran
          </h1>
          <p className="text-gray-500 text-sm mt-1.5 max-w-2xl">
            Tinjau dan proses pendaftaran kamar mahasiswa baru.
          </p>
        </div>
      </section>

      {/* ===== ALERT ===== */}
      <div className="bg-amber-50 border border-amber-200 rounded-2xl px-5 py-4 flex items-start gap-3 shadow-sm">
        <div className="w-8 h-8 bg-amber-100 rounded-xl flex items-center justify-center shrink-0 mt-0.5">
          <i className="fa-solid fa-bell text-amber-600 text-sm"></i>
        </div>
        <div className="flex-1">
          <p className="text-sm font-bold text-amber-800">18 Pendaftaran Menunggu Verifikasi</p>
          <p className="text-xs text-amber-700 mt-0.5">
            Segera proses pendaftaran yang masuk untuk memperlancar penempatan kamar mahasiswa baru.
          </p>
        </div>
      </div>

      {/* ===== FILTERS ===== */}
      <div className="flex items-center gap-2 flex-wrap">
        <span className="text-xs text-gray-500 font-medium">Filter:</span>
        <button className="text-xs px-3 py-1.5 bg-indigo-600 text-white rounded-lg font-semibold shadow-sm">
          Semua (18)
        </button>
        <button className="text-xs px-3 py-1.5 bg-white border border-gray-200 text-gray-600 rounded-lg hover:bg-gray-50 transition-colors font-medium">
          Diajukan (12)
        </button>
        <button className="text-xs px-3 py-1.5 bg-white border border-gray-200 text-gray-600 rounded-lg hover:bg-gray-50 transition-colors font-medium">
          Diverifikasi (6)
        </button>
      </div>

      {/* ===== GRID LIST ===== */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {/* Card 1 */}
        <div className="verify-card bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between px-5 py-3.5 border-b border-gray-100 bg-gray-50/50">
            <span className="text-xs font-mono font-bold text-gray-600">REG-2025-001</span>
            <div className="flex items-center gap-2">
              <span className="text-[10.5px] text-gray-400">2 jam lalu</span>
              <span className="inline-flex items-center gap-1 text-[10.5px] font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-700 border border-amber-200">
                <span className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-pulse"></span>
                Diajukan
              </span>
            </div>
          </div>
          <div className="p-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 bg-indigo-100 rounded-xl flex items-center justify-center shrink-0 text-indigo-700 font-bold">
                SS
              </div>
              <div>
                <p className="text-sm font-bold text-gray-800">Siti Salimah</p>
                <p className="text-xs text-gray-500">2024110098 &bull; Teknik Informatika</p>
                <span className="text-[10px] bg-gray-100 text-gray-500 px-1.5 py-0.5 rounded font-medium mt-1 inline-block">
                  Ganjil 2025/2026
                </span>
              </div>
            </div>

            <div className="space-y-1.5 mb-5">
              <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Dokumen</p>
              <div className="grid grid-cols-3 gap-2">
                <div className="flex items-center justify-center gap-1.5 text-[10.5px] text-emerald-700 font-semibold bg-emerald-50 px-2 py-1.5 rounded-lg border border-emerald-200">
                  <i className="fa-solid fa-circle-check text-emerald-500 text-[9px]"></i>KTM
                </div>
                <div className="flex items-center justify-center gap-1.5 text-[10.5px] text-emerald-700 font-semibold bg-emerald-50 px-2 py-1.5 rounded-lg border border-emerald-200">
                  <i className="fa-solid fa-circle-check text-emerald-500 text-[9px]"></i>KHS
                </div>
                <div className="flex items-center justify-center gap-1.5 text-[10.5px] text-emerald-700 font-semibold bg-emerald-50 px-2 py-1.5 rounded-lg border border-emerald-200">
                  <i className="fa-solid fa-circle-check text-emerald-500 text-[9px]"></i>Surat OT
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <Link
                href="/verifikasi/REG-2025-001"
                className="flex items-center justify-center gap-1.5 py-2 text-xs font-semibold text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none"
              >
                <i className="fa-solid fa-eye text-[10px]"></i>Detail Review
              </Link>
              <button className="flex items-center justify-center gap-1.5 py-2 text-xs font-bold text-emerald-700 bg-emerald-100 hover:bg-emerald-200 rounded-xl transition-colors border border-emerald-200 focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:outline-none">
                <i className="fa-solid fa-circle-check text-[10px]"></i>Terima
              </button>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="verify-card bg-white rounded-2xl shadow-sm border border-amber-200 overflow-hidden hover:shadow-md transition-shadow relative">
           <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-amber-100/50 to-transparent rounded-bl-3xl z-0"></div>
          <div className="flex items-center justify-between px-5 py-3.5 border-b border-amber-100 bg-amber-50/30 relative z-10">
            <span className="text-xs font-mono font-bold text-gray-600">REG-2025-002</span>
            <div className="flex items-center gap-2">
              <span className="text-[10.5px] text-gray-400">5 jam lalu</span>
              <span className="inline-flex items-center gap-1 text-[10.5px] font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-700 border border-amber-200">
                <span className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-pulse"></span>
                Diajukan
              </span>
            </div>
          </div>
          <div className="p-5 relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 bg-teal-100 rounded-xl flex items-center justify-center shrink-0 text-teal-700 font-bold">
                AW
              </div>
              <div>
                <p className="text-sm font-bold text-gray-800">Andi Wijaya</p>
                <p className="text-xs text-gray-500">2024210045 &bull; Manajemen</p>
                <span className="text-[10px] bg-gray-100 text-gray-500 px-1.5 py-0.5 rounded font-medium mt-1 inline-block">
                  Ganjil 2025/2026
                </span>
              </div>
            </div>

            <div className="space-y-1.5 mb-5">
              <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Dokumen</p>
              <div className="grid grid-cols-3 gap-2">
                <div className="flex items-center justify-center gap-1.5 text-[10.5px] text-emerald-700 font-semibold bg-emerald-50 px-2 py-1.5 rounded-lg border border-emerald-200">
                  <i className="fa-solid fa-circle-check text-emerald-500 text-[9px]"></i>KTM
                </div>
                <div className="flex items-center justify-center gap-1.5 text-[10.5px] text-amber-700 font-semibold bg-amber-50 px-2 py-1.5 rounded-lg border border-amber-200">
                  <i className="fa-solid fa-clock text-amber-500 text-[9px]"></i>KHS
                </div>
                <div className="flex items-center justify-center gap-1.5 text-[10.5px] text-emerald-700 font-semibold bg-emerald-50 px-2 py-1.5 rounded-lg border border-emerald-200">
                  <i className="fa-solid fa-circle-check text-emerald-500 text-[9px]"></i>Surat OT
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <Link
                href="/verifikasi/REG-2025-002"
                 className="flex items-center justify-center gap-1.5 py-2 text-xs font-semibold text-indigo-600 bg-indigo-50 hover:bg-indigo-100 rounded-xl transition-colors focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none"
              >
                <i className="fa-solid fa-arrow-right text-[10px]"></i>Proses Sekarang
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
