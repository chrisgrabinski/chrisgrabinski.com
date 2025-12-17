import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { StarIcon } from "lucide-react";
import { fn } from "storybook/test";
import { IconButton } from "./icon-button";

const meta = {
  args: {
    children: <StarIcon />,
    onClick: fn(),
    size: 3,
    variant: "secondary",
  },
  component: IconButton,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],
  title: "IconButton",
} satisfies Meta<typeof IconButton>;

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

export const Ghost: Story = {
  args: {
    variant: "ghost",
  },
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
  },
};
