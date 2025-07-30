"use client";
import dynamic from "next/dynamic";
import HeroSection from "@/components/organisme/HeroSection/HeroSection";
import HowItWorksSection from "@/components/organisme/HowItWorksSection/HowItWorksSection";


const QuickStart = dynamic(
  () => import("@/components/organisme/QuickStart/QuickStart"),
  { ssr: false, loading: () => <p>Loading...</p> }
);

const WhyTurboTrackSection = dynamic(
  () => import("@/components/organisme/WhyTurboTrackSection/WhyTurboTrackSection"),
  { ssr: false, loading: () => <p>Loading...</p> }
);

const ContactUsSection = dynamic(
  () => import("@/components/organisme/ContactUsSection/ContactUsSection"),
  { ssr: false, loading: () => <p>Loading...</p> }
)

const LandingPage = () => {
  return (
    <>
      <HeroSection />
      <QuickStart />
      <HowItWorksSection />
      <WhyTurboTrackSection />
      <ContactUsSection />
    </>
  );
};

export default LandingPage;