import { StarIcon } from "lucide-react";
import { IconBox } from "@/components/icon-box";

const name = "icon-box";

const components = ["icon-box"];

const Component = () => {
  return (
    <IconBox size={4}>
      <StarIcon />
    </IconBox>
  );
};

export const IconBoxDemo = {
  Component,
  components,
  name,
};
