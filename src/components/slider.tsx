"use client";

import { Slider as SliderPrimitive } from "radix-ui";
import { cn } from "@/lib/styles";

const SliderRoot = ({
  children,
  className,
  ...props
}: React.ComponentProps<typeof SliderPrimitive.Root>) => {
  return (
    <SliderPrimitive.Root
      className={cn(
        "relative flex h-4 w-full cursor-pointer touch-none select-none items-center",
        className,
      )}
      {...props}
    >
      {children}
    </SliderPrimitive.Root>
  );
};

const SliderTrack = ({
  children,
  className,
  ...props
}: React.ComponentProps<typeof SliderPrimitive.Track>) => {
  return (
    <SliderPrimitive.Track
      className={cn(
        "relative h-1.5 flex-1 overflow-clip rounded-full bg-neutral-100 ring-1 ring-black/10",
        className,
      )}
      {...props}
    >
      {children}
    </SliderPrimitive.Track>
  );
};

const SliderRange = ({
  children,
  className,
  ...props
}: React.ComponentProps<typeof SliderPrimitive.Range>) => {
  return (
    <SliderPrimitive.Range
      className={cn("absolute h-full bg-pink-500", className)}
      {...props}
    >
      {children}
    </SliderPrimitive.Range>
  );
};

const SliderThumb = ({
  children,
  className,
  ...props
}: React.ComponentProps<typeof SliderPrimitive.Thumb>) => {
  return (
    <SliderPrimitive.Thumb
      className={cn(
        "block size-3.5 cursor-pointer rounded-full bg-white shadow-sm",
        className,
      )}
      {...props}
    >
      {children}
    </SliderPrimitive.Thumb>
  );
};

interface SliderProps
  extends React.ComponentProps<typeof SliderPrimitive.Root> {}

const Slider = (props: SliderProps) => {
  return (
    <SliderRoot {...props}>
      <SliderTrack>
        <SliderRange />
      </SliderTrack>
      <SliderThumb />
    </SliderRoot>
  );
};

export { Slider, SliderRoot, SliderTrack, SliderRange, SliderThumb };
