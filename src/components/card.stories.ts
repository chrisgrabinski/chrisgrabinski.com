import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Card } from "./card";

const meta = {
  args: {
    children: "A card component",
    variant: "default",
  },
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Card",
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Glass: Story = {
  args: {
    variant: "glass",
  },
};
