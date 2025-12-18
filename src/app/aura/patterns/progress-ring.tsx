import { ProgressRing } from "@/components/progress-ring";

const name = "progress-ring";

const components = ["progress-ring"];

const Component = () => {
  return <ProgressRing size={6} value={0.65} />;
};

export const ProgressRingDemo = {
  Component,
  components,
  name,
};
