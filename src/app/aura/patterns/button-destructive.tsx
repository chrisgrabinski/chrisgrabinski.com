import { TrashIcon } from "lucide-react";
import { Button } from "@/components/button";

const name = "button/destructive";

const components = ["button/destructive"];

const Component = () => {
  return (
    <Button variant="destructive">
      <TrashIcon /> Delete
    </Button>
  );
};

export const ButtonDestructiveDemo = {
  Component,
  components,
  name,
};
