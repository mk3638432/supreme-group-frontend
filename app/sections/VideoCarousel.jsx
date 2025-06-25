"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Pause,
  Play,
  Car,
  CarFront,
  CarTaxiFront,
  Caravan,
  SquareStack,
  Gauge,
} from "lucide-react";

// Video source mapping
const videoMap = {
  passenger: {
    complete: "/public/videos/Passenger Alpha.mp4",

    front: "/public/videos/Front.mp4",
    cabin: "/videos/Cabin.mp4",
    trunk: "/videos/Trunk.mp4",
    exterior: "/videos/Exterior.mp4",
  },
  commercial: {
    complete: "/videos/Commercial Alpha.mp4", // change if needed
    engine: "/videos/Commercial-Engine.mp4",
    cabin: "/videos/Cabin.mp4",
  },
};

// Icon lists
const partIcons = {
  passenger: [
    { key: "complete", label: "Complete body", icon: Car },
    { key: "front", label: "Front", icon: CarFront },
    { key: "cabin", label: "Cabin", icon: CarTaxiFront },
    { key: "trunk", label: "Trunk", icon: Caravan },
    { key: "exterior", label: "Exterior", icon: SquareStack },
  ],
  commercial: [
    { key: "complete", label: "Complete body", icon: Car },
    { key: "engine", label: "Engine", icon: Gauge },
    { key: "cabin", label: "Cabin", icon: CarTaxiFront },
  ],
};

export default function VideoCarousel({ selected = "passenger" }) {
  const [activePart, setActivePart] = useState("complete");
  const [playing, setPlaying] = useState(true);
  const videoRef = useRef(null);

  const videoSrc = videoMap[selected][activePart];

  const togglePlay = () => {
    if (!videoRef.current) return;
    playing ? videoRef.current.pause() : videoRef.current.play();
    setPlaying(!playing);
  };

  useEffect(() => {
    setActivePart("complete");
    setPlaying(true);
  }, [selected]);

  return (
    <section className="bg-black text-white  py-10 px-4">
      <div className="max-w-6xl mx-auto flex flex-col gap-8">
        <div className="relative rounded-lg overflow-hidden aspect-video w-full">
          <AnimatePresence mode="wait">
            <motion.video
              key={videoSrc}
              ref={videoRef}
              src={videoSrc}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover rounded-xl absolute top-0 left-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            />
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="flex flex-wrap items-center justify-center gap-6">
          {partIcons[selected].map(({ key, label, icon: Icon }) => (
            <motion.button
              key={key}
              onClick={() => setActivePart(key)}
              whileTap={{ scale: 0.95 }}
              animate={{
                opacity: activePart === key ? 1 : 0.5,
                color: activePart === key ? "#ffffff" : "#9ca3af",
              }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center gap-1 text-center w-[80px] sm:w-auto"
            >
              <Icon size={24} />
              <span className="text-xs sm:text-sm">{label}</span>
            </motion.button>
          ))}

          <motion.button
            onClick={togglePlay}
            whileTap={{ scale: 0.95 }}
            className="bg-white/10 backdrop-blur-sm border border-white/30 rounded-full p-3 text-white hover:bg-white/20"
          >
            {playing ? <Pause size={24} /> : <Play size={24} />}
          </motion.button>
        </div>
      </div>
    </section>
  );
}
