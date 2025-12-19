import { ShoppingBagIcon, XIcon } from "lucide-react";
import type { ModuleData } from "@/app/aura/data/modules/types";
import { Button } from "@/components/button";
import { Card } from "@/components/card";
import { IconBox } from "@/components/icon-box";
import { IconButton } from "@/components/icon-button";

export const announcement: ModuleData = {
  components: ["card", "icon-box", "icon-button", "button"],
  demo: (
    <Card
      className="relative flex items-center gap-3 p-4 pr-12 shadow-lg sm:pr-4"
      variant="glass"
    >
      <IconBox className="shrink-0 self-start">
        <ShoppingBagIcon />
      </IconBox>
      <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-6">
        <div>
          <div className="font-medium text-sm">Shop smarter this season</div>
          <div className="text-neutral-600 text-sm">
            Lean back and enjoy a cup of hot cocoa while our agent finds the
            best gifts.
          </div>
        </div>
        <Button className="shrink-0" size={2}>
          Try it
        </Button>
      </div>
      <IconButton
        aria-label="Close"
        className="absolute top-2.5 right-2.5 shrink-0 sm:static"
        size={2}
        variant="ghost"
      >
        <XIcon />
      </IconButton>
    </Card>
  ),
  description: "An announcement for a new feature or update.",
  name: "announcement",
  title: "Announcement",
};
