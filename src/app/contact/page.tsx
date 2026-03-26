import { Mail, Code2, Link as LinkIcon, MapPin, Calendar } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Sébastien Marle",
  description: "Contacter Sébastien Marle, Ingénieur Cloud & DevOps.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-4" style={{ background: "var(--bg-primary)" }}>
      <div className="max-w-2xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-3" style={{ color: "var(--text-primary)" }}>Contact</h1>
          <p style={{ color: "var(--text-secondary)" }}>
            Disponible pour discuter de toute opportunité DevOps / Cloud / Admin Sys.
          </p>
        </div>

        {/* Availability */}
        <div
          className="rounded-xl p-5 mb-8"
          style={{
            background: "rgba(16,185,129,0.08)",
            border: "1px solid rgba(16,185,129,0.25)",
          }}
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-semibold text-sm text-emerald-400">Disponible</span>
          </div>
          <div className="space-y-2 text-sm" style={{ color: "var(--text-secondary)" }}>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-emerald-400 shrink-0" />
              <span><strong style={{ color: "var(--text-primary)" }}>Alternance 24 mois</strong> — Disponible septembre 2026 (DevOps / Admin Sys / Réseau)</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 shrink-0" style={{ color: "#818cf8" }} />
              <span><strong style={{ color: "var(--text-primary)" }}>CDI/CDD</strong> — Disponible immédiatement (DevOps / Admin Sys)</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Lyon · Toulouse · Paris · Strasbourg (alternance) / Lyon · Toulouse (CDI-CDD)</span>
            </div>
          </div>
        </div>

        {/* Contact links */}
        <div className="space-y-3">
          {[
            {
              href: "mailto:sebastien.marle.contact@gmail.com",
              icon: Mail,
              color: "#f59e0b",
              label: "Email",
              sub: "sebastien.marle.contact@gmail.com",
            },
            {
              href: "https://linkedin.com/in/sebastien-marle",
              icon: LinkIcon,
              color: "#6366f1",
              label: "LinkedIn",
              sub: "linkedin.com/in/sebastien-marle",
              external: true,
            },
            {
              href: "https://github.com/Untergame",
              icon: Code2,
              color: "#e8e8f0",
              label: "GitHub",
              sub: "github.com/Untergame",
              external: true,
            },
          ].map(({ href, icon: Icon, color, label, sub, external }) => (
            <a
              key={label}
              href={href}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="flex items-center gap-4 p-4 rounded-xl transition-all"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border-color)",
              }}
            >
              <div
                className="p-2 rounded-lg shrink-0"
                style={{ background: color + "18", border: `1px solid ${color}30` }}
              >
                <Icon className="w-5 h-5" style={{ color }} />
              </div>
              <div>
                <div className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>{label}</div>
                <div className="text-xs" style={{ color: "var(--text-secondary)" }}>{sub}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
