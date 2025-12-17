import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { fn } from "storybook/test";
import { InlineToast } from "./inline-toast";

const meta = {
  args: {
    children: "When you click me, something happens...",
    message: "Ta-da! ✨",
    onClick: fn(),
  },
  component: InlineToast,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "InlineToast",
} satisfies Meta<typeof InlineToast>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
