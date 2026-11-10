import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { MiddleTruncate } from "./middle-truncate";

const meta = {
  args: {
    children:
      "LandingPage_HeroSection_V3_final_FINALreallyFINAL_ApprovedByClient_SaturdayNightEdit_20240614_v2_finalfinal_(do-not-use-this-one)_MergedLayers.psd",
  },
  component: MiddleTruncate,
  decorators: [
    (Story) => (
      <div style={{ maxWidth: "320px" }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "MiddleTruncate",
} satisfies Meta<typeof MiddleTruncate>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
