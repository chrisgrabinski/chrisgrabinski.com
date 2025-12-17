import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Avatar } from "./avatar";

const meta = {
  args: {
    fallback: "Chris Grabiński",
    size: 8,
    src: "/chris-grabinski.jpg",
  },
  component: Avatar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Avatar",
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithFallback: Story = {
  args: {
    src: undefined,
  },
};
