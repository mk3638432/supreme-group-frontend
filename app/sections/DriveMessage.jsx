"use client";

import { motion, useScroll } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import VideoCarousel from "./VideoCarousel";

export default function DriveMessage() {
  const ref = useRef(null);
  const [selected, setSelected] = useState("passenger");

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (v) => {
      setSelected(v > 0.5 ? "commercial" : "passenger");
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <section ref={ref} className="relative h-[200vh] bg-black text-white">
      <div className="sticky top-0 h-screen flex flex-col justify-center items-center">
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

        <div className="flex flex-col md:flex-row w-full max-w-7xl px-4 gap-10 items-center">
          {/* Left side: two buttons */}
          <div className="flex flex-col gap-4 w-full md:w-1/2">
            <motion.div
              animate={{
                opacity: selected === "passenger" ? 1 : 0.6,
                color: selected === "passenger" ? "#ffffff" : "#9ca3af", // white : gray-400
              }}
              transition={{ duration: 0.4 }}
              className="p-4 rounded-md"
            >
              <button
                className="cursor-pointer"
                onClick={() => setSelected("passenger")}
              >
                <h3 className="text-3xl md:text-4xl font-bold mb-2">
                  Passenger vehicles
                </h3>
                <p className="text-base md:text-lg font-light text-gray-400 group-hover:text-white transition-colors duration-200">
                  Revving up innovation from interior to exterior.
                </p>
              </button>
            </motion.div>

            <motion.div
              animate={{
                opacity: selected === "commercial" ? 1 : 0.6,
                color: selected === "commercial" ? "#ffffff" : "#9ca3af",
              }}
              transition={{ duration: 0.4 }}
              className="p-4 rounded-md"
            >
              <button
                className="cursor-pointer"
                onClick={() => setSelected("commercial")}
              >
                <h3 className="text-3xl md:text-4xl font-bold mb-2">
                  Commercial vehicles
                </h3>
                <p className="text-base md:text-lg font-light text-gray-400 group-hover:text-white transition-colors duration-200">
                  Advancing engineering for heavy-duty vehicles.
                </p>
              </button>
            </motion.div>
          </div>

          {/* Right side: video carousel */}
          <div className="w-full md:w-1/2">
            <VideoCarousel selected={selected} />
          </div>
        </div>
      </div>
    </section>
  );
}
