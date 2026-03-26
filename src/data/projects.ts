export interface Project {
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  techStack: string[];
  status: "en cours" | "terminé" | "en production";
  link?: string;
}

export const projects: Project[] = [
  {
    title: "Polymarket Trading Bot",
    subtitle: "Architecture Data Pipeline & Trading Automatisé",
    description: "Bot de collecte et d'analyse de données en temps réel sur les marchés de prédiction crypto Polymarket. Architecture multi-containers avec collecte continue de ticks CLOB et prix Chainlink.",
    highlights: [
      "1.8M+ ticks collectés en continu",
      "Architecture Docker multi-services (bot, RTDS, TimescaleDB, Redis)",
      "Pipeline CI/CD GitHub Actions",
      "Monitoring Prometheus/Grafana",
      "Backtesting multi-stratégie"
    ],
    techStack: ["Python", "Docker", "TimescaleDB", "Redis", "GitHub Actions", "Prometheus", "Grafana"],
    status: "en production"
  },
  {
    title: "Infrastructure HFT",
    subtitle: "Serveur Hybride On-Premise & Cloud",
    description: "Infrastructure haute disponibilité pour héberger des modèles d'IA de trading automatique. Architecture hybride avec serveur dédié sécurisé et services cloud.",
    highlights: [
      "Serveur dédié déployé via Ansible",
      "VPN WireGuard pour administration sécurisée",
      "Conteneurs Docker isolés par modèle",
      "Pipeline CI/CD GitHub Actions",
      "Logs externalisés sur AWS S3"
    ],
    techStack: ["Ubuntu", "Ansible", "Docker", "WireGuard", "AWS S3", "GitHub Actions", "Python"],
    status: "terminé"
  },
  {
    title: "Portfolio & Job Automation",
    subtitle: "Ce projet — Infrastructure complète",
    description: "Portfolio Next.js hébergé sur serveur dédié avec Traefik, génération automatique de CV multi-templates, et moteur d'alertes emploi.",
    highlights: [
      "Next.js 14 + Tailwind CSS en Docker",
      "Traefik reverse proxy + TLS Let's Encrypt",
      "Génération CV ATS-friendly multi-templates",
      "Scraping offres emploi + alertes automatiques",
      "Monitoring unifié Prometheus/Grafana"
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind", "Docker", "Traefik", "Python"],
    status: "en cours"
  }
];
