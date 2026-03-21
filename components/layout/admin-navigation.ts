export type AdminDropdownId =
  | "masterData"
  | "pendaftaran"
  | "penghuni"
  | "checkPoint";

type RouteMatch = {
  href: string;
  mode?: "exact" | "prefix";
};

export type AdminPageMeta = {
  title: string;
  description: string;
  breadcrumb: string[];
  searchPlaceholder: string;
};

type SidebarLinkItem = {
  type: "link";
  label: string;
  href: string;
  icon: string;
  match: RouteMatch;
};

type SidebarDropdownChild = {
  label: string;
  href: string;
  match: RouteMatch;
};

type SidebarDropdownItem = {
  type: "dropdown";
  id: AdminDropdownId;
  label: string;
  icon: string;
  match: RouteMatch;
  items: SidebarDropdownChild[];
};

export type SidebarItem = SidebarLinkItem | SidebarDropdownItem;

export type SidebarSection = {
  heading: string;
  items: SidebarItem[];
};

type RouteRegistryItem = {
  match: RouteMatch;
  meta: AdminPageMeta;
  defaultOpenDropdown?: AdminDropdownId;
};

const routeRegistry: RouteRegistryItem[] = [
  {
    match: { href: "/dashboard" },
    meta: {
      title: "Dashboard Admin",
      description: "Ringkasan operasional asrama dan aktivitas terbaru.",
      breadcrumb: ["Dashboard"],
      searchPlaceholder: "Cari mahasiswa, kamar, NIM...",
    },
  },
  {
    match: { href: "/master-data", mode: "prefix" },
    meta: {
      title: "Master Data",
      description: "Kelola data inti mahasiswa, kamar, pelanggaran, dan aturan poin.",
      breadcrumb: ["Master Data", "Data Mahasiswa"],
      searchPlaceholder: "Cari data...",
    },
    defaultOpenDropdown: "masterData",
  },
  {
    match: { href: "/pendaftaran", mode: "prefix" },
    meta: {
      title: "Pendaftaran Asrama",
      description: "Kelola alur pendaftaran, verifikasi, dan riwayat pendaftar.",
      breadcrumb: ["Pendaftaran", "Form Pendaftaran"],
      searchPlaceholder: "Cari data...",
    },
    defaultOpenDropdown: "pendaftaran",
  },
  {
    match: { href: "/penghuni-asrama", mode: "prefix" },
    meta: {
      title: "Penghuni Asrama",
      description: "Pantau data penghuni, penempatan, mutasi, dan status keluar.",
      breadcrumb: ["Penghuni Asrama", "Daftar Penghuni"],
      searchPlaceholder: "Cari penghuni...",
    },
    defaultOpenDropdown: "penghuni",
  },
  {
    match: { href: "/check-point", mode: "prefix" },
    meta: {
      title: "Check Point",
      description: "Kelola jadwal, input kehadiran, dan monitoring pelanggaran check point.",
      breadcrumb: ["Check Point", "Jadwal Check Point"],
      searchPlaceholder: "Cari check point...",
    },
    defaultOpenDropdown: "checkPoint",
  },
  {
    match: { href: "/poin-pelanggaran" },
    meta: {
      title: "Poin Pelanggaran",
      description: "Monitoring poin pelanggaran mahasiswa.",
      breadcrumb: ["Poin Pelanggaran"],
      searchPlaceholder: "Cari mahasiswa...",
    },
  },
  {
    match: { href: "/laporan" },
    meta: {
      title: "Laporan & Analitik",
      description: "Laporan operasional dan analitik asrama.",
      breadcrumb: ["Laporan & Analitik"],
      searchPlaceholder: "Cari laporan...",
    },
  },
  {
    match: { href: "/pengaturan" },
    meta: {
      title: "Pengaturan Sistem",
      description: "Konfigurasi pengaturan inti aplikasi SiMARA.",
      breadcrumb: ["Pengaturan Sistem"],
      searchPlaceholder: "Cari pengaturan...",
    },
  },
];

