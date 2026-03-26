import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import SkillGrid from "@/components/SkillGrid";
import { projects } from "@/data/projects";
import { skillCategories } from "@/data/skills";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div>
      <Hero />

      {/* Projects preview */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Projets</h2>
              <p className="text-gray-500 dark:text-gray-400 mt-1">Infrastructure & automatisation</p>
            </div>
            <Link
              href="/projects"
              className="inline-flex items-center gap-1.5 text-sm text-blue-500 hover:text-blue-600 font-medium"
            >
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

      {/* Skills preview */}
      <section className="py-20 px-4 bg-white dark:bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Compétences</h2>
              <p className="text-gray-500 dark:text-gray-400 mt-1">Stack technique maîtrisée</p>
            </div>
            <Link
              href="/skills"
              className="inline-flex items-center gap-1.5 text-sm text-blue-500 hover:text-blue-600 font-medium"
            >
              Voir tout <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <SkillGrid categories={skillCategories} />
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Travaillons ensemble
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mb-8">
            Disponible pour une alternance DevOps / Admin Sys (sept. 2026) ou un CDI/CDD immédiat à Lyon / Toulouse.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-xl transition-colors"
          >
            Me contacter <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
