"use client";
import { Button } from "@/components/atom/Button/Button";
import { twMerge } from "tailwind-merge";

const HeroSection = () => {
  return (
    <section className="relative isolate overflow-hidden bg-black text-white min-h-[90vh] flex items-center justify-center px-6 py-24 sm:py-32 lg:px-8">
      <div
        className="absolute inset-0 -z-10 opacity-30 blur-3xl"
        style={{
          background:
            "radial-gradient(circle at center, #A3E63533 0%, #000 80%)",
        }}
      />

      <div className="absolute inset-0 -z-10 bg-[radial-gradient(#A3E63511_1px,transparent_1px)] bg-[size:20px_20px]" />

      <div className="text-center max-w-2xl">
        <h1 className="relative text-center text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-tight mb-8">
          <span className="relative inline-flex items-center gap-3 px-4 py-2 bg-gradient-to-br from-black to-gray-900 rounded-2xl shadow-2xl">
            <span className="text-4xl md:text-5xl animate-bounce drop-shadow-md">
              🚀
            </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#A3E635] to-lime-400 drop-shadow-lg">
              Turbo
            </span>
            <span className="text-white bg-[#A3E635] px-3 py-1 rounded-xl text-xl shadow-md animate-pulse">
              Track
            </span>
          </span>
          <span className="block mt-4 text-base sm:text-lg text-gray-400 font-medium tracking-wide">
            Engine Performance. Reimagined.
          </span>
        </h1>

        <p className="text-md sm:text-lg md:text-xl text-gray-400 mb-8">
          High-performance load testing engine for developers and teams.
          Simulate real-world traffic, monitor results, and optimize backend
          performance effortlessly.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <Button
            className={twMerge(
              "bg-[#A3E635] text-black hover:bg-lime-400 px-6 py-3 text-base font-semibold"
            )}
          >
            Get Started
          </Button>
          <Button
            variant="outline"
            className="border-gray-600 text-white hover:border-white"
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
