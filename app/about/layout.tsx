import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Bits&Bytes Noida | Team",
  description:
    "Bits&Bytes Noida is the teen-led Noida operational unit of the bits&bytes™ network. Meet the local team.",
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
    description: "Meet the team running the Noida operational unit of the bits&bytes™ network.",
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
