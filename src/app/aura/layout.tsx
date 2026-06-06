import type { Metadata } from "next";
import localFont from "next/font/local";
import { Sidebar } from "@/app/aura/sidebar";
import { SmallNavigation } from "@/app/aura/small-navigation";

const fontBody = localFont({
  src: "../fonts/Monaspace Neon Var.woff2",
  variable: "--font-sans",
});

const fontMono = localFont({
  src: "../fonts/Monaspace Neon Var.woff2",
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
      className={`${fontBody.variable} ${fontMono.variable} min-h-dvh bg-neutral-950 pt-22 font-light font-sans text-neutral-50 antialiased lg:flex lg:pt-0`}
    >
      <div className="lg:hidden">
        <SmallNavigation />
      </div>
      <div className="hidden w-80 shrink-0 lg:block">
        <Sidebar />
      </div>
      <main className="mx-auto max-w-4xl flex-1 p-6">{children}</main>
      <div className="hidden w-80 2xl:block" />
    </div>
  );
}
