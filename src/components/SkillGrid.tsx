"use client";

import { motion } from "framer-motion";
import { Cloud, GitBranch, Container, Code, Server, Monitor, Activity, Network, Phone } from "lucide-react";
import type { SkillCategory } from "@/data/skills";

const iconMap: Record<string, React.ElementType> = {
  Cloud, GitBranch, Container, Code, Server, Monitor, Activity, Network, Phone,
};

interface SkillGridProps {
  categories: SkillCategory[];
}

export default function SkillGrid({ categories }: SkillGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {categories.map((cat, i) => {
        const Icon = iconMap[cat.icon] || Server;
        return (
          <motion.div
            key={cat.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07 }}
            className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-4 hover:border-blue-500/50 dark:hover:border-blue-400/50 transition-all"
          >
            <div className="flex items-center gap-2.5 mb-3">
              <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-900/20">
                <Icon className="w-4 h-4 text-blue-500" />
              </div>
              <h3 className="font-semibold text-sm text-gray-900 dark:text-white">{cat.name}</h3>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-2 py-0.5 text-xs rounded-md bg-gray-50 dark:bg-gray-700/50 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-600"
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
