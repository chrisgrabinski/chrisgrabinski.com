"use client";

import { MenuIcon, XIcon } from "lucide-react";
import { useState } from "react";
import { Navigation } from "@/app/aura/navigation";
import { IconButton } from "@/components/icon-button";
import { ScrollArea } from "@/components/scroll-area";

export const SmallNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <IconButton
        aria-label="Toggle menu"
        className="relative z-10 md:hidden"
        onClick={() => setIsOpen(!isOpen)}
        size={2}
      >
        {isOpen ? <XIcon /> : <MenuIcon />}
      </IconButton>
      {isOpen && (
        <div className="fixed inset-0 flex flex-col bg-background p-4">
          <div className="h-12" />
          <ScrollArea className="flex-1">
            <div className="px-3 pb-12">
              <Navigation onSelect={() => setIsOpen(false)} />
            </div>
          </ScrollArea>
        </div>
      )}
    </>
  );
};
