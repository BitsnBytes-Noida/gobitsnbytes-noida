import "../styles/globals.css";
import type { Metadata } from "next";
import ClientLayout from "@/components/layout/ClientLayout";
export const metadata: Metadata = {
  metadataBase: new URL("https://noida.gobitsnbytes.org"),
  title: {
    default: "Bits&Bytes Noida | Teen Builders in Noida",
    template: "%s | Bits&Bytes Noida",
  },
  description:
    "Bits&Bytes Noida is a teen-led operational unit of the bits&bytes™ network where builders in Noida build and ship publicly. innovate. collaborate. hack.",
  applicationName: "Bits&Bytes Noida",
  keywords: [
    "Bits&Bytes Noida",
    "teen builders Noida",
    "teen developers Noida",
    "student coding community Noida",
    "hackathons Noida",
    "coding events Noida",
    "build in public Noida",
    "teen-led community India",
  ],
  authors: [{ name: "Bits&Bytes Noida", url: "https://noida.gobitsnbytes.org" }],
  creator: "Bits&Bytes Noida",
  publisher: "Bits&Bytes Noida",
  alternates: { canonical: "https://noida.gobitsnbytes.org" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://noida.gobitsnbytes.org",
    siteName: "Bits&Bytes Noida",
    title: "Bits&Bytes Noida | Teen Builders in Noida",
    description: "A teen-led city fork for builders in Noida who build and ship publicly.",
    images: [{ url: "/logo.png", width: 512, height: 512, alt: "Bits&Bytes Noida" }],
  },
  twitter: {
    card: "summary",
    title: "Bits&Bytes Noida | Teen Builders in Noida",
    description: "A teen-led city fork for builders in Noida who build and ship publicly.",
    images: ["/logo.png"],
  },
  icons: { icon: "/logo.png", shortcut: "/logo.png", apple: "/logo.png" },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#120f0a] font-sans text-[#f8fafc] antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Bits&Bytes Noida",
              url: "https://noida.gobitsnbytes.org",
              email: "noida@gobitsnbytes.org",
              sameAs: [
                "https://github.com/gobitsnbytes-noida",
                "https://www.instagram.com/gobitsnbytes.noida/",
              ],
              parentOrganization: {
                "@type": "Organization",
                name: "GOBITSNBYTES FOUNDATION",
                url: "https://gobitsnbytes.org",
              },
            }),
          }}
        />
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
