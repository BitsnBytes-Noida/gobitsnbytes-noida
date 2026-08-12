import type { Metadata } from "next";
import HomePage from "@/components/home/HomePage";

export const metadata: Metadata = {
  title: "Teen Builders in Noida",
  description: "Build and ship publicly with a teen-led community for builders in Noida.",
  alternates: { canonical: "https://noida.gobitsnbytes.org/" },
  openGraph: {
    title: "Teen Builders in Noida | Bits&Bytes Noida",
    description: "Build and ship publicly with a teen-led community for builders in Noida.",
    url: "https://noida.gobitsnbytes.org/",
  },
};

export default function Home() {
  return <HomePage />;
}
