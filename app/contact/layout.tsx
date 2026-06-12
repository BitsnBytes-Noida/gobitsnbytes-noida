import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Bits&Bytes Noida",
  description:
    "Get in touch with Bits&Bytes Noida. Connect with our team through email, Discord, or Instagram for collaborations, partnerships, and community discussions.",
  keywords: [
    "Bits&Bytes Noida",
    "contact Bits&Bytes Noida",
    "builder community noida",
    "student developer community noida",
    "discord community noida",
    "teen developers noida",
  ],
  alternates: {
    canonical: "https://noida.gobitsnbytes.org/contact",
  },
  openGraph: {
    title: "Contact Bits&Bytes Noida",
    description:
      "Questions, ideas, partnerships, or want to build something? Get in touch with the Bits&Bytes Noida community.",
    url: "https://noida.gobitsnbytes.org/contact",
    type: "website",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
