import "../styles/globals.css";
import type { Metadata } from "next";
import ClientLayout from "@/components/layout/ClientLayout";
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
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
