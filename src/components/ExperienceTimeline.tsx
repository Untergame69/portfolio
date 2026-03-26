"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Anchor, Building2, Code2 } from "lucide-react";
import type { Experience } from "@/data/experiences";

const typeConfig = {
  military: { icon: Anchor, color: "text-blue-600 dark:text-blue-400", bg: "bg-blue-100 dark:bg-blue-900/30" },
  professional: { icon: Building2, color: "text-purple-600 dark:text-purple-400", bg: "bg-purple-100 dark:bg-purple-900/30" },
  personal: { icon: Code2, color: "text-orange-600 dark:text-orange-400", bg: "bg-orange-100 dark:bg-orange-900/30" },
};

interface ExperienceItemProps {
  experience: Experience;
  index: number;
}

function ExperienceItem({ experience, index }: ExperienceItemProps) {
  const [expanded, setExpanded] = useState(index === 0);
  const config = typeConfig[experience.type];
  const Icon = config.icon;

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="relative pl-8"
    >
      {/* Timeline line */}
      <div className="absolute left-3 top-6 bottom-0 w-px bg-gray-200 dark:bg-gray-700" />
      {/* Timeline dot */}
      <div className={`absolute left-0 top-4 w-6 h-6 rounded-full flex items-center justify-center ${config.bg}`}>
        <Icon className={`w-3 h-3 ${config.color}`} />
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-5 mb-4 hover:border-blue-500/30 dark:hover:border-blue-400/30 transition-all">
        {/* Header */}
        <button
          className="w-full text-left"
          onClick={() => setExpanded(!expanded)}
        >
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="font-bold text-gray-900 dark:text-white">{experience.company}</h3>
              <p className="text-sm font-medium text-blue-500 dark:text-blue-400">{experience.role}</p>
              <div className="flex items-center gap-3 mt-1 text-xs text-gray-500 dark:text-gray-400">
                <span>{experience.period}</span>
                <span>·</span>
                <span>{experience.location}</span>
              </div>
            </div>
            <ChevronDown
              className={`w-4 h-4 text-gray-400 transition-transform shrink-0 mt-1 ${expanded ? "rotate-180" : ""}`}
            />
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 text-left">{experience.context}</p>
        </button>

        {/* Expandable content */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden"
            >
              <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                <ul className="space-y-2 mb-4">
                  {experience.missions.map((mission) => (
                    <li key={mission} className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                      {mission}
                    </li>
                  ))}
                </ul>
                {experience.techStack.length > 0 && (
                  <div className="flex flex-wrap gap-1.5">
                    {experience.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-xs rounded-md bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

interface ExperienceTimelineProps {
  experiences: Experience[];
}

export default function ExperienceTimeline({ experiences }: ExperienceTimelineProps) {
  return (
    <div className="space-y-0">
      {experiences.map((exp, i) => (
        <ExperienceItem key={exp.company + exp.period} experience={exp} index={i} />
      ))}
    </div>
  );
}
