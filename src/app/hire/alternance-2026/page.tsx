import PortfolioPage from "@/components/PortfolioPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sébastien Marle — Alternance DevOps 2026",
  description: "Sébastien Marle recherche une alternance DevOps / Admin Sys / Réseau de 24 mois à partir de septembre 2026.",
};

export default function AlternancePage() {
  return <PortfolioPage mode="alternance" />;
}
