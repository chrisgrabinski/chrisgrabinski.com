import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Breadcrumbs } from "./breadcrumbs";

const meta = {
  args: {
    items: [
      {
        name: "Home",
        url: "#",
      },
      {
        name: "Components",
        url: "#",
      },
      {
        name: "Breadcrumbs",
        url: "#",
      },
    ],
  },
  component: Breadcrumbs,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Breadcrumbs",
} satisfies Meta<typeof Breadcrumbs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const HideCurrent: Story = {
  args: {
    hideCurrent: true,
  },
};

export const IncludeJSONLD: Story = {
  args: {
    includeJsonLd: true,
  },
};
