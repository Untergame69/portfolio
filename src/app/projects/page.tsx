import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projets — Sébastien Marle",
  description: "Projets personnels et professionnels de Sébastien Marle.",
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">Projets</h1>
          <p className="text-gray-500 dark:text-gray-400">
            Projets d&apos;infrastructure, automatisation et data pipeline.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
