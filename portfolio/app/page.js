import Image from "next/image";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col container mx-auto pu-4 px-12">
      <HeroSection />
    </main>
  );
}
