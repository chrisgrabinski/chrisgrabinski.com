import { ShieldIcon } from "lucide-react";
import type { ComponentData } from "@/app/aura/data/components/types";
import { Card } from "@/components/card";
import {
  TabsContent,
  TabsList,
  TabsRoot,
  TabsTrigger,
} from "@/components/tabs";

export const tabs: ComponentData = {
  demo: (
    <Card className="min-w-md">
      <TabsRoot defaultValue="profile">
        <TabsList>
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
          <TabsTrigger value="security">
            <ShieldIcon />
            Security
          </TabsTrigger>
        </TabsList>
        <TabsContent value="profile">Profile content</TabsContent>
        <TabsContent value="settings">Settings content</TabsContent>
        <TabsContent value="security">Security content</TabsContent>
      </TabsRoot>
    </Card>
  ),
  description:
    "An interactive input for selecting numeric values by dragging along a continuous range.",
  name: "tabs",
  sourceUrl:
    "https://github.com/chrisgrabinski/chrisgrabinski.com/blob/main/src/components/tabs.tsx",
  title: "Tabs",
};
