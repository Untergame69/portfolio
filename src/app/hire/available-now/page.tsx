import PortfolioPage from "@/components/PortfolioPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sébastien Marle — Ingénieur Cloud & DevOps",
  description: "Sébastien Marle, Ingénieur Cloud & DevOps disponible immédiatement pour un CDI/CDD à Lyon ou Toulouse.",
};

export default function AvailableNowPage() {
  return <PortfolioPage mode="cdi" />;
}
