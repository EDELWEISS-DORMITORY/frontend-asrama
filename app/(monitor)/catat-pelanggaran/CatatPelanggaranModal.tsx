"use client";

import { useEffect, useRef } from "react";

interface CatatPelanggaranModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CatatPelanggaranModal({ isOpen, onClose }: CatatPelanggaranModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  // Focus trap and close on ESC
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <div 
        className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
        aria-hidden="true"
      />
      <div 
        ref={modalRef}
        role="dialog" 
        aria-modal="true" 
        aria-labelledby="modal-title"
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-in fade-in zoom-in-95 duration-200"
      >
        <header className="px-6 py-5 border-b border-slate-100 flex items-center justify-between shrink-0 bg-white">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center">
              <i className="fa-solid fa-file-pen text-indigo-600 text-lg"></i>
            </div>
            <div>
              <h2 id="modal-title" className="text-lg font-bold text-slate-900">Catat Pelanggaran Baru</h2>
              <p className="text-xs text-slate-500 mt-0.5">Dokumentasikan indisen secara real-time</p>
            </div>
          </div>
          <button 
            type="button" 
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
          >
            <i className="fa-solid fa-xmark" aria-hidden="true"></i>
            <span className="sr-only">Tutup modal</span>
          </button>
        </header>

        <div className="px-6 py-5 overflow-y-auto">
          <form className="space-y-6" autoComplete="off">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-1.5 md:col-span-2">
                <label htmlFor="studentSelect" className="text-sm font-semibold text-slate-700">Mahasiswa / Penghuni <span className="text-rose-500">*</span></label>
                <div className="relative">
                  <i className="fa-solid fa-magnifying-glass absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-sm"></i>
                  <input 
                    type="text" 
                    id="studentSelect" 
                    placeholder="Cari nama mahasiswa atau nomor kamar..."
                    className="w-full pl-10 pr-4 py-2.5 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 shadow-sm"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="incidentDate" className="text-sm font-semibold text-slate-700">Tanggal & Waktu Kejadian <span className="text-rose-500">*</span></label>
                <input 
                  type="datetime-local" 
                  id="incidentDate" 
                  className="w-full px-4 py-2.5 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 shadow-sm text-slate-700"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="violationCategory" className="text-sm font-semibold text-slate-700">Kategori Pelanggaran <span className="text-rose-500">*</span></label>
                <select 
                  id="violationCategory" 
                  className="w-full px-4 py-2.5 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 shadow-sm text-slate-700 bg-white"
                >
                  <option value="">Pilih Kategori...</option>
                  <option value="ringan">Ringan (Teguran Lisan/Tertulis)</option>
                  <option value="sedang">Sedang (Pemanggilan/SP 1-2)</option>
                  <option value="berat">Berat (SP 3/Dikeluarkan)</option>
                </select>
              </div>

              <div className="space-y-1.5 md:col-span-2">
                <label htmlFor="violationType" className="text-sm font-semibold text-slate-700">Jenis Pelanggaran <span className="text-rose-500">*</span></label>
                <select 
                  id="violationType" 
                  className="w-full px-4 py-2.5 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 shadow-sm text-slate-700 bg-white"
                >
                  <option value="">Pilih Jenis Spesifik...</option>
                  <option>Terlambat Pulang &gt; 22:00</option>
                  <option>Membawa Tamu Lawan Jenis</option>
                  <option>Menimbulkan Kegaduhan</option>
                  <option>Merokok / Membawa Vape di Asrama</option>
                  <option>Tidak Mengikuti Program Wajib (Worship dll)</option>
                  <option>Lainnya...</option>
                </select>
              </div>

              <div className="space-y-1.5 md:col-span-2">
                <label htmlFor="violationNotes" className="text-sm font-semibold text-slate-700">Kronologi & Catatan <span className="text-rose-500">*</span></label>
                <textarea 
                  id="violationNotes" 
                  rows={4}
                  placeholder="Ceritakan kejadian secara detail dan objektif..."
                  className="w-full px-4 py-3 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 shadow-sm resize-none"
                ></textarea>
              </div>

            </div>

            <div className="p-4 bg-slate-50 border border-slate-100 rounded-xl mt-6">
              <label className="flex items-start gap-3 cursor-pointer">
                <div className="flex items-center h-5">
                  <input type="checkbox" className="w-4 h-4 text-indigo-600 rounded border-slate-300 focus:ring-indigo-500 mt-0.5" />
                </div>
                <div>
                  <span className="text-sm font-semibold text-slate-700 block">Sita Barang Bukti</span>
                  <span className="text-xs text-slate-500 block mt-0.5">Centang jika terdapat barang yang disita (mis: rokok, botol miras, alat elektronik tidak berizin).</span>
                </div>
              </label>
            </div>
          </form>
        </div>

        <footer className="px-6 py-4 border-t border-slate-100 bg-gray-50/50 flex flex-col-reverse sm:flex-row items-center justify-end gap-3 shrink-0 rounded-b-2xl">
          <button 
            type="button" 
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 text-sm font-semibold text-slate-600 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 transition-colors"
          >
            Batal
          </button>
          <button 
            type="button" 
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 text-sm font-semibold text-white bg-indigo-600 border border-transparent rounded-xl hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 transition-colors shadow-sm shadow-indigo-200"
          >
            Simpan Catatan
          </button>
        </footer>
      </div>
    </div>
  );
}
