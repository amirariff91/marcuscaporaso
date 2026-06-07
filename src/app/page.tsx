import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import TrustedBy from "@/components/TrustedBy";
import Problem from "@/components/Problem";
import EnquiryQuestions from "@/components/EnquiryQuestions";
import LeakMath from "@/components/LeakMath";
import WhoItsFor from "@/components/WhoItsFor";
import WhatFixes from "@/components/WhatFixes";
import HowItWorks from "@/components/HowItWorks";
import WhyApart from "@/components/WhyApart";
import Founder from "@/components/Founder";
import FinalCTA from "@/components/FinalCTA";
import EmailCapture from "@/components/EmailCapture";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <TrustedBy />
        <Problem />
        <EnquiryQuestions />
        <LeakMath />
        <WhoItsFor />
        <WhatFixes />
        <HowItWorks />
        <WhyApart />
        <Founder />
        <FinalCTA />
        <EmailCapture />
      </main>
      <Footer />
    </>
  );
}
