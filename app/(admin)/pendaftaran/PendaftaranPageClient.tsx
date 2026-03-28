"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

type PendaftaranTab = "form" | "daftar" | "verifikasi" | "riwayat";

const activeTabClass =
  "tab-btn flex items-center gap-2.5 px-5 py-4 text-sm font-semibold border-b-2 whitespace-nowrap shrink-0 border-indigo-600 text-indigo-600 bg-indigo-50/60";
const inactiveTabClass =
  "tab-btn flex items-center gap-2.5 px-5 py-4 text-sm font-medium border-b-2 whitespace-nowrap shrink-0 border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50";

const tabConfig: Record<PendaftaranTab, { breadcrumb: string; addLabel: string }> = {
  form: { breadcrumb: "Form Pendaftaran", addLabel: "Form Pendaftaran" },
  daftar: { breadcrumb: "Daftar Pendaftar", addLabel: "Tambah Pendaftar" },
  verifikasi: { breadcrumb: "Verifikasi", addLabel: "Proses Verifikasi" },
  riwayat: { breadcrumb: "Riwayat Pendaftaran", addLabel: "Riwayat" },
};

function FormPendaftaranView() {
  return (
    <>
        <div id="content-form" className="block">
                                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                                    
                                    <div className="px-6 pt-6 pb-0">
                                        <div className="flex items-center justify-between mb-6">
                                            
                                            <div className="flex flex-col items-center gap-1.5 flex-1">
                                                <div id="stepCircle1" className="step-circle w-9 h-9 rounded-xl bg-indigo-600 text-white flex items-center justify-center text-sm font-bold shadow-md shadow-indigo-200">1</div>
                                                <p className="text-xs font-semibold text-indigo-600 sm:block">Data Pribadi</p>
                                            </div>
                                            <div id="stepLine1" className="step-line h-0.5 flex-1 bg-gray-200 mx-1"></div>
                                            
                                            <div className="flex flex-col items-center gap-1.5 flex-1">
                                                <div id="stepCircle2" className="step-circle w-9 h-9 rounded-xl bg-gray-200 text-gray-500 flex items-center justify-center text-sm font-bold">2</div>
                                                <p className="text-xs font-medium text-gray-400 hidden sm:block">Info Asrama</p>
                                            </div>
                                            <div id="stepLine2" className="step-line h-0.5 flex-1 bg-gray-200 mx-1"></div>
                                            
                                            <div className="flex flex-col items-center gap-1.5 flex-1">
                                                <div id="stepCircle3" className="step-circle w-9 h-9 rounded-xl bg-gray-200 text-gray-500 flex items-center justify-center text-sm font-bold">3</div>
                                                <p className="text-xs font-medium text-gray-400 hidden sm:block">Upload Dokumen</p>
                                            </div>
                                            <div id="stepLine3" className="step-line h-0.5 flex-1 bg-gray-200 mx-1"></div>
                                            
                                            <div className="flex flex-col items-center gap-1.5 flex-1">
                                                <div id="stepCircle4" className="step-circle w-9 h-9 rounded-xl bg-gray-200 text-gray-500 flex items-center justify-center text-sm font-bold">4</div>
                                                <p className="text-xs font-medium text-gray-400 hidden sm:block">Review &amp; Kirim</p>
                                            </div>
                                        </div>
                                        <hr className="border-gray-100"/>
                                    </div>
        
                                    <div className="p-6">
                                        
                                        <div id="step1" className="block">
                                            <div className="flex items-center gap-3 mb-6">
                                                <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center shrink-0">
                                                    <i className="fa-solid fa-user text-indigo-600"></i>
                                                </div>
                                                <div>
                                                    <h3 className="text-base font-bold text-gray-900">Data Pribadi Mahasiswa</h3>
                                                    <p className="text-xs text-gray-400 mt-0.5">Isi data diri mahasiswa yang akan mendaftar asrama</p>
                                                </div>
                                                <span className="ml-auto text-xs text-gray-400 bg-gray-100 px-2.5 py-1 rounded-full font-medium">Langkah 1 / 4</span>
                                            </div>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                                <div className="space-y-1.5">
                                                    <label className="block text-xs font-semibold text-gray-700">NIM <span className="text-rose-500">*</span></label>
                                                    <input type="text" placeholder="Contoh: 2024310001" className="w-full px-3.5 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white placeholder-gray-400"/>
                                                </div>
                                                <div className="space-y-1.5">
                                                    <label className="block text-xs font-semibold text-gray-700">Nama Lengkap <span className="text-rose-500">*</span></label>
                                                    <input type="text" placeholder="Nama lengkap sesuai KTP" className="w-full px-3.5 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white placeholder-gray-400"/>
                                                </div>
                                                <div className="space-y-1.5">
                                                    <label className="block text-xs font-semibold text-gray-700">Fakultas <span className="text-rose-500">*</span></label>
                                                    <input type="text" placeholder="Contoh: Teknik" className="w-full px-3.5 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white placeholder-gray-400"/>
                                                </div>
                                                <div className="space-y-1.5">
                                                    <label className="block text-xs font-semibold text-gray-700">Program Studi <span className="text-rose-500">*</span></label>
                                                    <input type="text" placeholder="Contoh: Teknik Informatika" className="w-full px-3.5 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white placeholder-gray-400"/>
                                                </div>
                                                <div className="space-y-1.5">
                                                    <label className="block text-xs font-semibold text-gray-700">Angkatan <span className="text-rose-500">*</span></label>
                                                    <select className="w-full px-3.5 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white cursor-pointer text-gray-700">
                                                        <option value="" disabled>Pilih tahun angkatan</option>
                                                        <option>2024</option><option>2023</option><option>2022</option><option>2021</option><option>2020</option>
                                                    </select>
                                                </div>
                                                <div className="space-y-1.5">
                                                    <label className="block text-xs font-semibold text-gray-700">Jenis Kelamin <span className="text-rose-500">*</span></label>
                                                    <div className="flex gap-4 pt-1.5">
                                                        <label className="flex items-center gap-2 cursor-pointer">
                                                            <input type="radio" name="gender" value="L" className="w-4 h-4 text-indigo-600 border-gray-300 cursor-pointer"/>
                                                            <span className="text-sm text-gray-700">Laki-laki</span>
                                                        </label>
                                                        <label className="flex items-center gap-2 cursor-pointer">
                                                            <input type="radio" name="gender" value="P" className="w-4 h-4 text-indigo-600 border-gray-300 cursor-pointer"/>
                                                            <span className="text-sm text-gray-700">Perempuan</span>
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="space-y-1.5">
                                                    <label className="block text-xs font-semibold text-gray-700">Nomor HP <span className="text-rose-500">*</span></label>
                                                    <input type="tel" placeholder="Contoh: 081234567890" className="w-full px-3.5 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white placeholder-gray-400"/>
                                                </div>
                                                <div className="space-y-1.5">
                                                    <label className="block text-xs font-semibold text-gray-700">Alamat Email <span className="text-rose-500">*</span></label>
                                                    <input type="email" placeholder="email@mahasiswa.ac.id" className="w-full px-3.5 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white placeholder-gray-400"/>
                                                </div>
                                            </div>
                                            <div className="mt-6 flex justify-end">
                                                <button className="flex items-center gap-2 px-6 py-2.5 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-colors font-semibold shadow-md shadow-indigo-200 active:scale-95 text-sm">
                                                    Lanjut <i className="fa-solid fa-arrow-right text-xs"></i>
                                                </button>
                                            </div>
                                        </div>
        
                                        
                                        <div id="step2" className="hidden">
                                            <div className="flex items-center gap-3 mb-6">
                                                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center shrink-0">
                                                    <i className="fa-solid fa-building text-blue-600"></i>
                                                </div>
                                                <div>
                                                    <h3 className="text-base font-bold text-gray-900">Informasi Pendaftaran Asrama</h3>
                                                    <p className="text-xs text-gray-400 mt-0.5">Pilih periode dan preferensi kamar yang diinginkan</p>
                                                </div>
                                                <span className="ml-auto text-xs text-gray-400 bg-gray-100 px-2.5 py-1 rounded-full font-medium">Langkah 2 / 4</span>
                                            </div>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                <div className="space-y-1.5">
                                                    <label className="block text-xs font-semibold text-gray-700">Periode Pendaftaran <span className="text-rose-500">*</span></label>
                                                    <select className="w-full px-3.5 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white cursor-pointer text-gray-700">
                                                        <option value="" disabled>Pilih periode</option>
                                                        <option>Ganjil 2025/2026</option>
                                                        <option>Genap 2024/2025</option>
                                                        <option>Ganjil 2024/2025</option>
                                                    </select>
                                                </div>
                                                <div className="space-y-1.5">
                                                    <label className="block text-xs font-semibold text-gray-700">Gedung Preferensi</label>
                                                    <select className="w-full px-3.5 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white cursor-pointer text-gray-700">
                                                        <option>Tidak Ada Preferensi</option>
                                                        <option>Gedung A (Putra)</option>
                                                        <option>Gedung B (Putra)</option>
                                                        <option>Gedung C (Putri)</option>
                                                        <option>Gedung D (Putri)</option>
                                                    </select>
                                                </div>
                                                <div className="space-y-1.5">
                                                    <label className="block text-xs font-semibold text-gray-700">Pernah Tinggal di Asrama Sebelumnya? <span className="text-rose-500">*</span></label>
                                                    <div className="flex gap-4 pt-1.5">
                                                        <label className="flex items-center gap-2 cursor-pointer">
                                                            <input type="radio" name="riwayat" value="ya" className="w-4 h-4 text-indigo-600 border-gray-300"/>
                                                            <span className="text-sm text-gray-700">Ya</span>
                                                        </label>
                                                        <label className="flex items-center gap-2 cursor-pointer">
                                                            <input type="radio" name="riwayat" value="tidak" defaultChecked className="w-4 h-4 text-indigo-600 border-gray-300"/>
                                                            <span className="text-sm text-gray-700">Tidak</span>
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="space-y-1.5">
                                                    <label className="block text-xs font-semibold text-gray-700">Kontak Darurat (Orang Tua/Wali) <span className="text-rose-500">*</span></label>
                                                    <input type="tel" placeholder="Nomor HP orang tua" className="w-full px-3.5 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white placeholder-gray-400"/>
                                                </div>
                                                <div className="space-y-1.5 sm:col-span-2">
                                                    <label className="block text-xs font-semibold text-gray-700">Alasan Mendaftar Asrama <span className="text-rose-500">*</span></label>
                                                    <textarea rows={4} placeholder="Jelaskan alasan Anda ingin tinggal di asrama kampus..." className="w-full px-3.5 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white placeholder-gray-400 resize-none"></textarea>
                                                </div>
                                                <div className="sm:col-span-2">
                                                    <label className="flex items-start gap-3 cursor-pointer group">
                                                        <input type="checkbox" className="w-4 h-4 text-indigo-600 border-gray-300 rounded mt-0.5 cursor-pointer"/>
                                                        <span className="text-sm text-gray-600">Saya menyatakan bahwa seluruh data yang diisikan adalah benar dan bersedia mematuhi peraturan asrama yang berlaku.</span>
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="mt-5 p-4 bg-indigo-50 border border-indigo-200 rounded-xl flex items-start gap-3">
                                                <i className="fa-solid fa-circle-info text-indigo-500 mt-0.5 shrink-0"></i>
                                                <p className="text-xs text-indigo-700">Pastikan semua data yang diisi sudah benar. Data tidak dapat diubah setelah pendaftaran diajukan ke admin.</p>
                                            </div>
                                            <div className="mt-6 flex items-center justify-between">
                                                <button className="flex items-center gap-2 px-5 py-2.5 text-sm border border-gray-200 text-gray-600 rounded-xl hover:bg-gray-50 transition-colors font-medium">
                                                    <i className="fa-solid fa-arrow-left text-xs"></i> Kembali
                                                </button>
                                                <button className="flex items-center gap-2 px-6 py-2.5 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-colors font-semibold shadow-md shadow-indigo-200 text-sm">
                                                    Lanjut <i className="fa-solid fa-arrow-right text-xs"></i>
                                                </button>
                                            </div>
                                        </div>
        
                                        
                                        <div id="step3" className="hidden">
                                            <div className="flex items-center gap-3 mb-6">
                                                <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center shrink-0">
                                                    <i className="fa-solid fa-file-arrow-up text-amber-600"></i>
                                                </div>
                                                <div>
                                                    <h3 className="text-base font-bold text-gray-900">Upload Dokumen Persyaratan</h3>
                                                    <p className="text-xs text-gray-400 mt-0.5">Upload semua dokumen yang diperlukan (PDF, JPG, PNG — Maks. 2MB)</p>
                                                </div>
                                                <span className="ml-auto text-xs text-gray-400 bg-gray-100 px-2.5 py-1 rounded-full font-medium">Langkah 3 / 4</span>
                                            </div>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                
                                                <div className="space-y-2">
                                                    <label className="block text-xs font-semibold text-gray-700">Kartu Tanda Mahasiswa (KTM) <span className="text-rose-500">*</span></label>
                                                    <label className="upload-area flex flex-col items-center justify-center gap-2 p-6 border-2 border-dashed border-gray-200 rounded-xl bg-gray-50/50 text-center">
                                                        <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center"><i className="fa-solid fa-id-card text-indigo-500 text-lg"></i></div>
                                                        <div>
                                                            <p className="text-sm font-semibold text-gray-700">Klik atau drag &amp; drop</p>
                                                            <p className="text-xs text-gray-400 mt-0.5">PDF, JPG, PNG (Maks. 2MB)</p>
                                                        </div>
                                                        <input type="file" className="hidden" accept=".pdf,.jpg,.jpeg,.png"/>
                                                    </label>
                                                </div>
                                                
                                                <div className="space-y-2">
                                                    <label className="block text-xs font-semibold text-gray-700">Kartu Hasil Studi (KHS) Terakhir <span className="text-rose-500">*</span></label>
                                                    <label className="upload-area flex flex-col items-center justify-center gap-2 p-6 border-2 border-dashed border-gray-200 rounded-xl bg-gray-50/50 text-center">
                                                        <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center"><i className="fa-solid fa-file-lines text-emerald-500 text-lg"></i></div>
                                                        <div>
                                                            <p className="text-sm font-semibold text-gray-700">Klik atau drag &amp; drop</p>
                                                            <p className="text-xs text-gray-400 mt-0.5">PDF, JPG, PNG (Maks. 2MB)</p>
                                                        </div>
                                                        <input type="file" className="hidden" accept=".pdf,.jpg,.jpeg,.png"/>
                                                    </label>
                                                </div>
                                                
                                                <div className="space-y-2">
                                                    <label className="block text-xs font-semibold text-gray-700">Surat Persetujuan Orang Tua <span className="text-rose-500">*</span></label>
                                                    <label className="upload-area flex flex-col items-center justify-center gap-2 p-6 border-2 border-dashed border-gray-200 rounded-xl bg-gray-50/50 text-center">
                                                        <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center"><i className="fa-solid fa-file-contract text-blue-500 text-lg"></i></div>
                                                        <div>
                                                            <p className="text-sm font-semibold text-gray-700">Klik atau drag &amp; drop</p>
                                                            <p className="text-xs text-gray-400 mt-0.5">PDF, JPG, PNG (Maks. 2MB)</p>
                                                        </div>
                                                        <input type="file" className="hidden" accept=".pdf,.jpg,.jpeg,.png"/>
                                                    </label>
                                                </div>
                                                
                                                <div className="space-y-2">
                                                    <label className="block text-xs font-semibold text-gray-700">
                                                        Surat Keterangan Tidak Mampu
                                                        <span className="text-gray-400 font-normal text-[10.5px] ml-1">(opsional)</span>
                                                    </label>
                                                    <label className="upload-area flex flex-col items-center justify-center gap-2 p-6 border-2 border-dashed border-gray-200 rounded-xl bg-gray-50/50 text-center">
                                                        <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center"><i className="fa-solid fa-file-shield text-slate-500 text-lg"></i></div>
                                                        <div>
                                                            <p className="text-sm font-semibold text-gray-700">Klik atau drag &amp; drop</p>
                                                            <p className="text-xs text-gray-400 mt-0.5">PDF, JPG, PNG (Maks. 2MB)</p>
                                                        </div>
                                                        <input type="file" className="hidden" accept=".pdf,.jpg,.jpeg,.png"/>
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="mt-5 p-4 bg-amber-50 border border-amber-200 rounded-xl flex items-start gap-3">
                                                <i className="fa-solid fa-triangle-exclamation text-amber-500 mt-0.5 shrink-0"></i>
                                                <p className="text-xs text-amber-700">Pastikan dokumen yang diupload jelas dan dapat dibaca. Dokumen yang tidak terbaca akan menyebabkan pendaftaran Anda ditolak.</p>
                                            </div>
                                            <div className="mt-6 flex items-center justify-between">
                                                <button className="flex items-center gap-2 px-5 py-2.5 text-sm border border-gray-200 text-gray-600 rounded-xl hover:bg-gray-50 transition-colors font-medium">
                                                    <i className="fa-solid fa-arrow-left text-xs"></i> Kembali
                                                </button>
                                                <button className="flex items-center gap-2 px-6 py-2.5 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-colors font-semibold shadow-md shadow-indigo-200 text-sm">
                                                    Lanjut <i className="fa-solid fa-arrow-right text-xs"></i>
                                                </button>
                                            </div>
                                        </div>
        
                                        
                                        <div id="step4" className="hidden">
                                            <div className="flex items-center gap-3 mb-6">
                                                <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center shrink-0">
                                                    <i className="fa-solid fa-circle-check text-emerald-600"></i>
                                                </div>
                                                <div>
                                                    <h3 className="text-base font-bold text-gray-900">Review &amp; Konfirmasi Pendaftaran</h3>
                                                    <p className="text-xs text-gray-400 mt-0.5">Periksa kembali seluruh data sebelum mengirimkan pendaftaran</p>
                                                </div>
                                                <span className="ml-auto text-xs text-gray-400 bg-gray-100 px-2.5 py-1 rounded-full font-medium">Langkah 4 / 4</span>
                                            </div>
        
                                            <div className="space-y-5">
                                                
                                                <div className="border border-gray-100 rounded-xl overflow-hidden">
                                                    <div className="flex items-center justify-between px-4 py-3 bg-gray-50 border-b border-gray-100">
                                                        <div className="flex items-center gap-2">
                                                            <i className="fa-solid fa-user text-indigo-500 text-sm"></i>
                                                            <span className="text-sm font-bold text-gray-800">Data Pribadi</span>
                                                        </div>
                                                        <button className="text-xs text-indigo-600 font-semibold hover:text-indigo-700"><i className="fa-solid fa-pen text-[10px] mr-1"></i>Edit</button>
                                                    </div>
                                                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-0 divide-x divide-y divide-gray-100">
                                                        <div className="p-3"><p className="text-[10px] text-gray-400 uppercase tracking-wider mb-1">NIM</p><p className="text-sm font-semibold text-gray-800">2024310001</p></div>
                                                        <div className="p-3"><p className="text-[10px] text-gray-400 uppercase tracking-wider mb-1">Nama</p><p className="text-sm font-semibold text-gray-800">Ahmad Fauzan</p></div>
                                                        <div className="p-3"><p className="text-[10px] text-gray-400 uppercase tracking-wider mb-1">Prodi</p><p className="text-sm font-semibold text-gray-800">Tek. Informatika</p></div>
                                                        <div className="p-3"><p className="text-[10px] text-gray-400 uppercase tracking-wider mb-1">Angkatan</p><p className="text-sm font-semibold text-gray-800">2024</p></div>
                                                        <div className="p-3"><p className="text-[10px] text-gray-400 uppercase tracking-wider mb-1">Jenis Kelamin</p><p className="text-sm font-semibold text-gray-800">Laki-laki</p></div>
                                                        <div className="p-3"><p className="text-[10px] text-gray-400 uppercase tracking-wider mb-1">No HP</p><p className="text-sm font-semibold text-gray-800">081234567890</p></div>
                                                        <div className="p-3 sm:col-span-2"><p className="text-[10px] text-gray-400 uppercase tracking-wider mb-1">Email</p><p className="text-sm font-semibold text-gray-800">ahmad@mahasiswa.ac.id</p></div>
                                                    </div>
                                                </div>
        
                                                
                                                <div className="border border-gray-100 rounded-xl overflow-hidden">
                                                    <div className="flex items-center justify-between px-4 py-3 bg-gray-50 border-b border-gray-100">
                                                        <div className="flex items-center gap-2">
                                                            <i className="fa-solid fa-building text-blue-500 text-sm"></i>
                                                            <span className="text-sm font-bold text-gray-800">Info Asrama</span>
                                                        </div>
                                                        <button className="text-xs text-indigo-600 font-semibold hover:text-indigo-700"><i className="fa-solid fa-pen text-[10px] mr-1"></i>Edit</button>
                                                    </div>
                                                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-0 divide-x divide-y divide-gray-100">
                                                        <div className="p-3"><p className="text-[10px] text-gray-400 uppercase tracking-wider mb-1">Periode</p><p className="text-sm font-semibold text-gray-800">Ganjil 2025/2026</p></div>
                                                        <div className="p-3"><p className="text-[10px] text-gray-400 uppercase tracking-wider mb-1">Gedung Preferensi</p><p className="text-sm font-semibold text-gray-800">Gedung A (Putra)</p></div>
                                                        <div className="p-3"><p className="text-[10px] text-gray-400 uppercase tracking-wider mb-1">Riwayat Asrama</p><p className="text-sm font-semibold text-gray-800">Tidak</p></div>
                                                    </div>
                                                </div>
        
                                                
                                                <div className="border border-gray-100 rounded-xl overflow-hidden">
                                                    <div className="flex items-center justify-between px-4 py-3 bg-gray-50 border-b border-gray-100">
                                                        <div className="flex items-center gap-2">
                                                            <i className="fa-solid fa-file-arrow-up text-amber-500 text-sm"></i>
                                                            <span className="text-sm font-bold text-gray-800">Dokumen Persyaratan</span>
                                                        </div>
                                                        <button className="text-xs text-indigo-600 font-semibold hover:text-indigo-700"><i className="fa-solid fa-pen text-[10px] mr-1"></i>Edit</button>
                                                    </div>
                                                    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                                                        <div className="flex items-center gap-3 p-3 bg-emerald-50 border border-emerald-200 rounded-xl">
                                                            <i className="fa-solid fa-circle-check text-emerald-500"></i>
                                                            <div><p className="text-sm font-semibold text-gray-800">KTM</p><p className="text-[10.5px] text-gray-500">ktm_2024310001.pdf</p></div>
                                                        </div>
                                                        <div className="flex items-center gap-3 p-3 bg-emerald-50 border border-emerald-200 rounded-xl">
                                                            <i className="fa-solid fa-circle-check text-emerald-500"></i>
                                                            <div><p className="text-sm font-semibold text-gray-800">KHS Terakhir</p><p className="text-[10.5px] text-gray-500">khs_sem3.pdf</p></div>
                                                        </div>
                                                        <div className="flex items-center gap-3 p-3 bg-emerald-50 border border-emerald-200 rounded-xl">
                                                            <i className="fa-solid fa-circle-check text-emerald-500"></i>
                                                            <div><p className="text-sm font-semibold text-gray-800">Surat Persetujuan OT</p><p className="text-[10.5px] text-gray-500">surat_ot.pdf</p></div>
                                                        </div>
                                                        <div className="flex items-center gap-3 p-3 bg-gray-50 border border-gray-200 rounded-xl">
                                                            <i className="fa-solid fa-minus text-gray-400"></i>
                                                            <div><p className="text-sm font-semibold text-gray-500">SKTM</p><p className="text-[10.5px] text-gray-400">Tidak diupload (opsional)</p></div>
                                                        </div>
                                                    </div>
                                                </div>
        
                                                
                                                <div className="p-4 bg-rose-50 border border-rose-200 rounded-xl flex items-start gap-3">
                                                    <i className="fa-solid fa-triangle-exclamation text-rose-500 mt-0.5 shrink-0"></i>
                                                    <p className="text-xs text-rose-700">Setelah pendaftaran dikirim, data <strong>tidak dapat diubah</strong> hingga proses verifikasi selesai. Pastikan semua data sudah benar.</p>
                                                </div>
                                                <label className="flex items-start gap-3 cursor-pointer">
                                                    <input type="checkbox" id="finalConfirm" className="w-4 h-4 text-indigo-600 border-gray-300 rounded mt-0.5 cursor-pointer"/>
                                                    <span className="text-sm text-gray-700">Saya menyatakan bahwa seluruh data dan dokumen yang diunggah adalah benar dan asli. Saya siap mengikuti proses seleksi penghuni asrama.</span>
                                                </label>
                                            </div>
        
                                            <div className="mt-6 flex items-center justify-between">
                                                <button className="flex items-center gap-2 px-5 py-2.5 text-sm border border-gray-200 text-gray-600 rounded-xl hover:bg-gray-50 transition-colors font-medium">
                                                    <i className="fa-solid fa-arrow-left text-xs"></i> Kembali
                                                </button>
                                                <button className="flex items-center gap-2 px-6 py-2.5 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 transition-colors font-semibold shadow-md shadow-emerald-200 text-sm">
                                                    <i className="fa-solid fa-paper-plane text-xs"></i> Kirim Pendaftaran
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
    </>
  );
}

