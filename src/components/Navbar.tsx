import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Dumbbell, Menu, X } from "lucide-react";

const links = [
  ["#sobre", "Sobre"],
  ["#modalidades", "Modalidades"],
  ["#coaches", "Coaches"],
  ["#planos", "Planos"],
  ["#depoimentos", "Depoimentos"],
  ["#contato", "Contato"],
];

export function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [atTop, setAtTop] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const [lastY, setLastY] = useState(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setAtTop(latest < 50);
    if (latest > lastY && latest > 100) setHidden(true);
    else setHidden(false);
    setLastY(latest);
  });

  useEffect(() => {
    if (menuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = "" };
  }, [menuOpen]);

  return (
    <>
      <motion.nav
        animate={{ y: hidden ? -100 : 0 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="nav-blur"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 200,
          borderBottom: atTop ? "1px solid transparent" : "1px solid #1a1a1a",
          transition: "border-color 0.3s",
        }}
      >
        <div className="container nav-inner" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 72 }}>
          <a href="#" className="nav-brand" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
            <div style={{ width: 38, height: 38, background: "#e02020", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <Dumbbell size={20} color="#fff" />
            </div>
            <span className="fd nav-brand-text" style={{ fontSize: 22, fontWeight: 900, letterSpacing: "0.06em", textTransform: "uppercase", color: "#fff" }}>
              IRON<span style={{ color: "#e02020" }}>FORCE</span>
            </span>
          </a>

          <div style={{ display: "flex", gap: 28, alignItems: "center" }} className="hidden-mobile">
            {links.map(([href, label]) => (
              <a key={label} href={href}
                style={{ color: "#888", textDecoration: "none", fontSize: 13, fontWeight: 500, letterSpacing: "0.04em", transition: "color 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                onMouseLeave={e => (e.currentTarget.style.color = "#888")}
              >{label}</a>
            ))}
          </div>

          <div className="nav-actions" style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <a href="#planos" className="btn-red nav-cta" style={{ padding: "10px 24px", fontSize: 12 }}>
              Começar Agora
            </a>
            <button
              onClick={() => setMenuOpen(true)}
              style={{ background: "none", border: "none", cursor: "pointer", color: "#fff", padding: 6, display: "none" }}
              className="menu-btn"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </motion.nav>

      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="mobile-menu-panel"
          style={{
            position: "fixed", inset: 0, zIndex: 300,
            background: "#0a0a0a",
            display: "flex", flexDirection: "column", padding: "28px 32px",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 48 }}>
            <span className="fd" style={{ fontSize: 22, fontWeight: 900, letterSpacing: "0.06em", textTransform: "uppercase", color: "#fff" }}>
              IRON<span style={{ color: "#e02020" }}>FORCE</span>
            </span>
            <button onClick={() => setMenuOpen(false)} style={{ background: "none", border: "none", cursor: "pointer", color: "#fff" }}>
              <X size={24} />
            </button>
          </div>
          <div className="mobile-menu-links" style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {links.map(([href, label], i) => (
              <motion.a
                key={label} href={href}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06 }}
                onClick={() => setMenuOpen(false)}
                style={{
                  color: "#fff", textDecoration: "none",
                  fontSize: "clamp(32px, 6vw, 52px)", fontWeight: 900,
                  fontFamily: "'Barlow Condensed', sans-serif",
                  textTransform: "uppercase", letterSpacing: "0.04em",
                  padding: "10px 0", borderBottom: "1px solid #1a1a1a",
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                }}
                onMouseEnter={e => (e.currentTarget.style.color = "#e02020")}
                onMouseLeave={e => (e.currentTarget.style.color = "#fff")}
              >
                {label}
                <span style={{ fontSize: 14, color: "#333", fontFamily: "Inter", letterSpacing: 0 }}>0{i + 1}</span>
              </motion.a>
            ))}
          </div>
          <div style={{ marginTop: "auto" }}>
            <a href="#planos" className="btn-red" onClick={() => setMenuOpen(false)}
              style={{ padding: "18px 32px", fontSize: 14, width: "100%", justifyContent: "center" }}>
              Começar Agora
            </a>
          </div>
        </motion.div>
      )}

    </>
  );
}
