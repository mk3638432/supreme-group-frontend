import { PauseIcon, PlayIcon } from "lucide-react"; // or any icons you use

export default function CarouselControls({ playing, togglePlay }) {
  return (
    <button
      onClick={togglePlay}
      className="p-2 bg-white/10 rounded-full text-white hover:bg-white/20 transition"
    >
      {playing ? <PauseIcon size={20} /> : <PlayIcon size={20} />}
    </button>
  );
}
