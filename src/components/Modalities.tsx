import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { modalities } from "./../lib/data";

export function Modalities() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="modalidades" style={{ padding: "120px 0", background: "#080808", position: "relative" }}>
      <div className="container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}
        >
          <div className="divider" />
          <span className="tag">O Que Oferecemos</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 64, gap: 32, flexWrap: "wrap" }}
        >
           <h2 className="section-title">
             MODALIDADES <span style={{ color: "#e02020" }}>DE ELITE</span>
           </h2>
          <p style={{ color: "#555", fontSize: 14, maxWidth: 300, lineHeight: 1.7 }}>
            8 modalidades para todos os objetivos — de iniciantes a atletas profissionais.
          </p>
        </motion.div>

        <div>
          {modalities.map((m, i) => {
            const Icon = m.icon as any;
            return (
              <motion.div
                key={m.name}
                className="modality-row"
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.05 * i, ease: [0.22, 1, 0.36, 1] as const }}
                style={{
                  display: "grid",
                  gridTemplateColumns: "80px 1fr 1fr auto",
                  alignItems: "center",
                  gap: 32,
                  padding: "28px 0",
                  borderBottom: "1px solid #141414",
                  cursor: "default",
                  position: "relative",
                  overflow: "hidden",
                  transition: "background 0.2s",
                  paddingLeft: 16,
                  paddingRight: 16,
                }}
                whileHover={{ backgroundColor: "#0f0f0f" }}
              >
                <div className="modality-index" style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: 48, fontWeight: 900, color: "rgba(224,32,32,0.12)",
                  lineHeight: 1, userSelect: "none",
                }}>
                  {String(i + 1).padStart(2, "0")}
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
                  <div style={{ width: 44, height: 44, background: "rgba(224,32,32,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Icon size={20} color="#e02020" />
                  </div>
                  <h3 className="fd modality-name" style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.02em", whiteSpace: "nowrap" }}>
                    {m.name}
                  </h3>
                </div>

                <p className="modality-desc" style={{ fontSize: 14, color: "#555", lineHeight: 1.6 }}>{m.desc}</p>

                <div className="modality-meta" style={{ display: "flex", alignItems: "center", gap: 20 }}>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontSize: 11, color: "#333", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 2 }}>Sessões</div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: "#e02020" }}>{m.sessions}</div>
                  </div>
                  <div style={{ width: 36, height: 36, border: "1px solid #1e1e1e", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <ArrowRight size={14} color="#333" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
