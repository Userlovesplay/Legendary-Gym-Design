import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";
import { testimonials } from "./../lib/data";

export function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="depoimentos" ref={ref} style={{ padding: "120px 0", background: "#080808", position: "relative", overflow: "hidden" }}>
      <div className="drift-slow" style={{ position: "absolute", right: "-8%", top: "30%", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(224,32,32,0.05) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.55 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
            <div className="divider" />
            <span className="tag">Depoimentos</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 64, flexWrap: "wrap", gap: 24 }}>
            <h2 className="section-title">
              RESULTADOS<br />
              <span style={{ color: "#e02020" }}>REAIS.</span><br />
              HISTÓRIAS REAIS.
            </h2>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div className="fd" style={{ fontSize: 52, fontWeight: 900, color: "#e02020", lineHeight: 1 }}>4.98</div>
              <div>
                <div style={{ display: "flex", gap: 3, marginBottom: 4 }}>
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="#e02020" color="#e02020" />)}
                </div>
                <div style={{ fontSize: 12, color: "#444" }}>Baseado em 2.400+ avaliações</div>
              </div>
            </div>
          </div>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 2 }}>
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as const }}
              className="premium-card hover-lift"
              style={{
                background: "#0f0f0f",
                border: "1px solid #1a1a1a",
                padding: "36px 32px",
                display: "flex",
                flexDirection: "column",
                gap: 20,
                position: "relative",
                overflow: "hidden",
                transition: "border-color 0.2s, transform 0.2s",
              }}
              whileHover={{ borderColor: "#2a2a2a", y: -2 }}
            >
              <div style={{ position: "absolute", top: -12, right: -4, fontFamily: "'Barlow Condensed', sans-serif", fontSize: 100, fontWeight: 900, color: "rgba(224,32,32,0.04)", lineHeight: 1, userSelect: "none" }}>"</div>

              <div style={{ display: "flex", gap: 3 }}>
                {[...Array(t.stars)].map((_, si) => <Star key={si} size={13} fill="#e02020" color="#e02020" />)}
              </div>

              <p style={{ fontSize: 14, color: "#888", lineHeight: 1.75, flex: 1 }}>&quot;{t.text}&quot;</p>

              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 40, height: 40, background: "#e02020", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <span className="fd" style={{ fontSize: 16, fontWeight: 900 }}>{t.avatar}</span>
                  </div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: "#fff", marginBottom: 2 }}>{t.name}</div>
                    <div style={{ fontSize: 11, color: "#444" }}>{t.role}</div>
                  </div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div style={{ fontSize: 16, fontWeight: 800, color: "#e02020", fontFamily: "'Barlow Condensed', sans-serif" }}>{t.result}</div>
                  <div style={{ fontSize: 10, color: "#333", marginTop: 2, letterSpacing: "0.08em" }}>{t.months}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
}
