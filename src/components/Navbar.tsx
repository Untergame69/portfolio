"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "./ThemeProvider";
import { Sun, Moon, Menu, X, Terminal } from "lucide-react";

const navLinks = [
  { href: "/experience", label: "Expériences" },
  { href: "/projects", label: "Projets" },
  { href: "/skills", label: "Compétences" },
  { href: "/contact", label: "Contact" },
];

function getModeLabel(pathname: string): string | null {
  if (pathname.includes("alternance")) return "Alternance";
  if (pathname.includes("available-now")) return "CDI/CDD";
  return null;
}

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const modeLabel = getModeLabel(pathname);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(10,10,15,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border-color)" : "1px solid transparent",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-base">
            <Terminal className="w-4 h-4" style={{ color: "#6366f1" }} />
            <span style={{ color: "var(--text-primary)" }}>SM</span>
            {modeLabel && (
              <span
                className="text-xs px-2 py-0.5 rounded-full ml-1"
                style={{
                  background: modeLabel === "Alternance" ? "rgba(16,185,129,0.15)" : "rgba(99,102,241,0.15)",
                  color: modeLabel === "Alternance" ? "#10b981" : "#818cf8",
                  border: `1px solid ${modeLabel === "Alternance" ? "rgba(16,185,129,0.3)" : "rgba(99,102,241,0.3)"}`,
                }}
              >
                {modeLabel}
              </span>
            )}
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium transition-colors"
                style={{
                  color: pathname === link.href ? "#6366f1" : "var(--text-secondary)",
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Theme toggle + mobile */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg transition-colors"
              style={{ color: "var(--text-secondary)", background: "transparent" }}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <button
              className="md:hidden p-2 rounded-lg transition-colors"
              style={{ color: "var(--text-secondary)" }}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div
            className="md:hidden pb-4 pt-4 space-y-1"
            style={{ borderTop: "1px solid var(--border-color)" }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-2 px-2 rounded-lg text-sm font-medium transition-colors"
                style={{
                  color: pathname === link.href ? "#6366f1" : "var(--text-secondary)",
                  background: pathname === link.href ? "rgba(99,102,241,0.08)" : "transparent",
                }}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
