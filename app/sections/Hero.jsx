// sections/Hero.js

"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/videos/automotive.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-10" />

      {/* Animated Text Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="z-20 text-center text-white px-4"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Driven by performance
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-6">
          Soft trims and NVH solutions for seamless rides
        </p>
      </motion.div>
    </section>
  );
}
