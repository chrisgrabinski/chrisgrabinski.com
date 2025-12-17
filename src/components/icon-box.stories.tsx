import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { StarIcon } from "lucide-react";
import { IconBox } from "./icon-box";

const meta = {
  args: {
    children: <StarIcon />,
  },
  component: IconBox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "IconBox",
} satisfies Meta<typeof IconBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
