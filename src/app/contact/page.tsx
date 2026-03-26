import { Mail, Link, Code2, MapPin, Calendar } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Sébastien Marle",
  description: "Contacter Sébastien Marle, Ingénieur Cloud & DevOps.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-2xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">Contact</h1>
          <p className="text-gray-500 dark:text-gray-400">
            Disponible pour discuter de toute opportunité DevOps / Cloud / Admin Sys.
          </p>
        </div>

        {/* Availability */}
        <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-5 mb-8">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="font-semibold text-green-700 dark:text-green-400 text-sm">Disponible</span>
          </div>
          <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-green-500 shrink-0" />
              <span><strong>Alternance 24 mois</strong> — Disponible septembre 2026 (DevOps / Admin Sys / Réseau)</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-blue-500 shrink-0" />
              <span><strong>CDI/CDD</strong> — Disponible immédiatement (DevOps / Admin Sys)</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-orange-500 shrink-0" />
              <span>Lyon · Toulouse · Paris · Strasbourg (alternance) / Lyon · Toulouse (CDI-CDD)</span>
            </div>
          </div>
        </div>

        {/* Contact links */}
        <div className="space-y-3">
          <a
            href="mailto:sebastien.marle.contact@gmail.com"
            className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-orange-400 dark:hover:border-orange-400 transition-all group"
          >
            <div className="p-2 rounded-lg bg-orange-50 dark:bg-orange-900/20">
              <Mail className="w-5 h-5 text-orange-500" />
            </div>
            <div>
              <div className="text-sm font-medium text-gray-900 dark:text-white group-hover:text-orange-500 transition-colors">Email</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">sebastien.marle.contact@gmail.com</div>
            </div>
          </a>

          <a
            href="https://linkedin.com/in/sebastien-marle"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-400 transition-all group"
          >
            <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-900/20">
              <Link className="w-5 h-5 text-blue-500" />
            </div>
            <div>
              <div className="text-sm font-medium text-gray-900 dark:text-white group-hover:text-blue-500 transition-colors">LinkedIn</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">linkedin.com/in/sebastien-marle</div>
            </div>
          </a>

          <a
            href="https://github.com/Untergame"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-400 transition-all group"
          >
            <div className="p-2 rounded-lg bg-gray-50 dark:bg-gray-700/50">
              <Code2 className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            </div>
            <div>
              <div className="text-sm font-medium text-gray-900 dark:text-white group-hover:text-gray-600 dark:group-hover:text-gray-200 transition-colors">GitHub</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">github.com/Untergame</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
