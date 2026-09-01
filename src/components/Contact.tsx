import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Send, MapPin, Phone, Mail, Instagram, Youtube, Facebook } from "lucide-react";

export function Contact() {
  const [sent, setSent] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contato" ref={ref} style={{ padding: "120px 0", background: "#060606", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", left: "-5%", top: "20%", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(224,32,32,0.05) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.55 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
            <div className="divider" />
            <span className="tag">Entre em Contato</span>
          </div>
          <h2 className="section-title" style={{ marginBottom: 64 }}>
            VAMOS<br />
            <span style={{ color: "#e02020" }}>COMEÇAR</span><br />
            SUA JORNADA
          </h2>
        </motion.div>

        <div className="contact-main-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }}>
          <motion.div initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.55, delay: 0.1 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 2, marginBottom: 48 }}>
              {[
                { icon: MapPin, label: "Endereço", value: "Av. Barra, 1500 — Barra, Salvador" },
                { icon: Phone, label: "Telefone", value: "(71) 9 9999-9999" },
                { icon: Mail, label: "E-mail", value: "contato@ironforce.com.br" },
              ].map(item => {
                const Icon = item.icon as any;
                return (
                  <div key={item.label} style={{ display: "flex", gap: 20, padding: "24px 24px", background: "#0f0f0f", border: "1px solid #1a1a1a", alignItems: "flex-start" }}>
                    <div style={{ width: 40, height: 40, background: "rgba(224,32,32,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Icon size={17} color="#e02020" />
                    </div>
                    <div>
                      <div style={{ fontSize: 10, color: "#444", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 4 }}>{item.label}</div>
                      <div style={{ fontSize: 14, color: "#ccc" }}>{item.value}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div>
              <p style={{ fontSize: 11, color: "#333", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 16 }}>Redes Sociais</p>
              <div style={{ display: "flex", gap: 8 }}>
                {[
                  { icon: Instagram, label: "Instagram" },
                  { icon: Youtube, label: "YouTube" },
                  { icon: Facebook, label: "Facebook" },
                ].map(s => {
                  const Icon = s.icon as any;
                  return (
                    <button key={s.label} title={s.label} className="social-btn">
                      <Icon size={17} color="#666" />
                    </button>
                  );
                })}
              </div>
            </div>

            <div style={{ marginTop: 48, padding: "28px 28px", background: "#e02020", position: "relative", overflow: "hidden" }}>
              <div className="noise" style={{ opacity: 0.1 }} />
              <div style={{ position: "relative", zIndex: 1 }}>
                <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.65)", marginBottom: 10 }}>Horário de Funcionamento</p>
                <div className="fd" style={{ fontSize: 28, fontWeight: 900, color: "#fff", lineHeight: 1.1 }}>
                  ABERTO<br />24 HORAS
                </div>
                <p style={{ fontSize: 13, color: "rgba(255,255,255,0.7)", marginTop: 10 }}>7 dias por semana, feriados incluídos.</p>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.55, delay: 0.15 }}>
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                style={{ background: "#111", border: "1px solid #1e1e1e", padding: "64px 48px", textAlign: "center" }}
              >
                <div className="fd" style={{ fontSize: 64, fontWeight: 900, color: "#e02020", marginBottom: 16 }}>✓</div>
                <h3 className="fd" style={{ fontSize: 28, fontWeight: 900, textTransform: "uppercase", marginBottom: 12 }}>Mensagem Enviada!</h3>
                <p style={{ color: "#666", fontSize: 14, lineHeight: 1.7 }}>Nossa equipe entrará em contato em até 2 horas. Bem-vindo à família IRONFORCE.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form" style={{ background: "#0f0f0f", border: "1px solid #1a1a1a", padding: "48px 40px" }}>
                <h3 className="fd" style={{ fontSize: 24, fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.04em", marginBottom: 32 }}>
                  Primeira semana <span style={{ color: "#e02020" }}>GRÁTIS</span>
                </h3>

                <div className="contact-form-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2, marginBottom: 2 }}>
                  <input type="text" placeholder="Seu nome" required />
                  <input type="tel" placeholder="Seu telefone" required />
                </div>
                <div style={{ marginBottom: 2 }}>
                  <input type="email" placeholder="Seu e-mail" required />
                </div>
                <div className="contact-form-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2, marginBottom: 2 }}>
                  <select defaultValue="">
                    <option value="" disabled>Plano de interesse</option>
                    <option>Starter — R$ 89/mês</option>
                    <option>Elite — R$ 149/mês</option>
                    <option>Black — R$ 249/mês</option>
                  </select>
                  <select defaultValue="">
                    <option value="" disabled>Modalidade</option>
                    <option>Musculação</option>
                    <option>HIIT & Cardio</option>
                    <option>Spinning</option>
                    <option>Muay Thai</option>
                    <option>CrossFit</option>
                    <option>Pilates</option>
                  </select>
                </div>
                <div style={{ marginBottom: 24 }}>
                  <textarea placeholder="Alguma observação? (objetivo, restrições médicas, etc.)" rows={4} style={{ resize: "none" }} />
                </div>

                <button type="submit" className="btn-red" style={{ width: "100%", padding: "18px", fontSize: 13, justifyContent: "center" }}>
                  Quero Minha Semana Grátis <Send size={16} />
                </button>
                <p style={{ fontSize: 11, color: "#333", textAlign: "center", marginTop: 14, letterSpacing: "0.05em" }}>
                  Sem cartão de crédito · Cancele quando quiser
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>

    </section>
  );
}
