import React, { useEffect, useRef } from "react";
import { TOOL_STACK } from "../data/content";

function drawRoundedRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.arcTo(x + w, y, x + w, y + r, r);
  ctx.lineTo(x + w, y + h - r);
  ctx.arcTo(x + w, y + h, x + w - r, y + h, r);
  ctx.lineTo(x + r, y + h);
  ctx.arcTo(x, y + h, x, y + h - r, r);
  ctx.lineTo(x, y + r);
  ctx.arcTo(x, y, x + r, y, r);
  ctx.closePath();
}

export default function PhysicsCanvas({ width = 487, height = 694 }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    ctx.scale(dpr, dpr);

    const size = Math.round(width * 0.165);
    const cornerRadius = size * 0.24;
    const padding = size * 0.13;
    const restitution = 0.42;

    const images = TOOL_STACK.map((src) => {
      const img = new Image();
      img.src = src;
      return img;
    });

    const cols = Math.floor(width / (size + 8));
    const items = images.map((img, i) => ({
      img,
      x: size / 2 + 8 + (i % cols) * ((width - size - 16) / Math.max(cols - 1, 1)),
      y: -size * 1.4 - Math.floor(i / cols) * (size + 6),
      vx: (Math.random() - 0.5) * 1.5,
      vy: 0.5 + Math.random() * 1.5
    }));

    let animId;
    let lastScrollY = window.scrollY;

    const tick = () => {
      const scrollVelocity = (window.scrollY - lastScrollY) * 0.15;
      lastScrollY = window.scrollY;

      ctx.clearRect(0, 0, width, height);

      // Physics update
      items.forEach((p) => {
        p.vy += 0.28; // gravity
        p.vx -= scrollVelocity * 0.08;
        p.vx *= 0.94;
        p.vy *= 0.988;
        p.x += p.vx;
        p.y += p.vy;

        const half = size / 2;
        // Boundaries
        if (p.x - half < 0) {
          p.x = half;
          p.vx = Math.abs(p.vx) * restitution;
        }
        if (p.x + half > width) {
          p.x = width - half;
          p.vx = -Math.abs(p.vx) * restitution;
        }
        if (p.y - half < 0) {
          p.y = half;
          p.vy = Math.abs(p.vy) * restitution;
        }
        if (p.y + half > height) {
          p.y = height - half;
          p.vy = -Math.abs(p.vy) * restitution;
        }
      });

      // Inter-badge collisions
      for (let i = 0; i < items.length; i++) {
        for (let j = i + 1; j < items.length; j++) {
          const a = items[i];
          const b = items[j];
          const dx = b.x - a.x;
          const dy = b.y - a.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < size && dist > 0.001) {
            const nx = dx / dist;
            const ny = dy / dist;
            const overlap = size - dist;

            a.x -= (nx * overlap) / 2;
            a.y -= (ny * overlap) / 2;
            b.x += (nx * overlap) / 2;
            b.y += (ny * overlap) / 2;

            const kx = a.vx - b.vx;
            const ky = a.vy - b.vy;
            const p = 2 * (nx * kx + ny * ky) / 2;

            a.vx -= p * nx * restitution;
            a.vy -= p * ny * restitution;
            b.vx += p * nx * restitution;
            b.vy += p * ny * restitution;
          }
        }
      }

      // Draw badges
      items.forEach((p) => {
        const x = p.x - size / 2;
        const y = p.y - size / 2;

        drawRoundedRect(ctx, x, y, size, size, cornerRadius);
        ctx.fillStyle = "#ffffff";
        ctx.shadowColor = "rgba(10, 13, 18, 0.08)";
        ctx.shadowBlur = 12;
        ctx.shadowOffsetY = 4;
        ctx.fill();
        ctx.shadowColor = "transparent";

        if (p.img.complete && p.img.naturalWidth) {
          ctx.save();
          drawRoundedRect(ctx, x, y, size, size, cornerRadius);
          ctx.clip();
          ctx.drawImage(
            p.img,
            x + padding,
            y + padding,
            size - padding * 2,
            size - padding * 2
          );
          ctx.restore();
        }
      });

      animId = requestAnimationFrame(tick);
    };

    animId = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(animId);
  }, [width, height]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none"
      }}
    />
  );
}
