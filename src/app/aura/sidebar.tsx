"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import avatar from "@/app/(homepage)/images/chris-grabinski.jpg";
import { AuraLogo } from "@/app/aura/aura-logo";
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
import { Avatar } from "@/components/avatar";
import { Card } from "@/components/card";
import { ScrollArea } from "@/components/scroll-area";

export const Sidebar = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="flex h-dvh w-64 shrink-0 flex-col border-neutral-300 border-r">
      <header className="px-3 py-6">
        <Link href="/aura">
          <AuraLogo className="text-2xl" />
        </Link>
      </header>
      <ScrollArea className="flex-1 p-1.5">
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
                    <SidebarMenuSubTrigger>
                      {component.title}
                    </SidebarMenuSubTrigger>
                    <SidebarMenuSubContent>
                      <SidebarMenuSubItem
                        // @ts-expect-error - TODO: Look into dynamic route segments with typed routes
                        href={componentHref}
                      >
                        Base {component.title}
                      </SidebarMenuSubItem>
                      {component.variants.map((variant) => (
                        <SidebarMenuSubItem
                          // @ts-expect-error - TODO: Look into dynamic route segments with typed routes
                          href={`/aura/components/${component.name}/${variant.name}`}
                          key={variant.name}
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
                >
                  {component.title}
                </SidebarMenuItem>
              );
            })}
          </SidebarMenuGroup>
        </SidebarMenuRoot>
      </ScrollArea>
      <footer className="p-3">
        <Link href="/">
          <Card className="relative flex items-center gap-3 overflow-visible bg-neutral-900 p-3 text-neutral-50">
            <Avatar fallback="Chris Grabinski" size={3} src={avatar.src} />
            <div>
              <p className="font-medium text-sm">Created by</p>
              <p className="text-sm">Chris Grabiński</p>
            </div>
          </Card>
        </Link>
      </footer>
    </div>
  );
};
