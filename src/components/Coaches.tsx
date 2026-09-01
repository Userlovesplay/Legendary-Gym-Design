import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight, ShieldCheck } from "lucide-react";
import { coaches } from "./../lib/data";

export function Coaches() {
  const [idx, setIdx] = useState(0);
  const [dir, setDir] = useState(1);
  const [progress, setProgress] = useState(0);
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-60px" });

  useEffect(() => {
    setProgress(0);
    const totalMs = 4500;
    const intervalMs = 80;
    const step = (intervalMs / totalMs) * 100;
    const prog = setInterval(() => {
      setProgress(p => {
        if (p >= 100) return 100;
        return p + step;
      });
    }, intervalMs);
    const advance = setTimeout(() => {
      setDir(1);
      setIdx(i => (i + 1) % coaches.length);
    }, totalMs);
    return () => { clearInterval(prog); clearTimeout(advance); };
  }, [idx]);

  const prev = () => { setDir(-1); setIdx(i => (i - 1 + coaches.length) % coaches.length); };
  const next = () => { setDir(1); setIdx(i => (i + 1) % coaches.length); };

  const coach = coaches[idx];

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 80 : -80, opacity: 0, scale: 0.96 }),
    center: { x: 0, opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
    exit: (d: number) => ({ x: d > 0 ? -80 : 80, opacity: 0, scale: 0.96, transition: { duration: 0.3 } }),
  };

  return (
    <section id="coaches" ref={sectionRef} style={{ padding: "120px 0", background: "#060606", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", left: "-5%", bottom: "20%", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(224,32,32,0.05) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 64, gap: 24, flexWrap: "wrap" }}
        >
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
              <div className="divider" />
              <span className="tag">Nossa Equipe</span>
            </div>
            <h2 className="section-title">
              OS MELHORES<br />
              <span style={{ color: "#e02020" }}>COACHES</span><br />
              DO BRASIL
            </h2>
          </div>

          <div style={{ display: "flex", gap: 8 }}>
            <button onClick={prev} style={{
              width: 48, height: 48, border: "1px solid #1e1e1e", background: "#111",
              cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
              transition: "border-color 0.2s, background 0.2s",
              color: "#fff",
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "#e02020"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "#1e1e1e"; }}
            >
              <ChevronLeft size={18} />
            </button>
            <button onClick={next} style={{
              width: 48, height: 48, border: "1px solid #1e1e1e", background: "#111",
              cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
              transition: "border-color 0.2s",
              color: "#fff",
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "#e02020"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "#1e1e1e"; }}
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </motion.div>

        <div style={{ display: "flex", gap: 6, marginBottom: 40 }}>
          {coaches.map((_, i) => (
            <button key={i} onClick={() => { setDir(i > idx ? 1 : -1); setIdx(i); }}
              style={{ background: "none", border: "none", cursor: "pointer", padding: 0, height: 3, flex: 1, position: "relative" }}
            >
              <div style={{ position: "absolute", inset: 0, background: i < idx ? "#e02020" : "#1e1e1e" }} />
              {i === idx && (
                <div style={{ position: "absolute", inset: 0, background: "#e02020", transformOrigin: "left", transform: `scaleX(${progress / 100})`, transition: "none" }} />
              )}
            </button>
          ))}
        </div>

        <div style={{ overflow: "hidden" }}>
          <AnimatePresence custom={dir} mode="wait">
            <motion.div
              key={coach.name}
              custom={dir}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
            >
              <div className="premium-frame" style={{ display: "grid", gridTemplateColumns: "480px 1fr", gap: 0, background: "#111", border: "1px solid #1a1a1a" }}>
                <div style={{ position: "relative", overflow: "hidden" }}>
                  <img
                    src={coach.photo}
                    alt={coach.name}
                    style={{ width: "100%", height: 540, objectFit: "cover", objectPosition: "center top", display: "block", filter: "contrast(1.05) brightness(0.92)" }}
                  />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, transparent 60%, #111 100%)" }} />
                  <div style={{ position: "absolute", bottom: 24, left: 24, padding: "10px 14px", background: "rgba(0,0,0,0.8)", border: "1px solid #1e1e1e", display: "flex", alignItems: "center", gap: 8 }}>
                    <ShieldCheck size={14} color="#e02020" />
                    <span style={{ fontSize: 11, color: "#aaa", letterSpacing: "0.08em" }}>{coach.cert}</span>
                  </div>
                </div>

                <div style={{ padding: "48px 48px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                  <div>
                    <div style={{ fontSize: 11, color: "#e02020", letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 700, marginBottom: 8 }}>
                      {coach.exp} de Experiência
                    </div>
                    <h3 className="fd" style={{ fontSize: "clamp(36px, 4vw, 52px)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.02em", lineHeight: 0.95, marginBottom: 6 }}>
                      {coach.name}
                    </h3>
                    <p style={{ fontSize: 13, color: "#555", marginBottom: 28, letterSpacing: "0.04em", textTransform: "uppercase" }}>{coach.role}</p>
                    <p style={{ fontSize: 14.5, color: "#777", lineHeight: 1.78, marginBottom: 32 }}>{coach.bio}</p>

                    <div className="coaches-stats-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 2, marginBottom: 32 }}>
                      {coach.stats.map(s => (
                        <div key={s.label} className="metric-tile" style={{ background: "#0d0d0d", border: "1px solid #1a1a1a", padding: "16px 14px", textAlign: "center" }}>
                          <div className="fd" style={{ fontSize: 28, fontWeight: 900, color: "#e02020", lineHeight: 1, marginBottom: 4 }}>{s.val}</div>
                          <div style={{ fontSize: 10, color: "#444", letterSpacing: "0.1em", textTransform: "uppercase" }}>{s.label}</div>
                        </div>
                      ))}
                    </div>

                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                      {coach.tags.map(t => (
                        <span key={t} style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#e02020", border: "1px solid rgba(224,32,32,0.25)", padding: "5px 10px" }}>
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div style={{ display: "flex", gap: 12, marginTop: 32 }}>
                    <a href="#contato" className="btn-red" style={{ padding: "12px 24px", fontSize: 12 }}>
                      Agendar Avaliação
                    </a>
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <span className="fd" style={{ fontSize: 28, fontWeight: 900, color: "rgba(255,255,255,0.08)", letterSpacing: "-0.02em" }}>
                        {String(idx + 1).padStart(2, "0")} / {String(coaches.length).padStart(2, "0")}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

    </section>
  );
}
