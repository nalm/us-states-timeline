import { Header } from "@/components/Header";
import { MapTimeline } from "@/components/MapTimeline";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="shell mt-main">
        <MapTimeline />
      </main>
      <Footer />
    </>
  );
}
