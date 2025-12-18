import { Status } from "@/components/status";

const name = "status-2";

const components = ["status"];

const Component = () => {
  return <Status level={2}>Warning</Status>;
};

export const Status2Demo = {
  Component,
  components,
  name,
};
