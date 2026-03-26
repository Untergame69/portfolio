export interface Mission {
  category: string;
  items: string[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  context: string;
  missions: Mission[];
  techStack: string[];
  type: "professional" | "military" | "personal";
  logoInitials: string;
  logoColor: string;
}

export const experiences: Experience[] = [
  {
    company: "Marine Nationale",
    role: "Immersion & Préparation Militaire",
    period: "Janvier 2026 - Présent",
    location: "France",
    context: "Initiative personnelle pour appréhender les méthodes de discipline et de leadership propres aux armées françaises.",
    missions: [
      {
        category: "Développement Personnel",
        items: [
          "Développement de la résilience : gestion du stress et prise de décision en situation d'effort",
          "Esprit de Défense : compréhension des impératifs de souveraineté et des standards de rigueur militaire",
          "Acquis : discipline, esprit de corps et sens des responsabilités"
        ]
      }
    ],
    techStack: [],
    type: "military",
    logoInitials: "MN",
    logoColor: "#1e3a5f"
  },
  {
    company: "Ecilia",
    role: "Ingénieur DevOps",
    period: "Septembre 2024 - Août 2025",
    location: "Lyon",
    context: "Éditeur SaaS pour assureurs, hébergé 100% AWS EC2 Ubuntu. Équipe Infrastructure, phases Build et Run, approche IaC, mode AGILE.",
    missions: [
      {
        category: "Phase de Build",
        items: [
          "Création d'environnements clients avec AWS CloudFormation (Beta, Pré-prod, Prod)",
          "Conception d'un Self-Service de provisionnement de bases de données (Platform Engineering)",
          "Développement de fonctions Lambda pour l'arrêt automatique d'instances inutilisées",
          "Scripts d'arrêt programmé des instances dev après 18h"
        ]
      },
      {
        category: "Sécurité Cloud",
        items: [
          "Gestion et configuration des règles firewall WAF",
          "Gestion des Security Groups AWS"
        ]
      },
      {
        category: "Réseau AWS",
        items: [
          "Création et maintenance des VPC et subnets",
          "Gestion ALB (Application Load Balancer) et CloudFront"
        ]
      },
      {
        category: "Phase de Run",
        items: [
          "Résolution d'incidents Production N1/N2/N3",
          "Déploiement logiciel via AWS Systems Manager + scripts Shell",
          "Monitoring CloudWatch + Prometheus, gestion performances EC2",
          "Automatisation Bash/Python/Lambda",
          "Maintenance pipelines CI/CD GitLab",
          "Support technique équipes de développement",
          "Documentation technique"
        ]
      },
      {
        category: "Administration BDD",
        items: [
          "Gestion et administration Aurora MySQL multi-environnements",
          "Scripts d'automatisation (Beta, Préprod, Prod)"
        ]
      },
      {
        category: "Architecture & Migration",
        items: [
          "Audit applications, définition d'architecture cible Docker",
          "POC portabilité Azure (ARM/Terraform)",
          "Roadmap migration EKS/AKS"
        ]
      }
    ],
    techStack: ["AWS", "EC2", "RDS", "Lambda", "CloudFormation", "VPC", "CloudWatch", "IAM", "Azure", "Docker", "GitLab CI", "Prometheus", "Grafana", "Python", "Bash", "PowerShell", "Linux", "JIRA"],
    type: "professional",
    logoInitials: "EC",
    logoColor: "#6366f1"
  },
  {
    company: "Infrastructure HFT",
    role: "Projet Personnel",
    period: "Octobre 2025 - Décembre 2025",
    location: "Lyon",
    context: "Infrastructure hybride On-premise & Cloud haute disponibilité pour hébergement d'IA de trading automatique multi-equities.",
    missions: [
      {
        category: "Infrastructure",
        items: [
          "Montage et configuration du serveur dédié",
          "Déploiement automatisé Ubuntu via playbooks Ansible",
          "Tunnel VPN sécurisé WireGuard pour administration et monitoring à distance"
        ]
      },
      {
        category: "Conteneurisation & CI/CD",
        items: [
          "Conteneurs Docker isolés par modèle d'IA, optimisés par equity",
          "Pipeline CI/CD GitHub Actions pour build et déploiement continu",
          "Observabilité Prometheus/Grafana + externalisation logs sur AWS S3"
        ]
      },
      {
        category: "Développement",
        items: [
          "Scripts Python pour ingestion données (Massive) et exécution ordres (API Alpaca)",
          "Backtesting multi-stratégie avec validation statistique"
        ]
      }
    ],
    techStack: ["Ubuntu", "Ansible", "Docker", "WireGuard", "AWS S3", "GitHub Actions", "Python", "Prometheus", "Grafana"],
    type: "personal",
    logoInitials: "HFT",
    logoColor: "#f59e0b"
  },
  {
    company: "Equans (Bouygues)",
    role: "Technicien Réseau & Télécom",
    period: "Septembre 2022 - Août 2024",
    location: "Auvergne-Rhône-Alpes",
    context: "Équipe ARA (5 personnes), installation et maintenance télécom pour clients professionnels (Orange, Elkem, etc.).",
    missions: [
      {
        category: "Support & Administration",
        items: [
          "Support technique client N1/N2/N3 — assistance à distance et sur site",
          "Administration Windows Server virtualisé sous Proxmox",
          "Gestion utilisateurs, droits d'accès, diagnostic pannes réseau",
          "Dépannage réseau/télécom avec PRTG et Zabbix"
        ]
      },
      {
        category: "Réseau",
        items: [
          "Configuration VLANs et règles QoS pour priorisation trafic voix",
          "Installation baies de brassage, switchs, routeurs (Cisco, Aruba, HP)",
          "Câblage et raccordement cuivre"
        ]
      },
      {
        category: "Téléphonie IP",
        items: [
          "Déploiement et configuration téléphonie IP Alcatel (OXO/OXE)",
          "Intégration IPBX dans les architectures réseau client"
        ]
      }
    ],
    techStack: ["Cisco", "Alcatel OXO/OXE", "HP", "Aruba", "Windows Server", "Proxmox", "PRTG", "Zabbix"],
    type: "professional",
    logoInitials: "EQ",
    logoColor: "#10b981"
  }
];
