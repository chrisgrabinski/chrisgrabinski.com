import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { TabsContent, TabsList, TabsRoot, TabsTrigger } from "./tabs";

const meta = {
  args: {
    defaultValue: "account",
  },
  component: TabsRoot,
  parameters: {
    layout: "centered",
  },
  render: (args) => (
    <TabsRoot {...args}>
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
        <TabsTrigger value="notifications">Notifications</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        Make changes to your account here.
      </TabsContent>
      <TabsContent value="password">Change your password here.</TabsContent>
      <TabsContent value="notifications">
        Manage your notification preferences here.
      </TabsContent>
    </TabsRoot>
  ),
  subcomponents: { TabsContent, TabsList, TabsTrigger },
  tags: ["autodocs"],
  title: "Tabs",
} satisfies Meta<typeof TabsRoot>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
