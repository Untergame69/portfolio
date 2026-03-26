import { Code2, Link as LinkIcon, Mail, Terminal } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <Terminal className="w-4 h-4 text-blue-500" />
            <span>Sébastien Marle — Ingénieur Cloud &amp; DevOps</span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Untergame"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
              aria-label="GitHub"
            >
              <Code2 className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/sebastien-marle"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 transition-colors"
              aria-label="LinkedIn"
            >
              <LinkIcon className="w-5 h-5" />
            </a>
            <a
              href="mailto:sebastien.marle.contact@gmail.com"
              className="text-gray-400 hover:text-orange-500 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
        <div className="mt-4 text-center text-xs text-gray-400 dark:text-gray-600">
          Hébergé sur serveur dédié — Next.js · Docker · Traefik · Let&apos;s Encrypt
        </div>
      </div>
    </footer>
  );
}
