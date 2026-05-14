import { useEffect, useState } from "react";

export function CursorGlow() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hover, setHover] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(max-width: 768px)").matches) return;
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      setHover(!!t.closest("a, button, [role='button'], input, textarea"));
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, []);

  return (
    <>
      <div
        className="pointer-events-none fixed z-[100] hidden md:block transition-transform duration-100"
        style={{
          left: pos.x,
          top: pos.y,
          transform: `translate(-50%, -50%) scale(${hover ? 1.6 : 1})`,
        }}
      >
        <div
          className="size-3 rounded-full bg-cyan"
          style={{ boxShadow: "0 0 12px var(--cyan), 0 0 24px var(--electric)" }}
        />
      </div>
      <div
        className="pointer-events-none fixed z-[99] hidden md:block transition-all duration-300 ease-out"
        style={{
          left: pos.x,
          top: pos.y,
          transform: `translate(-50%, -50%) scale(${hover ? 1.4 : 1})`,
          width: 320,
          height: 320,
          background: "radial-gradient(circle, oklch(0.72 0.18 235 / 0.18), transparent 60%)",
          borderRadius: "50%",
          mixBlendMode: "screen",
        }}
      />
    </>
  );
}
