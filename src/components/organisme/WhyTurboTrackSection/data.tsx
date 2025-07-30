import { FaBolt, FaChartPie, FaShieldAlt, FaCloud } from "react-icons/fa";
import { BenefitsType } from "./types";

export const benefits:BenefitsType[] = [
  {
    icon: <FaBolt />,
    title: "Ultra Fast Testing",
    description: "Run performance tests in just a few seconds.",
    color: "bg-yellow-400",
  },
  {
    icon: <FaChartPie />,
    title: "Beautiful Charts & Reports",
    description: "Interactive charts make analysis simple and insightful.",
    color: "bg-blue-400",
  },
  {
    icon: <FaShieldAlt />,
    title: "No Setup Required",
    description: "Start testing immediately with zero configuration.",
    color: "bg-green-400",
  },
  {
    icon: <FaCloud />,
    title: "Run Anywhere",
    description: "Test your APIs locally or in the cloud effortlessly.",
    color: "bg-purple-400",
  },
];