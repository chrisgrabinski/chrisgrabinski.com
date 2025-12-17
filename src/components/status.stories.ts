import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Status } from "./status";

const meta = {
  args: {
    children: "Neutral",
    level: 0,
  },
  component: Status,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Status",
} satisfies Meta<typeof Status>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Neutral: Story = {};

export const Positive: Story = {
  args: {
    level: 1,
  },
};

export const Attention: Story = {
  args: {
    level: 2,
  },
};

export const Negative: Story = {
  args: {
    level: 3,
  },
};

export const Critical: Story = {
  args: {
    level: 4,
  },
};
