import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { fn } from "storybook/test";
import { CopyText } from "./copy-text";

const meta = {
  args: {
    children: "Click to copy this text",
    onCopy: fn(),
  },
  component: CopyText,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "CopyText",
} satisfies Meta<typeof CopyText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
