// "use client";

// import { useState, useRef, useEffect } from "react";
// import {
//   Pause,
//   Play,
//   Car,
//   CarFront,
//   CarTaxiFront,
//   Caravan,
//   SquareStack,
//   Gauge,
// } from "lucide-react";

// const videoMap = {
//   passenger: {
//     complete: "/videos/Passenger Alpha.mp4",
//     front: "/videos/Front.mp4",
//     cabin: "/videos/Cabin.mp4",
//     trunk: "/videos/Trunk.mp4",
//     exterior: "/videos/Exterior.mp4",
//   },
//   commercial: {
//     complete: "/videos/Commercial-Alpha.mp4",
//     engine: "/videos/Commercial-Engine.mp4",
//     cabin: "/videos/Cabin.mp4",
//   },
// };

// // 👇 icon list for each vehicle type
// const partIcons = {
//   passenger: [
//     { key: "complete", label: "Complete body", icon: Car },
//     { key: "front", label: "Front", icon: CarFront },
//     { key: "cabin", label: "Cabin", icon: CarTaxiFront },
//     { key: "trunk", label: "Trunk", icon: Caravan },
//     { key: "exterior", label: "Exterior", icon: SquareStack },
//   ],
//   commercial: [
//     { key: "complete", label: "Complete body", icon: Car },
//     { key: "engine", label: "Engine", icon: Gauge },
//     { key: "cabin", label: "Cabin", icon: CarTaxiFront },
//   ],
// };

// export default function VideoCarousel({ selectedType = "passenger" }) {
//   const [activePart, setActivePart] = useState("complete");
//   const [playing, setPlaying] = useState(true);
//   const videoRef = useRef(null);

//   const videoSrc = videoMap[selectedType][activePart];

//   const togglePlay = () => {
//     if (!videoRef.current) return;
//     if (playing) {
//       videoRef.current.pause();
//     } else {
//       videoRef.current.play();
//     }
//     setPlaying(!playing);
//   };

//   // Reset to default part when type changes
//   useEffect(() => {
//     setActivePart("complete");
//     setPlaying(true);
//   }, [selectedType]);

//   return (
//     <section className="bg-black text-white py-20 px-4">
//       <div className="max-w-6xl mx-auto">
//         {/* Video */}
//         <div className="relative rounded-lg overflow-hidden mb-8">
//           <video
//             ref={videoRef}
//             src={videoSrc}
//             autoPlay
//             muted
//             loop
//             playsInline
//             className="w-full h-full object-cover rounded-xl"
//           />
//           <button
//             onClick={togglePlay}
//             className="absolute bottom-4 right-4 bg-white/10 backdrop-blur-sm border border-white/30 rounded-full p-3 text-white hover:bg-white/20"
//           >
//             {playing ? <Pause size={24} /> : <Play size={24} />}
//           </button>
//         </div>

//         {/* Icons */}
//         <div className="flex flex-wrap items-center justify-center gap-6">
//           {partIcons[selectedType].map(({ key, label, icon: Icon }) => (
//             <button
//               key={key}
//               onClick={() => setActivePart(key)}
//               className={`flex flex-col items-center gap-2 transition-all duration-200 ${
//                 activePart === key ? "text-white" : "text-white/50"
//               }`}
//             >
//               <Icon size={24} />
//               <span className="text-sm">{label}</span>
//             </button>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
