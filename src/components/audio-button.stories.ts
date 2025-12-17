import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { fn } from "storybook/test";

import { AudioButton } from "./audio-button";

const meta = {
  args: {
    onEnd: fn(),
    onLoad: fn(),
    onPause: fn(),
    onPlay: fn(),
    onStop: fn(),
    src: "/aura/audio-medium.mp3",
  },
  component: AudioButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "AudioButton",
} satisfies Meta<typeof AudioButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
