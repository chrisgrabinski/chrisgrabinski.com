import { StarIcon } from "lucide-react";
import { IconButton } from "@/components/icon-button";
import {
  TooltipContent,
  TooltipRoot,
  TooltipTrigger,
} from "@/components/tooltip";

const name = "tooltip";

const components = ["tooltip"];

const Component = () => {
  return (
    <TooltipRoot>
      <TooltipTrigger asChild>
        <IconButton size={3} variant="ghost">
          <StarIcon />
        </IconButton>
      </TooltipTrigger>
      <TooltipContent>Add to favorites</TooltipContent>
    </TooltipRoot>
  );
};

export const TooltipDemo = {
  Component,
  components,
  name,
};
