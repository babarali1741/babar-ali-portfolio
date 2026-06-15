import { useMemo } from "react";

export default function Particles({ count = 30 }) {
  const items = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() * 4 + 2,
        delay: Math.random() * 6,
        dur: 8 + Math.random() * 10,
        color: Math.random() > 0.5 ? "#4aa8ff" : "#b169ff",
      })),
    [count]
  );
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {items.map((p) => (
        <span
          key={p.id}
          style={{
            position: "absolute",
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: p.size,
            height: p.size,
            borderRadius: 9999,
            background: p.color,
            boxShadow: `0 0 12px ${p.color}`,
            opacity: 0.5,
            animation: `floatY ${p.dur}s ease-in-out ${p.delay}s infinite`,
          }}
        />
      ))}
      <style>{`@keyframes floatY { 0%,100% { transform: translateY(0); opacity:.3 } 50% { transform: translateY(-30px); opacity:.8 } }`}</style>
    </div>
  );
}
