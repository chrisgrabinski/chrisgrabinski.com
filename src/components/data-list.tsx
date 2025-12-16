"use client";

import { ChevronDownIcon } from "lucide-react";
import { Collapsible, Slot } from "radix-ui";
import { createContext, useContext, useState } from "react";
import { cn } from "@/lib/styles";
import { ButtonPrimitive } from "@/primitives/button";

type DataListSize = "sm" | "md";

const DEFAULT_SIZE: DataListSize = "md";

interface DataListRootProps extends React.ComponentProps<"dl"> {
  asChild?: boolean;
  size?: DataListSize;
}

const DataListRoot = ({
  asChild,
  children,
  className,
  size = DEFAULT_SIZE,
  ...props
}: DataListRootProps) => {
  const Component = asChild ? Slot.Root : "dl";

  return (
    <Component
      className={cn(
        "group/data-list col-span-full col-start-1 grid grid-cols-[2fr_3fr] text-sm",
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

interface DataListItemProps extends React.ComponentProps<"div"> {
  asChild?: boolean;
}

const DataListItem = ({
  asChild,
  children,
  className,
  ...props
}: DataListItemProps) => {
  const Component = asChild ? Slot.Root : "div";

  return (
    <Component
      className={cn(
        "col-span-full col-start-1 grid min-h-8 grid-cols-subgrid gap-x-3 border-neutral-200 not-first:border-t py-1.5",
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

interface DataListLabelProps extends React.ComponentProps<"dt"> {
  asChild?: boolean;
}

const DataListLabel = ({
  asChild,
  children,
  className,
  ...props
}: DataListLabelProps) => {
  const Component = asChild ? Slot.Root : "dt";

  return (
    <Component
      className={cn("flex items-center gap-x-4 font-medium", className)}
      {...props}
    >
      {children}
    </Component>
  );
};

interface DataListValueProps extends React.ComponentProps<"dd"> {
  asChild?: boolean;
}

const DataListValue = ({
  asChild,
  children,
  className,
  ...props
}: DataListValueProps) => {
  const Component = asChild ? Slot.Root : "dd";

  return (
    <Component
      className={cn(
        "m-0 flex min-w-0 items-center gap-x-4 text-neutral-600",
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

const DataListSubContext = createContext<{
  open: boolean;
}>({
  open: false,
});

const useDataListSub = () => {
  const context = useContext(DataListSubContext);

  if (!context) {
    throw new Error("useDataListSub must be used within a DataListSub");
  }

  return context;
};

interface DataListSubProps
  extends React.ComponentProps<typeof Collapsible.Root> {
  asChild?: boolean;
}

const DataListSub = ({
  children,
  className,
  defaultOpen = false,
  open: externalOpen,
  onOpenChange,
  ...props
}: DataListSubProps) => {
  const [internalOpen, setInternalOpen] = useState(defaultOpen);

  const open = externalOpen ?? internalOpen;

  const handleOnOpenChange = (nextOpen: boolean) => {
    setInternalOpen(nextOpen);
    onOpenChange?.(nextOpen);
  };

  return (
    <DataListSubContext.Provider value={{ open }}>
      <DataListItem asChild>
        <Collapsible.Root
          className={cn("p-0", className)}
          onOpenChange={handleOnOpenChange}
          open={open}
          {...props}
        >
          {children}
        </Collapsible.Root>
      </DataListItem>
    </DataListSubContext.Provider>
  );
};

interface DataListSubTriggerProps
  extends React.ComponentProps<typeof Collapsible.Trigger> {}

const DataListSubTrigger = ({
  children,
  className,
  ...props
}: DataListSubTriggerProps) => {
  return (
    <dt className="contents">
      <DataListLabel asChild>
        <Collapsible.Trigger
          asChild
          className={cn("col-span-full", className)}
          {...props}
        >
          <ButtonPrimitive>{children}</ButtonPrimitive>
        </Collapsible.Trigger>
      </DataListLabel>
    </dt>
  );
};

interface DataListSubIndicatorProps extends React.ComponentProps<"svg"> {}

const DataListSubIndicator = ({
  className,
  children,
  ...props
}: DataListSubIndicatorProps) => {
  const { open } = useDataListSub();

  return (
    <ChevronDownIcon
      className={cn("size-4 data-[state=open]:rotate-180", className)}
      data-state={open ? "open" : "closed"}
      {...props}
    />
  );
};

interface DataListSubIndicatorIconProps
  extends React.ComponentProps<typeof Collapsible.Content> {}

const DataListSubContent = ({
  asChild,
  children,
  ...props
}: DataListSubIndicatorIconProps) => {
  const Component = asChild ? Slot.Root : "dd";
  return (
    <Collapsible.Content asChild {...props}>
      <Component className="col-span-full col-start-1 m-0 grid grid-cols-subgrid pt-1.5 pl-4 *:grid-cols-subgrid">
        {children}
      </Component>
    </Collapsible.Content>
  );
};

export {
  DataListRoot,
  DataListItem,
  DataListLabel,
  DataListValue,
  DataListSub,
  DataListSubTrigger,
  DataListSubIndicator,
  DataListSubContent,
};
