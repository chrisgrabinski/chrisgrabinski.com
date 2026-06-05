"use client";

import { Slot } from "radix-ui";
import { createContext, useContext } from "react";
import { cn } from "@/lib/styles";

type ListContextProps = {
  level: number;
};

const ListContext = createContext<ListContextProps>({
  level: -1,
});

const useList = () => {
  const context = useContext(ListContext);

  if (!context) {
    throw new Error("useList must be used within a ListRoot");
  }

  return context;
};

interface ListRootProps extends React.ComponentProps<"ul"> {
  asChild?: boolean;
}

const ListRoot = ({
  asChild,
  children,
  className,
  ...props
}: ListRootProps) => {
  const Component = asChild ? Slot.Root : "ul";

  const { level } = useList();

  const currentLevel = level + 1;

  return (
    <ListContext.Provider value={{ level: currentLevel }}>
      <Component
        className={cn(
          "col-span-full grid grid-cols-[min-content_1fr] gap-[0.25lh] [&_ul,&_ol]:col-start-2 [&_ul,&_ol]:mt-[0.25lh]",
          className,
        )}
        {...props}
      >
        {children}
      </Component>
    </ListContext.Provider>
  );
};

interface ListItemProps extends React.ComponentProps<"li"> {
  asChild?: boolean;
}

const ListItem = ({
  asChild,
  children,
  className,
  ...props
}: ListItemProps) => {
  const Component = asChild ? Slot.Root : "li";

  return (
    <Component
      className={cn("col-span-full grid grid-cols-subgrid", className)}
      {...props}
    >
      {children}
    </Component>
  );
};

interface ListMarkerProps extends React.ComponentProps<"span"> {
  asChild?: boolean;
}

const ListMarker = ({
  "aria-hidden": ariaHidden = true,
  asChild,
  children,
  className,
  ...props
}: ListMarkerProps) => {
  const Component = asChild ? Slot.Root : "span";

  return (
    <Component
      aria-hidden={ariaHidden}
      className={cn("h-lh text-end", className)}
      {...props}
    >
      {children}
    </Component>
  );
};

export { ListRoot, ListItem, ListMarker, useList };
