"use client";
import { NextPage } from "next";
import { ReactNode } from "react";
import { motion } from "framer-motion";

interface StepCardProps {
  stepNumber: number;
  icon: ReactNode;
  title: string;
  description: string;
  color: string;
  delay?: number;
}

export const StepCard: NextPage<StepCardProps> = ({
  stepNumber,
  icon,
  title,
  description,
  color,
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{
        y: -6,
        rotate: 1,
        transition: { type: "spring", stiffness: 200 },
      }}
      className="relative p-8 rounded-2xl backdrop-blur-md bg-white/30 border border-white/20 shadow-lg"
    >
      <span className="absolute text-8xl font-extrabold text-gray-200/40 -top-6 left-4 pointer-events-none">
        {stepNumber}
      </span>

      <div
        className={`w-16 h-16 flex items-center justify-center rounded-full ${color} text-white text-2xl shadow-md relative z-10`}
      >
        {icon}
      </div>

      <h3 className="mt-6 text-xl font-bold text-gray-900 relative z-10">
        {title}
      </h3>

      <p className="mt-3 text-gray-600 leading-relaxed relative z-10">
        {description}
      </p>
    </motion.div>
  );
};