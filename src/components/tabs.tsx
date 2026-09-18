import { Tabs as TabsPrimitive } from "radix-ui";
import { Button } from "@/components/button";

type TabsRootProps = React.ComponentProps<typeof TabsPrimitive.Root>;

const TabsRoot = ({ children, ...props }: TabsRootProps) => {
  return (
    <TabsPrimitive.Root className="flex flex-col gap-2" {...props}>
      {children}
    </TabsPrimitive.Root>
  );
};

type TabsListProps = React.ComponentProps<typeof TabsPrimitive.List>;

const TabsList = ({ children, ...props }: TabsListProps) => {
  return (
    <TabsPrimitive.List className="flex" {...props}>
      {children}
    </TabsPrimitive.List>
  );
};

type TabsTriggerProps = React.ComponentProps<typeof TabsPrimitive.Trigger>;

const TabsTrigger = ({ children, ...props }: TabsTriggerProps) => {
  return (
    <TabsPrimitive.Trigger asChild {...props}>
      <Button
        className="group relative justify-center focus-visible:outline-0"
        size={3}
        variant="ghost"
      >
        {children}
        <div className="absolute right-[1.5ch] -bottom-0.5 left-[1.5ch] hidden h-0.5 bg-accent group-data-[state=active]:block" />
      </Button>
    </TabsPrimitive.Trigger>
  );
};

type TabsContentProps = React.ComponentProps<typeof TabsPrimitive.Content>;

const TabsContent = ({ children, ...props }: TabsContentProps) => {
  return (
    <TabsPrimitive.Content className="flex-1" {...props}>
      {children}
    </TabsPrimitive.Content>
  );
};

export { TabsContent, TabsList, TabsRoot, TabsTrigger };
