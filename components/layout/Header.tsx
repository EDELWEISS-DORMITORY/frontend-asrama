"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { getAdminPageMeta } from "@/components/layout/admin-navigation";

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

type HeaderProps = {
  pathname: string;
  isNotificationOpen: boolean;
  onOpenSidebar: () => void;
  onToggleNotification: () => void;
  onCloseNotification: () => void;
};

const notifications = [
  {
    title: "Mahasiswa melebihi batas poin",
    description: "Budi Santoso (A-101) — Total: 52 poin",
    time: "5 menit lalu",
    wrapperClass:
      "flex items-start gap-3 px-4 py-3 hover:bg-gray-50 bg-rose-50/40 cursor-pointer transition-colors",
    iconWrapperClass:
      "w-9 h-9 bg-rose-100 rounded-xl flex items-center justify-center shrink-0 mt-0.5",
    iconClass: "fa-solid fa-triangle-exclamation text-rose-500 text-sm",
  },
  {
    title: "Pendaftaran menunggu verifikasi",
    description: "18 mahasiswa menunggu persetujuan",
    time: "12 menit lalu",
    wrapperClass:
      "flex items-start gap-3 px-4 py-3 hover:bg-gray-50 bg-amber-50/40 cursor-pointer transition-colors",
    iconWrapperClass:
      "w-9 h-9 bg-amber-100 rounded-xl flex items-center justify-center shrink-0 mt-0.5",
    iconClass: "fa-solid fa-file-pen text-amber-500 text-sm",
  },
  {
    title: "Check Point malam belum lengkap",
    description: "7 penghuni belum melakukan konfirmasi",
    time: "28 menit lalu",
    wrapperClass:
      "flex items-start gap-3 px-4 py-3 hover:bg-gray-50 cursor-pointer transition-colors",
    iconWrapperClass:
      "w-9 h-9 bg-indigo-100 rounded-xl flex items-center justify-center shrink-0 mt-0.5",
    iconClass: "fa-solid fa-clipboard-check text-indigo-500 text-sm",
  },
  {
    title: "Laporan bulanan siap diunduh",
    description: "Rekap Februari 2026 sudah tersedia",
    time: "1 jam lalu",
    wrapperClass:
      "flex items-start gap-3 px-4 py-3 hover:bg-gray-50 cursor-pointer transition-colors",
    iconWrapperClass:
      "w-9 h-9 bg-emerald-100 rounded-xl flex items-center justify-center shrink-0 mt-0.5",
    iconClass: "fa-solid fa-chart-line text-emerald-500 text-sm",
  },
];

