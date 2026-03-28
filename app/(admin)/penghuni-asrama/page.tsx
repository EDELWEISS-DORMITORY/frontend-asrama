import PenghuniAsramaPageClient from "./PenghuniAsramaPageClient";

type PenghuniTab = "daftar" | "detail" | "penempatan" | "mutasi" | "keluar";

type PenghuniAsramaRoutePageProps = {
  searchParams: Promise<{
    tab?: string | string[];
  }>;
};

function resolveTabParam(tab?: string | string[]) {
  return Array.isArray(tab) ? tab[0] : tab;
}

function normalizePenghuniTab(tab: string | null): PenghuniTab {
  switch (tab) {
    case "detail":
    case "penempatan":
    case "mutasi":
    case "keluar":
      return tab;
    default:
      return "daftar";
  }
}

export default async function PenghuniAsramaPage({
  searchParams,
}: PenghuniAsramaRoutePageProps) {
  const resolvedSearchParams = await searchParams;
  const activeTab = normalizePenghuniTab(
    resolveTabParam(resolvedSearchParams.tab) ?? null,
  );

  return <PenghuniAsramaPageClient initialTab={activeTab} />;
}
