"use client";

import {
  SliderRange,
  SliderRoot,
  SliderThumb,
  SliderTrack,
} from "@/components/slider";

type ScrubberProps = React.ComponentProps<typeof SliderRoot>;

const Scrubber = ({ className, ...props }: ScrubberProps) => {
  return (
    <SliderRoot className="group/scrubber" {...props}>
      <SliderTrack className="h-1">
        <SliderRange className="bg-neutral-50 group-hover/scrubber:bg-accent" />
      </SliderTrack>
      <SliderThumb className="opacity-0 group-hover/scrubber:opacity-100" />
    </SliderRoot>
  );
};

export { Scrubber };
