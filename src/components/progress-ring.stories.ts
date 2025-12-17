import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ProgressRing } from "./progress-ring";

const meta = {
  args: {
    max: 1,
    size: 4,
    value: 0.5,
    variant: "solid",
  },
  component: ProgressRing,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "ProgressRing",
} satisfies Meta<typeof ProgressRing>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Gradient: Story = {
  args: {
    variant: "gradient",
  },
};
