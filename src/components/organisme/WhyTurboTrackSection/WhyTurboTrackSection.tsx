"use client";
import { motion } from "framer-motion";
import { benefits } from "./data";

const WhyTurboTrackSection = () => {
  return (
    <section className="relative w-full py-20 px-6 bg-gradient-to-tr from-indigo-50 via-white to-purple-50 overflow-hidden">
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-yellow-300/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-4xl mx-auto text-center mb-14"
      >
        <h2 className="text-4xl font-extrabold text-indigo-900">
          Why TurboTrack Engine?
        </h2>
        <p className="mt-3 text-lg text-gray-600">
          Discover the powerful benefits of our easy-to-use load testing platform.
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {benefits.map(({ icon, title, description, color }, index) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 * index, duration: 0.6, ease: "easeOut" }}
            className="bg-white rounded-xl p-8 shadow-lg flex flex-col items-center text-center cursor-default hover:shadow-xl transition-shadow"
          >
            <div
              className={`${color} text-white p-5 rounded-full text-4xl mb-5 drop-shadow-lg`}
            >
              {icon}
            </div>
            <h3 className="text-xl font-semibold text-indigo-900 mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyTurboTrackSection;