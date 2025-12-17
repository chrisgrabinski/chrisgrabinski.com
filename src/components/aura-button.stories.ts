import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { fn } from "storybook/test";

import { AuraButton } from "./aura-button";

const meta = {
  args: {
    children: "Ask Aura",
    onClick: fn(),
  },
  component: AuraButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "AuraButton",
} satisfies Meta<typeof AuraButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
