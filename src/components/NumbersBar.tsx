import { useState, useEffect, useRef } from "react";
import { useInView } from "framer-motion";

const numbers = [
  { value: 12000, suffix: "+", prefix: "", label: "Membros Ativos" },
  { value: 15, suffix: "+", prefix: "", label: "Anos no Mercado" },
  { value: 50, suffix: "+", prefix: "", label: "Professores Certificados" },
  { value: 98, suffix: "%", prefix: "", label: "Taxa de Satisfação" },
  { value: 300, suffix: "+", prefix: "", label: "Equipamentos" },
  { value: 24, suffix: "h", prefix: "", label: "Acesso Diário" },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return <span ref={ref}>{count.toLocaleString("pt-BR")}{suffix}</span>;
}

export function NumbersBar() {
  return (
    <section id="numbers-bar" style={{ background: "#e02020", padding: "64px 0", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "rgba(255,255,255,0.12)" }} />
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 1, background: "rgba(0,0,0,0.2)" }} />
      <div className="noise" style={{ opacity: 0.15 }} />
      <div className="container">
        <div className="numbers-bar-grid" style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 0 }}>
          {numbers.map((n, i) => (
            <div key={n.label} className="numbers-bar-item" style={{
              textAlign: "center", padding: "0 16px",
              borderRight: i < numbers.length - 1 ? "1px solid rgba(255,255,255,0.18)" : "none",
            }}>
              <div className="fd numbers-bar-value" style={{ fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 900, lineHeight: 1, color: "#fff", marginBottom: 6 }}>
                <Counter target={n.value} suffix={n.suffix} />
              </div>
              <div className="numbers-bar-label" style={{ fontSize: 11, color: "rgba(255,255,255,0.7)", letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 600 }}>{n.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
