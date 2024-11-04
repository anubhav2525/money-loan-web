"use client";

import React from "react";
import HeroSection from "@/components/public/landing-page/HeroSection/HeroSection";
import HeroParallaxSection from "@/components/public/landing-page/HeroParallaxSection/HeroParallaxSection";
import CarouselSection from "@/components/public/landing-page/CarouselSection/CarouselSection";
import FeatureSection from "@/components/public/landing-page/FeatureSection/FeatureSection";
import TestonomialSection from "@/components/public/landing-page/TestonomialSection/TestonomialSection";
import WaitList from "@/components/public/landing-page/WaitList/WaitList";
import FrequentlyAskedQuestion from "@/components/public/landing-page/FrequestlyAskedQuestion/FrequestlyAskedQuestion";
import EMICalculator from "@/components/public/landing-page/EMICalculator/EMICalculator";

const HomePage = () => {
  return (
    <div className="min-h-screen min-w-full">
      <HeroSection />
      <HeroParallaxSection />
      <CarouselSection />
      <FeatureSection />
      <EMICalculator />
      <TestonomialSection />
      <FrequentlyAskedQuestion />
      <WaitList />
    </div>
  );
};

export default HomePage;
