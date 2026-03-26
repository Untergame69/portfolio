import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StarField from "@/components/StarField";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sébastien Marle — Ingénieur Cloud & DevOps",
  description: "Portfolio de Sébastien Marle, Ingénieur Cloud & DevOps basé à Lyon. 3 ans d'expérience en AWS, Docker, CI/CD, Infrastructure.",
  openGraph: {
    title: "Sébastien Marle — Ingénieur Cloud & DevOps",
    description: "Portfolio de Sébastien Marle, Ingénieur Cloud & DevOps basé à Lyon.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="dark" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen`} style={{ background: "var(--bg-primary)", color: "var(--text-primary)" }}>
        <ThemeProvider>
          <StarField />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
