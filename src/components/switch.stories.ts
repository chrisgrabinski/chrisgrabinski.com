import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { fn } from "storybook/test";
import { Switch } from "./switch";

const meta = {
  args: {
    children: "Receive email notifications",
    onCheckedChange: fn(),
    size: 2,
  },
  component: Switch,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Switch",
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
