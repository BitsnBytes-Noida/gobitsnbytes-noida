"use client";



import Hero from "@/components/events/varchasva/Hero";
import About from "@/components/events/varchasva/About";
import Gallery from "@/components/events/varchasva/Gallery";
import EventDetails from "@/components/events/varchasva/EventDetails";
import Timeline from "@/components/events/varchasva/Timeline";
import Themes from "@/components/events/varchasva/Themes";
import Prizes from "@/components/events/varchasva/Prizes";
import FAQ from "@/components/events/varchasva/FAQ";
import CTA from "@/components/events/varchasva/CTA";
import PageWrapper from "@/components/effects/PageWrapper";

export default function VarchasvaPage() {
  return (
    <PageWrapper>
      <div className="relative">

        {/* Background Glow */}
        <div className="absolute left-1/2 top-20 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />

        <main className="relative z-10 min-h-screen bg-gradient-to-b from-[#020617]/80 via-[#0f172a]/70 to-[#020617]/80">

          <Hero />

          <About />

          <Gallery />

          <EventDetails />

          <Timeline />

          <Themes />

          <Prizes />

          <FAQ />

          <CTA />

        </main>

      </div>
    </PageWrapper>
  );
}