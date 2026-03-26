import ModeHero from "@/components/ModeHero";
import ProjectCard from "@/components/ProjectCard";
import SkillGrid from "@/components/SkillGrid";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import { projects } from "@/data/projects";
import { skillCategories } from "@/data/skills";
import { experiences } from "@/data/experiences";
import type { SiteMode } from "@/lib/mode";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function PortfolioPage({ mode }: { mode: SiteMode }) {
  return (
    <div>
      <ModeHero mode={mode} />

      {/* Projects */}
      <section className="py-20 px-4" style={{ background: "var(--bg-primary)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl font-bold" style={{ color: "var(--text-primary)" }}>Projets</h2>
              <p className="mt-1 text-sm" style={{ color: "var(--text-secondary)" }}>Infrastructure & automatisation</p>
            </div>
            <Link href="/projects" className="inline-flex items-center gap-1.5 text-sm font-medium" style={{ color: "#6366f1" }}>
              Tous les projets <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <ProjectCard key={project.title} project={project} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Experiences preview */}
      <section className="py-20 px-4" style={{ background: "var(--bg-card)" }}>
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl font-bold" style={{ color: "var(--text-primary)" }}>Expériences</h2>
              <p className="mt-1 text-sm" style={{ color: "var(--text-secondary)" }}>3 ans en Cloud, DevOps, Réseau</p>
            </div>
            <Link href="/experience" className="inline-flex items-center gap-1.5 text-sm font-medium" style={{ color: "#6366f1" }}>
              Voir tout <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <ExperienceTimeline experiences={experiences.slice(0, 2)} />
        </div>
      </section>

      {/* Skills */}
      <section className="py-20 px-4" style={{ background: "var(--bg-primary)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl font-bold" style={{ color: "var(--text-primary)" }}>Compétences</h2>
              <p className="mt-1 text-sm" style={{ color: "var(--text-secondary)" }}>Stack technique maîtrisée</p>
            </div>
            <Link href="/skills" className="inline-flex items-center gap-1.5 text-sm font-medium" style={{ color: "#6366f1" }}>
              Voir tout <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <SkillGrid categories={skillCategories} />
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 px-4" style={{ background: "var(--bg-card)" }}>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
            Travaillons ensemble
          </h2>
          <p className="mb-8" style={{ color: "var(--text-secondary)" }}>
            {mode === "alternance"
              ? "Disponible pour une alternance DevOps / Admin Sys à partir de septembre 2026 (Lyon, Toulouse, Paris, Strasbourg)."
              : "Disponible immédiatement pour un CDI/CDD DevOps ou Admin Sys/Réseau à Lyon ou Toulouse."}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-medium transition-all hover:opacity-90"
            style={{ background: "linear-gradient(135deg, #6366f1, #4f46e5)" }}
          >
            Me contacter <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
