import { AuraButton } from "@/components/aura-button";

const name = "aura-button";

const components = ["aura-button"];

const Component = () => {
  return <AuraButton size={4}>Ask Aura</AuraButton>;
};

export const AuraButtonDemo = {
  Component,
  components,
  name,
};
