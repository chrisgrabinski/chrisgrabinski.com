import { Slider } from "@/components/slider";

const name = "slider";

const components = ["slider"];

const Component = () => {
  return <Slider defaultValue={[50]} />;
};

export const SliderDemo = {
  Component,
  components,
  name,
};
