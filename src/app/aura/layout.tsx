import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Sidebar } from "@/app/aura/sidebar";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  description:
    "Showcase of design system components and patterns. Made by Chris Grabiński.",
  title: "Aura",
};

export default function RootLayout({ children }: LayoutProps<"/aura">) {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} flex bg-neutral-100 font-sans text-neutral-900 antialiased`}
    >
      <Sidebar />
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
