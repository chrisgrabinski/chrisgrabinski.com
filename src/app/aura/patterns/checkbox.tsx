import { CheckboxIndicator, CheckboxRoot } from "@/components/checkbox";

const name = "checkbox";

const components = ["checkbox"];

const Component = () => {
  return (
    <CheckboxRoot>
      <CheckboxIndicator />
      Accept terms and conditions
    </CheckboxRoot>
  );
};

export const CheckboxDemo = {
  Component,
  components,
  name,
};
