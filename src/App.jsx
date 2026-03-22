import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Programs from "./components/programs";
import Pricing from "./components/pricing";
import Trainers from "./components/trainers";
import Testimonials from "./components/testimonials";
import Contact from "./components/contacts";
import Footer from "./components/footer";

import { useEffect, useState } from "react";

function App() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div className="relative bg-black text-white overflow-hidden">

      {/* 🔥 Mouse Glow */}
      <div
        className="pointer-events-none fixed w-[300px] h-[300px] rounded-full blur-[120px] bg-red-500/20 z-0"
        style={{
          left: pos.x - 150,
          top: pos.y - 150,
        }}
      />

      {/* Your sections */}
      <div className="bg-black text-white">
        <Navbar />
        <Hero />
        <Programs />
        <Pricing />
        <Trainers />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
      {/* Hero, Programs, Pricing, etc */}

    </div>
  );
}

export default App;