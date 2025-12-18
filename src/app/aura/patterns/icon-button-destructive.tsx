import { TrashIcon } from "lucide-react";
import { IconButton } from "@/components/icon-button";

const name = "icon-button/destructive";

const components = ["icon-button/destructive"];

const Component = () => {
  return (
    <IconButton variant="destructive">
      <TrashIcon />
    </IconButton>
  );
};

export const IconButtonDestructiveDemo = {
  Component,
  components,
  name,
};
