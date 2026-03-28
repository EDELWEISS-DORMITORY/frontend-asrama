"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  monitorMenuItems,
  isMonitorRouteMatch,
} from "@/components/layout/monitor-navigation";

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

/* ── Reuse the exact same Tailwind tokens as the Admin Sidebar ── */

const asideClass =
  "fixed top-0 left-0 h-screen w-64 bg-white border-r border-slate-200 flex flex-col z-30 -translate-x-full lg:translate-x-0 shadow-sm shadow-slate-200/50";

const linkClass =
  "nav-item flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-600 hover:text-indigo-600 hover:bg-indigo-50/80 transition-all font-medium";

const linkActiveClass =
  "nav-item flex items-center gap-3 px-3 py-2.5 rounded-xl bg-indigo-50 text-indigo-700 font-semibold shadow-sm border border-indigo-100/50";

type SidebarMonitorProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function SidebarMonitor({ isOpen, onClose }: SidebarMonitorProps) {
  const pathname = usePathname();

  return (
    <aside
      id="sidebar-monitor"
      className={cx(asideClass, isOpen && "translate-x-0")}
      aria-label="Navigasi Monitor"
    >
      {/* ── Brand header (identical to Admin) ── */}
      <div className="flex items-center gap-3 px-5 py-[18px] border-b border-slate-100 shrink-0">
        <Link
          href="/monitor"
          className="flex items-center gap-3 flex-1 min-w-0 group"
          onClick={onClose}
        >
          <div className="w-9 h-9 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center shrink-0 shadow-lg shadow-indigo-500/20 group-hover:shadow-indigo-500/40 transition-all">
            <i className="fa-solid fa-building-columns text-white text-[13px]" />
          </div>
          <div className="leading-tight">
            <p className="text-slate-800 font-bold text-[15.5px] tracking-wide group-hover:text-indigo-700 transition-colors">SiMARA</p>
            <p className="text-slate-500 text-[10.5px] font-medium">Monitor Asrama</p>
          </div>
        </Link>

        <button
          type="button"
          onClick={onClose}
          className="ml-auto lg:hidden text-slate-400 hover:text-slate-600 p-1.5 rounded-lg hover:bg-slate-100 transition-colors shrink-0"
          aria-label="Tutup navigasi"
        >
          <i className="fa-solid fa-xmark" />
        </button>
      </div>

      {/* ── Navigation – flat links only ── */}
      <nav className="flex-1 overflow-y-auto py-5 px-3 space-y-1.5 scrollbar-thin">
        <p className="text-[10.5px] font-bold text-slate-400 uppercase tracking-[0.15em] px-3 pb-2.5">
          MENU MONITOR
        </p>

        <div className="space-y-0.5">
          {monitorMenuItems.map((item) => {
            const isActive =
              item.href === "/monitor"
                ? pathname === "/monitor"
                : isMonitorRouteMatch(pathname, item.match);

            return (
              <Link
                key={item.label}
                href={item.href}
                className={isActive ? linkActiveClass : linkClass}
                onClick={onClose}
                aria-current={isActive ? "page" : undefined}
              >
                <div className="w-5 flex items-center justify-center shrink-0">
                  <i
                    className={cx(
                      item.icon,
                      "text-[15px]",
                      isActive ? "text-indigo-600" : "text-slate-400",
                    )}
                  />
                </div>
                <span
                  className={cx(
                    "text-[13.5px]",
                    isActive ? "font-semibold" : "font-medium",
                  )}
                >
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>

      {/* ── Footer (role badge) ── */}
      <div className="p-4 border-t border-slate-100 shrink-0 bg-slate-50/50">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-white text-slate-600 flex items-center justify-center shrink-0 border border-slate-200 shadow-sm">
            <span className="text-[11.5px] font-bold tracking-wide text-slate-700">MN</span>
          </div>
          <div className="flex-1 min-w-0 leading-tight">
            <p className="text-slate-800 text-sm font-semibold truncate">
              Monitor Asrama
            </p>
            <p className="text-slate-500 text-[10.5px] truncate font-medium">
              monitor@simara.ac.id
            </p>
          </div>
          <button
            type="button"
            title="Logout"
            aria-label="Logout"
            className="text-slate-400 hover:text-rose-600 p-2 rounded-lg hover:bg-rose-50 transition-colors shrink-0"
          >
            <i className="fa-solid fa-arrow-right-from-bracket text-[15px]" />
          </button>
        </div>
      </div>
    </aside>
  );
}
