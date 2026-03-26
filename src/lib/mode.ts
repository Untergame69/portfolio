export type SiteMode = "alternance" | "cdi";

export interface ModeConfig {
  badge: string;
  badgeColor: string;
  subtitle: string;
  cities: string[];
  school: string | null;
  rhythm: string | null;
  cta: string;
  ctaLink: string;
}

export const modeConfig: Record<SiteMode, ModeConfig> = {
  alternance: {
    badge: "Alternance 24 mois — Septembre 2026",
    badgeColor: "emerald",
    subtitle: "Recherche alternance DevOps / Admin Sys / Réseau",
    cities: ["Lyon", "Toulouse", "Paris", "Strasbourg"],
    school: "ESTIAM — Master MSC Cybersécurité, Cloud, Systèmes Réseaux",
    rhythm: "1 semaine école / 3 semaines entreprise",
    cta: "Proposer une alternance",
    ctaLink: "mailto:sebastien.marle.contact@gmail.com?subject=Proposition%20alternance%20DevOps",
  },
  cdi: {
    badge: "Disponible immédiatement — CDI / CDD",
    badgeColor: "blue",
    subtitle: "Ingénieur Cloud & DevOps",
    cities: ["Lyon", "Toulouse"],
    school: null,
    rhythm: null,
    cta: "Me recruter",
    ctaLink: "mailto:sebastien.marle.contact@gmail.com?subject=Proposition%20CDI%20DevOps",
  },
};
