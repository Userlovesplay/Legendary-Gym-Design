import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { plans } from "./../lib/data";

export function Plans() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="planos" ref={ref} style={{ padding: "120px 0", background: "#0a0a0a", position: "relative", overflow: "hidden" }}>
      <div className="drift-slow" style={{ position: "absolute", top: "10%", left: "50%", transform: "translateX(-50%)", width: 800, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(224,32,32,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.55 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
            <div className="divider" />
            <span className="tag">Planos & Preços</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 64, flexWrap: "wrap", gap: 24 }}>
            <h2 className="section-title">
              INVISTA NO<br />
              <span style={{ color: "#e02020" }}>SEU MELHOR</span><br />
              EU
            </h2>
            <p style={{ color: "#555", fontSize: 14, maxWidth: 300, lineHeight: 1.7 }}>
              Sem taxa de matrícula. Primeira semana grátis. Cancele quando quiser, sem burocracia.
            </p>
          </div>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 2 }}>
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as const }}
              className={`premium-card ${plan.highlight ? "plan-highlight" : "hover-lift"}`}
              style={{
                background: plan.highlight ? "#111" : "#0d0d0d",
                border: `1px solid ${plan.highlight ? "#e02020" : "#1a1a1a"}`,
                padding: "48px 36px",
                position: "relative",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {plan.badge && (
                <div style={{
                  position: "absolute", top: -1, left: "50%", transform: "translateX(-50%)",
                  background: "#e02020", color: "#fff",
                  fontSize: 10, fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase",
                  padding: "6px 18px",
                }}>
                  {plan.badge}
                </div>
              )}

              <div style={{ marginBottom: 8 }}>
                <span style={{ fontSize: 11, color: "#555", letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 600 }}>Plano</span>
              </div>
              <h3 className="fd" style={{ fontSize: 36, fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.04em", marginBottom: 16, color: plan.highlight ? "#e02020" : "#fff" }}>
                {plan.name}
              </h3>

              <div style={{ marginBottom: 20 }}>
                <div style={{ display: "flex", alignItems: "flex-end", gap: 4 }}>
                  <span style={{ fontSize: 13, color: "#555", alignSelf: "flex-start", marginTop: 8 }}>R$</span>
                  <span className="fd" style={{ fontSize: 64, fontWeight: 900, lineHeight: 1, color: "#fff" }}>{plan.price}</span>
                  <span style={{ fontSize: 13, color: "#555", marginBottom: 8 }}>/mês</span>
                </div>
              </div>

              <p style={{ fontSize: 13.5, color: "#555", lineHeight: 1.65, marginBottom: 32, minHeight: 42 }}>{plan.description}</p>

              <div style={{ height: 1, background: "#1a1a1a", marginBottom: 28 }} />

              <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 40, flex: 1 }}>
                {plan.features.map(feat => (
                  <div key={feat} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                    <CheckCircle2 size={16} color="#e02020" style={{ flexShrink: 0, marginTop: 1 }} />
                    <span style={{ fontSize: 13.5, color: "#888", lineHeight: 1.5 }}>{feat}</span>
                  </div>
                ))}
              </div>

              <a href="#contato" className={plan.highlight ? "btn-red" : "btn-ghost"}
                style={{ padding: "15px 24px", fontSize: 13, width: "100%", justifyContent: "center", display: "flex", alignItems: "center", gap: 8 }}>
                {plan.cta} <ArrowRight size={15} />
              </a>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.5 }}
          style={{ textAlign: "center", color: "#333", fontSize: 13, marginTop: 32 }}
        >
          Todos os planos incluem acesso ao app, vestiários premium e avaliação física inicial.
        </motion.p>
      </div>

    </section>
  );
}
