import type { ComponentData } from "@/app/aura/data/components/types";
import {
  TabsContent,
  TabsList,
  TabsRoot,
  TabsTrigger,
} from "@/components/tabs";

export const tabs: ComponentData = {
  demo: (
    <TabsRoot className="w-full max-w-64" defaultValue="account">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        Make changes to your account here.
      </TabsContent>
      <TabsContent value="password">Change your password here.</TabsContent>
    </TabsRoot>
  ),
  description:
    "Organizes content into separate views where only one panel is visible at a time.",
  name: "tabs",
  sourceUrl:
    "https://github.com/chrisgrabinski/chrisgrabinski.com/blob/main/src/components/tabs.tsx",
  storybookUrl: "https://storybook.chrisgrabinski.com/?path=/docs/tabs--docs",
  title: "Tabs",
};
