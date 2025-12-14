import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const fontSans = localFont({
  src: "./fonts/Maison-Regular.woff2",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Chris Grabiński — Frontend Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={`${fontSans.className} antialiased`} lang="en">
      <body>{children}</body>
    </html>
  );
}
