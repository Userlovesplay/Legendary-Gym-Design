import { useLenis } from "./hooks/useLenis";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Ticker } from "./components/Ticker";
import { Features } from "./components/Features";
import { NumbersBar } from "./components/NumbersBar";
import { Modalities } from "./components/Modalities";
import { Schedule } from "./components/Schedule";
import { CtaBanner } from "./components/CtaBanner";
import { Coaches } from "./components/Coaches";
import { Plans } from "./components/Plans";
import { Testimonials } from "./components/Testimonials";
import { Faq } from "./components/Faq";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  useLenis();

  return (
    <div className="site-shell">
      <div className="site-stage">
        <Navbar />
        <main className="site-content">
          <Hero />
          <Ticker />
          <Features />
          <NumbersBar />
          <Modalities />
          <Schedule />
          <CtaBanner />
          <Coaches />
          <Plans />
          <Testimonials />
          <Faq />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
