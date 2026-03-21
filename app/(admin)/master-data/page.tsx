import type { Metadata } from "next";
import { MasterDataPage } from "@/components/master-data/MasterDataPage";

type MasterDataTab = "mahasiswa" | "kamar" | "pelanggaran" | "aturan";

const masterDataTabTitles: Record<MasterDataTab, string> = {
  mahasiswa: "Data Mahasiswa",
  kamar: "Data Kamar",
  pelanggaran: "Jenis Pelanggaran",
  aturan: "Aturan Poin",
};

type MasterDataRoutePageProps = {
  searchParams: Promise<{
    tab?: string | string[];
  }>;
};

function normalizeMasterDataTab(tab: string | null): MasterDataTab {
  switch (tab) {
    case "kamar":
    case "pelanggaran":
    case "aturan":
      return tab;
    default:
      return "mahasiswa";
  }
}

export async function generateMetadata({
  searchParams,
}: MasterDataRoutePageProps): Promise<Metadata> {
  const resolvedSearchParams = await searchParams;
  const tabParam = Array.isArray(resolvedSearchParams.tab)
    ? resolvedSearchParams.tab[0]
    : resolvedSearchParams.tab;
  const activeTab = normalizeMasterDataTab(tabParam ?? null);

  return {
    title: `${masterDataTabTitles[activeTab]} | Master Data | SiMARA`,
  };
}

export default async function MasterDataRoutePage({
  searchParams,
}: MasterDataRoutePageProps) {
  const resolvedSearchParams = await searchParams;
  const tabParam = Array.isArray(resolvedSearchParams.tab)
    ? resolvedSearchParams.tab[0]
    : resolvedSearchParams.tab;
  const activeTab = normalizeMasterDataTab(tabParam ?? null);

  return <MasterDataPage initialTab={activeTab} />;
}
