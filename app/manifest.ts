import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Bits&Bytes Noida",
    short_name: "B&B Noida",
    description: "A teen-led operational unit of the bits&bytes™ network for builders in Noida.",
    start_url: "/",
    display: "standalone",
    background_color: "#120f0a",
    theme_color: "#5b0f1a",
    icons: [{ src: "/logo.png", sizes: "512x512", type: "image/png" }],
  };
}
