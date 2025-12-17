import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { fn } from "storybook/test";
import { PlayButton } from "./play-button";

const meta = {
  args: {
    onClick: fn(),
    playing: false,
  },
  component: PlayButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "PlayButton",
} satisfies Meta<typeof PlayButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Idle: Story = {};

export const Playing: Story = {
  args: {
    playing: true,
  },
};
