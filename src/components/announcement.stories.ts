import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ShoppingBagIcon } from "lucide-react";
import { fn } from "storybook/test";
import { Announcement } from "./announcement";

const meta = {
  args: {
    buttonLabel: "Try it",
    description:
      "Lean back and enjoy a cup of hot cocoa while our agent finds the best gifts.",
    icon: ShoppingBagIcon,
    onClick: fn(),
    onClose: fn(),
    title: "Shop smarter this season",
  },
  component: Announcement,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Announcement",
} satisfies Meta<typeof Announcement>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
