import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Trophy, Clock } from "lucide-react";
import { ParticleField } from "./ParticleField";
import { stats } from "./../lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 48 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as const },
  }),
};
const slideLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: (i = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export function Hero() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 220]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0.1]);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="hero-section"
      style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", overflow: "hidden", paddingTop: 72 }}
    >
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, #070707 0%, #100000 55%, #1a0000 100%)", zIndex: 0 }} />
      <div className="noise" style={{ zIndex: 1 }} />
      <ParticleField />

      <div className="drift-slow" style={{ position: "absolute", top: "10%", right: "-5%", width: 800, height: 800, borderRadius: "50%", background: "radial-gradient(circle, rgba(224,32,32,0.12) 0%, transparent 70%)", pointerEvents: "none", zIndex: 1 }} />
      <div className="drift-slow" style={{ position: "absolute", bottom: "0%", left: "-15%", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(224,32,32,0.06) 0%, transparent 70%)", pointerEvents: "none", zIndex: 1 }} />

      <div style={{ position: "absolute", top: 0, right: 0, width: 5, height: "100%", background: "linear-gradient(180deg, #e02020, #9b0000)", zIndex: 3 }} />

      <div className="fd" style={{ position: "absolute", right: -20, bottom: -40, fontSize: "30vw", fontWeight: 900, color: "rgba(224,32,32,0.028)", lineHeight: 1, userSelect: "none", pointerEvents: "none", letterSpacing: "-0.05em", zIndex: 1 }}>IF</div>

      <motion.div style={{ y: heroY, opacity: heroOpacity, width: "100%", position: "relative", zIndex: 4 }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center", padding: "60px 32px" }}>

          <motion.div initial="hidden" animate="visible">
            <motion.div variants={slideLeft} custom={0} style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 32 }}>
              <div style={{ width: 36, height: 2, background: "#e02020" }} />
              <span className="tag">Academia Premium · Alto Desempenho · Salvador</span>
            </motion.div>

            <motion.h1 variants={fadeUp} custom={0} className="fd"
              style={{ fontSize: "clamp(52px, 6.5vw, 100px)", fontWeight: 900, lineHeight: 0.87, letterSpacing: "-0.01em", textTransform: "uppercase", marginBottom: 32 }}
            >
              <span style={{ display: "block" }}>TRANSFORME</span>
              <span style={{ display: "block", color: "#e02020" }}>SEU CORPO.</span>
              <span style={{ display: "block" }}>DOMINE</span>
              <span style={{ display: "block" }}>SEUS LIMITES.</span>
            </motion.h1>

            <motion.p variants={fadeUp} custom={1} style={{ fontSize: 17, color: "#999", lineHeight: 1.78, marginBottom: 40, maxWidth: 460 }}>
              Mais de 15 anos formando campeões. Equipamentos de ponta, professores certificados e uma metodologia que entrega resultados reais — não desculpas.
            </motion.p>

            <motion.div variants={fadeUp} custom={2} style={{ display: "flex", gap: 14, flexWrap: "wrap", alignItems: "center" }}>
              <a href="#planos" className="btn-red" style={{ padding: "18px 42px", fontSize: 14 }}>
                Garantir Minha Vaga <ArrowRight size={18} />
              </a>
              <a href="#modalidades" className="btn-ghost" style={{ padding: "17px 32px", fontSize: 13 }}>
                Ver Modalidades
              </a>
            </motion.div>

            <motion.div variants={fadeUp} custom={3}
              className="hero-stats-grid"
              style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0, marginTop: 52, paddingTop: 36, borderTop: "1px solid #1c1c1c" }}
            >
              {stats.map((s, i) => (
                <div key={s.label} style={{ paddingRight: 12, borderRight: i < stats.length - 1 ? "1px solid #1c1c1c" : "none", paddingLeft: i > 0 ? 16 : 0 }}>
                  <div className="fd" style={{ fontSize: 30, fontWeight: 900, color: "#fff", lineHeight: 1, whiteSpace: "nowrap" }}>{s.value}</div>
                  <div style={{ fontSize: 10, color: "#555", marginTop: 4, letterSpacing: "0.05em", textTransform: "uppercase", whiteSpace: "nowrap" }}>{s.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] as const }}
            style={{ position: "relative", display: "flex", justifyContent: "center", alignItems: "flex-end" }}
          >
            <div style={{ position: "absolute", bottom: 0, left: "50%", transform: "translateX(-50%)", width: 380, height: 380, borderRadius: "50%", background: "radial-gradient(circle, rgba(224,32,32,0.2) 0%, transparent 70%)", pointerEvents: "none" }} />

            <div style={{ position: "absolute", top: 20, right: -6, width: 4, height: "80%", background: "linear-gradient(180deg, #e02020, transparent)" }} />
            <div style={{ position: "absolute", top: 20, right: -6, width: "60%", height: 4, background: "linear-gradient(90deg, transparent, #e02020)" }} />

            <div style={{ position: "relative", width: "100%", maxWidth: 500, overflow: "hidden" }}>
             <img
                 src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=85&auto=format&fit=crop"
                 alt="Atleta IRONFORCE"
                 style={{ width: "100%", height: "auto", objectFit: "cover", objectPosition: "center top", display: "block", filter: "contrast(1.1) brightness(0.9)" }}
               />
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 140, background: "linear-gradient(0deg, #0a0a0a 0%, transparent 100%)" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(224,32,32,0.07) 0%, transparent 60%)" }} />
            </div>

            <motion.div
              className="hero-badge-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.6 }}
              style={{ position: "absolute", bottom: 50, left: -24, padding: "16px 22px", background: "#111", border: "1px solid #e02020", animation: "float 4s ease-in-out infinite" }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <Trophy size={20} color="#e02020" />
                <div>
                  <div className="fd" style={{ fontSize: 24, fontWeight: 900, color: "#e02020", lineHeight: 1 }}>98%</div>
                  <div style={{ fontSize: 10, color: "#777", letterSpacing: "0.1em", marginTop: 2 }}>SATISFAÇÃO</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="hero-badge-right"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              style={{ position: "absolute", top: 40, right: 18, padding: "14px 18px", background: "#111", border: "1px solid #1e1e1e", animation: "float 4.5s 0.5s ease-in-out infinite" }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <Clock size={16} color="#e02020" />
                <div>
                  <div className="fd" style={{ fontSize: 20, fontWeight: 900, lineHeight: 1 }}>24/7</div>
                  <div style={{ fontSize: 10, color: "#777", letterSpacing: "0.1em", marginTop: 2 }}>ABERTO</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

    </section>
  );
}
