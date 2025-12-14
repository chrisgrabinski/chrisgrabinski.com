import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import { AuraLogo } from "@/app/aura/aura-logo";

export const AuraCard = () => {
  return (
    <Link
      className="group/aura-card relative mt-12 flex w-72 items-center gap-12 rounded-xl bg-foreground bg-linear-to-r from-black/50 p-4 align-middle text-background"
      href="/aura"
    >
      <div className="grid flex-1 gap-1.5">
        <AuraLogo className="text-lg" />
        <p className="relative text-sm leading-none">Components showcase</p>
      </div>
      <div className="shrink-0">
        <ChevronRightIcon className="opacity-75 transition group-hover/aura-card:opacity-100" />
      </div>

      <div className="aura-gradient aura-gradient-animation -z-10 absolute inset-0 rounded-xl opacity-50 blur-xl saturate-200 transition duration-300 group-hover/aura-card:opacity-75" />
      <div className="aura-gradient aura-gradient-animation -z-10 -inset-0.5 absolute rounded-xl opacity-30 blur-xs saturate-200 transition duration-200 group-hover/aura-card:opacity-50" />
    </Link>
  );
};
