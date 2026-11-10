import type { Metadata } from "next";

export const metadata: Metadata = {
  description: "Showcase of design system components and patterns. Made by Chris Grabiński.",
  title: "Aura",
};

export default function RootLayout({ children }: LayoutProps<"/aura">) {
  return (
    <>
      <div className="min-h-dvh w-full">{children}</div>
      <div className="pointer-events-none fixed top-1/2 left-1/2 z-10 aspect-square min-h-dvh min-w-dvw -translate-1/2 bg-radial from-accent/5 via-transparent duration-1000" />
      <div className="animate-grain pointer-events-none fixed inset-0 z-30 size-full bg-[url('/aura/grain.png')] bg-repeat opacity-15 transition-all dark:opacity-10 dark:invert" />
    </>
  );
}
