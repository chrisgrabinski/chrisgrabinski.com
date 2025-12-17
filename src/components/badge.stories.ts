import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Badge } from "./badge";

const meta = {
  args: {
    children: "Admin",
  },
  component: Badge,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Badge",
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
