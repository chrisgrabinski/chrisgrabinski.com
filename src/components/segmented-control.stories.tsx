import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import {
  SegmentedControlItem,
  SegmentedControlRoot,
} from "./segmented-control";

const meta = {
  args: {
    defaultValue: "desktop",
  },
  component: SegmentedControlRoot,
  parameters: {
    layout: "centered",
  },
  render: ({ children, ...args }) => (
    <SegmentedControlRoot {...args}>
      <SegmentedControlItem value="mobile">Mobile</SegmentedControlItem>
      <SegmentedControlItem value="tablet">Tablet</SegmentedControlItem>
      <SegmentedControlItem value="desktop">Desktop</SegmentedControlItem>
    </SegmentedControlRoot>
  ),
  subcomponents: { SegmentedControlItem },
  tags: ["autodocs"],
  title: "SegmentedControl",
} satisfies Meta<typeof SegmentedControlRoot>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
