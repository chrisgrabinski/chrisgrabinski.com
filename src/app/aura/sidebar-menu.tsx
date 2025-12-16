"use client";

import { ChevronDownIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Collapsible, Slot } from "radix-ui";
import type React from "react";
import { cn } from "@/lib/styles";
import { ButtonPrimitive } from "@/primitives/button";

const SidebarMenuRoot = ({ children }: { children: React.ReactNode }) => {
  return <nav className="grid gap-3">{children}</nav>;
};

const SidebarMenuGroup = ({
  children,
  heading,
}: {
  children: React.ReactNode;
  heading?: string;
}) => {
  return (
    <div className="flex flex-col">
      {heading && (
        <span className="px-2 pb-2 font-medium text-neutral-500 text-sm">
          {heading}
        </span>
      )}
      {children}
    </div>
  );
};

interface SidebarMenuItemBaseProps extends React.ComponentProps<"button"> {
  asChild?: boolean;
}

const SidebarMenuItemBase = ({
  asChild,
  children,
  ...props
}: SidebarMenuItemBaseProps) => {
  const Component = asChild ? Slot.Root : "button";

  return (
    <ButtonPrimitive asChild {...props}>
      <Component className="group/sidebar-menu-item flex w-full items-center gap-2 rounded-xl p-2 text-left font-medium text-sm transition hover:bg-neutral-100">
        {children}
      </Component>
    </ButtonPrimitive>
  );
};

type SidebarMenuItemProps = React.ComponentProps<typeof Link>;

const SidebarMenuItem = ({
  children,
  className,
  ...props
}: SidebarMenuItemProps) => {
  const pathname = usePathname();

  const isActive = pathname === props.href;

  return (
    <SidebarMenuItemBase
      asChild
      className={cn(
        "data-[active=true]:font-medium data-[active=true]:text-pink-500",
        className,
      )}
      data-active={isActive}
    >
      <Link {...props}>{children}</Link>
    </SidebarMenuItemBase>
  );
};

const SidebarMenuSub = Collapsible.Root;

const SidebarMenuSubTrigger = ({
  children,
  ...props
}: React.ComponentProps<typeof Collapsible.Trigger>) => {
  return (
    <Collapsible.Trigger asChild {...props}>
      <SidebarMenuItemBase>
        {children}
        <ChevronDownIcon className="ml-auto size-4 stroke-neutral-500 group-data-[state=open]/sidebar-menu-item:rotate-180" />
      </SidebarMenuItemBase>
    </Collapsible.Trigger>
  );
};

const SidebarMenuSubContent = ({
  children,
  ...props
}: React.ComponentProps<typeof Collapsible.Content>) => {
  return <Collapsible.Content {...props}>{children}</Collapsible.Content>;
};

const SidebarMenuSubItem = ({
  children,
  ...props
}: React.ComponentProps<typeof SidebarMenuItem>) => {
  return (
    <SidebarMenuItem className="relative pl-6" {...props}>
      {children}
      <div className="-translate-x-1/2 absolute top-0 left-3 h-full w-px bg-neutral-200 transition group-data-[active=true]/sidebar-menu-item:bg-pink-500" />
    </SidebarMenuItem>
  );
};

export {
  SidebarMenuRoot,
  SidebarMenuGroup,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubTrigger,
  SidebarMenuSubContent,
  SidebarMenuSubItem,
};
