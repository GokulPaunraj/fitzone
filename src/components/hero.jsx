import { useEffect, useState, useRef } from "react";

const text = "Build Your Strength";

const Hero = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [loadVideo, setLoadVideo] = useState(false);
  const sectionRef = useRef(null);

  // 👇 Typewriter
  useEffect(() => {
    let timeout;

    if (!isDeleting && index < text.length) {
      timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, 80);
    } else if (!isDeleting && index === text.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1200);
    } else if (isDeleting && index > 0) {
      timeout = setTimeout(() => {
        setDisplayedText((prev) => prev.slice(0, -1));
        setIndex(index - 1);
      }, 40);
    } else if (isDeleting && index === 0) {
      setIsDeleting(false);
    }

    return () => clearTimeout(timeout);
  }, [index, isDeleting]);

  // 👇 Lazy load video when section visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoadVideo(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen flex items-center px-6 md:px-12 lg:px-20 overflow-hidden"
    >

      {/* Background Glow */}
      <div className="absolute -top-40 -left-40 w-[400px] h-[400px] bg-red-500/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-orange-500/10 blur-[120px] rounded-full"></div>

      <div className="flex flex-col md:flex-row items-center gap-12 w-full relative z-10">

        {/* LEFT */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            Transform Your Body <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
              {displayedText}
              <span className="animate-pulse text-red-500">|</span>
            </span>
          </h1>

          <p className="text-gray-400 mb-8 max-w-lg mx-auto md:mx-0">
            Join FitZone Gym and achieve your fitness goals with expert trainers,
            modern equipment, and a motivating environment.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a href="#pricing" className="bg-gradient-to-r from-red-500 to-orange-500 px-6 py-3 rounded-lg shadow-[0_0_30px_rgba(239,68,68,0.6)] hover:scale-105 transition">
              Start Your Journey
            </a>

            <a href="#pricing" className="border border-gray-600 px-6 py-3 rounded-lg hover:bg-white hover:text-black transition">
              View Plans
            </a>
          </div>
        </div>

        {/* RIGHT VIDEO */}
        <div className="flex-1 w-full">
          <div className="relative w-full h-[300px] sm:h-[350px] md:h-[420px] rounded-2xl overflow-hidden shadow-2xl">

            {/* Poster (instant load) */}
            {!loadVideo && (
              <img
                src="/gym-poster.jpg"  // lightweight image
                alt="gym preview"
                className="w-full h-full object-cover"
              />
            )}

            {/* Video loads only when needed */}
            {loadVideo && (
              <video
                src="/gym-video.mp4"
                autoPlay
                loop
                muted
                playsInline
                preload="none"
                className="w-full h-full object-cover"
              />
            )}

            {/* Overlays */}
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-black via-transparent to-transparent"></div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;