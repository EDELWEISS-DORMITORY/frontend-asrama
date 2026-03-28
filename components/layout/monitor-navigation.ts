/**
 * Monitor-role navigation data.
 *
 * Intentionally minimal — the Monitor sidebar exposes only three
 * flat links (no dropdowns).  Visual styling is reused from the
 * shared Sidebar primitives; only the *data* differs from admin.
 */

/* ─── types ─── */

export type MonitorPageMeta = {
  title: string;
  description: string;
  breadcrumb: string[];
  searchPlaceholder: string;
};

type MonitorMenuItem = {
  label: string;
  href: string;
  icon: string;
  /** How to match the current pathname */
  match: { href: string; mode?: "exact" | "prefix" };
};

/* ─── menu items ─── */

export const monitorMenuItems: MonitorMenuItem[] = [
  {
    label: "Dashboard",
    href: "/monitor",
    icon: "fa-solid fa-gauge-high",
    match: { href: "/monitor" },
  },
  {
    label: "Verifikasi Pendaftaran",
    href: "/verifikasi",
    icon: "fa-solid fa-file-pen",
    match: { href: "/verifikasi", mode: "prefix" },
  },
  {
    label: "Catat Pelanggaran",
    href: "/catat-pelanggaran",
    icon: "fa-solid fa-triangle-exclamation",
    match: { href: "/catat-pelanggaran" },
  },
];

/* ─── route → page-meta registry ─── */

const routeRegistry: Array<{
  match: { href: string; mode?: "exact" | "prefix" };
  meta: MonitorPageMeta;
}> = [
  {
    match: { href: "/monitor" },
    meta: {
      title: "Dashboard Monitor",
      description: "Pantau antrean pendaftaran dan catat pelanggaran harian.",
      breadcrumb: ["Monitor Asrama"],
      searchPlaceholder: "Cari mahasiswa, kamar…",
    },
  },
  {
    match: { href: "/verifikasi", mode: "prefix" },
    meta: {
      title: "Verifikasi Pendaftaran",
      description: "Kelola verifikasi pendaftaran mahasiswa.",
      breadcrumb: ["Monitor Asrama", "Verifikasi Pendaftaran"],
      searchPlaceholder: "Cari pendaftar…",
    },
  },
  {
    match: { href: "/catat-pelanggaran" },
    meta: {
      title: "Catat Pelanggaran",
      description: "Catat dan pantau pelanggaran harian.",
      breadcrumb: ["Monitor Asrama", "Catat Pelanggaran"],
      searchPlaceholder: "Cari mahasiswa…",
    },
  },
];

/* ─── helpers ─── */

export function isMonitorRouteMatch(
  pathname: string,
  match: { href: string; mode?: "exact" | "prefix" },
) {
  if (match.mode === "prefix") {
    return pathname.startsWith(match.href);
  }
  return pathname === match.href;
}

export function getMonitorPageMeta(pathname: string): MonitorPageMeta {
  return (
    routeRegistry.find((r) => isMonitorRouteMatch(pathname, r.match))?.meta ??
    routeRegistry[0].meta
  );
}