function DaftarPendaftarView() {
  return (
    <>
        <div id="content-daftar" className="block">
                                
                                <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 gap-3 mb-5">
                                    <div className="stat-mini bg-white rounded-xl p-3.5 shadow-sm border border-gray-100">
                                        <p className="text-[10px] text-gray-400 font-medium uppercase tracking-wider mb-1">Total</p>
                                        <p className="text-2xl font-bold text-gray-900">68</p>
                                    </div>
                                    <div className="stat-mini bg-white rounded-xl p-3.5 shadow-sm border border-gray-100">
                                        <p className="text-[10px] text-gray-400 font-medium uppercase tracking-wider mb-1">Draft</p>
                                        <p className="text-2xl font-bold text-slate-500">5</p>
                                    </div>
                                    <div className="stat-mini bg-white rounded-xl p-3.5 shadow-sm border border-gray-100">
                                        <p className="text-[10px] text-gray-400 font-medium uppercase tracking-wider mb-1">Diajukan</p>
                                        <div className="flex items-center gap-2">
                                            <p className="text-2xl font-bold text-amber-500">18</p>
                                            <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse shrink-0"></span>
                                        </div>
                                    </div>
                                    <div className="stat-mini bg-white rounded-xl p-3.5 shadow-sm border border-gray-100">
                                        <p className="text-[10px] text-gray-400 font-medium uppercase tracking-wider mb-1">Diverifikasi</p>
                                        <p className="text-2xl font-bold text-blue-500">12</p>
                                    </div>
                                    <div className="stat-mini bg-white rounded-xl p-3.5 shadow-sm border border-gray-100">
                                        <p className="text-[10px] text-gray-400 font-medium uppercase tracking-wider mb-1">Diterima</p>
                                        <p className="text-2xl font-bold text-emerald-600">28</p>
                                    </div>
                                    <div className="stat-mini bg-white rounded-xl p-3.5 shadow-sm border border-gray-100">
                                        <p className="text-[10px] text-gray-400 font-medium uppercase tracking-wider mb-1">Ditolak</p>
                                        <p className="text-2xl font-bold text-rose-500">5</p>
                                    </div>
                                </div>
        
                                
                                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                                    
                                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 px-5 py-4 border-b border-gray-100">
                                        <div className="relative flex-1 min-w-0 sm:max-w-xs">
                                            <i className="fa-solid fa-magnifying-glass absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm"></i>
                                            <input type="text" placeholder="Cari ID, NIM, atau nama..." className="w-full pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-50/80"/>
                                        </div>
                                        <div className="flex items-center gap-2 flex-wrap">
                                            <select className="text-xs border border-gray-200 text-gray-600 rounded-xl px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500 bg-white cursor-pointer">
                                                <option>Semua Status</option>
                                                <option>Draft</option><option>Diajukan</option><option>Diverifikasi</option><option>Diterima</option><option>Ditolak</option>
                                            </select>
                                            <select className="text-xs border border-gray-200 text-gray-600 rounded-xl px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500 bg-white cursor-pointer">
                                                <option>Semua Periode</option>
                                                <option>Ganjil 2025/2026</option><option>Genap 2024/2025</option><option>Ganjil 2024/2025</option>
                                            </select>
                                            <button className="flex items-center gap-1.5 text-xs px-3 py-2 border border-gray-200 text-gray-600 rounded-xl hover:bg-gray-50 transition-colors font-medium">
                                                <i className="fa-solid fa-download text-gray-400 text-[10px]"></i>Export
                                            </button>
                                        </div>
                                    </div>
        
                                    
                                    <div className="overflow-x-auto">
                                        <table className="w-full">
                                            <thead>
                                                <tr className="bg-gray-50/80 border-b border-gray-100">
                                                    <th className="px-5 py-3 text-left w-10"><input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-indigo-600 cursor-pointer"/></th>
                                                    <th className="px-4 py-3 text-left text-[11px] font-bold text-gray-500 uppercase tracking-wider">ID Daftar</th>
                                                    <th className="px-4 py-3 text-left text-[11px] font-bold text-gray-500 uppercase tracking-wider">Mahasiswa</th>
                                                    <th className="px-4 py-3 text-left text-[11px] font-bold text-gray-500 uppercase tracking-wider md:table-cell">Prodi</th>
                                                    <th className="px-4 py-3 text-left text-[11px] font-bold text-gray-500 uppercase tracking-wider hidden lg:table-cell">Periode</th>
                                                    <th className="px-4 py-3 text-center text-[11px] font-bold text-gray-500 uppercase tracking-wider hidden sm:table-cell">Tgl. Daftar</th>
                                                    <th className="px-4 py-3 text-center text-[11px] font-bold text-gray-500 uppercase tracking-wider">Dokumen</th>
                                                    <th className="px-4 py-3 text-left text-[11px] font-bold text-gray-500 uppercase tracking-wider">Status</th>
                                                    <th className="px-4 py-3 text-center text-[11px] font-bold text-gray-500 uppercase tracking-wider">Aksi</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-50">
                                                
                                                <tr className="table-row hover:bg-indigo-50/25">
                                                    <td className="px-5 py-3.5"><input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-indigo-600 cursor-pointer"/></td>
                                                    <td className="px-4 py-3.5"><span className="text-xs font-mono font-bold text-gray-600 bg-gray-100 px-2 py-1 rounded-lg">REG-2025-001</span></td>
                                                    <td className="px-4 py-3.5">
                                                        <div className="flex items-center gap-2.5">
                                                            <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center shrink-0"><span className="text-indigo-700 text-[10px] font-bold">SS</span></div>
                                                            <div><p className="text-sm font-semibold text-gray-800">Siti Salimah</p><p className="text-[10.5px] text-gray-400">2024110098</p></div>
                                                        </div>
                                                    </td>
                                                    <td className="px-4 py-3.5 hidden md:table-cell"><p className="text-sm text-gray-700">Teknik</p><p className="text-[10.5px] text-gray-400">Tek. Informatika</p></td>
                                                    <td className="px-4 py-3.5 hidden lg:table-cell"><span className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded-lg">Ganjil 2025/2026</span></td>
                                                    <td className="px-4 py-3.5 text-center hidden sm:table-cell"><span className="text-sm text-gray-600">07 Jun 2025</span></td>
                                                    <td className="px-4 py-3.5 text-center">
                                                        <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full border border-emerald-200">
                                                            <i className="fa-solid fa-circle-check text-[9px]"></i>3/3
                                                        </span>
                                                    </td>
                                                    <td className="px-4 py-3.5">
                                                        <span className="inline-flex items-center gap-1.5 text-[10.5px] font-bold px-2.5 py-1 rounded-full bg-amber-100 text-amber-700 border border-amber-200">
                                                            <span className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-pulse"></span>Diajukan
                                                        </span>
                                                    </td>
                                                    <td className="px-4 py-3.5 text-center">
                                                        <div className="flex items-center justify-center gap-1">
                                                            <button title="Detail" className="p-1.5 rounded-lg hover:bg-indigo-50 text-gray-400 hover:text-indigo-600 transition-colors"><i className="fa-solid fa-eye text-sm"></i></button>
                                                            <button title="Terima" className="p-1.5 rounded-lg hover:bg-emerald-50 text-gray-400 hover:text-emerald-600 transition-colors"><i className="fa-solid fa-circle-check text-sm"></i></button>
                                                            <button title="Tolak" className="p-1.5 rounded-lg hover:bg-rose-50 text-gray-400 hover:text-rose-600 transition-colors"><i className="fa-solid fa-circle-xmark text-sm"></i></button>
                                                        </div>
                                                    </td>
                                                </tr>
                                                
                                                <tr className="table-row hover:bg-indigo-50/25">
                                                    <td className="px-5 py-3.5"><input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-indigo-600 cursor-pointer"/></td>
                                                    <td className="px-4 py-3.5"><span className="text-xs font-mono font-bold text-gray-600 bg-gray-100 px-2 py-1 rounded-lg">REG-2025-002</span></td>
                                                    <td className="px-4 py-3.5">
                                                        <div className="flex items-center gap-2.5">
                                                            <div className="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center shrink-0"><span className="text-teal-700 text-[10px] font-bold">AW</span></div>
                                                            <div><p className="text-sm font-semibold text-gray-800">Andi Wijaya</p><p className="text-[10.5px] text-gray-400">2024210045</p></div>
                                                        </div>
                                                    </td>
                                                    <td className="px-4 py-3.5 hidden md:table-cell"><p className="text-sm text-gray-700">Ekonomi &amp; Bisnis</p><p className="text-[10.5px] text-gray-400">Manajemen</p></td>
                                                    <td className="px-4 py-3.5 hidden lg:table-cell"><span className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded-lg">Ganjil 2025/2026</span></td>
                                                    <td className="px-4 py-3.5 text-center hidden sm:table-cell"><span className="text-sm text-gray-600">07 Jun 2025</span></td>
                                                    <td className="px-4 py-3.5 text-center">
                                                        <span className="inline-flex items-center gap-1 text-xs font-bold text-amber-700 bg-amber-100 px-2 py-0.5 rounded-full border border-amber-200">
                                                            <i className="fa-solid fa-triangle-exclamation text-[9px]"></i>2/3
                                                        </span>
                                                    </td>
                                                    <td className="px-4 py-3.5">
                                                        <span className="inline-flex items-center gap-1.5 text-[10.5px] font-bold px-2.5 py-1 rounded-full bg-amber-100 text-amber-700 border border-amber-200">
                                                            <span className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-pulse"></span>Diajukan
                                                        </span>
                                                    </td>
                                                    <td className="px-4 py-3.5 text-center">
                                                        <div className="flex items-center justify-center gap-1">
                                                            <button className="p-1.5 rounded-lg hover:bg-indigo-50 text-gray-400 hover:text-indigo-600 transition-colors"><i className="fa-solid fa-eye text-sm"></i></button>
                                                            <button className="p-1.5 rounded-lg hover:bg-emerald-50 text-gray-400 hover:text-emerald-600 transition-colors"><i className="fa-solid fa-circle-check text-sm"></i></button>
                                                            <button className="p-1.5 rounded-lg hover:bg-rose-50 text-gray-400 hover:text-rose-600 transition-colors"><i className="fa-solid fa-circle-xmark text-sm"></i></button>
                                                        </div>
                                                    </td>
                                                </tr>
                                                
                                                <tr className="table-row hover:bg-indigo-50/25">
                                                    <td className="px-5 py-3.5"><input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-indigo-600 cursor-pointer"/></td>
                                                    <td className="px-4 py-3.5"><span className="text-xs font-mono font-bold text-gray-600 bg-gray-100 px-2 py-1 rounded-lg">REG-2025-003</span></td>
                                                    <td className="px-4 py-3.5">
                                                        <div className="flex items-center gap-2.5">
                                                            <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center shrink-0"><span className="text-purple-700 text-[10px] font-bold">LF</span></div>
                                                            <div><p className="text-sm font-semibold text-gray-800">Linda Fitri</p><p className="text-[10.5px] text-gray-400">2024310021</p></div>
                                                        </div>
                                                    </td>
                                                    <td className="px-4 py-3.5 hidden md:table-cell"><p className="text-sm text-gray-700">Ekonomi &amp; Bisnis</p><p className="text-[10.5px] text-gray-400">Akuntansi</p></td>
                                                    <td className="px-4 py-3.5 hidden lg:table-cell"><span className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded-lg">Ganjil 2025/2026</span></td>
                                                    <td className="px-4 py-3.5 text-center hidden sm:table-cell"><span className="text-sm text-gray-600">05 Jun 2025</span></td>
                                                    <td className="px-4 py-3.5 text-center">
                                                        <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full border border-emerald-200">
                                                            <i className="fa-solid fa-circle-check text-[9px]"></i>3/3
                                                        </span>
                                                    </td>
                                                    <td className="px-4 py-3.5">
                                                        <span className="inline-flex items-center gap-1.5 text-[10.5px] font-bold px-2.5 py-1 rounded-full bg-blue-100 text-blue-700 border border-blue-200">
                                                            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>Diverifikasi
                                                        </span>
                                                    </td>
                                                    <td className="px-4 py-3.5 text-center">
                                                        <div className="flex items-center justify-center gap-1">
                                                            <button className="p-1.5 rounded-lg hover:bg-indigo-50 text-gray-400 hover:text-indigo-600 transition-colors"><i className="fa-solid fa-eye text-sm"></i></button>
                                                            <button className="p-1.5 rounded-lg hover:bg-emerald-50 text-gray-400 hover:text-emerald-600 transition-colors"><i className="fa-solid fa-circle-check text-sm"></i></button>
                                                            <button className="p-1.5 rounded-lg hover:bg-rose-50 text-gray-400 hover:text-rose-600 transition-colors"><i className="fa-solid fa-circle-xmark text-sm"></i></button>
                                                        </div>
                                                    </td>
                                                </tr>
                                                
                                                <tr className="table-row hover:bg-indigo-50/25">
                                                    <td className="px-5 py-3.5"><input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-indigo-600 cursor-pointer"/></td>
                                                    <td className="px-4 py-3.5"><span className="text-xs font-mono font-bold text-gray-600 bg-gray-100 px-2 py-1 rounded-lg">REG-2025-004</span></td>
                                                    <td className="px-4 py-3.5">
                                                        <div className="flex items-center gap-2.5">
                                                            <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center shrink-0"><span className="text-orange-700 text-[10px] font-bold">RM</span></div>
                                                            <div><p className="text-sm font-semibold text-gray-800">Reza Maulana</p><p className="text-[10.5px] text-gray-400">2024410033</p></div>
                                                        </div>
                                                    </td>
                                                    <td className="px-4 py-3.5 hidden md:table-cell"><p className="text-sm text-gray-700">Hukum</p><p className="text-[10.5px] text-gray-400">Ilmu Hukum</p></td>
                                                    <td className="px-4 py-3.5 hidden lg:table-cell"><span className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded-lg">Ganjil 2025/2026</span></td>
                                                    <td className="px-4 py-3.5 text-center hidden sm:table-cell"><span className="text-sm text-gray-600">04 Jun 2025</span></td>
                                                    <td className="px-4 py-3.5 text-center">
                                                        <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full border border-emerald-200">
                                                            <i className="fa-solid fa-circle-check text-[9px]"></i>3/3
                                                        </span>
                                                    </td>
                                                    <td className="px-4 py-3.5">
                                                        <span className="inline-flex items-center gap-1.5 text-[10.5px] font-bold px-2.5 py-1 rounded-full bg-amber-100 text-amber-700 border border-amber-200">
                                                            <span className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-pulse"></span>Diajukan
                                                        </span>
                                                    </td>
                                                    <td className="px-4 py-3.5 text-center">
                                                        <div className="flex items-center justify-center gap-1">
                                                            <button className="p-1.5 rounded-lg hover:bg-indigo-50 text-gray-400 hover:text-indigo-600 transition-colors"><i className="fa-solid fa-eye text-sm"></i></button>
                                                            <button className="p-1.5 rounded-lg hover:bg-emerald-50 text-gray-400 hover:text-emerald-600 transition-colors"><i className="fa-solid fa-circle-check text-sm"></i></button>
                                                            <button className="p-1.5 rounded-lg hover:bg-rose-50 text-gray-400 hover:text-rose-600 transition-colors"><i className="fa-solid fa-circle-xmark text-sm"></i></button>
                                                        </div>
                                                    </td>
                                                </tr>
                                                
                                                <tr className="table-row hover:bg-indigo-50/25">
                                                    <td className="px-5 py-3.5"><input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-indigo-600 cursor-pointer"/></td>
                                                    <td className="px-4 py-3.5"><span className="text-xs font-mono font-bold text-gray-600 bg-gray-100 px-2 py-1 rounded-lg">REG-2025-005</span></td>
                                                    <td className="px-4 py-3.5">
                                                        <div className="flex items-center gap-2.5">
                                                            <div className="w-8 h-8 bg-pink-100 rounded-lg flex items-center justify-center shrink-0"><span className="text-pink-700 text-[10px] font-bold">MS</span></div>
                                                            <div><p className="text-sm font-semibold text-gray-800">Maya Sari</p><p className="text-[10.5px] text-gray-400">2024510012</p></div>
                                                        </div>
                                                    </td>
                                                    <td className="px-4 py-3.5 hidden md:table-cell"><p className="text-sm text-gray-700">Psikologi</p><p className="text-[10.5px] text-gray-400">Psikologi</p></td>
                                                    <td className="px-4 py-3.5 hidden lg:table-cell"><span className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded-lg">Ganjil 2025/2026</span></td>
                                                    <td className="px-4 py-3.5 text-center hidden sm:table-cell"><span className="text-sm text-gray-600">03 Jun 2025</span></td>
                                                    <td className="px-4 py-3.5 text-center">
                                                        <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full border border-emerald-200">
                                                            <i className="fa-solid fa-circle-check text-[9px]"></i>3/3
                                                        </span>
                                                    </td>
                                                    <td className="px-4 py-3.5">
                                                        <span className="inline-flex items-center gap-1.5 text-[10.5px] font-bold px-2.5 py-1 rounded-full bg-blue-100 text-blue-700 border border-blue-200">
                                                            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>Diverifikasi
                                                        </span>
                                                    </td>
                                                    <td className="px-4 py-3.5 text-center">
                                                        <div className="flex items-center justify-center gap-1">
                                                            <button className="p-1.5 rounded-lg hover:bg-indigo-50 text-gray-400 hover:text-indigo-600 transition-colors"><i className="fa-solid fa-eye text-sm"></i></button>
                                                            <button className="p-1.5 rounded-lg hover:bg-emerald-50 text-gray-400 hover:text-emerald-600 transition-colors"><i className="fa-solid fa-circle-check text-sm"></i></button>
                                                            <button className="p-1.5 rounded-lg hover:bg-rose-50 text-gray-400 hover:text-rose-600 transition-colors"><i className="fa-solid fa-circle-xmark text-sm"></i></button>
                                                        </div>
                                                    </td>
                                                </tr>
                                                
                                                <tr className="table-row hover:bg-indigo-50/25">
                                                    <td className="px-5 py-3.5"><input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-indigo-600 cursor-pointer"/></td>
                                                    <td className="px-4 py-3.5"><span className="text-xs font-mono font-bold text-gray-600 bg-gray-100 px-2 py-1 rounded-lg">REG-2025-006</span></td>
                                                    <td className="px-4 py-3.5">
                                                        <div className="flex items-center gap-2.5">
                                                            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center shrink-0"><span className="text-blue-700 text-[10px] font-bold">DP</span></div>
                                                            <div><p className="text-sm font-semibold text-gray-800">Dicky Pratama</p><p className="text-[10.5px] text-gray-400">2024210067</p></div>
                                                        </div>
                                                    </td>
                                                    <td className="px-4 py-3.5 hidden md:table-cell"><p className="text-sm text-gray-700">Ekonomi &amp; Bisnis</p><p className="text-[10.5px] text-gray-400">Ekonomi</p></td>
                                                    <td className="px-4 py-3.5 hidden lg:table-cell"><span className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded-lg">Genap 2024/2025</span></td>
                                                    <td className="px-4 py-3.5 text-center hidden sm:table-cell"><span className="text-sm text-gray-600">15 Jan 2025</span></td>
                                                    <td className="px-4 py-3.5 text-center"><span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full border border-emerald-200"><i className="fa-solid fa-circle-check text-[9px]"></i>3/3</span></td>
                                                    <td className="px-4 py-3.5">
                                                        <span className="inline-flex items-center gap-1.5 text-[10.5px] font-bold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-700 border border-emerald-200">
                                                            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>Diterima
                                                        </span>
                                                    </td>
                                                    <td className="px-4 py-3.5 text-center">
                                                        <button className="p-1.5 rounded-lg hover:bg-indigo-50 text-gray-400 hover:text-indigo-600 transition-colors"><i className="fa-solid fa-eye text-sm"></i></button>
                                                    </td>
                                                </tr>
                                                
                                                <tr className="table-row hover:bg-indigo-50/25">
                                                    <td className="px-5 py-3.5"><input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-indigo-600 cursor-pointer"/></td>
                                                    <td className="px-4 py-3.5"><span className="text-xs font-mono font-bold text-gray-600 bg-gray-100 px-2 py-1 rounded-lg">REG-2024-045</span></td>
                                                    <td className="px-4 py-3.5">
                                                        <div className="flex items-center gap-2.5">
                                                            <div className="w-8 h-8 bg-violet-100 rounded-lg flex items-center justify-center shrink-0"><span className="text-violet-700 text-[10px] font-bold">SI</span></div>
                                                            <div><p className="text-sm font-semibold text-gray-800">Sari Indah</p><p className="text-[10.5px] text-gray-400">2023110044</p></div>
                                                        </div>
                                                    </td>
                                                    <td className="px-4 py-3.5 hidden md:table-cell"><p className="text-sm text-gray-700">Teknik</p><p className="text-[10.5px] text-gray-400">Tek. Informatika</p></td>
                                                    <td className="px-4 py-3.5 hidden lg:table-cell"><span className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded-lg">Genap 2024/2025</span></td>
                                                    <td className="px-4 py-3.5 text-center hidden sm:table-cell"><span className="text-sm text-gray-600">12 Jan 2025</span></td>
                                                    <td className="px-4 py-3.5 text-center"><span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full border border-emerald-200"><i className="fa-solid fa-circle-check text-[9px]"></i>3/3</span></td>
                                                    <td className="px-4 py-3.5">
                                                        <span className="inline-flex items-center gap-1.5 text-[10.5px] font-bold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-700 border border-emerald-200">
                                                            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>Diterima
                                                        </span>
                                                    </td>
                                                    <td className="px-4 py-3.5 text-center">
                                                        <button className="p-1.5 rounded-lg hover:bg-indigo-50 text-gray-400 hover:text-indigo-600 transition-colors"><i className="fa-solid fa-eye text-sm"></i></button>
                                                    </td>
                                                </tr>
                                                
                                                <tr className="table-row hover:bg-indigo-50/25 opacity-75">
                                                    <td className="px-5 py-3.5"><input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-indigo-600 cursor-pointer"/></td>
                                                    <td className="px-4 py-3.5"><span className="text-xs font-mono font-bold text-gray-600 bg-gray-100 px-2 py-1 rounded-lg">REG-2024-044</span></td>
                                                    <td className="px-4 py-3.5">
                                                        <div className="flex items-center gap-2.5">
                                                            <div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center shrink-0"><span className="text-slate-600 text-[10px] font-bold">BS</span></div>
                                                            <div><p className="text-sm font-semibold text-gray-600">Bayu Setiawan</p><p className="text-[10.5px] text-gray-400">2023310021</p></div>
                                                        </div>
                                                    </td>
                                                    <td className="px-4 py-3.5 hidden md:table-cell"><p className="text-sm text-gray-600">Ekonomi &amp; Bisnis</p><p className="text-[10.5px] text-gray-400">Manajemen</p></td>
                                                    <td className="px-4 py-3.5 hidden lg:table-cell"><span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-lg">Genap 2024/2025</span></td>
                                                    <td className="px-4 py-3.5 text-center hidden sm:table-cell"><span className="text-sm text-gray-500">10 Jan 2025</span></td>
                                                    <td className="px-4 py-3.5 text-center"><span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full border border-emerald-200"><i className="fa-solid fa-circle-check text-[9px]"></i>3/3</span></td>
                                                    <td className="px-4 py-3.5">
                                                        <span className="inline-flex items-center gap-1.5 text-[10.5px] font-bold px-2.5 py-1 rounded-full bg-rose-100 text-rose-700 border border-rose-200">
                                                            <span className="w-1.5 h-1.5 bg-rose-500 rounded-full"></span>Ditolak
                                                        </span>
                                                    </td>
                                                    <td className="px-4 py-3.5 text-center">
                                                        <button className="p-1.5 rounded-lg hover:bg-indigo-50 text-gray-400 hover:text-indigo-600 transition-colors"><i className="fa-solid fa-eye text-sm"></i></button>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    
                                    <div className="flex flex-col sm:flex-row items-center justify-between gap-3 px-5 py-3.5 border-t border-gray-100 bg-gray-50/60">
                                        <p className="text-xs text-gray-500">Menampilkan <span className="font-bold text-gray-700">1&ndash;8</span> dari <span className="font-bold text-gray-700">68</span> pendaftar</p>
                                        <div className="flex items-center gap-1">
                                            <button className="px-2.5 py-1.5 text-xs text-gray-500 hover:bg-gray-200 rounded-lg transition-colors"><i className="fa-solid fa-chevron-left"></i></button>
                                            <button className="px-3 py-1.5 text-xs bg-indigo-600 text-white rounded-lg font-bold shadow-sm">1</button>
                                            <button className="px-3 py-1.5 text-xs text-gray-600 hover:bg-gray-200 rounded-lg transition-colors font-medium">2</button>
                                            <button className="px-3 py-1.5 text-xs text-gray-600 hover:bg-gray-200 rounded-lg transition-colors font-medium">3</button>
                                            <span className="px-1.5 text-gray-300 text-xs">&middot;&middot;&middot;</span>
                                            <button className="px-3 py-1.5 text-xs text-gray-600 hover:bg-gray-200 rounded-lg transition-colors font-medium">9</button>
                                            <button className="px-2.5 py-1.5 text-xs text-gray-500 hover:bg-gray-200 rounded-lg transition-colors"><i className="fa-solid fa-chevron-right"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
    </>
  );
}

