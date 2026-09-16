"use client";

import { MenuIcon, XIcon } from "lucide-react";
import { useState } from "react";
import { useMediaQuery } from "usehooks-ts";
import { Navigation } from "@/app/aura/navigation";
import {
  DrawerClose,
  DrawerContent,
  DrawerOverlay,
  DrawerRoot,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/drawer";
import { IconButton } from "@/components/icon-button";
import { ScrollArea } from "@/components/scroll-area";
import { VisuallyHidden } from "@/components/visually-hidden";

export const SmallNavigation = () => {
  const [open, setOpen] = useState(false);
  const matches = useMediaQuery("(min-width: 768px)");

  return (
    <DrawerRoot onOpenChange={setOpen} open={matches ? false : open}>
      <DrawerTrigger asChild>
        <IconButton
          aria-label="Toggle menu"
          className="group relative z-10 md:hidden"
          size={2}
        >
          <XIcon className="group-data-[state=closed]:hidden" />
          <MenuIcon className="group-data-[state=open]:hidden" />
        </IconButton>
      </DrawerTrigger>
      <DrawerOverlay />
      <DrawerContent aria-describedby={undefined} className="max-w-sm pt-0">
        <DrawerTitle asChild>
          <VisuallyHidden>Navigation</VisuallyHidden>
        </DrawerTitle>
        <div className="sticky top-0 z-10 flex h-20 items-center justify-end gap-4 bg-surface">
          <DrawerClose asChild>
            <IconButton aria-label="Toggle menu" className="ml-auto" size={2}>
              <XIcon />
            </IconButton>
          </DrawerClose>
        </div>
        <ScrollArea className="flex-1">
          <div className="px-3 pb-12">
            <Navigation />
          </div>
        </ScrollArea>
      </DrawerContent>
    </DrawerRoot>
  );
};
