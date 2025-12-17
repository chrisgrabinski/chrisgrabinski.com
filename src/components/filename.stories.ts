import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Filename } from "./filename";

const meta = {
  args: {
    children:
      "LandingPage_HeroSection_V3_final_FINALreallyFINAL_ApprovedByClient_SaturdayNightEdit_20240614_v2_finalfinal_(do-not-use-this-one)_MergedLayers.psd",
  },
  component: Filename,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Filename",
} satisfies Meta<typeof Filename>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
