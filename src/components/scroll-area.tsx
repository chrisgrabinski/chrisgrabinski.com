import { ScrollArea as ScrollAreaPrimitive } from "radix-ui";
import { cn } from "@/lib/styles";

const ScrollAreaRoot = ScrollAreaPrimitive.Root;
const ScrollAreaViewport = ScrollAreaPrimitive.Viewport;
const ScrollAreaScrollbar = ScrollAreaPrimitive.Scrollbar;
const ScrollAreaThumb = ScrollAreaPrimitive.Thumb;
const ScrollAreaCorner = ScrollAreaPrimitive.Corner;

const ScrollArea = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <ScrollAreaRoot className={cn("min-h-0 overflow-clip", className)}>
      <ScrollAreaViewport className="size-full">{children}</ScrollAreaViewport>
      <ScrollAreaScrollbar
        className="relative flex w-3 touch-none select-none p-1"
        orientation="vertical"
      >
        <ScrollAreaThumb className="relative flex-1 rounded-full bg-neutral-600/33 backdrop-blur-sm" />
      </ScrollAreaScrollbar>
      <ScrollAreaScrollbar orientation="horizontal">
        <ScrollAreaThumb />
      </ScrollAreaScrollbar>
      <ScrollAreaCorner />
    </ScrollAreaRoot>
  );
};

export { ScrollArea };
