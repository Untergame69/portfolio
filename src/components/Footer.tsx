import { Code2, Link as LinkIcon, Mail, Terminal } from "lucide-react";

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--border-color)", background: "var(--bg-card)" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm" style={{ color: "var(--text-secondary)" }}>
            <Terminal className="w-4 h-4" style={{ color: "#6366f1" }} />
            <span>Sébastien Marle — Ingénieur Cloud &amp; DevOps</span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Untergame"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--text-secondary)" }}
              className="hover:opacity-80 transition-opacity"
              aria-label="GitHub"
            >
              <Code2 className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/sebastien-marle"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--text-secondary)" }}
              className="hover:opacity-80 transition-opacity"
              aria-label="LinkedIn"
            >
              <LinkIcon className="w-5 h-5" />
            </a>
            <a
              href="mailto:sebastien.marle.contact@gmail.com"
              style={{ color: "var(--text-secondary)" }}
              className="hover:opacity-80 transition-opacity"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
        <div className="mt-4 text-center text-xs" style={{ color: "var(--text-secondary)" }}>
          Next.js · Docker · Traefik · Let&apos;s Encrypt — hébergé sur serveur dédié
        </div>
      </div>
    </footer>
  );
}
