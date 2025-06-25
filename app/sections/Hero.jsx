"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full h-[50vh] sm:h-[70vh] lg:h-screen flex items-center justify-center overflow-hidden">
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

      <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-10" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="z-20 text-center text-white px-4"
      >
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 opacity-75">
          Driven by performance
        </h1>

        <p className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
          <span className="font-medium">Soft trims and</span>{" "}
          <span className=" text-sky-500 font-bold"> NVH solutions </span>{" "}
          <span className="block text-3xl md:text-4xl lg:text-5xl font-light mt-2">
            for seamless rides
          </span>
        </p>
      </motion.div>
    </section>
  );
}
