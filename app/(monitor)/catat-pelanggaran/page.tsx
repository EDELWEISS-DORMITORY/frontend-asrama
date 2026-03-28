import type { Metadata } from "next";
import CatatPelanggaranClient from "./CatatPelanggaranClient";

export const metadata: Metadata = {
  title: "Catat Pelanggaran | SiMARA Monitor",
};

export default function CatatPelanggaranPage() {
  return <CatatPelanggaranClient />;
}
