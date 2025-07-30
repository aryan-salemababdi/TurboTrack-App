"use client";
import {
  FaCogs,
  FaRocket,
  FaChartBar,
  FaBolt,
  FaInfinity,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { StepCard } from "@/components/molecule/StepCard/StepCard";

const HowItWorksSection = () => {
  return (
    <section className="w-full py-20 px-4 bg-gradient-to-br from-lime-50 via-white to-sky-50 relative">
      <div className="absolute top-0 left-0 w-72 h-72 bg-lime-200/40 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-sky-200/40 rounded-full blur-3xl -z-10"></div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center mb-16"
      >
        <h2 className="text-4xl font-extrabold text-gray-900">How It Works</h2>
        <p className="mt-4 text-lg text-gray-600">
          Just 3 simple steps to run your first powerful load test.
        </p>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
        <StepCard
          stepNumber={1}
          icon={<FaCogs />}
          title="Configure Your Test"
          description="Set your target URL, total requests, concurrency level, and choose your test type."
          color="bg-lime-500"
          delay={0.1}
        />
        <StepCard
          stepNumber={2}
          icon={<FaRocket />}
          title="Run the Test"
          description="Start the simulation and watch real-time performance tracking."
          color="bg-sky-500"
          delay={0.2}
        />
        <StepCard
          stepNumber={3}
          icon={<FaChartBar />}
          title="Analyze Results"
          description="Get interactive charts with latency, RPS, and success rate."
          color="bg-pink-500"
          delay={0.3}
        />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-4xl mx-auto mt-16 bg-white rounded-2xl shadow-lg p-8 border border-gray-200"
      >
        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          🧪 Understanding Test Types
        </h3>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 p-3 bg-yellow-100 text-yellow-600 rounded-full text-2xl">
              <FaBolt />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-800">
                Batch Test
              </h4>
              <p className="text-gray-600">
                Sends all requests as quickly as possible to find the server’s
                maximum throughput. Great for stress testing and performance
                benchmarking.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 p-3 bg-green-100 text-green-600 rounded-full text-2xl">
              <FaInfinity />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-800">
                Sustained Test
              </h4>
              <p className="text-gray-600">
                Sends requests at a constant rate over a period of time to
                measure stability and long-term performance under steady load.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HowItWorksSection;