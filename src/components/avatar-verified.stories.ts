import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { VerifiedAvatar } from "./avatar-verified";

const meta = {
  args: {
    fallback: "Chris Grabiński",
    size: 8,
    src: "/chris-grabinski.jpg",
  },
  component: VerifiedAvatar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "VerifiedAvatar",
} satisfies Meta<typeof VerifiedAvatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithFallback: Story = {
  args: {
    src: undefined,
  },
};