function VerifikasiPendaftaranView() {
  return (
    <>
        <div id="content-verifikasi" className="block">
                                
                                <div className="bg-amber-50 border border-amber-200 rounded-2xl px-5 py-4 mb-5 flex items-start gap-3">
                                    <div className="w-8 h-8 bg-amber-100 rounded-xl flex items-center justify-center shrink-0 mt-0.5">
                                        <i className="fa-solid fa-bell text-amber-600 text-sm"></i>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-sm font-bold text-amber-800">18 Pendaftaran Menunggu Verifikasi</p>
                                        <p className="text-xs text-amber-700 mt-0.5">Segera proses pendaftaran yang masuk untuk memperlancar penempatan kamar mahasiswa baru.</p>
                                    </div>
                                    <button className="shrink-0 text-xs font-semibold text-amber-700 bg-amber-100 hover:bg-amber-200 px-3 py-1.5 rounded-xl transition-colors border border-amber-300">
                                        Lihat Semua
                                    </button>
                                </div>
        
                                
                                <div className="flex items-center gap-2 mb-5 flex-wrap">
                                    <span className="text-xs text-gray-500 font-medium">Filter:</span>
                                    <button id="filter-semua" className="text-xs px-3 py-1.5 bg-indigo-600 text-white rounded-lg font-semibold shadow-sm">Semua (18)</button>
                                    <button id="filter-diajukan" className="text-xs px-3 py-1.5 bg-white border border-gray-200 text-gray-600 rounded-lg hover:bg-gray-50 transition-colors font-medium">Diajukan (12)</button>
                                    <button id="filter-diverifikasi" className="text-xs px-3 py-1.5 bg-white border border-gray-200 text-gray-600 rounded-lg hover:bg-gray-50 transition-colors font-medium">Diverifikasi (6)</button>
                                </div>
        
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mb-5">
        
                                    
                                    <div className="verify-card bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                                        <div className="flex items-center justify-between px-5 py-3.5 border-b border-gray-100 bg-gray-50/50">
                                            <span className="text-xs font-mono font-bold text-gray-600">REG-2025-001</span>
                                            <div className="flex items-center gap-2">
                                                <span className="text-[10.5px] text-gray-400">2 jam lalu</span>
                                                <span className="inline-flex items-center gap-1 text-[10.5px] font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-700 border border-amber-200"><span className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-pulse"></span>Diajukan</span>
                                            </div>
                                        </div>
                                        <div className="p-5">
                                            
                                            <div className="flex items-center gap-3 mb-4">
                                                <div className="w-11 h-11 bg-indigo-100 rounded-xl flex items-center justify-center shrink-0 text-indigo-700 font-bold">SS</div>
                                                <div>
                                                    <p className="text-sm font-bold text-gray-800">Siti Salimah</p>
                                                    <p className="text-xs text-gray-500">2024110098 &bull; Teknik Informatika</p>
                                                    <span className="text-[10px] bg-gray-100 text-gray-500 px-1.5 py-0.5 rounded font-medium">Ganjil 2025/2026</span>
                                                </div>
                                            </div>
                                            
                                            <div className="space-y-1.5 mb-4">
                                                <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Dokumen</p>
                                                <div className="grid grid-cols-3 gap-2">
                                                    <div className="flex items-center gap-1.5 text-[10.5px] text-emerald-700 font-semibold bg-emerald-50 px-2 py-1.5 rounded-lg border border-emerald-200">
                                                        <i className="fa-solid fa-circle-check text-emerald-500 text-[9px]"></i>KTM
                                                    </div>
                                                    <div className="flex items-center gap-1.5 text-[10.5px] text-emerald-700 font-semibold bg-emerald-50 px-2 py-1.5 rounded-lg border border-emerald-200">
                                                        <i className="fa-solid fa-circle-check text-emerald-500 text-[9px]"></i>KHS
                                                    </div>
                                                    <div className="flex items-center gap-1.5 text-[10.5px] text-emerald-700 font-semibold bg-emerald-50 px-2 py-1.5 rounded-lg border border-emerald-200">
                                                        <i className="fa-solid fa-circle-check text-emerald-500 text-[9px]"></i>Surat OT
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div className="grid grid-cols-2 gap-2">
                                                <button className="flex items-center justify-center gap-1.5 py-2 text-xs font-semibold text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors">
                                                    <i className="fa-solid fa-eye text-[10px]"></i>Detail
                                                </button>
                                                <button className="flex items-center justify-center gap-1.5 py-2 text-xs font-bold text-emerald-700 bg-emerald-100 hover:bg-emerald-200 rounded-xl transition-colors border border-emerald-200">
                                                    <i className="fa-solid fa-circle-check text-[10px]"></i>Terima
                                                </button>
                                                <button className="flex items-center justify-center gap-1.5 py-2 text-xs font-semibold text-blue-700 bg-blue-50 hover:bg-blue-100 rounded-xl transition-colors border border-blue-200">
                                                    <i className="fa-solid fa-shield-check text-[10px]"></i>Verifikasi
                                                </button>
                                                <button className="flex items-center justify-center gap-1.5 py-2 text-xs font-bold text-rose-700 bg-rose-50 hover:bg-rose-100 rounded-xl transition-colors border border-rose-200">
                                                    <i className="fa-solid fa-circle-xmark text-[10px]"></i>Tolak
                                                </button>
                                            </div>
                                        </div>
                                    </div>
        
                                    
                                    <div className="verify-card bg-white rounded-2xl shadow-sm border border-amber-200 overflow-hidden">
                                        <div className="flex items-center justify-between px-5 py-3.5 border-b border-amber-100 bg-amber-50/30">
                                            <span className="text-xs font-mono font-bold text-gray-600">REG-2025-002</span>
                                            <div className="flex items-center gap-2">
                                                <span className="text-[10.5px] text-gray-400">5 jam lalu</span>
                                                <span className="inline-flex items-center gap-1 text-[10.5px] font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-700 border border-amber-200"><span className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-pulse"></span>Diajukan</span>
                                            </div>
                                        </div>
                                        <div className="p-5">
                                            <div className="flex items-center gap-3 mb-4">
                                                <div className="w-11 h-11 bg-teal-100 rounded-xl flex items-center justify-center shrink-0 text-teal-700 font-bold">AW</div>
                                                <div>
                                                    <p className="text-sm font-bold text-gray-800">Andi Wijaya</p>
                                                    <p className="text-xs text-gray-500">2024210045 &bull; Manajemen</p>
                                                    <span className="text-[10px] bg-gray-100 text-gray-500 px-1.5 py-0.5 rounded font-medium">Ganjil 2025/2026</span>
                                                </div>
                                            </div>
                                            <div className="space-y-1.5 mb-3">
                                                <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Dokumen</p>
                                                <div className="grid grid-cols-3 gap-2">
                                                    <div className="flex items-center gap-1.5 text-[10.5px] text-emerald-700 font-semibold bg-emerald-50 px-2 py-1.5 rounded-lg border border-emerald-200"><i className="fa-solid fa-circle-check text-emerald-500 text-[9px]"></i>KTM</div>
                                                    <div className="flex items-center gap-1.5 text-[10.5px] text-emerald-700 font-semibold bg-emerald-50 px-2 py-1.5 rounded-lg border border-emerald-200"><i className="fa-solid fa-circle-check text-emerald-500 text-[9px]"></i>KHS</div>
                                                    <div className="flex items-center gap-1.5 text-[10.5px] text-rose-700 font-semibold bg-rose-50 px-2 py-1.5 rounded-lg border border-rose-200"><i className="fa-solid fa-circle-xmark text-rose-500 text-[9px]"></i>Surat OT</div>
                                                </div>
                                            </div>
                                            <div className="mb-4 p-2.5 bg-amber-50 border border-amber-200 rounded-xl">
                                                <p className="text-[10.5px] text-amber-700 font-medium"><i className="fa-solid fa-triangle-exclamation mr-1"></i>Surat Persetujuan Orang Tua belum diunggah</p>
                                            </div>
                                            <div className="grid grid-cols-2 gap-2">
                                                <button className="flex items-center justify-center gap-1.5 py-2 text-xs font-semibold text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors">
                                                    <i className="fa-solid fa-eye text-[10px]"></i>Detail
                                                </button>
                                                <button className="flex items-center justify-center gap-1.5 py-2 text-xs font-bold text-rose-700 bg-rose-50 hover:bg-rose-100 rounded-xl transition-colors border border-rose-200">
                                                    <i className="fa-solid fa-circle-xmark text-[10px]"></i>Tolak
                                                </button>
                                            </div>
                                        </div>
                                    </div>
        
                                    
                                    <div className="verify-card bg-white rounded-2xl shadow-sm border border-blue-200 overflow-hidden">
                                        <div className="flex items-center justify-between px-5 py-3.5 border-b border-blue-100 bg-blue-50/30">
                                            <span className="text-xs font-mono font-bold text-gray-600">REG-2025-003</span>
                                            <div className="flex items-center gap-2">
                                                <span className="text-[10.5px] text-gray-400">1 hari lalu</span>
                                                <span className="inline-flex items-center gap-1 text-[10.5px] font-bold px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 border border-blue-200"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>Diverifikasi</span>
                                            </div>
                                        </div>
                                        <div className="p-5">
                                            <div className="flex items-center gap-3 mb-4">
                                                <div className="w-11 h-11 bg-purple-100 rounded-xl flex items-center justify-center shrink-0 text-purple-700 font-bold">LF</div>
                                                <div>
                                                    <p className="text-sm font-bold text-gray-800">Linda Fitri</p>
                                                    <p className="text-xs text-gray-500">2024310021 &bull; Akuntansi</p>
                                                    <span className="text-[10px] bg-gray-100 text-gray-500 px-1.5 py-0.5 rounded font-medium">Ganjil 2025/2026</span>
                                                </div>
                                            </div>
                                            <div className="space-y-1.5 mb-3">
                                                <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Dokumen</p>
                                                <div className="grid grid-cols-3 gap-2">
                                                    <div className="flex items-center gap-1.5 text-[10.5px] text-emerald-700 font-semibold bg-emerald-50 px-2 py-1.5 rounded-lg border border-emerald-200"><i className="fa-solid fa-circle-check text-emerald-500 text-[9px]"></i>KTM</div>
                                                    <div className="flex items-center gap-1.5 text-[10.5px] text-emerald-700 font-semibold bg-emerald-50 px-2 py-1.5 rounded-lg border border-emerald-200"><i className="fa-solid fa-circle-check text-emerald-500 text-[9px]"></i>KHS</div>
                                                    <div className="flex items-center gap-1.5 text-[10.5px] text-emerald-700 font-semibold bg-emerald-50 px-2 py-1.5 rounded-lg border border-emerald-200"><i className="fa-solid fa-circle-check text-emerald-500 text-[9px]"></i>Surat OT</div>
                                                </div>
                                            </div>
                                            <div className="mb-4 p-2.5 bg-blue-50 border border-blue-200 rounded-xl">
                                                <p className="text-[10.5px] text-blue-700 font-medium"><i className="fa-solid fa-circle-info mr-1"></i>Dokumen lengkap, menunggu persetujuan admin</p>
                                            </div>
                                            <div className="grid grid-cols-2 gap-2">
                                                <button className="col-span-1 flex items-center justify-center gap-1.5 py-2 text-xs font-bold text-emerald-700 bg-emerald-100 hover:bg-emerald-200 rounded-xl transition-colors border border-emerald-200">
                                                    <i className="fa-solid fa-circle-check text-[10px]"></i>Terima
                                                </button>
                                                <button className="flex items-center justify-center gap-1.5 py-2 text-xs font-bold text-rose-700 bg-rose-50 hover:bg-rose-100 rounded-xl transition-colors border border-rose-200">
                                                    <i className="fa-solid fa-circle-xmark text-[10px]"></i>Tolak
                                                </button>
                                            </div>
                                        </div>
                                    </div>
        
                                    
                                    <div className="verify-card bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                                        <div className="flex items-center justify-between px-5 py-3.5 border-b border-gray-100 bg-gray-50/50">
                                            <span className="text-xs font-mono font-bold text-gray-600">REG-2025-004</span>
                                            <div className="flex items-center gap-2">
                                                <span className="text-[10.5px] text-gray-400">2 hari lalu</span>
                                                <span className="inline-flex items-center gap-1 text-[10.5px] font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-700 border border-amber-200"><span className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-pulse"></span>Diajukan</span>
                                            </div>
                                        </div>
                                        <div className="p-5">
                                            <div className="flex items-center gap-3 mb-4">
                                                <div className="w-11 h-11 bg-orange-100 rounded-xl flex items-center justify-center shrink-0 text-orange-700 font-bold">RM</div>
                                                <div>
                                                    <p className="text-sm font-bold text-gray-800">Reza Maulana</p>
                                                    <p className="text-xs text-gray-500">2024410033 &bull; Ilmu Hukum</p>
                                                    <span className="text-[10px] bg-gray-100 text-gray-500 px-1.5 py-0.5 rounded font-medium">Ganjil 2025/2026</span>
                                                </div>
                                            </div>
                                            <div className="space-y-1.5 mb-4">
                                                <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Dokumen</p>
                                                <div className="grid grid-cols-3 gap-2">
                                                    <div className="flex items-center gap-1.5 text-[10.5px] text-emerald-700 font-semibold bg-emerald-50 px-2 py-1.5 rounded-lg border border-emerald-200"><i className="fa-solid fa-circle-check text-emerald-500 text-[9px]"></i>KTM</div>
                                                    <div className="flex items-center gap-1.5 text-[10.5px] text-emerald-700 font-semibold bg-emerald-50 px-2 py-1.5 rounded-lg border border-emerald-200"><i className="fa-solid fa-circle-check text-emerald-500 text-[9px]"></i>KHS</div>
                                                    <div className="flex items-center gap-1.5 text-[10.5px] text-emerald-700 font-semibold bg-emerald-50 px-2 py-1.5 rounded-lg border border-emerald-200"><i className="fa-solid fa-circle-check text-emerald-500 text-[9px]"></i>Surat OT</div>
                                                </div>
                                            </div>
                                            <div className="grid grid-cols-2 gap-2">
                                                <button className="flex items-center justify-center gap-1.5 py-2 text-xs font-semibold text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors"><i className="fa-solid fa-eye text-[10px]"></i>Detail</button>
                                                <button className="flex items-center justify-center gap-1.5 py-2 text-xs font-bold text-emerald-700 bg-emerald-100 hover:bg-emerald-200 rounded-xl transition-colors border border-emerald-200"><i className="fa-solid fa-circle-check text-[10px]"></i>Terima</button>
                                                <button className="flex items-center justify-center gap-1.5 py-2 text-xs font-semibold text-blue-700 bg-blue-50 hover:bg-blue-100 rounded-xl transition-colors border border-blue-200"><i className="fa-solid fa-shield-check text-[10px]"></i>Verifikasi</button>
                                                <button className="flex items-center justify-center gap-1.5 py-2 text-xs font-bold text-rose-700 bg-rose-50 hover:bg-rose-100 rounded-xl transition-colors border border-rose-200"><i className="fa-solid fa-circle-xmark text-[10px]"></i>Tolak</button>
                                            </div>
                                        </div>
                                    </div>
        
                                </div>
        
                                
                                <div className="text-center">
                                    <button className="inline-flex items-center gap-2 px-5 py-2.5 text-sm border border-gray-200 text-gray-600 rounded-xl hover:bg-gray-50 transition-colors font-medium">
                                        <i className="fa-solid fa-rotate text-gray-400 text-xs"></i>
                                        Menampilkan 4 dari 18 &bull; Muat lebih banyak
                                    </button>
                                </div>
                            </div>
    </>
  );
}

