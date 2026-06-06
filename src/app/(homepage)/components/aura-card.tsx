import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import { AuraLogo } from "@/app/aura/aura-logo";
import { Card } from "@/components/card";

export const AuraCard = () => {
  return (
    <Card
      asChild
      className="group/aura-card relative mt-12 flex w-72 items-center gap-12 p-4 align-middle"
    >
      <Link href="/aura">
        <div className="grid flex-1 gap-2">
          <AuraLogo className="text-lg" />
          <p className="relative text-sm leading-none">Components showcase</p>
        </div>
        <div className="shrink-0">
          <ChevronRightIcon className="text-foreground-muted transition group-hover/aura-card:text-foreground" />
        </div>
        <div className="aura-gradient aura-gradient-animation absolute inset-0 -z-10 rounded-xl opacity-50 blur-xl saturate-200 transition duration-300 group-hover/aura-card:opacity-75" />
        <div className="aura-gradient aura-gradient-animation absolute -inset-0.5 -z-10 rounded-xl opacity-30 blur-xs saturate-200 transition duration-200 group-hover/aura-card:opacity-50" />
      </Link>
    </Card>
  );
};
