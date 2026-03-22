import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  // 👇 Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition duration-300 
      ${
        scrolled
          ? "bg-white/10 backdrop-blur-lg border-b border-white/10 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">

        {/* LOGO */}
        <h1 className="text-xl font-bold tracking-wide">
          Fake<span className="text-red-500">Fit</span>Zone
        </h1>

        {/* NAV LINKS */}
        <nav className="hidden md:flex gap-8 text-sm font-medium">
          <a href="#home" className="hover:text-red-500 transition">
            Home
          </a>
          <a href="#programs" className="hover:text-red-500 transition">
            Programs
          </a>
          <a href="#pricing" className="hover:text-red-500 transition">
            Pricing
          </a>
          <a href="#trainers" className="hover:text-red-500 transition">
            Trainers
          </a>
          <a href="#contact" className="hover:text-red-500 transition">
            Contact
          </a>
        </nav>

        {/* CTA BUTTON */}
        <a
          href="#pricing"
          className="hidden md:inline-block bg-gradient-to-r from-red-500 to-orange-500 
          px-5 py-2 rounded-lg text-sm font-semibold shadow-[0_0_15px_rgba(239,68,68,0.6)] 
          hover:opacity-90 transition"
        >
          Join Now
        </a>

      </div>
    </header>
  );
};

export default Navbar;