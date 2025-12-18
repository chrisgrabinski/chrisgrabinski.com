import { Button } from "@/components/button";

const name = "button/primary";

const components = ["button/primary"];

const Component = () => {
  return <Button variant="primary">You must click me</Button>;
};

export const ButtonPrimaryDemo = {
  Component,
  components,
  name,
};
