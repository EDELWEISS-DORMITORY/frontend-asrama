import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Poin Pelanggaran | SiMARA",
};

export default function PoinPelanggaranPage() {
  return (
    <>
                    <section className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                        <div>
                            <p className="text-xs text-indigo-600 font-semibold tracking-wide uppercase mb-2">Dashboard Operasional</p>
                            <h1 className="text-2xl sm:text-[28px] font-bold text-gray-900 leading-tight [text-wrap:balance]">
                                Manajemen Poin Pelanggaran
                            </h1>
                            <p className="text-gray-500 text-sm mt-1.5 max-w-2xl">
                                Pantau tren pelanggaran, tindak lanjut pembinaan, dan eskalasi SP dalam satu panel kerja.
                            </p>
                        </div>
                        <button
                            id="openViolationModalBtn"
                            type="button"
                            className="inline-flex items-center gap-2 px-4 py-2.5 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 font-semibold text-sm shadow-md shadow-indigo-200"
                        >
                            <i className="fa-solid fa-plus text-xs" aria-hidden="true"></i>
                            Catat Pelanggaran
                        </button>
                    </section>

                    <section className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
                        <article className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm">
                            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                                Total Pelanggaran Bulan Ini
                            </p>
                            <p className="text-3xl font-bold text-rose-500 [font-variant-numeric:tabular-nums]">34</p>
                            <p className="text-xs text-slate-500 mt-1.5">+6 dibanding bulan lalu</p>
                        </article>

                        <article className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm">
                            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                                Mahasiswa Poin Kritis (SP)
                            </p>
                            <p className="text-3xl font-bold text-amber-500 [font-variant-numeric:tabular-nums]">4</p>
                            <p className="text-xs text-slate-500 mt-1.5">2 perlu SP2 minggu ini</p>
                        </article>

                        <article className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm">
                            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                                Kategori Pelanggaran Terbanyak
                            </p>
                            <p className="text-lg font-bold text-slate-900">Kedisiplinan Waktu</p>
                            <p className="text-xs text-slate-500 mt-1.5">12 kejadian dalam 30 hari terakhir</p>
                        </article>
                    </section>

                    <section className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                        <div className="px-4 sm:px-6 pt-5 pb-4 border-b border-gray-100">
                            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3">
                                <div>
                                    <h2 className="text-lg font-bold text-gray-900">Riwayat Pelanggaran Terbaru</h2>
                                    <p id="tableSummary" className="text-xs text-gray-500 mt-1">Menampilkan 6 dari 6 catatan.</p>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 w-full lg:w-auto">
                                    <div className="sm:col-span-2">
                                        <label htmlFor="searchViolation" className="sr-only">Cari nama mahasiswa</label>
                                        <div
                                            className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:border-indigo-500"
                                        >
                                            <i className="fa-solid fa-magnifying-glass text-gray-400 text-xs" aria-hidden="true"></i>
                                            <input
                                                id="searchViolation"
                                                name="searchViolation"
                                                autoComplete="off"
                                                type="search"
                                                placeholder="Cari nama mahasiswa…"
                                                className="bg-transparent w-full text-sm text-gray-700 placeholder-gray-400 outline-none"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="filterCategory" className="sr-only">Filter kategori</label>
                                        <select
                                            id="filterCategory"
                                            name="filterCategory"
                                            autoComplete="off"
                                            className="w-full text-sm bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                        >
                                            <option value="all">Semua Kategori</option>
                                            <option value="ringan">Ringan</option>
                                            <option value="sedang">Sedang</option>
                                            <option value="berat">Berat/Kritis</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-2.5 w-full sm:w-56">
                                <label htmlFor="filterMonth" className="sr-only">Filter bulan</label>
                                <select
                                    id="filterMonth"
                                    name="filterMonth"
                                    autoComplete="off"
                                    className="w-full text-sm bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                >
                                    <option value="all">Semua Bulan</option>
                                    <option value="2026-03">Maret 2026</option>
                                    <option value="2026-02">Februari 2026</option>
                                    <option value="2026-01">Januari 2026</option>
                                </select>
                            </div>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="min-w-full text-sm">
                                <thead className="bg-gray-50 border-b border-gray-100">
                                    <tr>
                                        <th className="px-4 sm:px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">Tanggal</th>
                                        <th className="px-4 sm:px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">Nama Mahasiswa</th>
                                        <th className="px-4 sm:px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">Kamar (Lantai/Hall)</th>
                                        <th className="px-4 sm:px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">Jenis Pelanggaran</th>
                                        <th className="px-4 sm:px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">Poin Minus (-)</th>
                                        <th className="px-4 sm:px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">Status/Aksi</th>
                                    </tr>
                                </thead>
                                <tbody id="violationTableBody" className="divide-y divide-gray-100 bg-white">
                                    <tr className="table-row hover:bg-gray-50" data-name="rafael aditya" data-category="ringan" data-month="2026-03">
                                        <td className="px-4 sm:px-6 py-3.5 text-gray-600 [font-variant-numeric:tabular-nums]">18 Mar 2026</td>
                                        <td className="px-4 sm:px-6 py-3.5 font-semibold text-gray-800">Rafael Aditya</td>
                                        <td className="px-4 sm:px-6 py-3.5 text-gray-700">Lantai 1 - Hall A / Kamar 108</td>
                                        <td className="px-4 sm:px-6 py-3.5">
                                            <div className="flex items-center gap-2">
                                                <span className="inline-flex items-center px-2 py-1 rounded-full text-[11px] font-semibold bg-amber-100 text-amber-700 border border-amber-200">Ringan</span>
                                                <span className="text-gray-700">Terlambat Check Point Malam</span>
                                            </div>
                                        </td>
                                        <td className="px-4 sm:px-6 py-3.5 font-bold text-rose-500 [font-variant-numeric:tabular-nums]">-5</td>
                                        <td className="px-4 sm:px-6 py-3.5">
                                            <div className="flex items-center gap-2">
                                                <span className="inline-flex items-center px-2 py-1 rounded-full text-[11px] font-semibold bg-emerald-100 text-emerald-700 border border-emerald-200">Selesai</span>
                                                <button type="button" className="text-xs font-semibold text-indigo-600 hover:text-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-md px-1">Detail</button>
                                            </div>
                                        </td>
                                    </tr>

                                    <tr className="table-row hover:bg-gray-50" data-name="nabila azizah" data-category="sedang" data-month="2026-03">
                                        <td className="px-4 sm:px-6 py-3.5 text-gray-600 [font-variant-numeric:tabular-nums]">17 Mar 2026</td>
                                        <td className="px-4 sm:px-6 py-3.5 font-semibold text-gray-800">Nabila Azizah</td>
                                        <td className="px-4 sm:px-6 py-3.5 text-gray-700">Lantai 1 - Hall B / Kamar 117</td>
                                        <td className="px-4 sm:px-6 py-3.5">
                                            <div className="flex items-center gap-2">
                                                <span className="inline-flex items-center px-2 py-1 rounded-full text-[11px] font-semibold bg-orange-100 text-orange-700 border border-orange-200">Sedang</span>
                                                <span className="text-gray-700">Absen Worship Malam</span>
                                            </div>
                                        </td>
                                        <td className="px-4 sm:px-6 py-3.5 font-bold text-rose-500 [font-variant-numeric:tabular-nums]">-15</td>
                                        <td className="px-4 sm:px-6 py-3.5">
                                            <div className="flex items-center gap-2">
                                                <span className="inline-flex items-center px-2 py-1 rounded-full text-[11px] font-semibold bg-amber-100 text-amber-700 border border-amber-200">Monitoring</span>
                                                <button type="button" className="text-xs font-semibold text-indigo-600 hover:text-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-md px-1">Detail</button>
                                            </div>
                                        </td>
                                    </tr>

                                    <tr className="table-row hover:bg-gray-50" data-name="bagas pratama" data-category="berat" data-month="2026-03">
                                        <td className="px-4 sm:px-6 py-3.5 text-gray-600 [font-variant-numeric:tabular-nums]">15 Mar 2026</td>
                                        <td className="px-4 sm:px-6 py-3.5 font-semibold text-gray-800">Bagas Pratama</td>
                                        <td className="px-4 sm:px-6 py-3.5 text-gray-700">Lantai 2 - Hall A / Kamar 204</td>
                                        <td className="px-4 sm:px-6 py-3.5">
                                            <div className="flex items-center gap-2">
                                                <span className="inline-flex items-center px-2 py-1 rounded-full text-[11px] font-semibold bg-rose-100 text-rose-700 border border-rose-200">Berat/Kritis</span>
                                                <span className="text-gray-700">Keluar Asrama Tanpa Izin</span>
                                            </div>
                                        </td>
                                        <td className="px-4 sm:px-6 py-3.5 font-bold text-rose-500 [font-variant-numeric:tabular-nums]">-30</td>
                                        <td className="px-4 sm:px-6 py-3.5">
                                            <div className="flex items-center gap-2">
                                                <span className="inline-flex items-center px-2 py-1 rounded-full text-[11px] font-semibold bg-rose-100 text-rose-700 border border-rose-200">SP1</span>
                                                <button type="button" className="text-xs font-semibold text-indigo-600 hover:text-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-md px-1">Catat SP2</button>
                                            </div>
                                        </td>
                                    </tr>

                                    <tr className="table-row hover:bg-gray-50" data-name="dina karina" data-category="ringan" data-month="2026-02">
                                        <td className="px-4 sm:px-6 py-3.5 text-gray-600 [font-variant-numeric:tabular-nums]">28 Feb 2026</td>
                                        <td className="px-4 sm:px-6 py-3.5 font-semibold text-gray-800">Dina Karina</td>
                                        <td className="px-4 sm:px-6 py-3.5 text-gray-700">Lantai 2 - Hall B / Kamar 221</td>
                                        <td className="px-4 sm:px-6 py-3.5">
                                            <div className="flex items-center gap-2">
                                                <span className="inline-flex items-center px-2 py-1 rounded-full text-[11px] font-semibold bg-amber-100 text-amber-700 border border-amber-200">Ringan</span>
                                                <span className="text-gray-700">Tidak Ikut Check Room</span>
                                            </div>
                                        </td>
                                        <td className="px-4 sm:px-6 py-3.5 font-bold text-rose-500 [font-variant-numeric:tabular-nums]">-5</td>
                                        <td className="px-4 sm:px-6 py-3.5">
                                            <div className="flex items-center gap-2">
                                                <span className="inline-flex items-center px-2 py-1 rounded-full text-[11px] font-semibold bg-emerald-100 text-emerald-700 border border-emerald-200">Selesai</span>
                                                <button type="button" className="text-xs font-semibold text-indigo-600 hover:text-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-md px-1">Detail</button>
                                            </div>
                                        </td>
                                    </tr>

                                    <tr className="table-row hover:bg-gray-50" data-name="fajar maulana" data-category="sedang" data-month="2026-02">
                                        <td className="px-4 sm:px-6 py-3.5 text-gray-600 [font-variant-numeric:tabular-nums]">19 Feb 2026</td>
                                        <td className="px-4 sm:px-6 py-3.5 font-semibold text-gray-800">Fajar Maulana</td>
                                        <td className="px-4 sm:px-6 py-3.5 text-gray-700">Lantai 1 - Hall A / Kamar 102</td>
                                        <td className="px-4 sm:px-6 py-3.5">
                                            <div className="flex items-center gap-2">
                                                <span className="inline-flex items-center px-2 py-1 rounded-full text-[11px] font-semibold bg-orange-100 text-orange-700 border border-orange-200">Sedang</span>
                                                <span className="text-gray-700">Tidak Hadir Sabat Sore</span>
                                            </div>
                                        </td>
                                        <td className="px-4 sm:px-6 py-3.5 font-bold text-rose-500 [font-variant-numeric:tabular-nums]">-20</td>
                                        <td className="px-4 sm:px-6 py-3.5">
                                            <div className="flex items-center gap-2">
                                                <span className="inline-flex items-center px-2 py-1 rounded-full text-[11px] font-semibold bg-amber-100 text-amber-700 border border-amber-200">Monitoring</span>
                                                <button type="button" className="text-xs font-semibold text-indigo-600 hover:text-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-md px-1">Detail</button>
                                            </div>
                                        </td>
                                    </tr>

                                    <tr className="table-row hover:bg-gray-50" data-name="rahmat hidayat" data-category="berat" data-month="2026-01">
                                        <td className="px-4 sm:px-6 py-3.5 text-gray-600 [font-variant-numeric:tabular-nums]">26 Jan 2026</td>
                                        <td className="px-4 sm:px-6 py-3.5 font-semibold text-gray-800">Rahmat Hidayat</td>
                                        <td className="px-4 sm:px-6 py-3.5 text-gray-700">Lantai 2 - Hall B / Kamar 214</td>
                                        <td className="px-4 sm:px-6 py-3.5">
                                            <div className="flex items-center gap-2">
                                                <span className="inline-flex items-center px-2 py-1 rounded-full text-[11px] font-semibold bg-rose-100 text-rose-700 border border-rose-200">Berat/Kritis</span>
                                                <span className="text-gray-700">Merusak Fasilitas Umum</span>
                                            </div>
                                        </td>
                                        <td className="px-4 sm:px-6 py-3.5 font-bold text-rose-500 [font-variant-numeric:tabular-nums]">-40</td>
                                        <td className="px-4 sm:px-6 py-3.5">
                                            <div className="flex items-center gap-2">
                                                <span className="inline-flex items-center px-2 py-1 rounded-full text-[11px] font-semibold bg-rose-100 text-rose-700 border border-rose-200">SP2</span>
                                                <button type="button" className="text-xs font-semibold text-indigo-600 hover:text-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-md px-1">Tindak Lanjut</button>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>
    </>
  );
}


