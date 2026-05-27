"use client";

import { useEffect, useRef } from "react";
import { SpiderWebPattern } from "./icons";

/**
 * Spider-Tech Atmosphere — global background layer.
 * Renders white silk particles drifting along web strand paths,
 * a subtle grid, halftone texture, and giant web watermark.
 */
export function VerseAtmosphere() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;

    const setSize = () => {
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    };
    setSize();

    const rand = (a: number, b: number) => Math.random() * (b - a) + a;

    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      life: number;
      maxLife: number;
    }

    const particles: Particle[] = [];
    const MAX_PARTICLES = 60;
    const CONNECTION_DISTANCE = 180;

    const spawnParticle = (): Particle => ({
      x: rand(0, window.innerWidth),
      y: window.innerHeight + 10,
      vx: rand(-0.15, 0.15),
      vy: rand(-0.3, -0.1),
      size: rand(0.8, 1.5),
      life: 0,
      maxLife: rand(600, 1100),
    });

    // Seed initial particles
    for (let i = 0; i < 40; i++) {
      const p = spawnParticle();
      p.y = rand(0, window.innerHeight);
      p.life = rand(0, p.maxLife * 0.7);
      particles.push(p);
    }

    let raf = 0;
    let running = true;

    const tick = () => {
      if (!running) return;
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      // Spawn new particles
      if (Math.random() < 0.04 && particles.length < MAX_PARTICLES) {
        particles.push(spawnParticle());
      }

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i]!;
        p.x += p.vx;
        p.y += p.vy;
        p.life++;

        const progress = p.life / p.maxLife;
        let alpha = 1;
        if (progress < 0.2) alpha = progress / 0.2;
        else if (progress > 0.8) alpha = (1 - progress) / 0.2;

        ctx.save();
        ctx.globalAlpha = alpha * 0.45;

        // White silk glow
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 5);
        grad.addColorStop(0, "rgba(255,255,255,0.5)");
        grad.addColorStop(1, "rgba(255,255,255,0)");
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 5, 0, Math.PI * 2);
        ctx.fill();

        // Core dot
        ctx.globalAlpha = alpha * 0.85;
        ctx.fillStyle = "#FFFFFF";
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();

        if (p.life >= p.maxLife || p.y < -20) {
          particles.splice(i, 1);
        }
      }

      // Draw white web strands between nearby particles
      ctx.save();
      ctx.strokeStyle = "#FFFFFF";
      ctx.lineWidth = 0.5;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i]!;
          const b = particles[j]!;
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECTION_DISTANCE) {
            ctx.globalAlpha = (1 - dist / CONNECTION_DISTANCE) * 0.08;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
      ctx.restore();

      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const onResize = () => setSize();
    window.addEventListener("resize", onResize);

    const onVisibility = () => {
      if (document.hidden) {
        running = false;
        cancelAnimationFrame(raf);
      } else if (!running) {
        running = true;
        raf = requestAnimationFrame(tick);
      }
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <>
      <canvas ref={canvasRef} className="verse-bg" aria-hidden />
      <div className="verse-grid" aria-hidden />
      <div className="verse-halftone" aria-hidden />
      <div className="verse-web-watermark" aria-hidden>
        <SpiderWebPattern size={1000} />
      </div>
      <div className="verse-vignette" aria-hidden />
    </>
  );
}
