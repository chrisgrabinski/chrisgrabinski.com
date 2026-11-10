import Link from "next/link";
import { AuraLogo } from "@/app/aura/aura-logo";
import { Navigation } from "@/app/aura/navigation";
import {
  AppShellMain,
  AppShellPanel,
  AppShellPanelToggle,
  AppShellRoot,
} from "@/components/app-shell";

export default function RootLayout({ children }: LayoutProps<"/aura">) {
  return (
    <AppShellRoot>
      <AppShellPanel>
        <div className="flex w-3xs shrink-0 flex-col rounded-lg p-2 max-md:bg-background/50 max-md:backdrop-blur-md max-md:backdrop-saturate-200">
          <div className="flex h-16 items-center justify-between gap-8">
            <Link
              className="grid h-8 place-items-center rounded-action focus-visible:focus-ring"
              href="/aura"
            >
              <AuraLogo className="h-7" />
            </Link>
            <AppShellPanelToggle className="*:size-5 md:hidden" />
          </div>
          <div className="grow scrollbar-thin scrollbar-thumb-accent/10 scrollbar-track-transparent scrollbar-gutter-stable overflow-y-auto py-4">
            <nav>
              <Navigation />
            </nav>
          </div>
        </div>
      </AppShellPanel>
      <AppShellMain>{children}</AppShellMain>
    </AppShellRoot>
  );
}
