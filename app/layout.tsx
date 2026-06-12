
import "../styles/globals.css";
import type { Metadata } from "next";
import Spotlight from "@/components/Spotlight";
import GridBackground from "@/components/GridBackground";
import Navbar from "@/components/Navbar";
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
      <body className=" min-h-screen bg-[#120a1f] font-sans text-[#f4efff] antialiased">
        <Navbar />
        <GridBackground />
        <Spotlight />
        <main>{children}</main>
      </body>
    </html>
  );
}
