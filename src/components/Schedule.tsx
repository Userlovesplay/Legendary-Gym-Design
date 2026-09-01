import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Clock, ShieldCheck, Medal, BarChart3, TimerReset } from "lucide-react";
import { schedule } from "./../lib/data";

const pillars = [
  { icon: ShieldCheck, num: "01", title: "METODOLOGIA COMPROVADA", desc: "Protocolos testados por especialistas com resultados mensuráveis desde a primeira semana de treino." },
  { icon: Medal, num: "02", title: "INSTRUTORES ELITE", desc: "50+ profissionais certificados com formação nacional e internacional, prontos para guiar cada etapa." },
  { icon: BarChart3, num: "03", title: "TECNOLOGIA & DADOS", desc: "Monitoramento de performance, métricas de evolução e ajuste de treino com base em dados reais." },
  { icon: TimerReset, num: "04", title: "EVOLUÇÃO CONTÍNUA", desc: "Reavaliações mensais, progressão de cargas e programas que se adaptam ao seu ritmo e objetivo." },
];

export function Schedule() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="sobre-nos" style={{ padding: "120px 0", background: "#0a0a0a", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", right: "-5%", top: "20%", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(224,32,32,0.05) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div className="container" ref={ref}>
        <div className="schedule-main-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }}>

          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.55 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                <div className="divider" />
                <span className="tag">Mais Que Uma Academia</span>
              </div>
              <h2 className="section-title" style={{ marginBottom: 48 }}>
                UM SISTEMA<br />
                <span style={{ color: "#e02020" }}>COMPLETO</span><br />
                DE EVOLUÇÃO
              </h2>
            </motion.div>

            <div className="schedule-pillars-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}>
              {pillars.map((p, i) => {
                const Icon = p.icon as any;
                return (
                  <motion.div
                    key={p.num}
                    initial={{ opacity: 0, y: 24 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                    style={{
                      background: "#111", border: "1px solid #1a1a1a",
                      padding: "28px 24px", position: "relative",
                      display: "flex", flexDirection: "column", gap: 0,
                      minHeight: 200,
                    }}
                  >
                    <div style={{
                      position: "absolute", top: -10, right: 8,
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontSize: 72, fontWeight: 900, lineHeight: 1,
                      color: "rgba(224,32,32,0.07)",
                      userSelect: "none",
                    }}>{p.num}</div>

                    <div style={{ width: 40, height: 40, background: "rgba(224,32,32,0.1)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                      <Icon size={18} color="#e02020" />
                    </div>
                    <div style={{ width: 24, height: 2, background: "#e02020", marginBottom: 14 }} />
                    <h3 className="fd" style={{ fontSize: 16, fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 10, lineHeight: 1.2 }}>{p.title}</h3>
                    <p style={{ fontSize: 12.5, color: "#555", lineHeight: 1.65, marginTop: "auto" }}>{p.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.55, delay: 0.15 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                <div className="divider" />
                <span className="tag">Grade de Aulas</span>
              </div>
              <h2 className="section-title" style={{ marginBottom: 40 }}>
                HOJE NA<br />
                <span style={{ color: "#e02020" }}>IRONFORCE</span>
              </h2>
            </motion.div>

            <div>
              {schedule.map((s, i) => (
                <motion.div
                  key={s.time}
                  className="schedule-row"
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.45, delay: 0.15 + i * 0.07 }}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "72px 1fr auto",
                    alignItems: "center",
                    gap: 16,
                    padding: "18px 0",
                    borderBottom: "1px solid #141414",
                    cursor: "default",
                    transition: "padding-left 0.2s",
                  }}
                  whileHover={{ paddingLeft: 8 }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <div style={{ width: 3, height: 36, background: s.color, flexShrink: 0 }} />
                    <div>
                      <div className="fd" style={{ fontSize: 18, fontWeight: 900, lineHeight: 1, color: "#fff" }}>{s.time}</div>
                    </div>
                  </div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: "#fff", marginBottom: 2 }}>{s.name}</div>
                    <div style={{ fontSize: 11, color: "#555", letterSpacing: "0.05em" }}>com {s.coach}</div>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <Clock size={12} color="#555" />
                    <span style={{ fontSize: 12, color: "#555" }}>{s.duration}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.7 }}
              style={{ marginTop: 24 }}
            >
              <a href="#contato" className="btn-ghost" style={{ width: "100%", padding: "14px", fontSize: 12, justifyContent: "center" }}>
                Ver Grade Completa
              </a>
            </motion.div>
          </div>
        </div>
      </div>

    </section>
  );
}
