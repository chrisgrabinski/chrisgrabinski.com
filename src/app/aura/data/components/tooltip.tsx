import { InfoIcon } from "lucide-react";
import type { ComponentData } from "@/app/aura/data/components/types";
import { IconButton } from "@/components/icon-button";
import {
  TooltipContent,
  TooltipRoot,
  TooltipTrigger,
} from "@/components/tooltip";

export const tooltip: ComponentData = {
  demo: (
    <TooltipRoot>
      <TooltipTrigger asChild>
        <IconButton aria-label="More information">
          <InfoIcon />
        </IconButton>
      </TooltipTrigger>
      <TooltipContent>Additional information about the trigger.</TooltipContent>
    </TooltipRoot>
  ),
  description:
    "Displays contextual information in a floating popup when hovering over or focusing on an element.",
  name: "tooltip",
  sourceUrl:
    "https://github.com/chrisgrabinski/chrisgrabinski.com/blob/main/src/components/tooltip.tsx",
  storybookUrl:
    "https://storybook.chrisgrabinski.com/?path=/docs/tooltip--docs",
  title: "Tooltip",
};
