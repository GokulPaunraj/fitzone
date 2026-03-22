import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Rohit Verma",
    role: "Member",
    text: "FitZone completely transformed my fitness journey. The trainers are supportive and the environment is highly motivating.",
  },
  {
    name: "Ankit Patel",
    role: "Member",
    text: "Amazing experience! The equipment is modern and the workout plans actually deliver results.",
  },
  {
    name: "Suresh Kumar",
    role: "Member",
    text: "Highly recommended gym. Clean space, professional trainers, and great energy every day.",
  },
];

const Testimonials = () => {
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
          What Our <span className="text-red-500">Members Say</span>
        </h2>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">

          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-gray-900 p-6 rounded-2xl border border-gray-800 
              hover:border-red-500 hover:shadow-[0_0_20px_rgba(239,68,68,0.2)] 
              transition duration-300"
            >

              {/* Stars */}
              <div className="flex gap-1 text-red-500 mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                “{item.text}”
              </p>

              {/* User */}
              <div className="flex items-center gap-3">
                {/* Avatar */}
                <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-sm font-semibold">
                  {item.name.charAt(0)}
                </div>

                <div>
                  <h3 className="text-sm font-semibold">{item.name}</h3>
                  <p className="text-gray-500 text-xs">{item.role}</p>
                </div>
              </div>

            </div>
          ))}

        </div>

      </div>
    </motion.section>
  );
};

export default Testimonials;