import { StarIcon } from "lucide-react";
import { IconButton } from "@/components/icon-button";

const name = "icon-button/outline";

const components = ["icon-button/outline"];

const Component = () => {
  return (
    <IconButton variant="outline">
      <StarIcon />
    </IconButton>
  );
};

export const IconButtonOutlineDemo = {
  Component,
  components,
  name,
};
