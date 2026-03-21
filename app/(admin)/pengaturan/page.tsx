import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pengaturan | SiMARA",
};

export default function PengaturanPage() {
  return (
    <>
                    <section className="bg-white border border-gray-100 rounded-2xl shadow-sm p-5 sm:p-6 lg:p-7">
                        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-5">
                            <div>
                                <p className="text-xs text-indigo-600 font-semibold tracking-wide uppercase mb-2">Administrasi Platform</p>
                                <h1 className="text-2xl sm:text-[28px] font-bold text-gray-900 leading-tight [text-wrap:balance]">
                                    Pengaturan Sistem
                                </h1>
                                <p className="text-gray-500 text-sm mt-1.5 max-w-2xl">
                                    Kelola profil admin, preferensi operasional asrama, dan konfigurasi sistem dari satu panel terpusat.
                                </p>
                            </div>

                            <div className="w-full lg:w-auto inline-flex items-center gap-2 rounded-xl border border-indigo-100 bg-indigo-50 px-3.5 py-2.5 text-sm text-indigo-700">
                                <i className="fa-solid fa-shield-halved text-indigo-600" aria-hidden="true"></i>
                                <span className="font-semibold">Konfigurasi aman {'&'} tersinkron</span>
                            </div>
                        </div>
                    </section>

                    <section className="grid grid-cols-1 xl:grid-cols-12 gap-6">
                        <aside className="xl:col-span-3">
                            <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-4 sm:p-5">
                                <h2 className="text-sm font-bold text-gray-900">Navigasi Pengaturan</h2>
                                <p className="mt-1 text-xs text-gray-500">Pilih kategori untuk mengubah konfigurasi terkait.</p>

                                <nav className="mt-4 space-y-2" role="tablist" aria-label="Navigasi tab pengaturan">
                                    <button
                                        type="button"
                                        id="settings-tab-profil"
                                        role="tab"
                                        data-settings-target="profil"
                                        aria-selected="true"
                                        aria-controls="settings-panel-profil"
                                        className="settings-tab-btn w-full text-left px-4 py-3 rounded-xl text-sm font-semibold text-gray-600 hover:bg-indigo-50 flex items-center gap-3"
                                    >
                                        <i className="fa-solid fa-user-gear text-sm" aria-hidden="true"></i>
                                        <span>Profil Admin</span>
                                    </button>
                                    <button
                                        type="button"
                                        id="settings-tab-preferensi"
                                        role="tab"
                                        data-settings-target="preferensi"
                                        aria-selected="false"
                                        aria-controls="settings-panel-preferensi"
                                        className="settings-tab-btn w-full text-left px-4 py-3 rounded-xl text-sm font-semibold text-gray-600 hover:bg-indigo-50 flex items-center gap-3"
                                    >
                                        <i className="fa-solid fa-house-user text-sm" aria-hidden="true"></i>
                                        <span>Preferensi Asrama</span>
                                    </button>
                                    <button
                                        type="button"
                                        id="settings-tab-keamanan"
                                        role="tab"
                                        data-settings-target="keamanan"
                                        aria-selected="false"
                                        aria-controls="settings-panel-keamanan"
                                        className="settings-tab-btn w-full text-left px-4 py-3 rounded-xl text-sm font-semibold text-gray-600 hover:bg-indigo-50 flex items-center gap-3"
                                    >
                                        <i className="fa-solid fa-lock text-sm" aria-hidden="true"></i>
                                        <span>Keamanan</span>
                                    </button>
                                    <button
                                        type="button"
                                        id="settings-tab-notifikasi"
                                        role="tab"
                                        data-settings-target="notifikasi"
                                        aria-selected="false"
                                        aria-controls="settings-panel-notifikasi"
                                        className="settings-tab-btn w-full text-left px-4 py-3 rounded-xl text-sm font-semibold text-gray-600 hover:bg-indigo-50 flex items-center gap-3"
                                    >
                                        <i className="fa-solid fa-bell text-sm" aria-hidden="true"></i>
                                        <span>Notifikasi</span>
                                    </button>
                                </nav>
                            </div>
                        </aside>

                        <div className="xl:col-span-9">
                            <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-5 sm:p-6 lg:p-7">
                                <article
                                    id="settings-panel-profil"
                                    data-settings-panel="profil"
                                    role="tabpanel"
                                    aria-labelledby="settings-tab-profil"
                                    className="settings-tab-panel opacity-100 translate-y-0 space-y-6"
                                >
                                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 pb-5 border-b border-gray-100">
                                        <div>
                                            <h3 className="text-lg font-bold text-gray-900">Profil Admin</h3>
                                            <p className="text-sm text-gray-500 mt-1">Perbarui identitas akun administrator utama asrama.</p>
                                        </div>
                                        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-full">
                                            <i className="fa-solid fa-circle-check text-[10px]" aria-hidden="true"></i>
                                            Status Akun Aktif
                                        </span>
                                    </div>

                                    <form className="space-y-6" noValidate>
                                        <div className="rounded-xl border border-gray-200 bg-gray-50/70 p-4 sm:p-5">
                                            <label className="block text-sm font-semibold text-gray-800 mb-3">Foto Profil</label>
                                            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                                                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center shadow-lg shadow-indigo-600/30">
                                                    <span className="text-white text-xl font-bold">AD</span>
                                                </div>
                                                <div className="space-y-2">
                                                    <label
                                                        htmlFor="adminPhoto"
                                                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-gray-200 text-sm font-semibold text-gray-700 hover:bg-gray-50 cursor-pointer focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500"
                                                    >
                                                        <i className="fa-solid fa-upload text-indigo-500" aria-hidden="true"></i>
                                                        Unggah Foto Baru
                                                    </label>
                                                    <input id="adminPhoto" name="adminPhoto" type="file" accept="image/*" className="sr-only" />
                                                    <p className="text-xs text-gray-500">Format JPG/PNG, maksimal 2MB.</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="md:col-span-2">
                                                <label htmlFor="namaLengkap" className="block text-sm font-semibold text-gray-700 mb-2">Nama Lengkap</label>
                                                <input
                                                    id="namaLengkap"
                                                    name="namaLengkap"
                                                    type="text"
                                                    value="Admin Asrama"
                                                    autoComplete="name"
                                                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                                />
                                            </div>

                                            <div>
                                                <label htmlFor="emailAdmin" className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                                                <input
                                                    id="emailAdmin"
                                                    name="emailAdmin"
                                                    type="email"
                                                    value="admin@simara.ac.id"
                                                    autoComplete="email"
                                                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                                />
                                            </div>

                                            <div>
                                                <label htmlFor="peranAdmin" className="block text-sm font-semibold text-gray-700 mb-2">Peran</label>
                                                <select
                                                    id="peranAdmin"
                                                    name="peranAdmin"
                                                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                                >
                                                    <option selected>Administrator Utama</option>
                                                    <option>Manajer Operasional</option>
                                                    <option>Supervisor Asrama</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="flex justify-end">
                                            <button
                                                type="button"
                                                className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 text-white px-5 py-2.5 text-sm font-semibold hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                            >
                                                <i className="fa-solid fa-floppy-disk text-xs" aria-hidden="true"></i>
                                                Simpan Perubahan
                                            </button>
                                        </div>
                                    </form>
                                </article>

                                <article
                                    id="settings-panel-preferensi"
                                    data-settings-panel="preferensi"
                                    role="tabpanel"
                                    aria-labelledby="settings-tab-preferensi"
                                    className="settings-tab-panel opacity-0 translate-y-2 pointer-events-none space-y-6"
                                    hidden
                                >
                                    <div className="pb-5 border-b border-gray-100">
                                        <h3 className="text-lg font-bold text-gray-900">Preferensi Asrama</h3>
                                        <p className="text-sm text-gray-500 mt-1">Atur parameter operasional default untuk kegiatan asrama.</p>
                                    </div>

                                    <form className="space-y-6" noValidate>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div>
                                                <label htmlFor="tahunAjaran" className="block text-sm font-semibold text-gray-700 mb-2">Tahun Ajaran Aktif</label>
                                                <input
                                                    id="tahunAjaran"
                                                    name="tahunAjaran"
                                                    type="text"
                                                    value="2025/2026"
                                                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                                />
                                            </div>

                                            <div>
                                                <label htmlFor="semesterAktif" className="block text-sm font-semibold text-gray-700 mb-2">Semester</label>
                                                <select
                                                    id="semesterAktif"
                                                    name="semesterAktif"
                                                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                                >
                                                    <option selected>Genap</option>
                                                    <option>Ganjil</option>
                                                </select>
                                            </div>

                                            <div>
                                                <label htmlFor="jamMalam" className="block text-sm font-semibold text-gray-700 mb-2">Jam Malam Default</label>
                                                <input
                                                    id="jamMalam"
                                                    name="jamMalam"
                                                    type="time"
                                                    value="21:30"
                                                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                                />
                                            </div>

                                            <div className="flex items-end">
                                                <div className="w-full rounded-xl border border-gray-200 bg-gray-50/70 px-4 py-3.5">
                                                    <label className="flex items-center justify-between gap-4" htmlFor="autoCheckpoint">
                                                        <span>
                                                            <span className="block text-sm font-semibold text-gray-800">Aktifkan Auto-Check Point</span>
                                                            <span className="block text-xs text-gray-500 mt-0.5">Sistem membuat jadwal check point otomatis setiap hari.</span>
                                                        </span>
                                                        <span className="relative inline-flex items-center">
                                                            <input id="autoCheckpoint" name="autoCheckpoint" type="checkbox" className="peer sr-only" checked />
                                                            <span className="h-6 w-11 rounded-full bg-slate-300 transition peer-checked:bg-indigo-600 peer-focus-visible:ring-2 peer-focus-visible:ring-indigo-500 peer-focus-visible:ring-offset-2"></span>
                                                            <span className="absolute left-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform peer-checked:translate-x-5"></span>
                                                        </span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex justify-end">
                                            <button
                                                type="button"
                                                className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 text-white px-5 py-2.5 text-sm font-semibold hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                            >
                                                <i className="fa-solid fa-floppy-disk text-xs" aria-hidden="true"></i>
                                                Simpan Perubahan
                                            </button>
                                        </div>
                                    </form>
                                </article>

                                <article
                                    id="settings-panel-keamanan"
                                    data-settings-panel="keamanan"
                                    role="tabpanel"
                                    aria-labelledby="settings-tab-keamanan"
                                    className="settings-tab-panel opacity-0 translate-y-2 pointer-events-none"
                                    hidden
                                >
                                    <div className="rounded-2xl border border-dashed border-gray-300 bg-gray-50 p-8 text-center">
                                        <i className="fa-solid fa-lock text-2xl text-gray-400" aria-hidden="true"></i>
                                        <h3 className="mt-3 text-base font-bold text-gray-800">Tab Keamanan</h3>
                                        <p className="mt-1 text-sm text-gray-500">Pengaturan keamanan lanjutan akan ditambahkan pada iterasi berikutnya.</p>
                                    </div>
                                </article>

                                <article
                                    id="settings-panel-notifikasi"
                                    data-settings-panel="notifikasi"
                                    role="tabpanel"
                                    aria-labelledby="settings-tab-notifikasi"
                                    className="settings-tab-panel opacity-0 translate-y-2 pointer-events-none"
                                    hidden
                                >
                                    <div className="rounded-2xl border border-dashed border-gray-300 bg-gray-50 p-8 text-center">
                                        <i className="fa-solid fa-bell text-2xl text-gray-400" aria-hidden="true"></i>
                                        <h3 className="mt-3 text-base font-bold text-gray-800">Tab Notifikasi</h3>
                                        <p className="mt-1 text-sm text-gray-500">Preferensi notifikasi email dan notifikasi internal akan tersedia di tahap berikutnya.</p>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </section>
    </>
  );
}


