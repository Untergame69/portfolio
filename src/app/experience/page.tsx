import ExperienceTimeline from "@/components/ExperienceTimeline";
import { experiences } from "@/data/experiences";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Expériences — Sébastien Marle",
  description: "Timeline des expériences professionnelles de Sébastien Marle.",
};

export default function ExperiencePage() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-4" style={{ background: "var(--bg-primary)" }}>
      <div className="max-w-3xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-3" style={{ color: "var(--text-primary)" }}>Expériences</h1>
          <p style={{ color: "var(--text-secondary)" }}>
            3 ans d&apos;expérience en Cloud, DevOps et infrastructure — du terrain à l&apos;architecture.
          </p>
        </div>
        <ExperienceTimeline experiences={experiences} />
      </div>
    </div>
  );
}
