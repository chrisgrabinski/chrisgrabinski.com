import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { TextLink } from "./text-link";

const meta = {
  args: {
    children: "A standard link",
    href: "#",
  },
  component: TextLink,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "TextLink",
} satisfies Meta<typeof TextLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
