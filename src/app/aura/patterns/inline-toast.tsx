import { InlineToast } from "@/components/inline-toast";

const name = "inline-toast";

const components = ["inline-toast"];

const Component = () => {
  return (
    <InlineToast message="Ta-da!">
      Something happens when you click me
    </InlineToast>
  );
};

export const InlineToastDemo = {
  Component,
  components,
  name,
};
