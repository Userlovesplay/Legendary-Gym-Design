import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

export function CtaBanner() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <section ref={ref} style={{ background: "#e02020", padding: "80px 0", position: "relative", overflow: "hidden" }}>
      <div className="noise" style={{ opacity: 0.12 }} />
      <div className="fd" style={{ position: "absolute", left: -20, top: -30, fontSize: "30vw", fontWeight: 900, color: "rgba(0,0,0,0.08)", lineHeight: 1, userSelect: "none", pointerEvents: "none" }}>IF</div>

      <div className="container" style={{ position: "relative", zIndex: 2, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 32, flexWrap: "wrap" }}>
        <motion.div
          initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.65)", marginBottom: 12 }}>Primeira semana grátis</p>
          <h2 className="fd" style={{ fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 900, textTransform: "uppercase", lineHeight: 0.9, color: "#fff" }}>
            COMECE HOJE.<br />
            SEM DESCULPAS.
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          style={{ display: "flex", flexDirection: "column", gap: 12, alignItems: "flex-end" }}
        >
          <a href="#planos" style={{
            background: "#fff", color: "#e02020",
            border: "none", cursor: "pointer",
            fontWeight: 800, letterSpacing: "0.08em", textTransform: "uppercase",
            position: "relative", overflow: "hidden",
            transition: "transform 0.2s ease, box-shadow 0.2s ease",
            display: "inline-flex", alignItems: "center", gap: 10,
            padding: "18px 44px", fontSize: 14, textDecoration: "none",
          }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 10px 40px rgba(0,0,0,0.3)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = ""; (e.currentTarget as HTMLElement).style.boxShadow = ""; }}
          >
            Garantir Minha Vaga <ArrowRight size={18} />
          </a>
          <span style={{ fontSize: 12, color: "rgba(255,255,255,0.6)", letterSpacing: "0.05em" }}>Sem cartão de crédito · Cancele quando quiser</span>
        </motion.div>
      </div>
    </section>
  );
}