export function Header({
  pathname,
  isNotificationOpen,
  onOpenSidebar,
  onToggleNotification,
  onCloseNotification,
}: HeaderProps) {
  const pageMeta = getAdminPageMeta(pathname);
  const panelRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isNotificationOpen) {
      return;
    }

    const handlePointerDown = (event: MouseEvent) => {
      const target = event.target as Node;

      if (
        !panelRef.current?.contains(target) &&
        !triggerRef.current?.contains(target)
      ) {
        onCloseNotification();
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onCloseNotification();
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isNotificationOpen, onCloseNotification]);

  return (
    <header className="sticky top-0 z-10 bg-white/95 backdrop-blur-md border-b border-gray-200 h-16 px-4 sm:px-6 flex items-center justify-between gap-4 shadow-sm">
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onOpenSidebar}
          className="lg:hidden p-2 rounded-xl hover:bg-gray-100 text-gray-500 hover:text-gray-800 transition-colors"
          aria-label="Buka navigasi"
        >
          <i className="fa-solid fa-bars text-lg" />
        </button>

        <nav
          className="hidden sm:flex items-center gap-1.5 text-sm"
          aria-label="Breadcrumb"
        >
          <Link
            href="/dashboard"
            className="text-gray-400 hover:text-indigo-600 transition-colors"
          >
            <i className="fa-solid fa-house text-xs" />
          </Link>
          <i className="fa-solid fa-chevron-right text-gray-300 text-[9px]" />

          {pageMeta.breadcrumb.length === 1 ? (
            <span className="text-gray-800 font-semibold">
              {pageMeta.breadcrumb[0]}
            </span>
          ) : (
            <>
              <span className="text-gray-500">{pageMeta.breadcrumb[0]}</span>
              <i className="fa-solid fa-chevron-right text-gray-300 text-[9px]" />
              <span className="text-gray-800 font-semibold">
                {pageMeta.breadcrumb[1]}
              </span>
            </>
          )}
        </nav>
      </div>

      <div className="flex items-center gap-2 sm:gap-3">
        <div className="hidden md:flex items-center gap-2 bg-gray-100 hover:bg-gray-200/80 focus-within:bg-white focus-within:ring-2 focus-within:ring-indigo-500 rounded-xl px-3.5 py-2 transition-all">
          <i className="fa-solid fa-magnifying-glass text-gray-400 text-sm shrink-0" />
          <input
            type="text"
            placeholder={pageMeta.searchPlaceholder}
            className="bg-transparent text-sm outline-none w-52 text-gray-700 placeholder-gray-400"
          />
          <kbd className="text-[10px] bg-gray-200 text-gray-500 px-1.5 py-0.5 rounded font-mono leading-tight shrink-0">
            ⌘K
          </kbd>
        </div>

        <div className="relative">
          <button
            ref={triggerRef}
            type="button"
            onClick={onToggleNotification}
            className="relative p-2.5 rounded-xl hover:bg-gray-100 text-gray-500 hover:text-gray-700 transition-colors"
            aria-label="Notifikasi"
            aria-expanded={isNotificationOpen}
          >
            <i className="fa-solid fa-bell text-lg" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-rose-500 rounded-full ring-2 ring-white" />
          </button>

          <div
            ref={panelRef}
            className={cx(
              "absolute right-0 top-full mt-2 w-80 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden z-50",
              !isNotificationOpen && "hidden",
            )}
          >
            <div className="px-4 py-3 border-b border-gray-100 flex items-center justify-between">
              <h3 className="font-bold text-gray-800 text-sm">Notifikasi</h3>
              <span className="text-[11px] bg-rose-100 text-rose-600 font-bold px-2 py-0.5 rounded-full">
                4 Baru
              </span>
            </div>

            <div className="divide-y divide-gray-50 max-h-72 overflow-y-auto">
              {notifications.map((notification) => (
                <div
                  key={notification.title}
                  className={notification.wrapperClass}
                >
                  <div className={notification.iconWrapperClass}>
                    <i className={notification.iconClass} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-gray-800">
                      {notification.title}
                    </p>
                    <p className="text-xs text-gray-500 mt-0.5">
                      {notification.description}
                    </p>
                    <p className="text-[10.5px] text-gray-400 mt-1 flex items-center gap-1">
                      <i className="fa-regular fa-clock text-[9px]" />
                      {notification.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="px-4 py-3 bg-gray-50 border-t border-gray-100">
              <Link
                href="/dashboard"
                className="inline-flex items-center gap-2 text-xs font-semibold text-indigo-600 hover:text-indigo-700 transition-colors"
              >
                Lihat semua notifikasi
                <i className="fa-solid fa-arrow-right text-[10px]" />
              </Link>
            </div>
          </div>
        </div>

        <div className="hidden sm:block w-px h-7 bg-gray-200" />

        <button
          type="button"
          className="flex items-center gap-2.5 p-1 rounded-xl hover:bg-gray-50 transition-colors group"
        >
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-md shadow-indigo-200 shrink-0">
            <span className="text-white text-xs font-bold">AD</span>
          </div>
          <div className="hidden md:block text-left">
            <p className="text-sm font-semibold text-gray-800 leading-tight">
              Admin Asrama
            </p>
            <p className="text-[10.5px] text-gray-400 leading-tight">
              Administrator
            </p>
          </div>
          <i className="hidden md:block fa-solid fa-chevron-down text-[10px] text-gray-400 group-hover:text-gray-600 ml-0.5" />
        </button>
      </div>
    </header>
  );
}
