import { Card } from "@/components/card";

const name = "card";

const components = ["card"];

const Component = () => {
  return <Card className="block aspect-square p-24" variant="glass"></Card>;
};

export const CardDemo = {
  Component,
  components,
  name,
};
