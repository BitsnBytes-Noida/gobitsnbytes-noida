"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Spotlight from "@/components/effects/Spotlight";
import GridBackground from "@/components/effects/GridBackground";
import OpeningLoader from "./OpeningLoader";


export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("loaderShown");

    if (hasVisited) {
      setLoading(false);
      return;
    }

    sessionStorage.setItem("loaderShown", "true");

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <OpeningLoader />;
  }

  return (
    <>
      <Navbar />
      <GridBackground />
      <Spotlight />
      <main>{children}</main>
      <Footer />
    </>
  );
}