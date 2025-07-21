"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative h-screen">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/update.png"
          alt="Photography hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="container h-full flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white max-w-2xl"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Capturing Your{" "}
            <span className="text-amber-400">Beautiful Moments</span>
          </h1>
          <p className="text-xl mb-8">
            Professional photography services for weddings, portraits, and
            commercial work
          </p>
          <button className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-full font-medium">
            View Portfolio
          </button>
        </motion.div>
      </div>
    </section>
  );
}
