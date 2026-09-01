import { motion } from "framer-motion";
import { Dumbbell, Instagram, Youtube, Facebook, Twitter } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: "#040404", borderTop: "1px solid #111", padding: "72px 0 40px" }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 48, marginBottom: 64 }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
              <div style={{ width: 36, height: 36, background: "#e02020", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Dumbbell size={18} color="#fff" />
              </div>
              <span className="fd" style={{ fontSize: 20, fontWeight: 900, letterSpacing: "0.06em", textTransform: "uppercase" }}>
                IRON<span style={{ color: "#e02020" }}>FORCE</span>
              </span>
            </div>
            <p style={{ fontSize: 13.5, color: "#444", lineHeight: 1.75, maxWidth: 280, marginBottom: 24 }}>
              A academia que forma campeões. Mais de 15 anos transformando corpos e vidas em Salvador.
            </p>
            <div style={{ display: "flex", gap: 8 }}>
              {[Instagram, Youtube, Facebook, Twitter].map((Icon, i) => (
                <button key={i} className="social-btn" aria-label="social">
                  <Icon size={15} color="#444" />
                </button>
              ))}
            </div>
          </div>

          {[
            {
              title: "Academia",
              links: ["Sobre Nós", "Modalidades", "Coaches", "Planos", "Blog"],
            },
            {
              title: "Suporte",
              links: ["FAQ", "Contato", "Política de Privacidade", "Termos de Uso", "App Mobile"],
            },
            {
              title: "Unidades",
              links: ["Barra — BA", "Ondina — BA", "Vitória — BA", "Portão — BA", "Em breve: Graça"],
            },
          ].map(col => (
            <div key={col.title}>
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#fff", marginBottom: 20 }}>{col.title}</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {col.links.map(link => (
                  <a key={link} href="#" className="footer-link">{link}</a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={{ borderTop: "1px solid #111", paddingTop: 28, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
          <p style={{ fontSize: 12, color: "#2a2a2a", letterSpacing: "0.05em" }}>
            © {year} IRONFORCE. Todos os direitos reservados. CNPJ 00.000.000/0001-00
          </p>
          <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
            <div style={{ width: 8, height: 8, background: "#22c55e", borderRadius: "50%", animation: "pulse-glow 2s infinite" }} />
            <span style={{ fontSize: 11, color: "#2a2a2a", letterSpacing: "0.1em" }}>ACADEMIA ABERTA AGORA</span>
          </div>
        </div>
      </div>

    </footer>
  );
}
