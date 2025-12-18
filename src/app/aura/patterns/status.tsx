import { Status } from "@/components/status";

const name = "status";

const components = ["status"];

const Component = () => {
  return <Status level={0}>Error</Status>;
};

export const StatusDemo = {
  Component,
  components,
  name,
};
