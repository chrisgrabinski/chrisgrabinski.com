import { Status } from "@/components/status";

const name = "status-1";

const components = ["status"];

const Component = () => {
  return <Status level={1}>Complete</Status>;
};

export const Status1Demo = {
  Component,
  components,
  name,
};
