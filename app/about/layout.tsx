import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Bits&Bytes Noida | Team",
  description:
    "Bits&Bytes Noida is a city fork of Bits&Bytes. Meet the team behind the Noida fork.",
  keywords: [
    "Bits&Bytes Noida",
    "teen developers noida",
    "student coding community noida",
    "builder community noida",
  ],
  alternates: {
    canonical: "https://noida.gobitsnbytes.org/about",
  },
  openGraph: {
    title: "About Bits&Bytes Noida",
    description: "Meet the team behind the Noida fork of Bits&Bytes.",
    url: "https://noida.gobitsnbytes.org/about",
    type: "website",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
