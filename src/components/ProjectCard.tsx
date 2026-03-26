"use client";

import { motion } from "framer-motion";
import { CheckCircle, Clock, Zap } from "lucide-react";
import type { Project } from "@/data/projects";

const statusConfig = {
  "en production": { icon: Zap, color: "text-green-500", bg: "bg-green-100 dark:bg-green-900/30", label: "En production" },
  "terminé": { icon: CheckCircle, color: "text-blue-500", bg: "bg-blue-100 dark:bg-blue-900/30", label: "Terminé" },
  "en cours": { icon: Clock, color: "text-orange-500", bg: "bg-orange-100 dark:bg-orange-900/30", label: "En cours" },
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
      className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 hover:border-blue-500/50 dark:hover:border-blue-400/50 transition-all hover:shadow-lg hover:shadow-blue-500/5 group"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div>
          <h3 className="font-bold text-lg text-gray-900 dark:text-white group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">{project.subtitle}</p>
        </div>
        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${status.bg} ${status.color} whitespace-nowrap ml-2`}>
          <StatusIcon className="w-3 h-3" />
          {status.label}
        </span>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
        {project.description}
      </p>

      {/* Highlights */}
      <ul className="space-y-1.5 mb-4">
        {project.highlights.map((h) => (
          <li key={h} className="flex items-start gap-2 text-xs text-gray-500 dark:text-gray-400">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" />
            {h}
          </li>
        ))}
      </ul>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-1.5">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="px-2 py-0.5 text-xs rounded-md bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
