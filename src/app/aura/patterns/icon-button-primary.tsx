import { StarIcon } from "lucide-react";
import { IconButton } from "@/components/icon-button";

const name = "icon-button/primary";

const components = ["icon-button/primary"];

const Component = () => {
  return (
    <IconButton variant="primary">
      <StarIcon />
    </IconButton>
  );
};

export const IconButtonPrimaryDemo = {
  Component,
  components,
  name,
};
