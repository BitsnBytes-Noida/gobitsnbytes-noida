import { socialLinks } from "./socials";

export const contactMethods = [
  {
    title: "Email",
    href: `mailto:${socialLinks.email}`,
    heading: socialLinks.email,
    description:
      "Best for partnerships, collaborations and general inquiries.",
    external: false,
  },
  {
    title: "Discord",
    href: socialLinks.discord,
    heading: "Join the Community",
    description:
      "Meet builders, share ideas and stay updated.",
    external: true,
  },
  {
    title: "Instagram",
    href: socialLinks.instagram,
    heading: "@gobitsnbytes.noida",
    description:
      "Updates, announcements and community highlights.",
    external: true,
  },
];