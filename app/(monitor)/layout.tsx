import type { ReactNode } from "react";
import { MonitorShell } from "@/components/layout/MonitorShell";

export default function MonitorLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return <MonitorShell>{children}</MonitorShell>;
}
