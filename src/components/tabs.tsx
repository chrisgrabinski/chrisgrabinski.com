import { Tabs as TabsPrimitive } from "radix-ui";
import { cn } from "@/lib/styles";
import { ButtonPrimitive } from "@/primitives/button";

const TabsRoot = ({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) => {
  return (
    <TabsPrimitive.Root className={cn("grid gap-4", className)} {...props} />
  );
};

const TabsList = ({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List>) => {
  return (
    <TabsPrimitive.List
      className={cn("flex gap-6 border-foreground/10 border-b", className)}
      {...props}
    />
  );
};

const TabsTrigger = ({
  asChild,
  children,
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger>) => {
  return (
    <TabsPrimitive.Trigger
      asChild
      className={cn(
        "-mb-px border-transparent border-b-2 pb-2 text-foreground-muted text-sm transition hover:text-foreground data-[state=active]:cursor-default data-[state=active]:border-accent data-[state=active]:font-medium data-[state=active]:text-foreground",
        className,
      )}
      {...props}
    >
      <ButtonPrimitive asChild={asChild}>{children}</ButtonPrimitive>
    </TabsPrimitive.Trigger>
  );
};

const TabsContent = ({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) => {
  return (
    <TabsPrimitive.Content
      className={cn(
        "text-sm outline-indigo-500 outline-offset-2 focus-visible:outline-2",
        className,
      )}
      {...props}
    />
  );
};

export { TabsContent, TabsList, TabsRoot, TabsTrigger };
