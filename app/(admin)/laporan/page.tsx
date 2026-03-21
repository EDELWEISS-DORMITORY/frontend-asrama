import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Laporan | SiMARA",
};

export default function LaporanPage() {
  return (
    <>
                    <section className="bg-white border border-gray-100 rounded-2xl shadow-sm p-5 sm:p-6 lg:p-7">
                        <div className="flex flex-col xl:flex-row xl:items-start xl:justify-between gap-5">
                            <div>
                                <p className="text-xs text-indigo-600 font-semibold tracking-wide uppercase mb-2">Insight Data Asrama</p>
                                <h1 className="text-2xl sm:text-[28px] font-bold text-gray-900 leading-tight [text-wrap:balance]">
                                    Laporan {'&'} Analitik
                                </h1>
                                <p className="text-gray-500 text-sm mt-1.5 max-w-2xl">
                                    Analisis performa hunian, tren kehadiran check point, dan rekap pelanggaran dalam satu dashboard terintegrasi.
                                </p>
                            </div>

                            <div className="w-full xl:w-auto flex flex-col sm:flex-row gap-3">
                                <div className="grid grid-cols-2 gap-2.5 w-full sm:w-auto">
                                    <div>
                                        <label htmlFor="reportMonth" className="sr-only">Pilih bulan</label>
                                        <select
                                            id="reportMonth"
                                            name="reportMonth"
                                            autoComplete="off"
                                            className="w-full sm:w-40 bg-gray-50 border border-gray-200 rounded-xl px-3 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                        >
                                            <option>Maret</option>
                                            <option>Februari</option>
                                            <option>Januari</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label htmlFor="reportYear" className="sr-only">Pilih tahun</label>
                                        <select
                                            id="reportYear"
                                            name="reportYear"
                                            autoComplete="off"
                                            className="w-full sm:w-32 bg-gray-50 border border-gray-200 rounded-xl px-3 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                        >
                                            <option>2026</option>
                                            <option>2025</option>
                                            <option>2024</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="inline-flex items-center rounded-xl border border-gray-200 bg-white p-1 gap-1">
                                    <button
                                        type="button"
                                        className="inline-flex items-center gap-2 px-3 py-2 text-xs sm:text-sm font-semibold text-gray-700 rounded-lg hover:bg-gray-100"
                                    >
                                        <i className="fa-solid fa-file-pdf text-rose-500" aria-hidden="true"></i>
                                        Download PDF
                                    </button>
                                    <button
                                        type="button"
                                        className="inline-flex items-center gap-2 px-3 py-2 text-xs sm:text-sm font-semibold text-gray-700 rounded-lg hover:bg-gray-100"
                                    >
                                        <i className="fa-solid fa-file-excel text-emerald-600" aria-hidden="true"></i>
                                        Export Excel
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="space-y-5">
                        <div className="bg-white border border-gray-100 rounded-2xl p-2 shadow-sm">
                            <div
                                className="grid grid-cols-1 md:grid-cols-3 gap-2"
                                role="tablist"
                                aria-label="Navigasi Laporan"
                            >
                                <button
                                    type="button"
                                    id="tab-btn-hunian"
                                    className="report-tab-btn w-full text-left px-4 py-3 rounded-xl text-sm font-semibold text-gray-600 hover:bg-indigo-50"
                                    role="tab"
                                    data-tab-target="hunian"
                                    aria-selected="true"
                                    aria-controls="tab-panel-hunian"
                                >
                                    Laporan Hunian
                                </button>
                                <button
                                    type="button"
                                    id="tab-btn-kehadiran"
                                    className="report-tab-btn w-full text-left px-4 py-3 rounded-xl text-sm font-semibold text-gray-600 hover:bg-indigo-50"
                                    role="tab"
                                    data-tab-target="kehadiran"
                                    aria-selected="false"
                                    aria-controls="tab-panel-kehadiran"
                                >
                                    Laporan Kehadiran (Check Point)
                                </button>
                                <button
                                    type="button"
                                    id="tab-btn-pelanggaran"
                                    className="report-tab-btn w-full text-left px-4 py-3 rounded-xl text-sm font-semibold text-gray-600 hover:bg-indigo-50"
                                    role="tab"
                                    data-tab-target="pelanggaran"
                                    aria-selected="false"
                                    aria-controls="tab-panel-pelanggaran"
                                >
                                    Laporan Pelanggaran
                                </button>
                            </div>
                        </div>

                        <article
                            id="tab-panel-hunian"
                            className="report-tab-panel space-y-5"
                            role="tabpanel"
                            aria-labelledby="tab-btn-hunian"
                        >
                            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
                                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
                                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Total Kamar Aktif</p>
                                    <p className="text-3xl font-bold text-slate-900 [font-variant-numeric:tabular-nums]">128</p>
                                    <p className="text-xs text-slate-500 mt-1.5">4 kamar maintenance</p>
                                </div>
                                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
                                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Tingkat Hunian</p>
                                    <p className="text-3xl font-bold text-indigo-600 [font-variant-numeric:tabular-nums]">94%</p>
                                    <p className="text-xs text-emerald-600 mt-1.5">+2% dibanding bulan lalu</p>
                                </div>
                                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
                                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Kamar Kosong</p>
                                    <p className="text-3xl font-bold text-amber-500 [font-variant-numeric:tabular-nums]">8</p>
                                    <p className="text-xs text-slate-500 mt-1.5">Perlu prioritas penempatan</p>
                                </div>
                                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
                                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Mutasi Bulan Ini</p>
                                    <p className="text-3xl font-bold text-violet-600 [font-variant-numeric:tabular-nums]">17</p>
                                    <p className="text-xs text-slate-500 mt-1.5">Rata-rata 4 mutasi/minggu</p>
                                </div>
                            </div>

                            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 sm:p-6">
                                <div className="flex items-center justify-between gap-3 mb-5">
                                    <div>
                                        <h2 className="text-base sm:text-lg font-bold text-gray-900">Tren Hunian per Blok</h2>
                                        <p className="text-xs text-gray-500 mt-1">Simulasi visual bar chart tingkat okupansi 6 bulan terakhir.</p>
                                    </div>
                                    <span className="text-xs px-2.5 py-1 rounded-full bg-indigo-50 text-indigo-700 font-semibold">Maret 2026</span>
                                </div>

                                <div className="h-64 border border-dashed border-gray-200 rounded-xl p-4 sm:p-6">
                                    <div className="h-full flex items-end gap-3 sm:gap-5">
                                        <div className="flex-1 flex flex-col items-center gap-2">
                                            <div className="w-full max-w-12 rounded-t-lg bg-indigo-200 h-24"></div>
                                            <span className="text-[11px] text-gray-500">Okt</span>
                                        </div>
                                        <div className="flex-1 flex flex-col items-center gap-2">
                                            <div className="w-full max-w-12 rounded-t-lg bg-indigo-300 h-32"></div>
                                            <span className="text-[11px] text-gray-500">Nov</span>
                                        </div>
                                        <div className="flex-1 flex flex-col items-center gap-2">
                                            <div className="w-full max-w-12 rounded-t-lg bg-indigo-400 h-36"></div>
                                            <span className="text-[11px] text-gray-500">Des</span>
                                        </div>
                                        <div className="flex-1 flex flex-col items-center gap-2">
                                            <div className="w-full max-w-12 rounded-t-lg bg-indigo-500 h-40"></div>
                                            <span className="text-[11px] text-gray-500">Jan</span>
                                        </div>
                                        <div className="flex-1 flex flex-col items-center gap-2">
                                            <div className="w-full max-w-12 rounded-t-lg bg-indigo-600 h-44"></div>
                                            <span className="text-[11px] text-gray-500">Feb</span>
                                        </div>
                                        <div className="flex-1 flex flex-col items-center gap-2">
                                            <div className="w-full max-w-12 rounded-t-lg bg-violet-600 h-48"></div>
                                            <span className="text-[11px] text-gray-500">Mar</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                                <div className="px-5 sm:px-6 py-4 border-b border-gray-100">
                                    <h3 className="text-base font-bold text-gray-900">Rekap Detail Hunian</h3>
                                    <p className="text-xs text-gray-500 mt-1">Data status kamar berdasarkan blok, lantai, dan kapasitas aktual.</p>
                                </div>
                                <div className="overflow-x-auto">
                                    <table className="min-w-full text-sm">
                                        <thead className="bg-gray-50 border-b border-gray-100">
                                            <tr>
                                                <th className="px-4 sm:px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">Blok</th>
                                                <th className="px-4 sm:px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">Total Kamar</th>
                                                <th className="px-4 sm:px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">Terisi</th>
                                                <th className="px-4 sm:px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">Kosong</th>
                                                <th className="px-4 sm:px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">Okupansi</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-100 bg-white" data-table-panel="hunian">
                                            <tr className="table-row hover:bg-gray-50" data-page="1">
                                                <td className="px-4 sm:px-6 py-3.5 font-semibold text-gray-800">Hall A - Lantai 1</td>
                                                <td className="px-4 sm:px-6 py-3.5 text-gray-700">22</td>
                                                <td className="px-4 sm:px-6 py-3.5 text-gray-700">21</td>
                                                <td className="px-4 sm:px-6 py-3.5 text-gray-700">1</td>
                                                <td className="px-4 sm:px-6 py-3.5 font-semibold text-indigo-600">95%</td>
                                            </tr>
                                            <tr className="table-row hover:bg-gray-50" data-page="1">
                                                <td className="px-4 sm:px-6 py-3.5 font-semibold text-gray-800">Hall B - Lantai 1</td>
                                                <td className="px-4 sm:px-6 py-3.5 text-gray-700">20</td>
                                                <td className="px-4 sm:px-6 py-3.5 text-gray-700">19</td>
                                                <td className="px-4 sm:px-6 py-3.5 text-gray-700">1</td>
                                                <td className="px-4 sm:px-6 py-3.5 font-semibold text-indigo-600">95%</td>
                                            </tr>
                                            <tr className="table-row hover:bg-gray-50" data-page="1">
                                                <td className="px-4 sm:px-6 py-3.5 font-semibold text-gray-800">Hall A - Lantai 2</td>
                                                <td className="px-4 sm:px-6 py-3.5 text-gray-700">24</td>
                                                <td className="px-4 sm:px-6 py-3.5 text-gray-700">22</td>
                                                <td className="px-4 sm:px-6 py-3.5 text-gray-700">2</td>
                                                <td className="px-4 sm:px-6 py-3.5 font-semibold text-indigo-600">92%</td>
                                            </tr>
                                            <tr className="table-row hover:bg-gray-50" data-page="2">
                                                <td className="px-4 sm:px-6 py-3.5 font-semibold text-gray-800">Hall B - Lantai 2</td>
                                                <td className="px-4 sm:px-6 py-3.5 text-gray-700">24</td>
                                                <td className="px-4 sm:px-6 py-3.5 text-gray-700">23</td>
                                                <td className="px-4 sm:px-6 py-3.5 text-gray-700">1</td>
                                                <td className="px-4 sm:px-6 py-3.5 font-semibold text-indigo-600">96%</td>
                                            </tr>
                                            <tr className="table-row hover:bg-gray-50" data-page="2">
                                                <td className="px-4 sm:px-6 py-3.5 font-semibold text-gray-800">Hall C - Lantai 1</td>
                                                <td className="px-4 sm:px-6 py-3.5 text-gray-700">18</td>
                                                <td className="px-4 sm:px-6 py-3.5 text-gray-700">17</td>
                                                <td className="px-4 sm:px-6 py-3.5 text-gray-700">1</td>
                                                <td className="px-4 sm:px-6 py-3.5 font-semibold text-indigo-600">94%</td>
                                            </tr>
                                            <tr className="table-row hover:bg-gray-50" data-page="3">
                                                <td className="px-4 sm:px-6 py-3.5 font-semibold text-gray-800">Hall C - Lantai 2</td>
                                                <td className="px-4 sm:px-6 py-3.5 text-gray-700">20</td>
                                                <td className="px-4 sm:px-6 py-3.5 text-gray-700">18</td>
                                                <td className="px-4 sm:px-6 py-3.5 text-gray-700">2</td>
                                                <td className="px-4 sm:px-6 py-3.5 font-semibold text-indigo-600">90%</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="px-5 sm:px-6 py-4 border-t border-gray-100 flex justify-end">
                                    <div className="inline-flex items-center gap-1" data-pagination="hunian">
                                        <button className="pagination-btn active h-9 w-9 rounded-lg border border-gray-200 text-sm text-gray-600" data-panel="hunian" data-page="1">1</button>
                                        <button className="pagination-btn h-9 w-9 rounded-lg border border-gray-200 text-sm text-gray-600" data-panel="hunian" data-page="2">2</button>
                                        <button className="pagination-btn h-9 w-9 rounded-lg border border-gray-200 text-sm text-gray-600" data-panel="hunian" data-page="3">3</button>
                                    </div>
                                </div>
                            </div>
                        </article>

                        <article
                            id="tab-panel-kehadiran"
                            className="report-tab-panel space-y-5"
                            role="tabpanel"
                            aria-labelledby="tab-btn-kehadiran"
                            hidden
                        >
                            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
                                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
                                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Rata-rata Kehadiran</p>
                                    <p className="text-3xl font-bold text-emerald-600 [font-variant-numeric:tabular-nums]">92.4%</p>
                                    <p className="text-xs text-emerald-600 mt-1.5">+1.8% dari bulan lalu</p>
                                </div>
                                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
                                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Terlambat Check Point</p>
                                    <p className="text-3xl font-bold text-amber-500 [font-variant-numeric:tabular-nums]">26</p>
                                    <p className="text-xs text-slate-500 mt-1.5">Turun 5 kejadian</p>
                                </div>
                                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
                                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Alpha Check Point</p>
                                    <p className="text-3xl font-bold text-rose-500 [font-variant-numeric:tabular-nums]">11</p>
                                    <p className="text-xs text-slate-500 mt-1.5">Fokus blok Hall C</p>
                                </div>
                                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
                                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Kepatuhan Jadwal</p>
                                    <p className="text-3xl font-bold text-indigo-600 [font-variant-numeric:tabular-nums]">89%</p>
                                    <p className="text-xs text-slate-500 mt-1.5">Target semester: 93%</p>
                                </div>
                            </div>

                            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 sm:p-6">
                                <div className="flex items-center justify-between gap-3 mb-5">
                                    <div>
                                        <h2 className="text-base sm:text-lg font-bold text-gray-900">Tren Kehadiran Check Point</h2>
                                        <p className="text-xs text-gray-500 mt-1">Placeholder line-bar trend tingkat hadir harian dalam seminggu.</p>
                                    </div>
                                    <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 font-semibold">Pekan 3</span>
                                </div>

                                <div className="h-64 border border-dashed border-gray-200 rounded-xl p-4 sm:p-6">
                                    <div className="h-full flex items-end gap-3 sm:gap-5">
                                        <div className="flex-1 flex flex-col items-center gap-2">
                                            <div className="w-full max-w-12 rounded-t-lg bg-emerald-200 h-28"></div>
                                            <span className="text-[11px] text-gray-500">Sen</span>
                                        </div>
                                        <div className="flex-1 flex flex-col items-center gap-2">
                                            <div className="w-full max-w-12 rounded-t-lg bg-emerald-300 h-36"></div>
                                            <span className="text-[11px] text-gray-500">Sel</span>
                                        </div>
                                        <div className="flex-1 flex flex-col items-center gap-2">
                                            <div className="w-full max-w-12 rounded-t-lg bg-emerald-400 h-40"></div>
                                            <span className="text-[11px] text-gray-500">Rab</span>
                                        </div>
                                        <div className="flex-1 flex flex-col items-center gap-2">
                                            <div className="w-full max-w-12 rounded-t-lg bg-emerald-500 h-44"></div>
                                            <span className="text-[11px] text-gray-500">Kam</span>
                                        </div>
                                        <div className="flex-1 flex flex-col items-center gap-2">
                                            <div className="w-full max-w-12 rounded-t-lg bg-emerald-600 h-48"></div>
                                            <span className="text-[11px] text-gray-500">Jum</span>
                                        </div>
                                        <div className="flex-1 flex flex-col items-center gap-2">
                                            <div className="w-full max-w-12 rounded-t-lg bg-emerald-700 h-48"></div>
                                            <span className="text-[11px] text-gray-500">Sab</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                                <div className="px-5 sm:px-6 py-4 border-b border-gray-100">
                                    <h3 className="text-base font-bold text-gray-900">Rekap Kehadiran Detail</h3>
                                    <p className="text-xs text-gray-500 mt-1">Persentase hadir tiap kamar berdasarkan jadwal check point aktif.</p>
                                </div>
                                <div className="overflow-x-auto">
                                    <table className="min-w-full text-sm">
                                        <thead className="bg-gray-50 border-b border-gray-100">
                                            <tr>
                                                <th className="px-4 sm:px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">Kamar</th>
                                                <th className="px-4 sm:px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">Total Jadwal</th>
                                                <th className="px-4 sm:px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">Hadir</th>
                                                <th className="px-4 sm:px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">Tidak Hadir</th>
                                                <th className="px-4 sm:px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">Persentase</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-100 bg-white" data-table-panel="kehadiran">
                                            <tr className="table-row hover:bg-gray-50" data-page="1">
                                                <td className="px-4 sm:px-6 py-3.5 font-semibold text-gray-800">108 - Hall A</td>
                                                <td className="px-4 sm:px-6 py-3.5 text-gray-700">31</td>
                                                <td className="px-4 sm:px-6 py-3.5 text-gray-700">29</td>
                                                <td className="px-4 sm:px-6 py-3.5 text-gray-700">2</td>
                                                <td className="px-4 sm:px-6 py-3.5 font-semibold text-emerald-600">93.5%</td>
                                            </tr>
                                            <tr className="table-row hover:bg-gray-50" data-page="1">
                                                <td className="px-4 sm:px-6 py-3.5 font-semibold text-gray-800">117 - Hall B</td>
                                                <td className="px-4 sm:px-6 py-3.5 text-gray-700">31</td>
                                                <td className="px-4 sm:px-6 py-3.5 text-gray-700">28</td>
                                                <td className="px-4 sm:px-6 py-3.5 text-gray-700">3</td>
                                                <td className="px-4 sm:px-6 py-3.5 font-semibold text-emerald-600">90.3%</td>
                                            </tr>
                                            <tr className="table-row hover:bg-gray-50" data-page="2">
                                                <td className="px-4 sm:px-6 py-3.5 font-semibold text-gray-800">204 - Hall A</td>
                                                <td className="px-4 sm:px-6 py-3.5 text-gray-700">31</td>
                                                <td className="px-4 sm:px-6 py-3.5 text-gray-700">27</td>
                                                <td className="px-4 sm:px-6 py-3.5 text-gray-700">4</td>
                                                <td className="px-4 sm:px-6 py-3.5 font-semibold text-amber-500">87.1%</td>
                                            </tr>
                                            <tr className="table-row hover:bg-gray-50" data-page="2">
                                                <td className="px-4 sm:px-6 py-3.5 font-semibold text-gray-800">221 - Hall B</td>
                                                <td className="px-4 sm:px-6 py-3.5 text-gray-700">31</td>
                                                <td className="px-4 sm:px-6 py-3.5 text-gray-700">30</td>
                                                <td className="px-4 sm:px-6 py-3.5 text-gray-700">1</td>
                                                <td className="px-4 sm:px-6 py-3.5 font-semibold text-emerald-600">96.8%</td>
                                            </tr>
                                            <tr className="table-row hover:bg-gray-50" data-page="3">
                                                <td className="px-4 sm:px-6 py-3.5 font-semibold text-gray-800">214 - Hall B</td>
                                                <td className="px-4 sm:px-6 py-3.5 text-gray-700">31</td>
                                                <td className="px-4 sm:px-6 py-3.5 text-gray-700">25</td>
                                                <td className="px-4 sm:px-6 py-3.5 text-gray-700">6</td>
                                                <td className="px-4 sm:px-6 py-3.5 font-semibold text-rose-500">80.6%</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="px-5 sm:px-6 py-4 border-t border-gray-100 flex justify-end">
                                    <div className="inline-flex items-center gap-1" data-pagination="kehadiran">
                                        <button className="pagination-btn active h-9 w-9 rounded-lg border border-gray-200 text-sm text-gray-600" data-panel="kehadiran" data-page="1">1</button>
                                        <button className="pagination-btn h-9 w-9 rounded-lg border border-gray-200 text-sm text-gray-600" data-panel="kehadiran" data-page="2">2</button>
                                        <button className="pagination-btn h-9 w-9 rounded-lg border border-gray-200 text-sm text-gray-600" data-panel="kehadiran" data-page="3">3</button>
                                    </div>
                                </div>
                            </div>
                        </article>

                        <article
                            id="tab-panel-pelanggaran"
                            className="report-tab-panel space-y-5"
                            role="tabpanel"
                            aria-labelledby="tab-btn-pelanggaran"
                            hidden
                        >
                            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
                                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
                                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Total Pelanggaran Bulan Ini</p>
                                    <p className="text-3xl font-bold text-rose-500 [font-variant-numeric:tabular-nums]">34</p>
                                    <p className="text-xs text-slate-500 mt-1.5">+6 dibanding bulan lalu</p>
                                </div>
                                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
                                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Kategori Tertinggi</p>
                                    <p className="text-lg font-bold text-slate-900">Kedisiplinan Waktu</p>
                                    <p className="text-xs text-slate-500 mt-1.5">12 kejadian</p>
                                </div>
                                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
                                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Mahasiswa SP Aktif</p>
                                    <p className="text-3xl font-bold text-amber-500 [font-variant-numeric:tabular-nums]">4</p>
                                    <p className="text-xs text-slate-500 mt-1.5">2 perlu eskalasi SP2</p>
                                </div>
                                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
                                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Pelanggaran Berat</p>
                                    <p className="text-3xl font-bold text-violet-600 [font-variant-numeric:tabular-nums]">6</p>
                                    <p className="text-xs text-slate-500 mt-1.5">17.6% dari total kasus</p>
                                </div>
                            </div>

                            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 sm:p-6">
                                <div className="flex items-center justify-between gap-3 mb-5">
                                    <div>
                                        <h2 className="text-base sm:text-lg font-bold text-gray-900">Tren Pelanggaran Bulanan</h2>
                                        <p className="text-xs text-gray-500 mt-1">Simulasi bar chart total kasus pelanggaran per bulan.</p>
                                    </div>
                                    <span className="text-xs px-2.5 py-1 rounded-full bg-rose-50 text-rose-700 font-semibold">Semester Genap</span>
                                </div>

                                <div className="h-64 border border-dashed border-gray-200 rounded-xl p-4 sm:p-6">
                                    <div className="h-full flex items-end gap-3 sm:gap-5">
                                        <div className="flex-1 flex flex-col items-center gap-2">
                                            <div className="w-full max-w-12 rounded-t-lg bg-rose-200 h-20"></div>
                                            <span className="text-[11px] text-gray-500">Okt</span>
                                        </div>
                                        <div className="flex-1 flex flex-col items-center gap-2">
                                            <div className="w-full max-w-12 rounded-t-lg bg-rose-300 h-24"></div>
                                            <span className="text-[11px] text-gray-500">Nov</span>
                                        </div>
                                        <div className="flex-1 flex flex-col items-center gap-2">
                                            <div className="w-full max-w-12 rounded-t-lg bg-rose-400 h-28"></div>
                                            <span className="text-[11px] text-gray-500">Des</span>
                                        </div>
                                        <div className="flex-1 flex flex-col items-center gap-2">
                                            <div className="w-full max-w-12 rounded-t-lg bg-rose-500 h-36"></div>
                                            <span className="text-[11px] text-gray-500">Jan</span>
                                        </div>
                                        <div className="flex-1 flex flex-col items-center gap-2">
                                            <div className="w-full max-w-12 rounded-t-lg bg-rose-600 h-44"></div>
                                            <span className="text-[11px] text-gray-500">Feb</span>
                                        </div>
                                        <div className="flex-1 flex flex-col items-center gap-2">
                                            <div className="w-full max-w-12 rounded-t-lg bg-violet-600 h-48"></div>
                                            <span className="text-[11px] text-gray-500">Mar</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                                <div className="px-5 sm:px-6 py-4 border-b border-gray-100">
                                    <h3 className="text-base font-bold text-gray-900">Rekap Detail Pelanggaran</h3>
                                    <p className="text-xs text-gray-500 mt-1">Daftar jenis pelanggaran dan tindak lanjut poin pada periode aktif.</p>
                                </div>
                                <div className="overflow-x-auto">
                                    <table className="min-w-full text-sm">
                                        <thead className="bg-gray-50 border-b border-gray-100">
                                            <tr>
                                                <th className="px-4 sm:px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">Tanggal</th>
                                                <th className="px-4 sm:px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">Mahasiswa</th>
                                                <th className="px-4 sm:px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">Jenis</th>
                                                <th className="px-4 sm:px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">Poin</th>
                                                <th className="px-4 sm:px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">Status</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-100 bg-white" data-table-panel="pelanggaran">
                                            <tr className="table-row hover:bg-gray-50" data-page="1">
                                                <td className="px-4 sm:px-6 py-3.5 text-gray-700">18 Mar 2026</td>
                                                <td className="px-4 sm:px-6 py-3.5 font-semibold text-gray-800">Rafael Aditya</td>
                                                <td className="px-4 sm:px-6 py-3.5 text-gray-700">Terlambat Check Point Malam</td>
                                                <td className="px-4 sm:px-6 py-3.5 font-semibold text-rose-500">-5</td>
                                                <td className="px-4 sm:px-6 py-3.5"><span className="text-[11px] font-semibold px-2 py-1 rounded-full bg-emerald-100 text-emerald-700">Selesai</span></td>
                                            </tr>
                                            <tr className="table-row hover:bg-gray-50" data-page="1">
                                                <td className="px-4 sm:px-6 py-3.5 text-gray-700">17 Mar 2026</td>
                                                <td className="px-4 sm:px-6 py-3.5 font-semibold text-gray-800">Nabila Azizah</td>
                                                <td className="px-4 sm:px-6 py-3.5 text-gray-700">Absen Worship Malam</td>
                                                <td className="px-4 sm:px-6 py-3.5 font-semibold text-rose-500">-15</td>
                                                <td className="px-4 sm:px-6 py-3.5"><span className="text-[11px] font-semibold px-2 py-1 rounded-full bg-amber-100 text-amber-700">Monitoring</span></td>
                                            </tr>
                                            <tr className="table-row hover:bg-gray-50" data-page="2">
                                                <td className="px-4 sm:px-6 py-3.5 text-gray-700">15 Mar 2026</td>
                                                <td className="px-4 sm:px-6 py-3.5 font-semibold text-gray-800">Bagas Pratama</td>
                                                <td className="px-4 sm:px-6 py-3.5 text-gray-700">Keluar Asrama Tanpa Izin</td>
                                                <td className="px-4 sm:px-6 py-3.5 font-semibold text-rose-500">-30</td>
                                                <td className="px-4 sm:px-6 py-3.5"><span className="text-[11px] font-semibold px-2 py-1 rounded-full bg-rose-100 text-rose-700">SP1</span></td>
                                            </tr>
                                            <tr className="table-row hover:bg-gray-50" data-page="2">
                                                <td className="px-4 sm:px-6 py-3.5 text-gray-700">28 Feb 2026</td>
                                                <td className="px-4 sm:px-6 py-3.5 font-semibold text-gray-800">Dina Karina</td>
                                                <td className="px-4 sm:px-6 py-3.5 text-gray-700">Tidak Ikut Check Room</td>
                                                <td className="px-4 sm:px-6 py-3.5 font-semibold text-rose-500">-5</td>
                                                <td className="px-4 sm:px-6 py-3.5"><span className="text-[11px] font-semibold px-2 py-1 rounded-full bg-emerald-100 text-emerald-700">Selesai</span></td>
                                            </tr>
                                            <tr className="table-row hover:bg-gray-50" data-page="3">
                                                <td className="px-4 sm:px-6 py-3.5 text-gray-700">26 Jan 2026</td>
                                                <td className="px-4 sm:px-6 py-3.5 font-semibold text-gray-800">Rahmat Hidayat</td>
                                                <td className="px-4 sm:px-6 py-3.5 text-gray-700">Merusak Fasilitas Umum</td>
                                                <td className="px-4 sm:px-6 py-3.5 font-semibold text-rose-500">-40</td>
                                                <td className="px-4 sm:px-6 py-3.5"><span className="text-[11px] font-semibold px-2 py-1 rounded-full bg-rose-100 text-rose-700">SP2</span></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="px-5 sm:px-6 py-4 border-t border-gray-100 flex justify-end">
                                    <div className="inline-flex items-center gap-1" data-pagination="pelanggaran">
                                        <button className="pagination-btn active h-9 w-9 rounded-lg border border-gray-200 text-sm text-gray-600" data-panel="pelanggaran" data-page="1">1</button>
                                        <button className="pagination-btn h-9 w-9 rounded-lg border border-gray-200 text-sm text-gray-600" data-panel="pelanggaran" data-page="2">2</button>
                                        <button className="pagination-btn h-9 w-9 rounded-lg border border-gray-200 text-sm text-gray-600" data-panel="pelanggaran" data-page="3">3</button>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </section>
    </>
  );
}


