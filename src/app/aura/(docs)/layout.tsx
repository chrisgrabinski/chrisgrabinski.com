import Link from "next/link";
import { AuraLogo } from "@/app/aura/aura-logo";
import { Navigation } from "@/app/aura/navigation";

import { SmallNavigation } from "@/app/aura/small-navigation";
import { ThemeSwitcher } from "@/app/aura/theme-switcher";

export default function RootLayout({ children }: LayoutProps<"/aura">) {
  return (
    <div className="relative z-10 flex min-h-full w-full flex-col gap-4">
      <header className="sticky top-0 z-10">
        <div className="relative z-10 flex h-18 items-center justify-between gap-8 px-4 md:px-8">
          <Link
            className="focus-visible:focus-ring grid h-8 place-items-center rounded-action"
            href="/aura"
          >
            <AuraLogo className="h-7" />
          </Link>
          <div className="flex items-center gap-2">
            <ThemeSwitcher />
            <SmallNavigation />
          </div>
        </div>
        <div className="mask-b-from-25% mask-b-to-100% fixed inset-x-0 top-0 h-18 bg-linear-to-b from-background/80 to-transparent backdrop-blur-sm backdrop-saturate-200" />
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