function RiwayatPendaftaranView() {
  return (
    <>
        <div id="content-riwayat" className="block">
                                
                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
                                    <div className="stat-mini bg-white rounded-xl p-3.5 shadow-sm border border-gray-100">
                                        <p className="text-[10px] text-gray-400 font-medium uppercase tracking-wider mb-1">Total Diproses</p>
                                        <p className="text-2xl font-bold text-gray-900">61</p>
                                    </div>
                                    <div className="stat-mini bg-white rounded-xl p-3.5 shadow-sm border border-gray-100">
                                        <p className="text-[10px] text-gray-400 font-medium uppercase tracking-wider mb-1">Tingkat Penerimaan</p>
                                        <p className="text-2xl font-bold text-emerald-600">82%</p>
                                    </div>
                                    <div className="stat-mini bg-white rounded-xl p-3.5 shadow-sm border border-gray-100">
                                        <p className="text-[10px] text-gray-400 font-medium uppercase tracking-wider mb-1">Tingkat Penolakan</p>
                                        <p className="text-2xl font-bold text-rose-500">8%</p>
                                    </div>
                                    <div className="stat-mini bg-white rounded-xl p-3.5 shadow-sm border border-gray-100">
                                        <p className="text-[10px] text-gray-400 font-medium uppercase tracking-wider mb-1">Rata-rata Proses</p>
                                        <p className="text-2xl font-bold text-blue-500">2.3 <span className="text-sm font-medium text-blue-400">hari</span></p>
                                    </div>
                                </div>
        
                                
                                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 px-5 py-4 border-b border-gray-100">
                                        <div className="relative flex-1 min-w-0 sm:max-w-xs">
                                            <i className="fa-solid fa-magnifying-glass absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm"></i>
                                            <input type="text" placeholder="Cari riwayat pendaftaran..." className="w-full pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-50/80"/>
                                        </div>
                                        <div className="flex items-center gap-2 flex-wrap">
                                            <select className="text-xs border border-gray-200 text-gray-600 rounded-xl px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500 bg-white cursor-pointer">
                                                <option>Semua Periode</option>
                                                <option>Ganjil 2025/2026</option><option>Genap 2024/2025</option><option>Ganjil 2024/2025</option><option>Genap 2023/2024</option>
                                            </select>
                                            <select className="text-xs border border-gray-200 text-gray-600 rounded-xl px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500 bg-white cursor-pointer">
                                                <option>Semua Status</option>
                                                <option>Diterima</option><option>Ditolak</option>
                                            </select>
                                            <button className="flex items-center gap-1.5 text-xs px-3 py-2 border border-gray-200 text-gray-600 rounded-xl hover:bg-gray-50 transition-colors font-medium">
                                                <i className="fa-solid fa-download text-gray-400 text-[10px]"></i>Export
                                            </button>
                                        </div>
                                    </div>
                                    <div className="overflow-x-auto">
                                        <table className="w-full">
                                            <thead>
                                                <tr className="bg-gray-50/80 border-b border-gray-100">
                                                    <th className="px-4 py-3 text-left text-[11px] font-bold text-gray-500 uppercase tracking-wider">ID Daftar</th>
                                                    <th className="px-4 py-3 text-left text-[11px] font-bold text-gray-500 uppercase tracking-wider">Mahasiswa</th>
                                                    <th className="px-4 py-3 text-left text-[11px] font-bold text-gray-500 uppercase tracking-wider md:table-cell">Periode</th>
                                                    <th className="px-4 py-3 text-center text-[11px] font-bold text-gray-500 uppercase tracking-wider hidden sm:table-cell">Tgl. Daftar</th>
                                                    <th className="px-4 py-3 text-center text-[11px] font-bold text-gray-500 uppercase tracking-wider hidden lg:table-cell">Tgl. Diproses</th>
                                                    <th className="px-4 py-3 text-center text-[11px] font-bold text-gray-500 uppercase tracking-wider hidden xl:table-cell">Lama Proses</th>
                                                    <th className="px-4 py-3 text-left text-[11px] font-bold text-gray-500 uppercase tracking-wider">Status</th>
                                                    <th className="px-4 py-3 text-center text-[11px] font-bold text-gray-500 uppercase tracking-wider">Kamar</th>
                                                    <th className="px-4 py-3 text-center text-[11px] font-bold text-gray-500 uppercase tracking-wider">Aksi</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-50">
                                                
                                                <tr className="table-row hover:bg-indigo-50/25">
                                                    <td className="px-4 py-3.5"><span className="text-xs font-mono font-bold text-gray-600 bg-gray-100 px-2 py-1 rounded-lg">REG-2024-045</span></td>
                                                    <td className="px-4 py-3.5"><div className="flex items-center gap-2.5"><div className="w-7 h-7 bg-violet-100 rounded-lg flex items-center justify-center shrink-0 text-violet-700 text-[9px] font-bold">SI</div><div><p className="text-sm font-semibold text-gray-800">Sari Indah</p><p className="text-[10.5px] text-gray-400">2023110044</p></div></div></td>
                                                    <td className="px-4 py-3.5 hidden md:table-cell"><span className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded-lg">Genap 2024/2025</span></td>
                                                    <td className="px-4 py-3.5 text-center hidden sm:table-cell"><span className="text-xs text-gray-600">12 Jan 2025</span></td>
                                                    <td className="px-4 py-3.5 text-center hidden lg:table-cell"><span className="text-xs text-gray-600">15 Jan 2025</span></td>
                                                    <td className="px-4 py-3.5 text-center hidden xl:table-cell"><span className="text-xs font-semibold text-gray-700 bg-gray-100 px-2 py-0.5 rounded-full">3 hari</span></td>
                                                    <td className="px-4 py-3.5"><span className="inline-flex items-center gap-1.5 text-[10.5px] font-bold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-700 border border-emerald-200"><span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>Diterima</span></td>
                                                    <td className="px-4 py-3.5 text-center"><span className="text-sm font-bold text-gray-700 bg-gray-100 px-2 py-0.5 rounded-lg">C-201</span></td>
                                                    <td className="px-4 py-3.5 text-center"><button className="p-1.5 rounded-lg hover:bg-indigo-50 text-gray-400 hover:text-indigo-600 transition-colors"><i className="fa-solid fa-eye text-sm"></i></button></td>
                                                </tr>
                                                
                                                <tr className="table-row hover:bg-indigo-50/25 opacity-75">
                                                    <td className="px-4 py-3.5"><span className="text-xs font-mono font-bold text-gray-600 bg-gray-100 px-2 py-1 rounded-lg">REG-2024-044</span></td>
                                                    <td className="px-4 py-3.5"><div className="flex items-center gap-2.5"><div className="w-7 h-7 bg-slate-100 rounded-lg flex items-center justify-center shrink-0 text-slate-600 text-[9px] font-bold">BS</div><div><p className="text-sm font-semibold text-gray-600">Bayu Setiawan</p><p className="text-[10.5px] text-gray-400">2023310021</p></div></div></td>
                                                    <td className="px-4 py-3.5 hidden md:table-cell"><span className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded-lg">Genap 2024/2025</span></td>
                                                    <td className="px-4 py-3.5 text-center hidden sm:table-cell"><span className="text-xs text-gray-500">10 Jan 2025</span></td>
                                                    <td className="px-4 py-3.5 text-center hidden lg:table-cell"><span className="text-xs text-gray-500">14 Jan 2025</span></td>
                                                    <td className="px-4 py-3.5 text-center hidden xl:table-cell"><span className="text-xs font-semibold text-gray-600 bg-gray-100 px-2 py-0.5 rounded-full">4 hari</span></td>
                                                    <td className="px-4 py-3.5"><span className="inline-flex items-center gap-1.5 text-[10.5px] font-bold px-2.5 py-1 rounded-full bg-rose-100 text-rose-700 border border-rose-200"><span className="w-1.5 h-1.5 bg-rose-500 rounded-full"></span>Ditolak</span></td>
                                                    <td className="px-4 py-3.5 text-center"><span className="text-gray-300 text-sm">&mdash;</span></td>
                                                    <td className="px-4 py-3.5 text-center"><button className="p-1.5 rounded-lg hover:bg-indigo-50 text-gray-400 hover:text-indigo-600 transition-colors"><i className="fa-solid fa-eye text-sm"></i></button></td>
                                                </tr>
                                                
                                                <tr className="table-row hover:bg-indigo-50/25">
                                                    <td className="px-4 py-3.5"><span className="text-xs font-mono font-bold text-gray-600 bg-gray-100 px-2 py-1 rounded-lg">REG-2024-012</span></td>
                                                    <td className="px-4 py-3.5"><div className="flex items-center gap-2.5"><div className="w-7 h-7 bg-violet-100 rounded-lg flex items-center justify-center shrink-0 text-violet-700 text-[9px] font-bold">PR</div><div><p className="text-sm font-semibold text-gray-800">Putri Rahayu</p><p className="text-[10.5px] text-gray-400">2023210043</p></div></div></td>
                                                    <td className="px-4 py-3.5 hidden md:table-cell"><span className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded-lg">Ganjil 2024/2025</span></td>
                                                    <td className="px-4 py-3.5 text-center hidden sm:table-cell"><span className="text-xs text-gray-600">10 Agu 2024</span></td>
                                                    <td className="px-4 py-3.5 text-center hidden lg:table-cell"><span className="text-xs text-gray-600">14 Agu 2024</span></td>
                                                    <td className="px-4 py-3.5 text-center hidden xl:table-cell"><span className="text-xs font-semibold text-gray-700 bg-gray-100 px-2 py-0.5 rounded-full">4 hari</span></td>
                                                    <td className="px-4 py-3.5"><span className="inline-flex items-center gap-1.5 text-[10.5px] font-bold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-700 border border-emerald-200"><span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>Diterima</span></td>
                                                    <td className="px-4 py-3.5 text-center"><span className="text-sm font-bold text-gray-700 bg-gray-100 px-2 py-0.5 rounded-lg">D-105</span></td>
                                                    <td className="px-4 py-3.5 text-center"><button className="p-1.5 rounded-lg hover:bg-indigo-50 text-gray-400 hover:text-indigo-600 transition-colors"><i className="fa-solid fa-eye text-sm"></i></button></td>
                                                </tr>
                                                
                                                <tr className="table-row hover:bg-indigo-50/25 opacity-75">
                                                    <td className="px-4 py-3.5"><span className="text-xs font-mono font-bold text-gray-600 bg-gray-100 px-2 py-1 rounded-lg">REG-2024-011</span></td>
                                                    <td className="px-4 py-3.5"><div className="flex items-center gap-2.5"><div className="w-7 h-7 bg-slate-100 rounded-lg flex items-center justify-center shrink-0 text-slate-600 text-[9px] font-bold">WN</div><div><p className="text-sm font-semibold text-gray-600">Wahyu Nugroho</p><p className="text-[10.5px] text-gray-400">2023410019</p></div></div></td>
                                                    <td className="px-4 py-3.5 hidden md:table-cell"><span className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded-lg">Ganjil 2024/2025</span></td>
                                                    <td className="px-4 py-3.5 text-center hidden sm:table-cell"><span className="text-xs text-gray-500">09 Agu 2024</span></td>
                                                    <td className="px-4 py-3.5 text-center hidden lg:table-cell"><span className="text-xs text-gray-500">15 Agu 2024</span></td>
                                                    <td className="px-4 py-3.5 text-center hidden xl:table-cell"><span className="text-xs font-semibold text-gray-600 bg-gray-100 px-2 py-0.5 rounded-full">6 hari</span></td>
                                                    <td className="px-4 py-3.5"><span className="inline-flex items-center gap-1.5 text-[10.5px] font-bold px-2.5 py-1 rounded-full bg-rose-100 text-rose-700 border border-rose-200"><span className="w-1.5 h-1.5 bg-rose-500 rounded-full"></span>Ditolak</span></td>
                                                    <td className="px-4 py-3.5 text-center"><span className="text-gray-300 text-sm">&mdash;</span></td>
                                                    <td className="px-4 py-3.5 text-center"><button className="p-1.5 rounded-lg hover:bg-indigo-50 text-gray-400 hover:text-indigo-600 transition-colors"><i className="fa-solid fa-eye text-sm"></i></button></td>
                                                </tr>
                                                
                                                <tr className="table-row hover:bg-indigo-50/25">
                                                    <td className="px-4 py-3.5"><span className="text-xs font-mono font-bold text-gray-600 bg-gray-100 px-2 py-1 rounded-lg">REG-2023-078</span></td>
                                                    <td className="px-4 py-3.5"><div className="flex items-center gap-2.5"><div className="w-7 h-7 bg-pink-100 rounded-lg flex items-center justify-center shrink-0 text-pink-700 text-[9px] font-bold">AM</div><div><p className="text-sm font-semibold text-gray-800">Anisa Maharani</p><p className="text-[10.5px] text-gray-400">2022110034</p></div></div></td>
                                                    <td className="px-4 py-3.5 hidden md:table-cell"><span className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded-lg">Genap 2023/2024</span></td>
                                                    <td className="px-4 py-3.5 text-center hidden sm:table-cell"><span className="text-xs text-gray-600">08 Jan 2024</span></td>
                                                    <td className="px-4 py-3.5 text-center hidden lg:table-cell"><span className="text-xs text-gray-600">11 Jan 2024</span></td>
                                                    <td className="px-4 py-3.5 text-center hidden xl:table-cell"><span className="text-xs font-semibold text-gray-700 bg-gray-100 px-2 py-0.5 rounded-full">3 hari</span></td>
                                                    <td className="px-4 py-3.5"><span className="inline-flex items-center gap-1.5 text-[10.5px] font-bold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-700 border border-emerald-200"><span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>Diterima</span></td>
                                                    <td className="px-4 py-3.5 text-center"><span className="text-sm font-bold text-gray-700 bg-gray-100 px-2 py-0.5 rounded-lg">C-112</span></td>
                                                    <td className="px-4 py-3.5 text-center"><button className="p-1.5 rounded-lg hover:bg-indigo-50 text-gray-400 hover:text-indigo-600 transition-colors"><i className="fa-solid fa-eye text-sm"></i></button></td>
                                                </tr>
                                                
                                                <tr className="table-row hover:bg-indigo-50/25">
                                                    <td className="px-4 py-3.5"><span className="text-xs font-mono font-bold text-gray-600 bg-gray-100 px-2 py-1 rounded-lg">REG-2023-077</span></td>
                                                    <td className="px-4 py-3.5"><div className="flex items-center gap-2.5"><div className="w-7 h-7 bg-blue-100 rounded-lg flex items-center justify-center shrink-0 text-blue-700 text-[9px] font-bold">DK</div><div><p className="text-sm font-semibold text-gray-800">Doni Kusuma</p><p className="text-[10.5px] text-gray-400">2022210012</p></div></div></td>
                                                    <td className="px-4 py-3.5 hidden md:table-cell"><span className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded-lg">Genap 2023/2024</span></td>
                                                    <td className="px-4 py-3.5 text-center hidden sm:table-cell"><span className="text-xs text-gray-600">07 Jan 2024</span></td>
                                                    <td className="px-4 py-3.5 text-center hidden lg:table-cell"><span className="text-xs text-gray-600">12 Jan 2024</span></td>
                                                    <td className="px-4 py-3.5 text-center hidden xl:table-cell"><span className="text-xs font-semibold text-gray-700 bg-gray-100 px-2 py-0.5 rounded-full">5 hari</span></td>
                                                    <td className="px-4 py-3.5"><span className="inline-flex items-center gap-1.5 text-[10.5px] font-bold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-700 border border-emerald-200"><span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>Diterima</span></td>
                                                    <td className="px-4 py-3.5 text-center"><span className="text-sm font-bold text-gray-700 bg-gray-100 px-2 py-0.5 rounded-lg">B-204</span></td>
                                                    <td className="px-4 py-3.5 text-center"><button className="p-1.5 rounded-lg hover:bg-indigo-50 text-gray-400 hover:text-indigo-600 transition-colors"><i className="fa-solid fa-eye text-sm"></i></button></td>
                                                </tr>
                                                
                                                <tr className="table-row hover:bg-indigo-50/25">
                                                    <td className="px-4 py-3.5"><span className="text-xs font-mono font-bold text-gray-600 bg-gray-100 px-2 py-1 rounded-lg">REG-2023-030</span></td>
                                                    <td className="px-4 py-3.5"><div className="flex items-center gap-2.5"><div className="w-7 h-7 bg-emerald-100 rounded-lg flex items-center justify-center shrink-0 text-emerald-700 text-[9px] font-bold">FD</div><div><p className="text-sm font-semibold text-gray-800">Fitria Dewi</p><p className="text-[10.5px] text-gray-400">2022310056</p></div></div></td>
                                                    <td className="px-4 py-3.5 hidden md:table-cell"><span className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded-lg">Ganjil 2023/2024</span></td>
                                                    <td className="px-4 py-3.5 text-center hidden sm:table-cell"><span className="text-xs text-gray-600">12 Agu 2023</span></td>
                                                    <td className="px-4 py-3.5 text-center hidden lg:table-cell"><span className="text-xs text-gray-600">16 Agu 2023</span></td>
                                                    <td className="px-4 py-3.5 text-center hidden xl:table-cell"><span className="text-xs font-semibold text-gray-700 bg-gray-100 px-2 py-0.5 rounded-full">4 hari</span></td>
                                                    <td className="px-4 py-3.5"><span className="inline-flex items-center gap-1.5 text-[10.5px] font-bold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-700 border border-emerald-200"><span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>Diterima</span></td>
                                                    <td className="px-4 py-3.5 text-center"><span className="text-sm font-bold text-gray-700 bg-gray-100 px-2 py-0.5 rounded-lg">C-107</span></td>
                                                    <td className="px-4 py-3.5 text-center"><button className="p-1.5 rounded-lg hover:bg-indigo-50 text-gray-400 hover:text-indigo-600 transition-colors"><i className="fa-solid fa-eye text-sm"></i></button></td>
                                                </tr>
                                                
                                                <tr className="table-row hover:bg-indigo-50/25 opacity-75">
                                                    <td className="px-4 py-3.5"><span className="text-xs font-mono font-bold text-gray-600 bg-gray-100 px-2 py-1 rounded-lg">REG-2023-029</span></td>
                                                    <td className="px-4 py-3.5"><div className="flex items-center gap-2.5"><div className="w-7 h-7 bg-slate-100 rounded-lg flex items-center justify-center shrink-0 text-slate-600 text-[9px] font-bold">HS</div><div><p className="text-sm font-semibold text-gray-600">Hendri Saputra</p><p className="text-[10.5px] text-gray-400">2022410032</p></div></div></td>
                                                    <td className="px-4 py-3.5 hidden md:table-cell"><span className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded-lg">Ganjil 2023/2024</span></td>
                                                    <td className="px-4 py-3.5 text-center hidden sm:table-cell"><span className="text-xs text-gray-500">11 Agu 2023</span></td>
                                                    <td className="px-4 py-3.5 text-center hidden lg:table-cell"><span className="text-xs text-gray-500">17 Agu 2023</span></td>
                                                    <td className="px-4 py-3.5 text-center hidden xl:table-cell"><span className="text-xs font-semibold text-gray-600 bg-gray-100 px-2 py-0.5 rounded-full">6 hari</span></td>
                                                    <td className="px-4 py-3.5"><span className="inline-flex items-center gap-1.5 text-[10.5px] font-bold px-2.5 py-1 rounded-full bg-rose-100 text-rose-700 border border-rose-200"><span className="w-1.5 h-1.5 bg-rose-500 rounded-full"></span>Ditolak</span></td>
                                                    <td className="px-4 py-3.5 text-center"><span className="text-gray-300 text-sm">&mdash;</span></td>
                                                    <td className="px-4 py-3.5 text-center"><button className="p-1.5 rounded-lg hover:bg-indigo-50 text-gray-400 hover:text-indigo-600 transition-colors"><i className="fa-solid fa-eye text-sm"></i></button></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="flex flex-col sm:flex-row items-center justify-between gap-3 px-5 py-3.5 border-t border-gray-100 bg-gray-50/60">
                                        <p className="text-xs text-gray-500">Menampilkan <span className="font-bold text-gray-700">1&ndash;8</span> dari <span className="font-bold text-gray-700">61</span> riwayat</p>
                                        <div className="flex items-center gap-1">
                                            <button className="px-2.5 py-1.5 text-xs text-gray-500 hover:bg-gray-200 rounded-lg transition-colors"><i className="fa-solid fa-chevron-left"></i></button>
                                            <button className="px-3 py-1.5 text-xs bg-indigo-600 text-white rounded-lg font-bold shadow-sm">1</button>
                                            <button className="px-3 py-1.5 text-xs text-gray-600 hover:bg-gray-200 rounded-lg transition-colors font-medium">2</button>
                                            <button className="px-3 py-1.5 text-xs text-gray-600 hover:bg-gray-200 rounded-lg transition-colors font-medium">3</button>
                                            <span className="px-1.5 text-gray-300 text-xs">&middot;&middot;&middot;</span>
                                            <button className="px-3 py-1.5 text-xs text-gray-600 hover:bg-gray-200 rounded-lg transition-colors font-medium">8</button>
                                            <button className="px-2.5 py-1.5 text-xs text-gray-500 hover:bg-gray-200 rounded-lg transition-colors"><i className="fa-solid fa-chevron-right"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
    </>
  );
}

