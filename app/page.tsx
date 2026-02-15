import { BackgroundBoxesDemo } from "./global/background";
import Navbar from "../components/navbar";

export default function Home() {
  return (
    <main>
      <BackgroundBoxesDemo>
        <Navbar />
      </BackgroundBoxesDemo>
    </main>
  );
}
