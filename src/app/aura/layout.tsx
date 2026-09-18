import type { Metadata } from "next";
import Link from "next/link";
import { AuraLogo } from "@/app/aura/aura-logo";
import { Navigation } from "@/app/aura/navigation";

import { SmallNavigation } from "@/app/aura/small-navigation";
import { ThemeSwitcher } from "@/app/aura/theme-switcher";

export const metadata: Metadata = {
  description:
    "Showcase of design system components and patterns. Made by Chris Grabiński.",
  title: "Aura",
};

export default function RootLayout({ children }: LayoutProps<"/aura">) {
  return (
    <div className="flex min-h-dvh flex-col">
      <header className="sticky top-0 z-10">
        <div className="relative z-10 flex h-18 items-center justify-between bg-linear-180 from-background via-background/60 px-4 md:px-8">
          <Link
            className="focus-visible:focus-ring grid h-8 place-items-center rounded-action"
            href="/aura"
          >
            <AuraLogo className="h-7" />
          </Link>
          <ThemeSwitcher />
          <SmallNavigation />
        </div>
        <div className="mask-b-from-40% mask-b-to-100% absolute inset-0 backdrop-blur-xs backdrop-saturate-200" />
      </header>
      <div className="flex grow justify-between gap-8 px-4 md:px-8">
        <nav className="hidden w-48 shrink-0 md:block">
          <div className="-mx-2">
            <Navigation />
          </div>
        </nav>
        <main className="grow xl:max-w-4xl">{children}</main>
        <div className="hidden w-48 shrink-0 xl:block" />
      </div>
    </div>
  );
}
