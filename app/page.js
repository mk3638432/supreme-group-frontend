import Hero from "@/app/sections/Hero";
import DriveMessage from "./sections/DriveMessage";
import VideoCarousel from "./sections/VideoCarousel";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <DriveMessage />
      {/* <VideoCarousel /> */}
      <ContactSection />
      <Footer />
    </main>
  );
}
