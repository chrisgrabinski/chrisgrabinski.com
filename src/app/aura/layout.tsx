import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Sidebar } from "@/app/aura/sidebar";
import { SmallNavigation } from "@/app/aura/small-navigation";

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
      className={`${geistSans.variable} ${geistMono.variable} min-h-dvh bg-white pt-22 font-sans text-neutral-900 antialiased lg:flex lg:pt-0`}
    >
      <div className="lg:hidden">
        <SmallNavigation />
      </div>
      <div className="hidden w-64 shrink-0 lg:block">
        <Sidebar />
      </div>
      <main className="mx-auto max-w-4xl flex-1 p-6">{children}</main>
      <div className="hidden w-64 2xl:block" />
    </div>
  );
}
