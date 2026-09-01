import { useMemo } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  duration: number;
  delay: number;
  color: string;
}

export function ParticleField() {
  const particles = useMemo<Particle[]>(() => {
    const colors = ["#e02020", "#9b0000", "#c01818", "#ffffff", "#e02020"];

    const seeded = (seed: number) => {
      const value = Math.sin(seed) * 10000;
      return value - Math.floor(value);
    };

    const round = (value: number, precision = 1000) => Math.round(value * precision) / precision;

    return Array.from({ length: 60 }, (_, i) => ({
      id: i,
      x: round(seeded(i + 1) * 100, 1000),
      y: round(seeded(i + 101) * 100, 1000),
      size: round(seeded(i + 201) * 3 + 1, 1000),
      opacity: round(seeded(i + 301) * 0.5 + 0.1, 1000),
      duration: round(seeded(i + 401) * 8 + 4, 1000),
      delay: round(seeded(i + 501) * -10, 1000),
      color: colors[Math.floor(seeded(i + 601) * colors.length)],
    }));
  }, []);

  return (
    <div style={{ position: "absolute", inset: 0, zIndex: 1, pointerEvents: "none", overflow: "hidden" }}>
      {particles.map(p => (
        <div
          key={p.id}
          style={{
            position: "absolute",
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            borderRadius: "50%",
            background: p.color,
            opacity: p.opacity,
            ["--op" as string]: p.opacity,
            animation: `particle-float ${p.duration}s ${p.delay}s ease-in-out infinite, particle-pulse ${p.duration * 1.3}s ${p.delay}s ease-in-out infinite`,
            color: p.color,
          }}
        />
      ))}

      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: `
          linear-gradient(rgba(224,32,32,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(224,32,32,0.04) 1px, transparent 1px)
        `,
        backgroundSize: "80px 80px",
        animation: "particle-float 20s ease-in-out infinite",
      }} />
    </div>
  );
}
