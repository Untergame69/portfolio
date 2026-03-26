"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Download, MapPin, Briefcase } from "lucide-react";

const tags = ["AWS", "DevOps", "Infrastructure", "Docker", "CI/CD", "Cloud", "Automatisation", "Python"];

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-orange-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/30 via-transparent to-transparent dark:from-blue-900/20" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Disponible — Alternance sept. 2026 / CDI-CDD immédiat
          </div>

          {/* Name */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-4">
            Sébastien{" "}
            <span className="text-blue-500">Marle</span>
          </h1>

          {/* Title */}
          <p className="text-xl sm:text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-3">
            Ingénieur Cloud &amp; DevOps
          </p>

          {/* Subtitle */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-gray-500 dark:text-gray-400 text-sm mb-8">
            <span className="flex items-center gap-1.5">
              <Briefcase className="w-4 h-4" />
              3 ans d&apos;expérience
            </span>
            <span className="w-1 h-1 rounded-full bg-gray-400" />
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4" />
              Lyon, France
            </span>
          </div>

          {/* Tech tags */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {tags.map((tag, i) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + i * 0.05 }}
                className="px-3 py-1 text-xs font-medium rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800"
              >
                {tag}
              </motion.span>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-xl transition-colors shadow-lg shadow-blue-500/25"
            >
              Voir mes projets
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="/cv/CV_Sebastien_Marle_DevOps.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-medium rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
            >
              <Download className="w-4 h-4" />
              Télécharger mon CV
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
