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
    name: "Rahul Sharma",
    role: "Cardio Expert",
    img: "https://images.unsplash.com/photo-1594737625785-cb2a3e72cfd1",
  },
  {
    name: "Vikram Singh",
    role: "CrossFit Trainer",
    img: "https://images.unsplash.com/photo-1579758629938-03607ccdbaba",
  },
  {
    name: "Karthik Raj",
    role: "Fitness Coach",
    img: "https://images.unsplash.com/photo-1605296867424-35fc25c9212a",
  },
];

const Trainers = () => {
  const carouselRef = useRef(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      setWidth(
        carouselRef.current.scrollWidth - carouselRef.current.offsetWidth
      );
    }
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="py-16 md:py-20"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Meet Our <span className="text-red-500">Trainers</span>
        </h2>

        {/* Wrapper */}
        <div className="overflow-hidden">

          {/* Draggable Row */}
          <motion.div
            ref={carouselRef}
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            dragElastic={0.1}
            className="flex gap-6 cursor-grab active:cursor-grabbing"
          >

            {trainers.map((trainer, index) => (
              <div
                key={index}
                className="min-w-[260px] sm:min-w-[300px] md:min-w-[320px] 
                bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 
                hover:border-red-500 transition duration-300 group"
              >

                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={trainer.img}
                    alt={trainer.name}
                    className="w-full h-72 object-cover group-hover:scale-110 transition duration-500"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 
                  flex items-center justify-center gap-6 transition duration-300">

                    <FaInstagram className="text-white text-xl cursor-pointer hover:text-red-500 transition" />
                    <FaTwitter className="text-white text-xl cursor-pointer hover:text-red-500 transition" />

                  </div>
                </div>

                {/* Content */}
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