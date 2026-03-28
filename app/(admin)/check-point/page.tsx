import CheckPointPageClient from "./CheckPointPageClient";

type CheckPointTab = "jadwal" | "input" | "hasil" | "pelanggaran";

type CheckPointRoutePageProps = {
  searchParams: Promise<{
    tab?: string | string[];
  }>;
};

function resolveTabParam(tab?: string | string[]) {
  return Array.isArray(tab) ? tab[0] : tab;
}

function normalizeCheckPointTab(tab: string | null): CheckPointTab {
  switch (tab) {
    case "input":
    case "hasil":
    case "pelanggaran":
      return tab;
    default:
      return "jadwal";
  }
}

export default async function CheckPointPage({
  searchParams,
}: CheckPointRoutePageProps) {
  const resolvedSearchParams = await searchParams;
  const activeTab = normalizeCheckPointTab(
    resolveTabParam(resolvedSearchParams.tab) ?? null,
  );

  return <CheckPointPageClient initialTab={activeTab} />;
}
