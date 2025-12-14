"use client";

import { usePathname, useRouter } from "next/navigation";

import { components } from "@/app/aura/components/components";
import {
  SidebarMenuGroup,
  SidebarMenuItem,
  SidebarMenuRoot,
  SidebarMenuSub,
  SidebarMenuSubContent,
  SidebarMenuSubItem,
  SidebarMenuSubTrigger,
} from "@/app/aura/sidebar-menu";

type NavigationProps = {
  onSelect?: () => void;
};

export const Navigation = ({ onSelect }: NavigationProps) => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <SidebarMenuRoot>
      <SidebarMenuGroup heading="Components">
        {components.map((component) => {
          if (component.variants) {
            const componentHref = `/aura/components/${component.name}`;

            const isActive = pathname.includes(componentHref);

            return (
              <SidebarMenuSub
                defaultOpen={isActive}
                key={component.name}
                onOpenChange={(open) => {
                  if (open) {
                    // @ts-expect-error - TODO: Look into dynamic route segments with typed routes
                    router.push(componentHref);
                  }
                }}
              >
                <SidebarMenuSubTrigger>{component.title}</SidebarMenuSubTrigger>
                <SidebarMenuSubContent>
                  <SidebarMenuSubItem
                    // @ts-expect-error - TODO: Look into dynamic route segments with typed routes
                    href={componentHref}
                    onClick={onSelect}
                  >
                    Base {component.title}
                  </SidebarMenuSubItem>
                  {component.variants.map((variant) => (
                    <SidebarMenuSubItem
                      // @ts-expect-error - TODO: Look into dynamic route segments with typed routes
                      href={`/aura/components/${component.name}/${variant.name}`}
                      key={variant.name}
                      onClick={onSelect}
                    >
                      {variant.title}
                    </SidebarMenuSubItem>
                  ))}
                </SidebarMenuSubContent>
              </SidebarMenuSub>
            );
          }

          return (
            <SidebarMenuItem
              // @ts-expect-error - TODO: Look into dynamic route segments with typed routes
              href={`/aura/components/${component.name}`}
              key={component.name}
              onClick={onSelect}
            >
              {component.title}
            </SidebarMenuItem>
          );
        })}
      </SidebarMenuGroup>
    </SidebarMenuRoot>
  );
};
