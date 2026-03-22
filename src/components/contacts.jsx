import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="py-16 md:py-20"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Get In <span className="text-red-500">Touch</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-10 items-start">

          {/* LEFT INFO */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Let’s build something great 🚀
            </h3>

            <p className="text-gray-400 mb-6 leading-relaxed">
              Have a project in mind or want to join FitZone? Feel free to reach out.
              I’m always open to discussing new ideas and opportunities.
            </p>

            <div className="space-y-4 text-gray-300 text-sm">
              <p className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-red-500" />
                Coimbatore, Tamil Nadu
              </p>
              <p className="flex items-center gap-3">
                <FaPhoneAlt className="text-red-500" />
                +91 98765 43210
              </p>
              <p className="flex items-center gap-3">
                <FaEnvelope className="text-red-500" />
                fitzone@email.com
              </p>
            </div>
          </div>

          {/* RIGHT FORM */}
          <form className="bg-gray-900 p-6 md:p-8 rounded-2xl border border-gray-800 shadow-lg">

            <div className="mb-4">
              <label className="block text-sm mb-2">Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full p-3 rounded-lg bg-black border border-gray-700 
                focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm mb-2">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 rounded-lg bg-black border border-gray-700 
                focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition"
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm mb-2">Message</label>
              <textarea
                rows="4"
                placeholder="Enter your message"
                className="w-full p-3 rounded-lg bg-black border border-gray-700 
                focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition"
              ></textarea>
            </div>

            <button className="w-full bg-gradient-to-r from-red-500 to-orange-500 
            py-3 rounded-lg font-semibold shadow-[0_0_20px_rgba(239,68,68,0.5)] 
            hover:opacity-90 transition">
              Send Message
            </button>

          </form>

        </div>

      </div>
    </motion.section>
  );
};

export default Contact;