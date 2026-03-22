import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";

const plans = [
  {
    name: "Basic",
    price: "₹999",
    features: [
      "Access to gym equipment",
      "Basic trainer guidance",
      "Locker facility",
    ],
  },
  {
    name: "Pro",
    price: "₹1999",
    features: [
      "All Basic features",
      "Personal trainer",
      "Diet plan",
      "Group classes",
    ],
    highlight: true,
  },
  {
    name: "Premium",
    price: "₹2999",
    features: [
      "All Pro features",
      "Dedicated coach",
      "Custom workout plan",
      "24/7 access",
    ],
  },
];

const Pricing = () => {
  return (
    <motion.section
      id="pricing"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="py-16 md:py-20"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Membership <span className="text-red-500">Plans</span>
        </h2>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 items-stretch">

          {plans.map((plan, index) => (
            <div
              key={index}
              className={`flex flex-col justify-between rounded-2xl p-8 border transition duration-300
              ${
                plan.highlight
                  ? "bg-gradient-to-b from-red-500 to-red-700 text-white border-transparent scale-105 shadow-[0_0_30px_rgba(239,68,68,0.5)]"
                  : "bg-gray-900 border-gray-800 hover:border-red-500"
              }`}
            >

              {/* Plan Name */}
              <h3 className="text-2xl font-semibold mb-4">
                {plan.name}
              </h3>

              {/* Price */}
              <p className="text-4xl font-bold mb-6">
                {plan.price}
                <span className="text-base font-normal"> /month</span>
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm">
                    <FaCheck className="text-red-400" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Button */}
              <button
                className={`w-full py-3 rounded-lg font-semibold transition
                ${
                  plan.highlight
                    ? "bg-black text-white hover:bg-gray-800"
                    : "bg-red-500 hover:bg-red-600"
                }`}
              >
                Join Now
              </button>
            </div>
          ))}

        </div>

      </div>
    </motion.section>
  );
};

export default Pricing;