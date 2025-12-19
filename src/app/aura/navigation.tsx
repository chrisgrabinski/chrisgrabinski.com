"use client";

import * as componentsData from "@/app/aura/data/components";
import * as modulesData from "@/app/aura/data/modules";
import {
  SidebarMenuGroup,
  SidebarMenuItem,
  SidebarMenuRoot,
} from "@/app/aura/sidebar-menu";

const ComponentsMenuGroup = ({ onSelect }: { onSelect?: () => void }) => {
  return (
    <SidebarMenuGroup heading="Components">
      {Object.values(componentsData).map((component) => {
        return (
          <SidebarMenuItem
            // @ts-expect-error - TODO: fix link types
            href={`/aura/components/${component.name}`}
            key={component.name}
            onClick={onSelect}
          >
            {component.title}
          </SidebarMenuItem>
        );
      })}
    </SidebarMenuGroup>
  );
};

const ModulesMenuGroup = ({ onSelect }: { onSelect?: () => void }) => {
  return (
    <SidebarMenuGroup heading="Modules">
      {Object.values(modulesData).map((module) => {
        return (
          <SidebarMenuItem
            // @ts-expect-error - TODO: fix link types
            href={`/aura/modules/${module.name}`}
            key={module.name}
            onClick={onSelect}
          >
            {module.title}
          </SidebarMenuItem>
        );
      })}
    </SidebarMenuGroup>
  );
};

type NavigationProps = {
  onSelect?: () => void;
};

export const Navigation = ({ onSelect }: NavigationProps) => {
  return (
    <SidebarMenuRoot>
      <ModulesMenuGroup onSelect={onSelect} />
      <ComponentsMenuGroup onSelect={onSelect} />
    </SidebarMenuRoot>
  );
};
