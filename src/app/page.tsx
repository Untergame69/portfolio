"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { GraduationCap, Briefcase, ArrowRight, MapPin } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Name */}
          <div className="mb-2 text-sm font-medium uppercase tracking-widest" style={{ color: "var(--text-secondary)" }}>
            Portfolio
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-2" style={{ color: "var(--text-primary)" }}>
            Sébastien <span style={{ color: "#6366f1" }}>Marle</span>
          </h1>
          <p className="text-lg mb-10" style={{ color: "var(--text-secondary)" }}>
            Ingénieur Cloud &amp; DevOps — Lyon
          </p>

          {/* Mode selection */}
          <p className="text-sm mb-6" style={{ color: "var(--text-secondary)" }}>
            Vous cherchez&nbsp;:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Alternance card */}
            <Link href="/hire/alternance-2026" className="group block">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="rounded-2xl p-6 text-left transition-all"
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border-color)",
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: "rgba(16,185,129,0.15)", border: "1px solid rgba(16,185,129,0.3)" }}
                >
                  <GraduationCap className="w-5 h-5 text-emerald-400" />
                </div>
                <h2 className="font-bold text-base mb-1" style={{ color: "var(--text-primary)" }}>
                  Un alternant
                </h2>
                <p className="text-xs mb-3" style={{ color: "var(--text-secondary)" }}>
                  Alternance 24 mois — Septembre 2026
                </p>
                <div className="flex items-center gap-1.5 text-xs" style={{ color: "var(--text-secondary)" }}>
                  <MapPin className="w-3 h-3" />
                  Lyon · Toulouse · Paris · Strasbourg
                </div>
                <div className="mt-4 flex items-center gap-1.5 text-xs font-medium text-emerald-400 group-hover:gap-2.5 transition-all">
                  Voir le profil alternance <ArrowRight className="w-3 h-3" />
                </div>
              </motion.div>
            </Link>

            {/* CDI card */}
            <Link href="/hire/available-now" className="group block">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="rounded-2xl p-6 text-left transition-all"
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border-color)",
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: "rgba(99,102,241,0.15)", border: "1px solid rgba(99,102,241,0.3)" }}
                >
                  <Briefcase className="w-5 h-5" style={{ color: "#818cf8" }} />
                </div>
                <h2 className="font-bold text-base mb-1" style={{ color: "var(--text-primary)" }}>
                  Un collaborateur CDI/CDD
                </h2>
                <p className="text-xs mb-3" style={{ color: "var(--text-secondary)" }}>
                  Disponible immédiatement
                </p>
                <div className="flex items-center gap-1.5 text-xs" style={{ color: "var(--text-secondary)" }}>
                  <MapPin className="w-3 h-3" />
                  Lyon · Toulouse
                </div>
                <div className="mt-4 flex items-center gap-1.5 text-xs font-medium group-hover:gap-2.5 transition-all" style={{ color: "#818cf8" }}>
                  Voir le profil CDI/CDD <ArrowRight className="w-3 h-3" />
                </div>
              </motion.div>
            </Link>
          </div>

          <p className="mt-8 text-xs" style={{ color: "var(--text-secondary)" }}>
            Ou explorez directement :{" "}
            <Link href="/projects" className="underline underline-offset-2 hover:opacity-80" style={{ color: "#6366f1" }}>projets</Link>
            {" · "}
            <Link href="/experience" className="underline underline-offset-2 hover:opacity-80" style={{ color: "#6366f1" }}>expériences</Link>
            {" · "}
            <Link href="/skills" className="underline underline-offset-2 hover:opacity-80" style={{ color: "#6366f1" }}>compétences</Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
