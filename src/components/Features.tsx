import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { features } from "./../lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] as const } }),
} as const;

export function Features() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="sobre" style={{ padding: "120px 0", background: "#0a0a0a", position: "relative", overflow: "hidden" }}>
      <div className="drift-slow" style={{ position: "absolute", top: "20%", left: "-10%", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(224,32,32,0.05) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div className="container" ref={ref}>
        <motion.div initial="hidden" animate={inView ? "visible" : "hidden"}>
          <motion.div variants={fadeUp} custom={0} style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
            <div className="divider" />
            <span className="tag">Por que a IRONFORCE</span>
          </motion.div>
          <motion.div variants={fadeUp} custom={1} style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 60, gap: 32, flexWrap: "wrap" }}>
            <h2 className="section-title" style={{ maxWidth: 560 }}>
              MAIS QUE UMA<br />
              <span style={{ color: "#e02020" }}>ACADEMIA.</span><br />
              UMA MÁQUINA<br />
              DE RESULTADOS.
            </h2>
            <p style={{ color: "#666", fontSize: 15, maxWidth: 340, lineHeight: 1.7 }}>
              Cada detalhe foi pensado para maximizar sua performance. Sem distrações, sem desculpas — só resultado.
            </p>
          </motion.div>
        </motion.div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(6, 1fr)",
          gridTemplateRows: "auto auto",
          gap: 2,
        }}>
          {features.map((f, i) => {
            const Icon = f.icon as any;
            const isWide = i === 0 || i === 5;
            const isRed = i === 2;
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.1 + i * 0.07, ease: [0.22, 1, 0.36, 1] as const }}
                className="premium-card hover-lift"
                style={{
                  gridColumn: isWide ? "span 3" : "span 2",
                  background: isRed ? "#e02020" : "#111",
                  border: `1px solid ${isRed ? "transparent" : "#1e1e1e"}`,
                  padding: "40px 36px",
                  position: "relative",
                  overflow: "hidden",
                  cursor: "default",
                  transition: "background 0.3s",
                  display: "flex",
                  flexDirection: "column",
                  gap: 0,
                  minHeight: 220,
                }}
                whileHover={{ background: isRed ? "#c01818" : "#161616" }}
              >
                <div style={{
                  position: "absolute", top: -16, right: -8,
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: 120, fontWeight: 900, lineHeight: 1,
                  color: isRed ? "rgba(255,255,255,0.06)" : "rgba(224,32,32,0.06)",
                  userSelect: "none", pointerEvents: "none",
                }}>0{i + 1}</div>

                <div style={{ marginBottom: 20, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div style={{
                    width: 48, height: 48,
                    background: isRed ? "rgba(255,255,255,0.15)" : "rgba(224,32,32,0.12)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <Icon size={22} color={isRed ? "#fff" : "#e02020"} />
                  </div>
                  {isWide && (
                    <ArrowRight size={18} color={isRed ? "rgba(255,255,255,0.4)" : "#333"} />
                  )}
                </div>

                <h3 style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: 22, fontWeight: 900, textTransform: "uppercase",
                  letterSpacing: "0.03em", marginBottom: 10,
                  color: isRed ? "#fff" : "#fff",
                }}>{f.title}</h3>

                <p style={{ fontSize: 13.5, color: isRed ? "rgba(255,255,255,0.8)" : "#666", lineHeight: 1.65, marginTop: "auto" }}>{f.desc}</p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
