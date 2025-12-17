import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { CountryAvatar } from "./avatar-country";

const meta = {
  args: {
    code: "DE",
    fallback: "Chris Grabiński",
    size: 8,
    src: "/chris-grabinski.jpg",
  },
  component: CountryAvatar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "CountryAvatar",
} satisfies Meta<typeof CountryAvatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithFallback: Story = {
  args: {
    src: undefined,
  },
};
