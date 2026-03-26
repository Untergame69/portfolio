import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projets — Sébastien Marle",
  description: "Projets personnels et professionnels de Sébastien Marle.",
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-4" style={{ background: "var(--bg-primary)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-3" style={{ color: "var(--text-primary)" }}>Projets</h1>
          <p style={{ color: "var(--text-secondary)" }}>
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
