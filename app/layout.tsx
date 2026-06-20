import "../styles/globals.css";
import type { Metadata } from "next";
import Spotlight from "@/components/effects/Spotlight";
import GridBackground from "@/components/effects/GridBackground";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
export const metadata: Metadata = {
  title: "Bits&Bytes Noida",
  description:
    "Bits&Bytes Noida. A city fork. Teens who build and ship publicly. innovate. collaborate. hack.",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#020617] font-sans text-[#f8fafc] antialiased">
        <Navbar />
        <GridBackground />
        <Spotlight />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
