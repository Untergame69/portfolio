export interface SkillCategory {
  name: string;
  icon: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  { name: "Cloud", icon: "Cloud", skills: ["AWS", "Azure"] },
  { name: "DevOps", icon: "GitBranch", skills: ["Terraform", "Ansible", "Jenkins", "CloudFormation", "GitLab CI", "Kubernetes"] },
  { name: "Conteneurisation", icon: "Container", skills: ["Docker", "EKS"] },
  { name: "Programmation", icon: "Code", skills: ["Python", "Bash", "PowerShell"] },
  { name: "Virtualisation", icon: "Server", skills: ["VMware", "Proxmox", "ESXi"] },
  { name: "Systèmes", icon: "Monitor", skills: ["Linux (Red Hat, Ubuntu, Debian)", "Windows Server"] },
  { name: "Monitoring", icon: "Activity", skills: ["Zabbix", "Prometheus", "PRTG", "CloudWatch", "Grafana"] },
  { name: "Réseau", icon: "Network", skills: ["TCP/IP", "Firewall", "VLANs", "QoS"] },
  { name: "ToIP", icon: "Phone", skills: ["Alcatel (OXO/OXE)", "Cisco"] }
];
