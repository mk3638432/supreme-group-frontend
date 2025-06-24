"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import VideoCarousel from "./VideoCarousel";
// import { VideoCarousel } from "./VideoCarousel";

export default function DriveMessage() {
  const ref = useRef(null);
  const [selected, setSelected] = useState("passenger");

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const passengerOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const commercialOpacity = useTransform(scrollYProgress, [0.5, 1], [0, 1]);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (v) => {
      setSelected(v > 0.5 ? "commercial" : "passenger");
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <section ref={ref} className="relative h-[200vh] bg-black text-white">
      {/* Sticky Main Section */}
      <div className="sticky top-0 h-screen flex flex-col justify-center items-center">
        {/* Heading */}
        <motion.p
          className="text-center text-2xl md:text-4xl font-light mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Evolving the drive with{" "}
          <span className="font-semibold">360-degree</span>
          <br />
          comprehensive solutions
        </motion.p>

        {/* Left + Right layout */}
        <div className="flex flex-col md:flex-row w-full max-w-7xl px-4 gap-10 items-center">
          {/* Left: vehicle options */}
          <div className="flex flex-col gap-4 w-full md:w-1/2">
            {/* Passenger Vehicle */}
            <motion.div
              className="p-4 border rounded-md transition-all border-white text-white opacity-100"
              style={{ opacity: passengerOpacity }}
            >
              <h3 className="text-xl font-semibold">Passenger vehicles</h3>
              <p className="text-sm">
                Revving up innovation from interior to exterior.
              </p>
            </motion.div>

            {/* Commercial Vehicle */}
            <motion.div
              className="p-4 border rounded-md transition-all border-white text-white opacity-100"
              style={{ opacity: commercialOpacity }}
            >
              <h3 className="text-xl font-semibold">Commercial vehicles</h3>
              <p className="text-sm">
                Advancing engineering for heavy-duty vehicles.
              </p>
            </motion.div>
          </div>

          {/* Right: video carousel */}
          <div className="w-full md:w-1/2">
            <VideoCarousel selected={selected} />
          </div>
        </div>
      </div>
    </section>
  );
}
