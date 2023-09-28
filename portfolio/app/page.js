import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col container mx-auto pu-4 px-12">
      <div className="container mx-auto px-12 py-4">
        <HeroSection />
      </div>
      <Navbar />
    </main>
  );
}
