import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const fontSans = localFont({
  src: "./fonts/Maison-Regular.woff2",
  variable: "--font-sans",
});

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
  return (
    <html
      className={`${fontSans.variable} bg-background font-sans text-foreground antialiased`}
      lang="en"
    >
      <body>{children}</body>
    </html>
  );
}
