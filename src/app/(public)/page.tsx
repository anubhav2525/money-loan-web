"use client";
import React from "react";
import HeroSection from "@/components/public/landing-page/HeroSection/HeroSection";
import HeroParallaxSection from "@/components/public/landing-page/HeroParallaxSection/HeroParallaxSection";
import CarouselSection from "@/components/public/landing-page/CarouselSection/CarouselSection";
import FeatureSection from "@/components/public/landing-page/FeatureSection/FeatureSection";
import TestonomialSection from "@/components/public/landing-page/TestonomialSection/TestonomialSection";

const HomePage = () => {
  return (
    <div className="min-h-screen min-w-full">
      <HeroSection />
      <HeroParallaxSection />
      <CarouselSection />
      <FeatureSection />
      <TestonomialSection />
    </div>
  );
};

export default HomePage;
