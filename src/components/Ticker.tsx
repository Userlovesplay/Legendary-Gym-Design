import { tickerItems } from "./../lib/data";

export function Ticker() {
  const doubled = [...tickerItems, ...tickerItems, ...tickerItems];
  return (
    <div style={{ overflow: "hidden", background: "#e02020", padding: "14px 0", borderTop: "1px solid #c01818", borderBottom: "1px solid #c01818" }}>
      <div style={{ display: "flex", gap: 0, whiteSpace: "nowrap", animation: "ticker-scroll 30s linear infinite" }}>
        {doubled.map((item, i) => (
          <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: 20, padding: "0 32px", fontSize: 11, fontWeight: 800, letterSpacing: "0.2em" }}>
            {item}
            <span style={{ opacity: 0.5 }}>✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
