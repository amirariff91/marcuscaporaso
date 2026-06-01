import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import TrustedBy from "@/components/TrustedBy";
import Founder from "@/components/Founder";
import Metrics from "@/components/Metrics";
import Methodology from "@/components/Methodology";
import Services from "@/components/Services";
import GrowthOS from "@/components/GrowthOS";
import EmailCapture from "@/components/EmailCapture";
import Booking from "@/components/Booking";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <TrustedBy />
        <Founder />
        <Metrics />
        <Methodology />
        <Services />
        <GrowthOS />
        <EmailCapture />
        <Booking />
      </main>
      <Footer />
    </>
  );
}
