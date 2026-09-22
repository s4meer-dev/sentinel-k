import { r as e } from "./rolldown-runtime-Dw2cE7zH.js";
import { i as t, t as n } from "./vendor-react-DZDGgP02.js";

var r = e(t(), 1);
var i = n();

// Refined, eye-soothing architectural terracotta & deep obsidian
var a = "#d95323";
var o = "#11141a";

function s(e, t, n) {
  return (1 - n) * e + n * t;
}

// Draw smooth capsule when snapped (the select effect user loves)
function drawCapsule(ctx, cx, cy, rad, f) {
  let pts = [];
  for (let idx = 0; idx < 8; idx++) {
    let angle = (idx / 8) * Math.PI * 2 - Math.PI / 2;
    let wave = Math.sin(f / 55 + idx * 1.2) * 2;
    pts.push([cx + Math.cos(angle) * (rad + wave), cy + Math.sin(angle) * (rad + wave)]);
  }
  ctx.beginPath();
  for (let j = 0; j < pts.length; j++) {
    let prev = pts[(j - 1 + pts.length) % pts.length];
    let curr = pts[j];
    let next = pts[(j + 1) % pts.length];
    let next2 = pts[(j + 2) % pts.length];
    let c1x = curr[0] + (next[0] - prev[0]) / 6;
    let c1y = curr[1] + (next[1] - prev[1]) / 6;
    let c2x = next[0] - (next2[0] - curr[0]) / 6;
    let c2y = next[1] - (next2[1] - curr[1]) / 6;
    if (j === 0) ctx.moveTo(curr[0], curr[1]);
    ctx.bezierCurveTo(c1x, c1y, c2x, c2y, next[0], next[1]);
  }
  ctx.closePath();
}

