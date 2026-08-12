import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events in Noida",
  description: "Workshops, hackathons, meetups, and community events hosted by Bits&Bytes Noida.",
  keywords: ["Noida coding events", "Noida hackathons", "teen workshops Noida", "student developer events Noida"],
  alternates: { canonical: "https://noida.gobitsnbytes.org/events" },
  openGraph: {
    title: "Events in Noida | Bits&Bytes Noida",
    description: "Workshops, hackathons, meetups, and community events hosted by Bits&Bytes Noida.",
    url: "https://noida.gobitsnbytes.org/events",
  },
};

export default function EventsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
