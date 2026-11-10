"use client";

import { useRef, useState } from "react";
import { useResizeObserver } from "usehooks-ts";
import { cn } from "@/lib/styles";

const hasTextOverflow = (refs: React.RefObject<HTMLElement | null>[]) => {
  return refs.some((ref) => ref?.current && ref?.current?.scrollWidth > ref?.current?.offsetWidth);
};

interface MiddleTruncateProps extends React.ComponentProps<"span"> {
  children: string;
}

const MiddleTruncate = ({ children, className, ...props }: MiddleTruncateProps) => {
  const [isTruncated, setIsTruncated] = useState(false);

  const rootRef = useRef<HTMLSpanElement>(null);
  const startRef = useRef<HTMLSpanElement>(null);
  const endRef = useRef<HTMLSpanElement>(null);

  const middle = Math.ceil(children.length / 2);
  const parts = [children.slice(0, middle), children.slice(middle)];

  useResizeObserver({
    onResize: () => {
      if (hasTextOverflow([startRef, endRef])) {
        setIsTruncated(true);
      } else {
        setIsTruncated(false);
      }
    },
    ref: rootRef as React.RefObject<HTMLSpanElement>,
  });

  return (
    <span
      className={cn("relative max-w-full min-w-0", isTruncated && "select-none", className)}
      {...props}
    >
      {isTruncated && (
        <span aria-hidden className="pointer-events-none absolute left-1/2 -translate-x-1/2">
          …
        </span>
      )}
      <span
        className={cn(
          "inline-flex max-w-full items-baseline",
          isTruncated &&
            "mask-r-from-[calc(50%+1ch)] mask-r-to-[calc(50%+3ch)] mask-l-from-[calc(50%+1ch)] mask-l-to-[calc(50%+3ch)] mask-exclude",
        )}
        ref={rootRef}
      >
        {[
          <span
            className={cn(
              "shrink overflow-hidden text-ellipsis whitespace-nowrap rtl:[direction:ltr]",
              isTruncated && "text-clip",
            )}
            key="start"
            ref={startRef}
          >
            {parts[0]}
          </span>,
          <span
            className={cn(
              "shrink overflow-hidden text-ellipsis whitespace-nowrap [direction:rtl] rtl:[direction:ltr]",
              isTruncated && "text-clip",
            )}
            key="end"
            ref={endRef}
          >
            {parts[1]}
          </span>,
        ]}
      </span>
    </span>
  );
};

export { MiddleTruncate };
