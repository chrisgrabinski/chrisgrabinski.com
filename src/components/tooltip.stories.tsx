import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { TooltipContent, TooltipRoot, TooltipTrigger } from "./tooltip";

const meta = {
  args: {
    children: "Additional information about the trigger",
  },
  component: TooltipRoot,
  parameters: {
    layout: "centered",
  },
  render: ({ children, ...args }) => (
    <TooltipRoot {...args}>
      <TooltipTrigger>Trigger label</TooltipTrigger>
      <TooltipContent>{children}</TooltipContent>
    </TooltipRoot>
  ),
  subcomponents: { TooltipContent, TooltipTrigger },
  tags: ["autodocs"],
  title: "Tooltip",
} satisfies Meta<typeof TooltipRoot>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
