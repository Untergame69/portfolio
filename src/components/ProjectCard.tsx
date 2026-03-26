"use client";

import { motion } from "framer-motion";
import { CheckCircle, Clock, Zap } from "lucide-react";
import type { Project } from "@/data/projects";

const statusConfig = {
  "en production": { icon: Zap, color: "#10b981", bg: "rgba(16,185,129,0.12)", label: "En production" },
  "terminé": { icon: CheckCircle, color: "#6366f1", bg: "rgba(99,102,241,0.12)", label: "Terminé" },
  "en cours": { icon: Clock, color: "#f59e0b", bg: "rgba(245,158,11,0.12)", label: "En cours" },
};

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const status = statusConfig[project.status];
  const StatusIcon = status.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="rounded-2xl p-6 flex flex-col h-full will-change-transform transition-[transform,box-shadow] duration-200 ease-out hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/10"
      style={{
        background: "var(--bg-card)",
        border: "1px solid var(--border-color)",
      }}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-base" style={{ color: "var(--text-primary)" }}>
            {project.title}
          </h3>
          <p className="text-xs mt-0.5" style={{ color: "var(--text-secondary)" }}>{project.subtitle}</p>
        </div>
        <span
          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ml-2 whitespace-nowrap shrink-0"
          style={{ background: status.bg, color: status.color, border: `1px solid ${status.color}40` }}
        >
          <StatusIcon className="w-3 h-3" />
          {status.label}
        </span>
      </div>

      {/* Description */}
      <p className="text-sm leading-relaxed mb-4 flex-1" style={{ color: "var(--text-secondary)" }}>
        {project.description}
      </p>

      {/* Highlights */}
      <ul className="space-y-1.5 mb-4">
        {project.highlights.map((h) => (
          <li key={h} className="flex items-start gap-2 text-xs" style={{ color: "var(--text-secondary)" }}>
            <span className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ background: "#6366f1" }} />
            {h}
          </li>
        ))}
      </ul>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-1.5 mt-auto">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="px-2 py-0.5 text-xs rounded-md"
            style={{
              background: "var(--bg-hover)",
              color: "var(--text-secondary)",
              border: "1px solid var(--border-color)",
            }}
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