export const sidebarSections: SidebarSection[] = [
  {
    heading: "MENU UTAMA",
    items: [
      {
        type: "link",
        label: "Dashboard",
        href: "/dashboard",
        icon: "fa-solid fa-gauge-high",
        match: { href: "/dashboard", mode: "prefix"},
      },
      {
        type: "dropdown",
        id: "masterData",
        label: "Master Data",
        icon: "fa-solid fa-database",
        match: { href: "/master-data", mode: "prefix" },
        items: [
          {
            label: "Data Mahasiswa",
            href: "/master-data?tab=mahasiswa",
            match: { href: "/master-data" },
          },
          {
            label: "Data Kamar",
            href: "/master-data?tab=kamar",
            match: { href: "/master-data/kamar" },
          },
          {
            label: "Jenis Pelanggaran",
            href: "/master-data?tab=pelanggaran",
            match: { href: "/master-data/pelanggaran" },
          },
          {
            label: "Aturan Poin",
            href: "/master-data?tab=aturan",
            match: { href: "/master-data/aturan-poin" },
          },
        ],
      },
    ],
  },
  {
    heading: "OPERASIONAL",
    items: [
      {
        type: "dropdown",
        id: "pendaftaran",
        label: "Pendaftaran",
        icon: "fa-solid fa-file-pen",
        match: { href: "/pendaftaran", mode: "prefix" },
        items: [
          {
            label: "Form Pendaftaran",
            href: "/pendaftaran#form",
            match: { href: "/pendaftaran" },
          },
          {
            label: "Daftar Pendaftar",
            href: "/pendaftaran#daftar",
            match: { href: "/pendaftaran/daftar" },
          },
          {
            label: "Verifikasi",
            href: "/pendaftaran#verifikasi",
            match: { href: "/pendaftaran/verifikasi" },
          },
          {
            label: "Riwayat Pendaftaran",
            href: "/pendaftaran#riwayat",
            match: { href: "/pendaftaran/riwayat" },
          },
        ],
      },
      {
        type: "dropdown",
        id: "penghuni",
        label: "Penghuni Asrama",
        icon: "fa-solid fa-users",
        match: { href: "/penghuni-asrama", mode: "prefix" },
        items: [
          {
            label: "Daftar Penghuni",
            href: "/penghuni-asrama#daftar",
            match: { href: "/penghuni-asrama" },
          },
          {
            label: "Detail Penghuni",
            href: "/penghuni-asrama#detail",
            match: { href: "/penghuni-asrama/detail" },
          },
          {
            label: "Penempatan Kamar",
            href: "/penghuni-asrama#penempatan",
            match: { href: "/penghuni-asrama/penempatan" },
          },
          {
            label: "Mutasi Kamar",
            href: "/penghuni-asrama#mutasi",
            match: { href: "/penghuni-asrama/mutasi" },
          },
          {
            label: "Keluar Asrama",
            href: "/penghuni-asrama#keluar",
            match: { href: "/penghuni-asrama/keluar" },
          },
        ],
      },
      {
        type: "dropdown",
        id: "checkPoint",
        label: "Check Point",
        icon: "fa-solid fa-clipboard-check",
        match: { href: "/check-point", mode: "prefix" },
        items: [
          {
            label: "Jadwal Check Point",
            href: "/check-point#jadwal",
            match: { href: "/check-point" },
          },
          {
            label: "Input Kehadiran",
            href: "/check-point#input",
            match: { href: "/check-point/input" },
          },
          {
            label: "Hasil Check Point",
            href: "/check-point#hasil",
            match: { href: "/check-point/hasil" },
          },
          {
            label: "Pelanggaran CP",
            href: "/check-point#pelanggaran",
            match: { href: "/check-point/pelanggaran" },
          },
        ],
      },
      {
        type: "link",
        label: "Poin Pelanggaran",
        href: "/poin-pelanggaran",
        icon: "fa-solid fa-triangle-exclamation",
        match: { href: "/poin-pelanggaran" },
      },
    ],
  },
  {
    heading: "LAPORAN & ANALITIK",
    items: [
      {
        type: "link",
        label: "Laporan",
        href: "/laporan",
        icon: "fa-solid fa-chart-line",
        match: { href: "/laporan" },
      },
      {
        type: "link",
        label: "Pengaturan",
        href: "/pengaturan",
        icon: "fa-solid fa-gear",
        match: { href: "/pengaturan" },
      },
    ],
  },
];

export function isRouteMatch(pathname: string, match: RouteMatch) {
  if (match.mode === "prefix") {
    return pathname.startsWith(match.href);
  }

  return pathname === match.href;
}

export function getAdminPageMeta(pathname: string) {
  return (
    routeRegistry.find((item) => isRouteMatch(pathname, item.match))?.meta ??
    routeRegistry[0].meta
  );
}

export function getDefaultOpenDropdown(pathname: string) {
  return (
    routeRegistry.find((item) => isRouteMatch(pathname, item.match))
      ?.defaultOpenDropdown ?? null
  );
}
