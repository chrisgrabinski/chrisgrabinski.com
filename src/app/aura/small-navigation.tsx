"use client";

import { MenuIcon, XIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { AuraLogo } from "@/app/aura/aura-logo";
import { Navigation } from "@/app/aura/navigation";
import { IconButton } from "@/components/icon-button";
import { ScrollArea } from "@/components/scroll-area";
import { cn } from "@/lib/styles";

export const SmallNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={cn(
        "fixed inset-x-0 top-0 z-50 flex h-22 flex-col",
        isOpen && "h-dvh bg-background",
      )}
    >
      <div className="mx-auto flex h-full w-full max-w-4xl flex-1 flex-col">
        <header className="relative flex w-full items-center justify-between bg-linear-to-b from-background via-background/90 p-6">
          <Link href="/aura">
            <AuraLogo className="text-2xl" />
          </Link>
          <IconButton onClick={() => setIsOpen(!isOpen)} variant="ghost">
            {isOpen ? <XIcon /> : <MenuIcon />}
          </IconButton>
        </header>
        {isOpen && (
          <ScrollArea className="flex-1 bg-background px-3">
            <div className="px-3">
              <Navigation onSelect={() => setIsOpen(false)} />
            </div>
          </ScrollArea>
        )}
      </div>
    </div>
  );
};
