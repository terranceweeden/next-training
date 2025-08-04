"use client";
import { BookingSection } from "@/components/sections/BookingSection";
// import Spline from "@splinetool/react-spline";
import HeroSection from "@/components/sections/Hero";
import { PortfolioSection } from "@/components/sections/Portfolio";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <BookingSection />
      <PortfolioSection />
      <TestimonialsSection />
    </>
  );
}