function PendaftaranFooter() {
  return (
    <>
        <footer className="text-center py-6 mt-2">
                                <p className="text-xs text-gray-400">&copy; 2025 <span className="font-semibold text-gray-500">SiMARA</span> &mdash; Sistem Informasi Manajemen Asrama. Versi 1.0.0</p>
                            </footer>
    </>
  );
}

function PendaftaranOverlayView() {
  return (
    <>
        
    </>
  );
}

export default function PendaftaranPageClient({
  initialTab,
}: Readonly<{
  initialTab: PendaftaranTab;
}>) {
  const router = useRouter();
  const activeTab = initialTab;

  useEffect(() => {
    document.title = "Pendaftaran | SiMARA";
  }, []);

  return (
    <>
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-2 text-xs text-gray-400 mb-2">
            <i className="fa-solid fa-house text-gray-300"></i>
            <span className="text-gray-300">/</span>
            <span className="text-indigo-500 font-semibold">{tabConfig[activeTab].breadcrumb}</span>
          </div>
          <h1 className="text-2xl sm:text-[28px] font-bold text-gray-900 leading-tight">Pendaftaran Asrama</h1>
          <p className="text-gray-500 text-sm mt-1.5">Kelola seluruh proses pendaftaran masuk asrama mahasiswa</p>
        </div>
        <div className="flex items-center gap-2.5 shrink-0">
          <button className="flex items-center gap-2 px-4 py-2.5 text-sm border border-gray-200 text-gray-600 rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all font-medium">
            <i className="fa-solid fa-download text-gray-400 text-xs"></i>Export
          </button>
          <button className="flex items-center gap-2 px-4 py-2.5 text-sm bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-colors font-semibold shadow-md shadow-indigo-200 active:scale-95">
            <i className="fa-solid fa-plus text-xs"></i>
            <span id="mainAddBtnLabel">{tabConfig[activeTab].addLabel}</span>
          </button>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 mb-6 overflow-hidden">
        <div className="flex overflow-x-auto">
          <button id="tab-form" type="button" onClick={() => router.push("?tab=form")} className={activeTab === "form" ? activeTabClass : inactiveTabClass}>
            <i className="fa-solid fa-file-pen text-indigo-500 text-base"></i>
            Form Pendaftaran
          </button>
          <button id="tab-daftar" type="button" onClick={() => router.push("?tab=daftar")} className={activeTab === "daftar" ? activeTabClass : inactiveTabClass}>
            <i className="fa-solid fa-list text-gray-400 text-base"></i>
            Daftar Pendaftar
            <span className="bg-gray-100 text-gray-600 text-[10px] font-bold px-1.5 py-0.5 rounded-full">68</span>
          </button>
          <button id="tab-verifikasi" type="button" onClick={() => router.push("?tab=verifikasi")} className={activeTab === "verifikasi" ? activeTabClass : inactiveTabClass}>
            <i className="fa-solid fa-shield-check text-gray-400 text-base"></i>
            Verifikasi
            <span className="bg-amber-100 text-amber-700 text-[10px] font-bold px-1.5 py-0.5 rounded-full border border-amber-200">18</span>
          </button>
          <button id="tab-riwayat" type="button" onClick={() => router.push("?tab=riwayat")} className={activeTab === "riwayat" ? activeTabClass : inactiveTabClass}>
            <i className="fa-solid fa-clock-rotate-left text-gray-400 text-base"></i>
            Riwayat Pendaftaran
            <span className="bg-gray-100 text-gray-600 text-[10px] font-bold px-1.5 py-0.5 rounded-full">61</span>
          </button>
        </div>
      </div>

      {activeTab === "form" && <FormPendaftaranView />}
      {activeTab === "daftar" && <DaftarPendaftarView />}
      {activeTab === "verifikasi" && <VerifikasiPendaftaranView />}
      {activeTab === "riwayat" && <RiwayatPendaftaranView />}
      <PendaftaranFooter />
      <PendaftaranOverlayView />
    </>
  );
}
