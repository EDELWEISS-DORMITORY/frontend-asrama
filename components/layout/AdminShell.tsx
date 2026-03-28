"use client";

import { Suspense, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Sidebar } from "@/components/layout/Sidebar";
import {
  getDefaultOpenDropdown,
  type AdminDropdownId,
} from "@/components/layout/admin-navigation";

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function AdminShell({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const defaultOpenDropdown = getDefaultOpenDropdown(pathname);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<AdminDropdownId | null>(
    defaultOpenDropdown,
  );

  useEffect(() => {
    document.body.style.overflow = isSidebarOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isSidebarOpen]);

  useEffect(() => {
    setOpenDropdown(defaultOpenDropdown);
  }, [defaultOpenDropdown]);

  const toggleDropdown = (dropdownId: AdminDropdownId) => {
    setOpenDropdown((current) => (current === dropdownId ? null : dropdownId));
  };

  return (
    <>
      <div
        className={cx(
          "fixed inset-0 bg-black/50 backdrop-blur-sm z-20 lg:hidden",
          !isSidebarOpen && "hidden",
        )}
        onClick={() => setIsSidebarOpen(false)}
        aria-hidden="true"
      />

      <Suspense
        fallback={
          <div
            className="fixed top-0 left-0 hidden h-screen w-64 border-r border-slate-200 bg-white lg:block"
            aria-hidden="true"
          />
        }
      >
        <Sidebar
          isOpen={isSidebarOpen}
          openDropdown={openDropdown}
          onClose={() => setIsSidebarOpen(false)}
          onToggleDropdown={toggleDropdown}
        />
      </Suspense>

      <div className="lg:ml-64 min-h-screen flex flex-col">
        <Header
          pathname={pathname}
          isNotificationOpen={isNotificationOpen}
          onOpenSidebar={() => setIsSidebarOpen(true)}
          onToggleNotification={() =>
            setIsNotificationOpen((current) => !current)
          }
          onCloseNotification={() => setIsNotificationOpen(false)}
        />

        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          <div className="max-w-screen-2xl mx-auto w-full">{children}</div>
        </main>
      </div>
    </>
  );
}
