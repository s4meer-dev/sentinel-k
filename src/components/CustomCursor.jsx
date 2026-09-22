import React, { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const [cursorType, setCursorType] = useState("default");
  const [targetRadius, setTargetRadius] = useState(9999);

  useEffect(() => {
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let currentX = mouseX;
    let currentY = mouseY;
    let animId;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      const target = e.target.closest("[data-cursor]");
      if (target) {
        const type = target.getAttribute("data-cursor");
        const radius = target.getAttribute("data-cursor-radius");
        setCursorType(type || "card");
        setTargetRadius(radius ? parseInt(radius, 10) : 16);
      } else if (e.target.closest("button, a, input, [role='button']")) {
        setCursorType("pointer");
        setTargetRadius(9999);
      } else {
        setCursorType("default");
        setTargetRadius(9999);
      }
    };

    const render = () => {
      // Smooth lerp
      currentX += (mouseX - currentX) * 0.18;
      currentY += (mouseY - currentY) * 0.18;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`;
      }
      animId = requestAnimationFrame(render);
    };

    window.addEventListener("mousemove", onMouseMove);
    animId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={`custom-cursor ${
        cursorType === "card"
          ? "custom-cursor-card"
          : cursorType === "pointer"
          ? "custom-cursor-pointer"
          : "custom-cursor-dot"
      }`}
      style={{
        borderRadius: cursorType === "card" ? `${targetRadius}px` : "9999px"
      }}
    />
  );
}
