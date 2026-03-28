import PendaftaranPageClient from "./PendaftaranPageClient";

type PendaftaranTab = "form" | "daftar" | "verifikasi" | "riwayat";

type PendaftaranRoutePageProps = {
  searchParams: Promise<{
    tab?: string | string[];
  }>;
};

function resolveTabParam(tab?: string | string[]) {
  return Array.isArray(tab) ? tab[0] : tab;
}

function normalizePendaftaranTab(tab: string | null): PendaftaranTab {
  switch (tab) {
    case "daftar":
    case "verifikasi":
    case "riwayat":
      return tab;
    default:
      return "form";
  }
}

export default async function PendaftaranPage({
  searchParams,
}: PendaftaranRoutePageProps) {
  const resolvedSearchParams = await searchParams;
  const activeTab = normalizePendaftaranTab(
    resolveTabParam(resolvedSearchParams.tab) ?? null,
  );

  return <PendaftaranPageClient initialTab={activeTab} />;
}
