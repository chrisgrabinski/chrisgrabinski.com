import { Status } from "@/components/status";

const name = "status-32";

const components = ["status"];

const Component = () => {
  return <Status level={3}>Error</Status>;
};

export const Status3Demo = {
  Component,
  components,
  name,
};
