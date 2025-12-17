import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Slider } from "./slider";

const meta = {
  args: {
    defaultValue: [50],
  },
  component: Slider,
  decorators: [
    (Story) => (
      <div style={{ minWidth: "256px" }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Slider",
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
