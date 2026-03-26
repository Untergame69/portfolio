"use client";

import { motion } from "framer-motion";
import { Cloud, GitBranch, Container, Code, Server, Monitor, Activity, Network, Phone } from "lucide-react";
import type { SkillCategory } from "@/data/skills";

const iconMap: Record<string, React.ElementType> = {
  Cloud, GitBranch, Container, Code, Server, Monitor, Activity, Network, Phone,
};

const iconColors: Record<string, string> = {
  Cloud: "#f59e0b",
  GitBranch: "#6366f1",
  Container: "#22d3ee",
  Code: "#10b981",
  Server: "#8b5cf6",
  Monitor: "#f97316",
  Activity: "#ef4444",
  Network: "#06b6d4",
  Phone: "#84cc16",
};

export default function SkillGrid({ categories }: { categories: SkillCategory[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {categories.map((cat, i) => {
        const Icon = iconMap[cat.icon] || Server;
        const color = iconColors[cat.icon] || "#6366f1";
        return (
          <motion.div
            key={cat.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className="rounded-xl p-4 transition-all"
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border-color)",
            }}
          >
            <div className="flex items-center gap-2.5 mb-3">
              <div
                className="p-2 rounded-lg"
                style={{ background: color + "18", border: `1px solid ${color}30` }}
              >
                <Icon className="w-4 h-4" style={{ color }} />
              </div>
              <h3 className="font-semibold text-sm" style={{ color: "var(--text-primary)" }}>
                {cat.name}
              </h3>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-2 py-0.5 text-xs rounded-md"
                  style={{
                    background: "var(--bg-hover)",
                    color: "var(--text-secondary)",
                    border: "1px solid var(--border-color)",
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