// Draw ultra-aesthetic, minimal fluid precision micro-ring for resting state
function drawMinimalFluidCursor(ctx, cx, cy, color, vx, vy, rad) {
  ctx.save();
  ctx.translate(cx, cy);

  let speed = Math.sqrt(vx * vx + vy * vy);
  let angle = Math.atan2(vy, vx);
  let stretch = Math.min(speed * 0.018, 0.35);

  // Rotate and stretch elastically along velocity vector
  ctx.rotate(angle);
  ctx.scale(1 + stretch, 1 - stretch * 0.5);

  // Soft ethereal inner glow
  ctx.beginPath();
  ctx.arc(0, 0, rad, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.globalAlpha = 0.06;
  ctx.fill();

  // Ultra-clean hairline ring
  ctx.beginPath();
  ctx.arc(0, 0, rad, 0, Math.PI * 2);
  ctx.strokeStyle = color;
  ctx.lineWidth = 1.2;
  ctx.globalAlpha = 0.48;
  ctx.stroke();

  ctx.restore();
}

function CustomCursor() {
  let canvasRef = (0, r.useRef)(null);
  let dotRef = (0, r.useRef)(null);
  let [isDesktop, setIsDesktop] = (0, r.useState)(false);

  (0, r.useEffect)(() => {
    let touch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    let coarse = window.matchMedia("(pointer: coarse)").matches;
    let noHover = window.matchMedia("(hover: none)").matches;
    if (!touch && !coarse && !noHover) setIsDesktop(true);
  }, []);

  (0, r.useEffect)(() => {
    if (!isDesktop) return;
    let canvas = canvasRef.current;
    let dot = dotRef.current;
    if (!canvas || !dot) return;

    let ctx = canvas.getContext("2d");
    let animId = 0;
    let frame = 0;
    let mouseX = -200;
    let mouseY = -200;
    let smoothX = -200;
    let smoothY = -200;
    let firstMove = true;
    let lerpSpeed = 1;
    let currentRadius = 10;
    let activeColor = a;
    let isSnapping = false;
    let isSelected = false;
    let targetX = 0;
    let targetY = 0;
    let isHidden = false;

    let onResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    onResize();
    window.addEventListener("resize", onResize);

    let styleTag = document.createElement("style");
    styleTag.textContent = `
      *, *::before, *::after { cursor: none !important; }
      [data-cursor-dot], [data-cursor-dot] * { cursor: default !important; }
      [data-cursor-hide], [data-cursor-hide] * { cursor: none !important; }
    `;
    document.head.appendChild(styleTag);

    let onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (firstMove) {
        smoothX = mouseX;
        smoothY = mouseY;
        firstMove = false;
        lerpSpeed = 0.22;
      }

      // Context color detection (light vs dark section)
      let heroEl = document.getElementById("hero-section");
      let isOverDark = false;
      let darkEls = document.querySelectorAll("[data-cursor-dark], #clientstories, #pricing");
      for (let el of darkEls) {
        let rect = el.getBoundingClientRect();
        if (e.clientY >= rect.top && e.clientY <= rect.bottom && e.clientX >= rect.left && e.clientX <= rect.right) {
          isOverDark = true;
          break;
        }
      }
      activeColor = isOverDark ? "#fff" : a;

      let elUnder = document.elementFromPoint(e.clientX, e.clientY);
      let isDot = elUnder?.closest("[data-cursor-dot]");
      let isHide = elUnder?.closest("[data-cursor-hide]");
      isHidden = !!(isDot || isHide);

      let stickEl = (elUnder?.closest("[data-cursor-stick]"))?.querySelector("[data-cursor-anchor]");
      let targetEl = elUnder?.closest("[data-cursor-target]");
      let noStickEl = elUnder?.closest("[data-cursor-no-stick]");
      let interactive = !isDot && !noStickEl ? (stickEl || targetEl || elUnder?.closest("a, button, [role='button']")) : null;

      if (interactive) {
        let rect = interactive.getBoundingClientRect();
        targetX = rect.left + rect.width / 2;
        targetY = rect.top + rect.height / 2;
        isSnapping = true;
        isSelected = true;
        lerpSpeed = 0.12;
      } else {
        isSnapping = false;
        isSelected = false;
        lerpSpeed = 0.22;
      }
    };
    document.addEventListener("mousemove", onMouseMove);

    let render = () => {
      frame++;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Center dot coordinates
      dot.style.transform = `translate(${mouseX - 2}px, ${mouseY - 2}px)`;
      dot.style.background = activeColor;
      dot.style.opacity = isHidden || isSelected ? "0" : "1";
      canvas.style.opacity = isHidden ? "0" : "1";

      let destX = isSnapping ? targetX : mouseX;
      let destY = isSnapping ? targetY : mouseY;

      smoothX = s(smoothX, destX, lerpSpeed);
      smoothY = s(smoothY, destY, lerpSpeed);

      if (isSelected) {
        // Smoothly expand into magnetic selection capsule (user-praised select effect)
        currentRadius = s(currentRadius, 36, 0.08);
        drawCapsule(ctx, smoothX, smoothY, currentRadius, frame);
        ctx.fillStyle = activeColor;
        ctx.globalAlpha = 0.12;
        ctx.fill();
        ctx.strokeStyle = activeColor;
        ctx.lineWidth = 1.5;
        ctx.globalAlpha = 0.55;
        ctx.stroke();
      } else {
        // Smoothly return to ultra-clean fluid precision micro-ring
        currentRadius = s(currentRadius, 11, 0.1);
        let vx = destX - smoothX;
        let vy = destY - smoothY;
        drawMinimalFluidCursor(ctx, smoothX, smoothY, activeColor, vx, vy, currentRadius);
      }
      ctx.globalAlpha = 1;

      animId = requestAnimationFrame(render);
    };
    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("mousemove", onMouseMove);
      if (document.head.contains(styleTag)) document.head.removeChild(styleTag);
    };
  }, [isDesktop]);

  if (!isDesktop) return null;

  return (0, i.jsxs)(i.Fragment, {
    children: [
      (0, i.jsx)("div", {
        ref: dotRef,
        style: {
          position: "fixed",
          top: 0,
          left: 0,
          width: 4,
          height: 4,
          borderRadius: "50%",
          background: a,
          pointerEvents: "none",
          zIndex: 99998,
          willChange: "transform",
          transition: "background 0.2s ease, opacity 0.15s ease",
          boxShadow: `0 0 4px ${a}`
        }
      }),
      (0, i.jsx)("canvas", {
        ref: canvasRef,
        style: {
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          zIndex: 99997
        }
      })
    ]
  });
}

export { CustomCursor as default };