import type { ComponentData } from "@/app/aura/data/components/types";
import { CheckboxIndicator, CheckboxRoot } from "@/components/checkbox";

export const checkbox: ComponentData = {
  demo: (
    <CheckboxRoot defaultChecked>
      <CheckboxIndicator />
      Accept terms and conditions
    </CheckboxRoot>
  ),
  description:
    "An interactive control that allows users to select or deselect options with a checkmark indicator.",
  name: "checkbox",
  sourceUrl:
    "https://github.com/chrisgrabinski/chrisgrabinski.com/blob/main/src/components/checkbox.tsx",
  storybookUrl:
    "https://storybook.chrisgrabinski.com/?path=/docs/checkbox--docs",
  title: "Checkbox",
};
