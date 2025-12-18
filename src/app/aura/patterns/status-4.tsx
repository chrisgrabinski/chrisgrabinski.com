import { Status } from "@/components/status";

const name = "status-4";

const components = ["status"];

const Component = () => {
  return <Status level={4}>Critical</Status>;
};

export const Status4Demo = {
  Component,
  components,
  name,
};
