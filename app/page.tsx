import { BackgroundBoxesDemo } from "./global/background";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <main>
      <BackgroundBoxesDemo>
        <Navbar />
        <Hero/>
      </BackgroundBoxesDemo>
    </main>
  );
}
