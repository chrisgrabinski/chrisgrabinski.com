import type { Metadata } from "next";
import Link from "next/link";
import { AuraLogo } from "@/app/aura/aura-logo";
import { Navigation } from "@/app/aura/navigation";
import { Sidebar } from "@/app/aura/sidebar";
import { SmallNavigation } from "@/app/aura/small-navigation";

export const metadata: Metadata = {
  description:
    "Showcase of design system components and patterns. Made by Chris Grabiński.",
  title: "Aura",
};

export default function RootLayout({ children }: LayoutProps<"/aura">) {
  return (
    <div className="flex min-h-dvh flex-col">
      <header className="sticky top-0 z-10 flex items-center justify-between bg-linear-180 from-background via-background/60 p-4 md:p-8">
        <Link className="grid h-8 place-items-center" href="/aura">
          <AuraLogo className="h-7" />
        </Link>
        <SmallNavigation />
      </header>
      <div className="flex grow justify-between gap-8 p-4 md:p-8">
        <nav className="hidden w-48 md:block">
          <div className="-mx-2">
            <Navigation />
          </div>
        </nav>
        <main className="grow xl:max-w-4xl">{children}</main>
        <div className="hidden w-48 xl:block" />
      </div>
    </div>
  );
}
