import { GhostIcon } from "lucide-react";
import { IconButton } from "@/components/icon-button";

const name = "icon-button/ghost";

const components = ["icon-button/ghost"];

const Component = () => {
  return (
    <IconButton variant="ghost">
      <GhostIcon />
    </IconButton>
  );
};

export const IconButtonGhostDemo = {
  Component,
  components,
  name,
};
