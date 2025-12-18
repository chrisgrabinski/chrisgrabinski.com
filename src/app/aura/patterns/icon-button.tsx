import { StarIcon } from "lucide-react";
import { IconButton } from "@/components/icon-button";

const name = "icon-button";

const components = ["icon-button"];

const Component = () => {
  return (
    <IconButton>
      <StarIcon />
    </IconButton>
  );
};

export const IconButtonDemo = {
  Component,
  components,
  name,
};
