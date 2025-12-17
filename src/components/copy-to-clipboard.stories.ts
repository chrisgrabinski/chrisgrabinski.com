import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { fn } from "storybook/test";
import { CopyToClipboard } from "./copy-to-clipboard";

const meta = {
  args: {
    children: "Click to copy this text",
    onCopy: fn(),
  },
  component: CopyToClipboard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "CopyToClipboard",
} satisfies Meta<typeof CopyToClipboard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
