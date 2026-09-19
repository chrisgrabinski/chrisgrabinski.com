import type { Metadata } from "next";

export const metadata: Metadata = {
  description:
    "Showcase of design system components and patterns. Made by Chris Grabiński.",
  title: "Aura",
};

export default function RootLayout({ children }: LayoutProps<"/aura">) {
  return (
    <>
      <div className="relative z-20 min-h-dvh w-full">{children}</div>
      <div className="-translate-1/2 pointer-events-none fixed top-1/2 left-1/2 z-10 aspect-square min-h-dvh min-w-dvw bg-radial from-accent/5 via-transparent duration-1000" />
      <div className="pointer-events-none fixed inset-0 z-30 size-full animate-grain bg-[url('/aura/grain.png')] bg-repeat opacity-15 transition-all dark:opacity-10 dark:invert" />
      <div className="mask-t-from-25% mask-t-to-100% pointer-events-none fixed inset-x-0 bottom-0 z-20 h-18 bg-linear-to-t from-background/80 to-transparent backdrop-blur-sm backdrop-saturate-200" />
    </>
  );
}
