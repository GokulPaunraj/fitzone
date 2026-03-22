import { motion } from "framer-motion";
import { FaDumbbell, FaHeartbeat, FaUserTie, FaFire } from "react-icons/fa";

const programs = [
  {
    title: "Weight Training",
    desc: "Build muscle strength with structured weight training programs.",
    icon: <FaDumbbell />,
  },
  {
    title: "Cardio Training",
    desc: "Boost endurance and burn calories with high-energy workouts.",
    icon: <FaHeartbeat />,
  },
  {
    title: "Personal Coaching",
    desc: "Get personalized plans tailored to your fitness goals.",
    icon: <FaUserTie />,
  },
  {
    title: "CrossFit",
    desc: "Experience intense full-body workouts for maximum performance.",
    icon: <FaFire />,
  },
];

const Programs = () => {
  return (
    <motion.section
      id="programs"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="py-16 md:py-20"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our <span className="text-red-500">Programs</span>
        </h2>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {programs.map((item, index) => (
            <div
              key={index}
              className="bg-gray-900 p-6 rounded-2xl border border-gray-800 
              hover:border-red-500 hover:shadow-[0_0_20px_rgba(239,68,68,0.2)] 
              transition duration-300 group"
            >
              {/* Icon */}
              <div className="text-3xl text-red-500 mb-4 group-hover:scale-110 transition">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-2">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </motion.section>
  );
};

export default Programs;