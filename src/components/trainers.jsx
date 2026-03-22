import { motion } from "framer-motion";
import { FaInstagram, FaTwitter } from "react-icons/fa";
import { useRef, useEffect, useState } from "react";

const trainers = [
  {
    name: "Arjun Kumar",
    role: "Strength Coach",
    img: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1",
  },
  {
    name: "Vikram Singh",
    role: "CrossFit Trainer",
    img: "https://images.unsplash.com/photo-1579758629938-03607ccdbaba",
  },
  {
    name: "Karthik Raj",
    role: "Fitness and Cardio Coach",
    img: "https://images.unsplash.com/photo-1605296867424-35fc25c9212a",
  },
  {
    name: "Deepak Nair",
    role: "Bodybuilding Coach",
    img: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e",
  },
  {
    name: "Ajay Menon",
    role: "Functional Trainer",
    img: "https://images.unsplash.com/photo-1558611848-73f7eb4001a1",
  },
  {
    name: "Naveen Kumar",
    role: "Strength & Conditioning",
    img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438",
  },
  {
    name: "Sanjay Gupta",
    role: "HIIT Specialist",
    img: "https://images.unsplash.com/photo-1599058917765-a780eda07a3e",
  },
];

const Trainers = () => {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const [dragWidth, setDragWidth] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // ✅ Calculate drag width
  const calculateWidth = () => {
    if (containerRef.current && trackRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const scrollWidth = trackRef.current.scrollWidth;
      setDragWidth(scrollWidth - containerWidth);
    }
  };

  useEffect(() => {
    calculateWidth();
    window.addEventListener("resize", calculateWidth);
    return () => window.removeEventListener("resize", calculateWidth);
  }, []);

  // ✅ AUTOPLAY
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let interval;

    if (!isHovered) {
      interval = setInterval(() => {
        container.scrollBy({
          left: 320, // 👈 scroll one card
          behavior: "smooth",
        });

        // Loop back
        if (
          container.scrollLeft + container.offsetWidth >=
          container.scrollWidth - 5
        ) {
          container.scrollTo({ left: 0, behavior: "smooth" });
        }
      }, 2500);
    }

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="py-16 md:py-20"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Meet Our <span className="text-red-500">Trainers</span>
        </h2>

        {/* CONTAINER */}
        <div
          ref={containerRef}
          className="overflow-x-scroll scrollbar-hide scroll-smooth"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >

          {/* TRACK */}
          <motion.div
            ref={trackRef}
            drag="x"
            dragConstraints={{ left: -dragWidth, right: 0 }}
            dragElastic={0.08}
            className="flex gap-6 cursor-grab active:cursor-grabbing"
          >

            {trainers.map((trainer, index) => (
              <div
                key={index}
                className="min-w-[260px] sm:min-w-[300px] md:min-w-[320px] 
                snap-start
                bg-white/5 backdrop-blur-lg border border-white/10 
                rounded-2xl overflow-hidden transition duration-300 group
                hover:border-red-500"
              >

                {/* IMAGE */}
                <div className="relative overflow-hidden">
                  <img
                    src={trainer.img}
                    alt={trainer.name}
                    className="w-full h-72 object-cover group-hover:scale-110 transition duration-500"
                  />

                  {/* Gradient */}
                  <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent"></div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 
                  flex items-center justify-center gap-6 transition duration-300">

                    <FaInstagram className="text-white text-xl cursor-pointer hover:text-red-500 transition" />
                    <FaTwitter className="text-white text-xl cursor-pointer hover:text-red-500 transition" />

                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-5 text-center">
                  <h3 className="text-lg font-semibold">
                    {trainer.name}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {trainer.role}
                  </p>
                </div>

              </div>
            ))}

          </motion.div>

        </div>

      </div>
    </motion.section>
  );
};

export default Trainers;