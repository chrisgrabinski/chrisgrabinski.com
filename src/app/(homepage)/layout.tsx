import type { Metadata } from "next";

export const metadata: Metadata = {
  description:
    "Working with product teams to deliver beautiful, user‑friendly, and goal‑driven web experiences.",
  title: "Chris Grabiński ・ Frontend Engineer",
  verification: {
    me: "https://mastodon.social/@chrisgrabinski",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
