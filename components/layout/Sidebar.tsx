"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
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
  "fixed top-0 left-0 h-screen w-64 bg-white border-r border-slate-200 flex flex-col z-30 -translate-x-full lg:translate-x-0 shadow-sm shadow-slate-200/50";

const primaryLinkClass =
  "nav-item flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-600 hover:text-indigo-600 hover:bg-indigo-50/80 transition-all font-medium";

const primaryLinkActiveClass =
  "nav-item flex items-center gap-3 px-3 py-2.5 rounded-xl bg-indigo-50 text-indigo-700 font-semibold shadow-sm border border-indigo-100/50";

const dropdownButtonActiveClass =
  "nav-item flex items-center gap-3 px-3 py-2.5 rounded-xl bg-indigo-50/50 text-indigo-700 font-semibold flex-1 w-full";

const dropdownChildClass =
  "flex items-center gap-3 px-3 py-1.5 rounded-lg text-[13.5px] text-slate-500 hover:bg-slate-100 hover:text-indigo-600 transition-colors font-medium";

const dropdownChildActiveClass =
  "flex items-center gap-3 px-3 py-1.5 rounded-lg text-[13.5px] bg-indigo-50 text-indigo-700 font-semibold";

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
  const searchParams = useSearchParams();
  const defaultOpenDropdown = getDefaultOpenDropdown(pathname);
  const resolvedOpenDropdown = openDropdown ?? defaultOpenDropdown;

  return (
    <aside
      id="sidebar"
      className={cx(asideClass, isOpen && "translate-x-0")}
      aria-label="Navigasi Utama"
    >
      <div className="flex items-center gap-3 px-5 py-[18px] border-b border-slate-100 shrink-0">
        <Link
          href="/dashboard"
          className="flex items-center gap-3 flex-1 min-w-0 group"
          onClick={onClose}
        >
          <div className="w-9 h-9 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center shrink-0 shadow-lg shadow-indigo-500/20 group-hover:shadow-indigo-500/40 transition-all">
            <i className="fa-solid fa-building-columns text-white text-[13px]" />
          </div>
          <div className="leading-tight">
            <p className="text-slate-800 font-bold text-[15.5px] tracking-wide group-hover:text-indigo-700 transition-colors">SiMARA</p>
            <p className="text-slate-500 text-[10.5px] font-medium">Manajemen Asrama</p>
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

      <nav className="flex-1 overflow-y-auto py-5 px-3 space-y-1.5 scrollbar-thin">
        {sidebarSections.map((section, sectionIndex) => (
          <div key={section.heading} className={cx(sectionIndex > 0 && "mt-6")}>
            <p
              className="text-[10.5px] font-bold text-slate-400 uppercase tracking-[0.15em] px-3 pb-2.5"
            >
              {section.heading}
            </p>

            <div className="space-y-0.5">
              {section.items.map((item) => {
                if (item.type === "link") {
                  const isActive =
                    item.href === "/dashboard"
                      ? pathname === "/" || pathname === "/dashboard"
                      : isRouteMatch(pathname, item.match, searchParams);

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
                        <i className={cx(item.icon, "text-[15px]", isActive ? "text-indigo-600" : "text-slate-400")} />
                      </div>
                      <span
                        className={cx("text-[13.5px]", isActive ? "font-semibold" : "font-medium")}
                      >
                        {item.label}
                      </span>
                    </Link>
                  );
                }

                const isActive = isRouteMatch(pathname, item.match, searchParams);
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
                        <i className={cx(item.icon, "text-[15px]", isActive ? "text-indigo-600" : "text-slate-400")} />
                      </div>
                      <span className={cx("text-[13.5px]", isActive ? "font-semibold text-indigo-700" : "font-medium")}>
                        {item.label}
                      </span>
                      <i
                        className={cx(
                          "fa-solid fa-chevron-down text-[10px] ml-auto arrow-icon",
                          isActive ? "text-indigo-500" : "text-slate-400",
                          isExpanded && "rotated",
                        )}
                      />
                    </button>

                    <div
                      className={cx(
                        "dropdown-content ml-[22px] mt-1 space-y-0.5 border-l-2 border-slate-100 pl-2",
                        isExpanded && "open",
                      )}
                    >
                      {item.items.map((child) => {
                        const childActive = isRouteMatch(pathname, child.match, searchParams);
                        return (
                          <Link
                            key={child.label}
                            href={child.href}
                            className={childActive ? dropdownChildActiveClass : dropdownChildClass}
                            onClick={onClose}
                          >
                            <span className={cx(
                              "text-[18px] leading-none -translate-y-[1px]", 
                              childActive ? "text-indigo-500" : "text-slate-300"
                            )}>•</span>
                            <span>{child.label}</span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

      <div className="p-4 border-t border-slate-100 shrink-0 bg-slate-50/50">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-white text-slate-600 flex items-center justify-center shrink-0 border border-slate-200 shadow-sm">
            <span className="text-[11.5px] font-bold tracking-wide text-slate-700">AD</span>
          </div>
          <div className="flex-1 min-w-0 leading-tight">
            <p className="text-slate-800 text-sm font-semibold truncate">
              Admin Asrama
            </p>
            <p className="text-slate-500 text-[10.5px] truncate font-medium">
              admin@simara.ac.id
            </p>
          </div>
          <button
            type="button"
            title="Logout"
            className="text-slate-400 hover:text-rose-600 p-2 rounded-lg hover:bg-rose-50 hover:text-rose-600 transition-colors shrink-0"
          >
            <i className="fa-solid fa-arrow-right-from-bracket text-[15px]" />
          </button>
        </div>
      </div>
    </aside>
  );
}
