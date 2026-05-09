import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Bits&Bytes Noida",
  description:
    "Get in touch with the Bits&Bytes Noida fork. Schools, sponsors, mentors, students.",
  keywords: [
    "Bits&Bytes Noida contact",
    "teen code club noida",
    "noida coding community email",
  ],
  alternates: {
    canonical: "https://noida.gobitsnbytes.org/contact",
  },
  openGraph: {
    title: "Contact Bits&Bytes Noida",
    description: "Get in touch with the Bits&Bytes Noida fork.",
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
