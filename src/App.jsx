import Navbar from "./components/Navbar";
import Hero from "./components/hero";
import Services from "./components/services";
import Process from "./components/Process";
import Testimonials from "./components/temoignages";
import CTA from "./components/cta";
import Footer from "./components/Footer";
import "./index.css";

export default function App() {
  return (
    <div className="relative min-h-screen">
      <div className="bg-fixed" />
      <div className="bg-overlay" />

      <Navbar />
      <Hero />
      <Services />
      <Process />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}
