import type { Metadata } from "next";

import { Sidebar } from "@/app/aura/sidebar";
import { SmallNavigation } from "@/app/aura/small-navigation";

export const metadata: Metadata = {
  description:
    "Showcase of design system components and patterns. Made by Chris Grabiński.",
  title: "Aura",
};

export default function RootLayout({ children }: LayoutProps<"/aura">) {
  return (
    <div className={`min-h-dvh pt-22 antialiased lg:flex lg:pt-0`}>
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
