import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { CountryLabel } from "./country-label";

const meta = {
  args: {
    code: "DE",
  },
  component: CountryLabel,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "CountryLabel",
} satisfies Meta<typeof CountryLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const CustomLabel: Story = {
  args: {
    children: "Bundesrepublik Deutschland",
  },
};
