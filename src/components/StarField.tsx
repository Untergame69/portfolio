"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "./ThemeProvider";

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  phase: number;
  speed: number;
}

interface ShootingStar {
  x: number;
  y: number;
  vx: number;
  vy: number;
  opacity: number;
  trailLength: number;
}

interface TechNode {
  x: number;
  y: number;
  vx: number;
  vy: number;
  baseOpacity: number;
  phase: number;
  phaseSpeed: number;
}

const MAX_NODE_DIST = 180;
const MOUSE_INFLUENCE = 150;

export default function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();
  const themeRef = useRef(theme);
  const starsRef = useRef<Star[]>([]);
  const shootingStarsRef = useRef<ShootingStar[]>([]);
  const techNodesRef = useRef<TechNode[]>([]);
  const scrollRef = useRef(0);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const rafRef = useRef<number>(0);
  const lastShootingRef = useRef(0);

  useEffect(() => {
    themeRef.current = theme;
  }, [theme]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const initAll = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      starsRef.current = Array.from({ length: 180 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.8 + 0.3,
        opacity: Math.random() * 0.6 + 0.2,
        phase: Math.random() * Math.PI * 2,
        speed: Math.random() * 0.008 + 0.003,
      }));

      techNodesRef.current = Array.from({ length: 38 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        baseOpacity: Math.random() * 0.5 + 0.3,
        phase: Math.random() * Math.PI * 2,
        phaseSpeed: Math.random() * 0.015 + 0.005,
      }));
    };

    const onScroll = () => { scrollRef.current = window.scrollY; };
    const onMouse = (e: MouseEvent) => { mouseRef.current = { x: e.clientX, y: e.clientY }; };

    initAll();
    window.addEventListener("resize", initAll);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("mousemove", onMouse, { passive: true });

    // ── Moon ──────────────────────────────────────────────────────────────
    const drawMoon = () => {
      const x = canvas.width - 80;
      const y = 90;
      const r = 36;

      const glow = ctx.createRadialGradient(x, y, r * 0.5, x, y, r * 2.5);
      glow.addColorStop(0, "rgba(180, 200, 255, 0.08)");
      glow.addColorStop(1, "rgba(180, 200, 255, 0)");
      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.arc(x, y, r * 2.5, 0, Math.PI * 2);
      ctx.fill();

      const moonGrad = ctx.createRadialGradient(x - 8, y - 8, 2, x, y, r);
      moonGrad.addColorStop(0, "rgba(230, 235, 255, 0.95)");
      moonGrad.addColorStop(0.6, "rgba(190, 200, 240, 0.85)");
      moonGrad.addColorStop(1, "rgba(150, 165, 210, 0.4)");
      ctx.fillStyle = moonGrad;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = "rgba(10, 10, 20, 0.82)";
      ctx.beginPath();
      ctx.arc(x + 12, y - 4, r * 0.88, 0, Math.PI * 2);
      ctx.fill();
    };

    // ── Tech network ──────────────────────────────────────────────────────
    const drawTechNetwork = (isDark: boolean) => {
      const nodes = techNodesRef.current;
      const mouse = mouseRef.current;
      const baseLineOpacity = isDark ? 0.1 : 0.03;
      const baseNodeOpacity = isDark ? 1.0 : 0.3;
      const maxDistSq = MAX_NODE_DIST * MAX_NODE_DIST;

      // Update positions with bounce
      for (const node of nodes) {
        node.x += node.vx;
        node.y += node.vy;
        node.phase += node.phaseSpeed;
        if (node.x <= 0 || node.x >= canvas.width) { node.vx *= -1; node.x = Math.max(0, Math.min(canvas.width, node.x)); }
        if (node.y <= 0 || node.y >= canvas.height) { node.vy *= -1; node.y = Math.max(0, Math.min(canvas.height, node.y)); }
      }

      // Draw connections
      ctx.lineWidth = 0.7;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[j].x - nodes[i].x;
          const dy = nodes[j].y - nodes[i].y;
          const distSq = dx * dx + dy * dy;
          if (distSq > maxDistSq) continue;

          const dist = Math.sqrt(distSq);
          const proximity = 1 - dist / MAX_NODE_DIST;

          // Mouse boost on the midpoint
          const mx = (nodes[i].x + nodes[j].x) * 0.5;
          const my = (nodes[i].y + nodes[j].y) * 0.5;
          const mdx = mx - mouse.x;
          const mdy = my - mouse.y;
          const mDistSq = mdx * mdx + mdy * mdy;
          const mBoost = mDistSq < MOUSE_INFLUENCE * MOUSE_INFLUENCE
            ? (1 - Math.sqrt(mDistSq) / MOUSE_INFLUENCE) * 0.25
            : 0;

          const alpha = Math.min(proximity * baseLineOpacity + mBoost, 0.45);
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.strokeStyle = `rgba(99,102,241,${alpha})`;
          ctx.stroke();
        }
      }

      // Draw nodes
      for (const node of nodes) {
        const pulse = Math.sin(node.phase) * 0.2 + 0.8;
        const ndx = node.x - mouse.x;
        const ndy = node.y - mouse.y;
        const nDistSq = ndx * ndx + ndy * ndy;
        const mBoost = nDistSq < MOUSE_INFLUENCE * MOUSE_INFLUENCE
          ? (1 - Math.sqrt(nDistSq) / MOUSE_INFLUENCE) * 0.6
          : 0;

        const alpha = Math.min(node.baseOpacity * pulse * 0.25 * baseNodeOpacity + mBoost * 0.3, 0.85);
        const radius = mBoost > 0.1 ? 2.5 : 1.5;

        ctx.beginPath();
        ctx.arc(node.x, node.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(99,102,241,${alpha})`;
        ctx.fill();
      }
    };

    // ── Main animation loop ───────────────────────────────────────────────
    const animate = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const isDark = themeRef.current === "dark";
      const scroll = scrollRef.current;

      // Layer 1 — Stars (dark only)
      if (isDark) {
        for (const star of starsRef.current) {
          star.phase += star.speed;
          const alpha = (Math.sin(star.phase) * 0.25 + 0.75) * star.opacity;
          const py = (star.y + scroll * 0.04) % canvas.height;
          ctx.beginPath();
          ctx.arc(star.x, py, star.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(220,230,255,${alpha})`;
          ctx.fill();
        }
      }

      // Layer 2 — Tech network (always, but very subtle in light)
      drawTechNetwork(isDark);

      if (isDark) {
        // Layer 3 — Moon
        drawMoon();

        // Layer 4 — Shooting stars (spawn every 5-8s, max 2)
        if (
          time - lastShootingRef.current > 5000 + Math.random() * 3000 &&
          shootingStarsRef.current.length < 2
        ) {
          lastShootingRef.current = time;
          const angle = Math.PI / 6 + Math.random() * (Math.PI / 6); // 30–60°
          const speed = 5 + Math.random() * 6;
          shootingStarsRef.current.push({
            x: Math.random() * canvas.width * 0.55 + 40,
            y: Math.random() * canvas.height * 0.3 + 10,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed,
            opacity: 1,
            trailLength: 85 + Math.random() * 65,
          });
        }

        shootingStarsRef.current = shootingStarsRef.current.filter((s) => s.opacity > 0.02);

        for (const s of shootingStarsRef.current) {
          const drawAngle = Math.atan2(s.vy, s.vx);

          ctx.save();
          ctx.translate(s.x, s.y);
          ctx.rotate(drawAngle);

          // Trail: head (0,0) → tail (-trailLength, 0)
          const grad = ctx.createLinearGradient(0, 0, -s.trailLength, 0);
          grad.addColorStop(0, `rgba(255,255,255,${s.opacity * 0.9})`);
          grad.addColorStop(0.25, `rgba(200,220,255,${s.opacity * 0.5})`);
          grad.addColorStop(0.7, `rgba(180,200,255,${s.opacity * 0.15})`);
          grad.addColorStop(1, "rgba(255,255,255,0)");

          ctx.beginPath();
          ctx.moveTo(0, 0);
          ctx.lineTo(-s.trailLength, 0);
          ctx.strokeStyle = grad;
          ctx.lineWidth = 1.5;
          ctx.stroke();

          // Head glow
          ctx.beginPath();
          ctx.arc(0, 0, 1.8, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255,255,255,${s.opacity})`;
          ctx.fill();

          ctx.restore();

          s.x += s.vx;
          s.y += s.vy;
          s.opacity -= 0.016;
        }
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", initAll);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousemove", onMouse);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -1,
        pointerEvents: "none",
        width: "100%",
        height: "100%",
      }}
    />
  );
}
