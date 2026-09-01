import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";
import { faqs } from "./../lib/data";

function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: index * 0.07 }}
      style={{ borderBottom: "1px solid #141414", overflow: "hidden" }}
    >
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "26px 0", background: "none", border: "none", color: "#fff",
          cursor: "pointer", gap: 24, textAlign: "left",
          transition: "color 0.2s",
        }}
      >
        <span style={{ fontSize: 16, fontWeight: 600, lineHeight: 1.4, color: open ? "#fff" : "#ccc" }}>{q}</span>
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.3 }} style={{ flexShrink: 0 }}>
          <ChevronDown size={18} color={open ? "#e02020" : "#444"} />
        </motion.div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <p style={{ color: "#666", fontSize: 14.5, lineHeight: 1.8, paddingBottom: 26, margin: 0 }}>{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function Faq() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="faq" ref={ref} style={{ padding: "120px 0", background: "#0a0a0a", position: "relative" }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }}>
          <motion.div initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.55 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
              <div className="divider" />
              <span className="tag">Dúvidas Frequentes</span>
            </div>
            <h2 className="section-title" style={{ marginBottom: 28 }}>
              TEMOS<br />
              AS<br />
              <span style={{ color: "#e02020" }}>RESPOSTAS</span>
            </h2>
            <p style={{ color: "#555", fontSize: 15, lineHeight: 1.75, marginBottom: 40, maxWidth: 340 }}>
              Se a sua dúvida não estiver aqui, entre em contato. Nossa equipe responde em menos de 2 horas.
            </p>
            <a href="#contato" className="btn-red" style={{ padding: "15px 32px", fontSize: 13 }}>
              Falar com a Equipe <ArrowRight size={16} />
            </a>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.55, delay: 0.1 }}>
            {inView && faqs.map((f, i) => (
              <FaqItem key={f.q} q={f.q} a={f.a} index={i} />
            ))}
          </motion.div>
        </div>
      </div>

    </section>
  );
}
