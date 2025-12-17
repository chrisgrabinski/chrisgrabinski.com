import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { fn } from "storybook/test";
import { CheckboxIndicator, CheckboxRoot } from "./checkbox";

const meta = {
  args: {
    children: "Accept terms and conditions",
    onCheckedChange: fn(),
  },
  component: CheckboxRoot,
  parameters: {
    layout: "centered",
  },
  render: ({ children, ...args }) => (
    <CheckboxRoot {...args}>
      <CheckboxIndicator />
      {children}
    </CheckboxRoot>
  ),
  subcomponents: { CheckboxIndicator },
  tags: ["autodocs"],
  title: "Checkbox",
} satisfies Meta<typeof CheckboxRoot>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
