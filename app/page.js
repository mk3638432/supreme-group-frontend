import Hero from "@/app/sections/Hero";
import DriveMessage from "./sections/DriveMessage";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <DriveMessage />

      <ContactSection />
      <Footer />
    </main>
  );
}
