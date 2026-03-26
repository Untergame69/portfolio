export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  context: string;
  missions: string[];
  techStack: string[];
  type: "professional" | "military" | "personal";
}

export const experiences: Experience[] = [
  {
    company: "Marine Nationale",
    role: "Immersion & Préparation Militaire",
    period: "Janvier 2026 - Présent",
    location: "France",
    context: "Initiative personnelle pour appréhender les méthodes de discipline et de leadership propres aux armées.",
    missions: [
      "Développement de la résilience : gestion du stress et prise de décision en situation d'effort",
      "Esprit de Défense : compréhension des impératifs de souveraineté et des standards de rigueur militaire",
      "Acquis : discipline, esprit de corps et sens des responsabilités"
    ],
    techStack: [],
    type: "military"
  },
  {
    company: "Ecilia",
    role: "Ingénieur DevOps",
    period: "Septembre 2024 - Août 2025",
    location: "Lyon",
    context: "Éditeur SaaS pour assureurs, hébergé 100% AWS EC2 Ubuntu. Équipe Infrastructure, phases Build et Run, approche IaC, mode AGILE.",
    missions: [
      "Création d'environnements clients avec AWS CloudFormation (Beta, Pré-prod, Prod)",
      "Conception d'un Self-Service de provisionnement de bases de données (Platform Engineering)",
      "Développement de fonctions Lambda pour l'arrêt automatique d'instances inutilisées",
      "Gestion sécurité Cloud : WAF, Security Groups, VPC, subnets, ALB, CloudFront",
      "Résolution d'incidents Production N1/N2/N3",
      "Déploiement logiciel via AWS Systems Manager + scripts Shell",
      "Monitoring CloudWatch + Prometheus, gestion performances EC2",
      "Automatisation Bash/Python/Lambda, maintenance CI/CD GitLab",
      "Administration bases Aurora MySQL multi-environnements",
      "Audit et architecture cible Docker, POC portabilité Azure (ARM/Terraform)",
      "Roadmap migration EKS/AKS"
    ],
    techStack: ["AWS", "EC2", "RDS", "Lambda", "VPC", "CloudWatch", "CloudFormation", "IAM", "Azure", "EntraID", "Windows", "Linux", "PowerShell", "Bash", "Python", "Docker", "GitLab CI", "Prometheus", "Grafana", "JIRA", "Confluence"],
    type: "professional"
  },
  {
    company: "Infrastructure High-Frequency Trading",
    role: "Projet Personnel",
    period: "Octobre 2025 - Décembre 2025",
    location: "Lyon",
    context: "Infrastructure hybride On-premise & Cloud haute disponibilité pour hébergement d'IA de trading automatique multi-equities.",
    missions: [
      "Montage serveur dédié + déploiement automatisé Ubuntu via playbooks Ansible",
      "Tunnel VPN sécurisé WireGuard pour administration et monitoring",
      "Conteneurs Docker isolés par modèle d'IA, optimisés par equity",
      "Scripts Python pour ingestion données (Massive) et exécution ordres (API Alpaca)",
      "Pipeline CI/CD GitHub Actions pour build et déploiement continu",
      "Observabilité Prometheus/Grafana + externalisation logs sur AWS S3"
    ],
    techStack: ["Ubuntu", "Ansible", "Docker", "WireGuard", "AWS S3", "GitHub Actions", "Python", "Prometheus", "Grafana"],
    type: "personal"
  },
  {
    company: "Equans (Bouygues)",
    role: "Technicien Réseau & Télécom",
    period: "Septembre 2022 - Août 2024",
    location: "Auvergne-Rhône-Alpes",
    context: "Équipe ARA (5 personnes), installation et maintenance télécom pour clients professionnels (Orange, Elkem).",
    missions: [
      "Support technique client N1/N2/N3, assistance télécom à distance et sur site",
      "Administration Windows Server virtualisé sous Proxmox",
      "Gestion utilisateurs, droits d'accès, diagnostic pannes réseau",
      "Dépannage réseau/télécom avec PRTG et Zabbix",
      "Configuration VLANs, règles QoS pour priorisation trafic voix",
      "Installation baies de brassage, switchs, routeurs (Cisco, Aruba, HP)",
      "Déploiement téléphonie IP Alcatel (OXO/OXE)",
      "Câblage et raccordement cuivre"
    ],
    techStack: ["Cisco", "Alcatel", "OXO", "OXE", "HP", "Aruba", "Windows Server", "Proxmox", "PRTG", "Zabbix"],
    type: "professional"
  }
];
