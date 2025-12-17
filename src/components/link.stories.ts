import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Link } from "./link";

const meta = {
  args: {
    children: "A standard link",
    href: "#",
  },
  component: Link,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Link",
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
