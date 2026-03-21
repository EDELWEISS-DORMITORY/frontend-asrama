"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  getDefaultOpenDropdown,
  isRouteMatch,
  sidebarSections,
  type AdminDropdownId,
} from "@/components/layout/admin-navigation";

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

const asideClass =
  "fixed top-0 left-0 h-screen w-64 bg-slate-900 flex flex-col z-30 -translate-x-full lg:translate-x-0";

const primaryLinkClass =
  "nav-item flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-400 hover:bg-slate-800 transition-colors";

const primaryLinkActiveClass =
  "nav-item flex items-center gap-3 px-3 py-2.5 rounded-xl bg-indigo-600 text-slate-400 shadow-lg shadow-indigo-900/30";

const dropdownButtonActiveClass =
  "nav-item flex items-center gap-3 px-3 py-2.5 rounded-xl bg-indigo-600 text-slate-400 active-nav-glow";

const dropdownChildClass =
  "flex items-center gap-2 px-2 py-1.5 rounded-lg text-xs text-slate-400 hover:bg-slate-800 transition-colors";

type SidebarProps = {
  isOpen: boolean;
  openDropdown: AdminDropdownId | null;
  onClose: () => void;
  onToggleDropdown: (dropdownId: AdminDropdownId) => void;
};

export function Sidebar({
  isOpen,
  openDropdown,
  onClose,
  onToggleDropdown,
}: SidebarProps) {
  const pathname = usePathname();
  const defaultOpenDropdown = getDefaultOpenDropdown(pathname);
  const resolvedOpenDropdown = openDropdown ?? defaultOpenDropdown;

  return (
    <aside
      id="sidebar"
      className={cx(asideClass, isOpen && "translate-x-0")}
      aria-label="Navigasi Utama"
    >
      <div className="flex items-center gap-3 px-5 py-[18px] border-b border-slate-700/60 shrink-0">
        <Link
          href="/dashboard"
          className="flex items-center gap-3 flex-1 min-w-0"
          onClick={onClose}
        >
          <div className="w-9 h-9 bg-indigo-600 rounded-xl flex items-center justify-center shrink-0 shadow-lg shadow-indigo-600/40">
            <i className="fa-solid fa-building-columns text-white text-sm" />
          </div>
          <div className="leading-tight">
            <p className="text-white font-bold text-sm tracking-wide">SiMARA</p>
            <p className="text-slate-400 text-[10.5px]">Manajemen Asrama</p>
          </div>
        </Link>

        <button
          type="button"
          onClick={onClose}
          className="ml-auto lg:hidden text-slate-400 hover:text-white p-1.5 rounded-lg hover:bg-slate-700 transition-colors shrink-0"
          aria-label="Tutup navigasi"
        >
          <i className="fa-solid fa-xmark" />
        </button>
      </div>

      <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-0.5">
        {sidebarSections.map((section, sectionIndex) => (
          <div key={section.heading}>
            <p
              className={cx(
                "text-[10px] font-semibold text-slate-400 uppercase tracking-widest px-3 pb-2.5",
                sectionIndex > 0 && "pt-4",
              )}
            >
              {section.heading}
            </p>

            {section.items.map((item) => {
              if (item.type === "link") {
                const isActive =
                  item.href === "/dashboard"
                    ? pathname === "/" || pathname === "/dashboard"
                    : isRouteMatch(pathname, item.match);

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={
                      isActive ? primaryLinkActiveClass : primaryLinkClass
                    }
                    onClick={onClose}
                    aria-current={isActive ? "page" : undefined}
                  >
                    <div className="w-5 flex items-center justify-center shrink-0">
                      <i className={cx(item.icon, "text-sm")} />
                    </div>
                    <span
                      className={cx("text-sm", isActive ? "font-semibold" : "font-medium")}
                    >
                      {item.label}
                    </span>
                  </Link>
                );
              }

              const isActive = isRouteMatch(pathname, item.match);
              const isExpanded = resolvedOpenDropdown === item.id || isActive;

              return (
                <div key={item.label}>
                  <button
                    type="button"
                    onClick={() => onToggleDropdown(item.id)}
                    aria-expanded={isExpanded}
                    className={cx(
                      "w-full",
                      isActive ? dropdownButtonActiveClass : primaryLinkClass,
                    )}
                  >
                    <div className="w-5 flex items-center justify-center shrink-0">
                      <i className={cx(item.icon, "text-sm")} />
                    </div>
                    <span className={cx("text-sm", isActive ? "font-semibold" : "font-medium")}>
                      {item.label}
                    </span>
                    <i
                      className={cx(
                        "fa-solid fa-chevron-down text-[11px] ml-auto arrow-icon",
                        "text-slate-400",
                        isExpanded && "rotated",
                      )}
                    />
                  </button>

                  <div
                    className={cx(
                      "dropdown-content ml-8 mt-1 space-y-1 border-l border-slate-700 pl-3",
                      isExpanded && "open",
                    )}
                  >
                    {item.items.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className={dropdownChildClass}
                        onClick={onClose}
                      >
                        <span className="text-slate-400">•</span>
                        <span>{child.label}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </nav>

      <div className="p-4 border-t border-slate-700/60 shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shrink-0 shadow-md">
            <span className="text-white text-xs font-bold">AD</span>
          </div>
          <div className="flex-1 min-w-0 leading-tight">
            <p className="text-white text-sm font-semibold truncate">
              Admin Asrama
            </p>
            <p className="text-slate-400 text-[10.5px] truncate">
              admin@simara.ac.id
            </p>
          </div>
          <button
            type="button"
            title="Logout"
            className="text-slate-500 hover:text-white p-1.5 rounded-lg hover:bg-slate-700 transition-colors shrink-0"
          >
            <i className="fa-solid fa-arrow-right-from-bracket text-sm" />
          </button>
        </div>
      </div>
    </aside>
  );
}
