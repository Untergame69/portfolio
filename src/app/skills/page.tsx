import SkillGrid from "@/components/SkillGrid";
import { skillCategories } from "@/data/skills";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Compétences — Sébastien Marle",
  description: "Compétences techniques de Sébastien Marle.",
};

export default function SkillsPage() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">Compétences</h1>
          <p className="text-gray-500 dark:text-gray-400">
            Stack technique couvrant l&apos;ensemble de la chaîne DevOps et Cloud.
          </p>
        </div>
        <SkillGrid categories={skillCategories} />
      </div>
    </div>
  );
}
