import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Metrics from "@/components/Metrics";
import Founder from "@/components/Founder";
import Methodology from "@/components/Methodology";
import Services from "@/components/Services";
import GrowthOS from "@/components/GrowthOS";
import Booking from "@/components/Booking";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Metrics />
        <Founder />
        <Methodology />
        <Services />
        <GrowthOS />
        <Booking />
      </main>
      <Footer />
    </>
  );
}
