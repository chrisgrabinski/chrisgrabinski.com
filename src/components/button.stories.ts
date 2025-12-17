import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { fn } from "storybook/test";

import { Button } from "./button";

const meta = {
  args: {
    children: "Click me",
    onClick: fn(),
    size: 3,
    variant: "secondary",
  },
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Button",
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Primary: Story = {
  args: {
    variant: "primary",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
  },
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
  },
};
