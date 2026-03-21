type PagePlaceholderProps = {
  title: string;
  description: string;
  sourceFile: string;
  routePath: string;
};

export function PagePlaceholder({
  title,
  description,
  sourceFile,
  routePath,
}: PagePlaceholderProps) {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
        <div>
          <div className="flex flex-wrap items-center gap-2 text-xs text-gray-400 mb-2">
            <span className="inline-flex items-center gap-1 rounded-full bg-indigo-50 px-2.5 py-1 font-semibold text-indigo-600">
              Fondasi Migrasi
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2.5 py-1 font-medium text-slate-500">
              {routePath}
            </span>
          </div>
          <h1 className="text-2xl sm:text-[28px] font-bold text-gray-900 leading-tight [text-wrap:balance]">
            {title}
          </h1>
          <p className="mt-2 max-w-2xl text-sm text-gray-500">{description}</p>
        </div>

        <div className="rounded-2xl border border-indigo-100 bg-indigo-50 px-4 py-3 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-500">
            Sumber Template
          </p>
          <p className="mt-1 text-sm font-semibold text-slate-800">
            {sourceFile}
          </p>
        </div>
      </div>

      <section className="rounded-[28px] border border-gray-200 bg-white p-6 shadow-sm">
        <div className="grid gap-4 lg:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
              Langkah Berikutnya
            </p>
            <p className="mt-2 text-sm font-semibold text-slate-800">
              Konversi HTML ke JSX
            </p>
            <p className="mt-1 text-sm text-slate-500">
              Semua struktur DOM dari template akan dipindahkan ke komponen
              React dengan class Tailwind tetap utuh.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
              Interaktivitas
            </p>
            <p className="mt-2 text-sm font-semibold text-slate-800">
              Ganti Vanilla JS ke React State
            </p>
            <p className="mt-1 text-sm text-slate-500">
              Modal, tab, filter, dropdown, dan panel notifikasi akan
              dipindahkan ke state React secara bertahap.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
              Arsitektur
            </p>
            <p className="mt-2 text-sm font-semibold text-slate-800">
              Layout Admin Sudah Persisten
            </p>
            <p className="mt-1 text-sm text-slate-500">
              Sidebar dan header kini dirender satu kali di layout admin agar
              migrasi halaman berikutnya lebih rapi dan konsisten.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
