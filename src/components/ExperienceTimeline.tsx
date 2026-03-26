"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Anchor, Building2, Code2 } from "lucide-react";
import type { Experience } from "@/data/experiences";

const typeConfig = {
  military: {
    icon: Anchor,
    dotColor: "bg-blue-500",
    lineColor: "from-blue-500/50",
  },
  professional: {
    icon: Building2,
    dotColor: "bg-indigo-500",
    lineColor: "from-indigo-500/50",
  },
  personal: {
    icon: Code2,
    dotColor: "bg-amber-500",
    lineColor: "from-amber-500/50",
  },
};

function CompanyLogo({ initials, color }: { initials: string; color: string }) {
  return (
    <div
      className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-xs shrink-0"
      style={{ backgroundColor: color + "cc", border: `1px solid ${color}40` }}
    >
      {initials}
    </div>
  );
}

interface ExperienceItemProps {
  experience: Experience;
  index: number;
  isLast: boolean;
}

function ExperienceItem({ experience, index, isLast }: ExperienceItemProps) {
  const [expanded, setExpanded] = useState(index === 0);
  const config = typeConfig[experience.type];
  const Icon = config.icon;

  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.4 }}
      className="relative pl-10"
    >
      {/* Timeline line */}
      {!isLast && (
        <div
          className={`absolute left-3.5 top-10 bottom-0 w-px bg-gradient-to-b ${config.lineColor} to-transparent`}
        />
      )}

      {/* Timeline dot */}
      <div
        className={`absolute left-1.5 top-4 w-4 h-4 rounded-full ${config.dotColor} ring-4 ring-[var(--bg-primary)] flex items-center justify-center`}
      >
        <Icon className="w-2 h-2 text-white" />
      </div>

      <div
        className="rounded-2xl border mb-5 overflow-hidden"
        style={{
          background: "var(--bg-card)",
          borderColor: expanded ? "rgba(99,102,241,0.4)" : "var(--border-color)",
          transition: "border-color 0.2s",
        }}
      >
        {/* Card header — always visible */}
        <button
          className="w-full text-left p-5 hover:opacity-90 transition-opacity"
          onClick={() => setExpanded(!expanded)}
        >
          <div className="flex items-start gap-3">
            <CompanyLogo initials={experience.logoInitials} color={experience.logoColor} />
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="font-bold text-base" style={{ color: "var(--text-primary)" }}>
                    {experience.company}
                  </h3>
                  <p className="text-sm font-medium" style={{ color: experience.logoColor }}>
                    {experience.role}
                  </p>
                </div>
                <ChevronDown
                  className={`w-4 h-4 shrink-0 mt-1 transition-transform duration-200`}
                  style={{
                    color: "var(--text-secondary)",
                    transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                />
              </div>
              <div className="flex flex-wrap items-center gap-2 mt-1.5 text-xs" style={{ color: "var(--text-secondary)" }}>
                <span>{experience.period}</span>
                <span>·</span>
                <span>{experience.location}</span>
              </div>
            </div>
          </div>
          <p className="text-xs mt-3 leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            {experience.context}
          </p>

          {/* Tech stack always visible */}
          {experience.techStack.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mt-3">
              {experience.techStack.slice(0, expanded ? undefined : 6).map((tech) => (
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
              {!expanded && experience.techStack.length > 6 && (
                <span
                  className="px-2 py-0.5 text-xs rounded-md"
                  style={{
                    background: "var(--bg-hover)",
                    color: "var(--text-secondary)",
                  }}
                >
                  +{experience.techStack.length - 6}
                </span>
              )}
            </div>
          )}
        </button>

        {/* Expandable missions */}
        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              key="missions"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.28, ease: "easeInOut" }}
              style={{ overflow: "hidden" }}
            >
              <div
                className="px-5 pb-5 space-y-4"
                style={{ borderTop: "1px solid var(--border-color)" }}
              >
                {experience.missions.map((group) => (
                  <div key={group.category} className="pt-4">
                    <p
                      className="text-xs font-semibold uppercase tracking-wider mb-2"
                      style={{ color: experience.logoColor }}
                    >
                      {group.category}
                    </p>
                    <ul className="space-y-1.5">
                      {group.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-xs leading-relaxed"
                          style={{ color: "var(--text-secondary)" }}
                        >
                          <span
                            className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                            style={{ background: experience.logoColor }}
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default function ExperienceTimeline({ experiences }: { experiences: Experience[] }) {
  return (
    <div>
      {experiences.map((exp, i) => (
        <ExperienceItem
          key={exp.company + exp.period}
          experience={exp}
          index={i}
          isLast={i === experiences.length - 1}
        />
      ))}
    </div>
  );
}
