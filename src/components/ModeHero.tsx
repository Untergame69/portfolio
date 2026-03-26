"use client";

import { motion } from "framer-motion";
import { MapPin, Briefcase, GraduationCap, ArrowRight, Download } from "lucide-react";
import Link from "next/link";
import type { SiteMode } from "@/lib/mode";
import { modeConfig } from "@/lib/mode";

const techTags = ["AWS", "DevOps", "Infrastructure", "Docker", "CI/CD", "Cloud", "Terraform", "Python", "Linux"];

export default function ModeHero({ mode }: { mode: SiteMode }) {
  const config = modeConfig[mode];
  const isAlternance = mode === "alternance";

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 pt-16">
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Availability badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6 ${
              isAlternance
                ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30"
                : "bg-blue-500/15 text-blue-400 border border-blue-500/30"
            }`}
          >
            <span className={`w-2 h-2 rounded-full animate-pulse ${isAlternance ? "bg-emerald-400" : "bg-blue-400"}`} />
            {config.badge}
          </motion.div>

          {/* Name */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
            Sébastien{" "}
            <span style={{ color: "#6366f1" }}>Marle</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl font-medium mb-2" style={{ color: "var(--text-secondary)" }}>
            {config.subtitle}
          </p>

          {/* Meta info */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm mb-3" style={{ color: "var(--text-secondary)" }}>
            <span className="flex items-center gap-1.5">
              <Briefcase className="w-4 h-4" />
              3 ans d&apos;expérience
            </span>
            <span className="w-1 h-1 rounded-full" style={{ background: "var(--border-color)" }} />
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4" />
              {config.cities.join(" · ")}
            </span>
          </div>

          {/* School info for alternance */}
          {config.school && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap items-center justify-center gap-2 text-xs mb-6"
              style={{ color: "var(--text-secondary)" }}
            >
              <GraduationCap className="w-3.5 h-3.5" />
              <span>{config.school}</span>
              {config.rhythm && (
                <>
                  <span>·</span>
                  <span>{config.rhythm}</span>
                </>
              )}
            </motion.div>
          )}

          {!config.school && <div className="mb-6" />}

          {/* Tech tags */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {techTags.map((tag, i) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 + i * 0.04 }}
                className="px-3 py-1 text-xs font-medium rounded-full"
                style={{
                  background: "rgba(99,102,241,0.12)",
                  color: "#a5b4fc",
                  border: "1px solid rgba(99,102,241,0.25)",
                }}
              >
                {tag}
              </motion.span>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={config.ctaLink}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-white font-medium transition-all hover:opacity-90 hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #6366f1, #4f46e5)",
                boxShadow: "0 4px 20px rgba(99,102,241,0.3)",
              }}
            >
              {config.cta}
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/projects"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium transition-all hover:opacity-90"
              style={{
                background: "var(--bg-card)",
                color: "var(--text-primary)",
                border: "1px solid var(--border-color)",
              }}
            >
              Voir mes projets
            </Link>
            <a
              href="/cv/CV_Sebastien_Marle_DevOps.pdf"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium transition-all hover:opacity-90"
              style={{
                background: "var(--bg-card)",
                color: "var(--text-primary)",
                border: "1px solid var(--border-color)",
              }}
            >
              <Download className="w-4 h-4" />
              Mon CV
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
