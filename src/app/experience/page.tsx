import ExperienceTimeline from "@/components/ExperienceTimeline";
import { experiences } from "@/data/experiences";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Expériences — Sébastien Marle",
  description: "Timeline des expériences professionnelles de Sébastien Marle.",
};

export default function ExperiencePage() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-3xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">Expériences</h1>
          <p className="text-gray-500 dark:text-gray-400">
            3 ans d&apos;expérience en Cloud, DevOps et infrastructure — du terrain à l&apos;architecture.
          </p>
        </div>
        <ExperienceTimeline experiences={experiences} />
      </div>
    </div>
  );
}
