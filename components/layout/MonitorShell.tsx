"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { SidebarMonitor } from "@/components/layout/SidebarMonitor";

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function MonitorShell({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isSidebarOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isSidebarOpen]);

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

      <SidebarMonitor
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

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
