"use client";

import { Dialog as DialogPrimitive } from "radix-ui";
import { ScrollArea } from "@/components/scroll-area";
import { cn } from "@/lib/styles";

type DrawerRootProps = React.ComponentProps<typeof DialogPrimitive.Root>;

const DrawerRoot = ({ children, ...props }: DrawerRootProps) => {
  return <DialogPrimitive.Root {...props}>{children}</DialogPrimitive.Root>;
};

type DrawerTriggerProps = React.ComponentProps<typeof DialogPrimitive.Trigger>;

const DrawerTrigger = ({
  children,
  className,
  ...props
}: DrawerTriggerProps) => {
  return (
    <DialogPrimitive.Trigger className={cn("", className)} {...props}>
      {children}
    </DialogPrimitive.Trigger>
  );
};

type DrawerPortalProps = React.ComponentProps<typeof DialogPrimitive.Portal>;

const DrawerPortal = ({ children, ...props }: DrawerPortalProps) => {
  return <DialogPrimitive.Portal {...props}>{children}</DialogPrimitive.Portal>;
};

type DrawerOverlayProps = React.ComponentProps<typeof DialogPrimitive.Overlay>;

const DrawerOverlay = ({
  children,
  className,
  ...props
}: DrawerOverlayProps) => {
  return (
    <DialogPrimitive.Overlay
      className={cn("fixed inset-0 z-10 bg-background/80", className)}
      {...props}
    >
      {children}
    </DialogPrimitive.Overlay>
  );
};

type DrawerContentProps = React.ComponentProps<typeof DialogPrimitive.Content>;

const DrawerContent = ({
  children,
  className,
  ...props
}: DrawerContentProps) => {
  return (
    <DialogPrimitive.Content
      className={cn(
        "fixed inset-y-0 right-0 z-20 h-dvh w-full max-w-lg overflow-auto bg-surface p-4",
        className,
      )}
      {...props}
    >
      {children}
    </DialogPrimitive.Content>
  );
};

type DrawerCloseProps = React.ComponentProps<typeof DialogPrimitive.Close>;

const DrawerClose = ({ children, className, ...props }: DrawerCloseProps) => {
  return (
    <DialogPrimitive.Close className={cn("", className)} {...props}>
      {children}
    </DialogPrimitive.Close>
  );
};

type DrawerTitleProps = React.ComponentProps<typeof DialogPrimitive.Title>;

const DrawerTitle = ({ children, className, ...props }: DrawerTitleProps) => {
  return (
    <DialogPrimitive.Title className={cn("", className)} {...props}>
      {children}
    </DialogPrimitive.Title>
  );
};

type DrawerDescriptionProps = React.ComponentProps<
  typeof DialogPrimitive.Description
>;

const DrawerDescription = ({
  children,
  className,
  ...props
}: DrawerDescriptionProps) => {
  return (
    <DialogPrimitive.Description className={cn("", className)} {...props}>
      {children}
    </DialogPrimitive.Description>
  );
};

export {
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerOverlay,
  DrawerPortal,
  DrawerRoot,
  DrawerTitle,
  DrawerTrigger,
};
