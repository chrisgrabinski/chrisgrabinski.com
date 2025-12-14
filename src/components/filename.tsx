"use client";

import { useRef, useState } from "react";
import { useResizeObserver } from "usehooks-ts";
import { cn } from "@/lib/styles";

const hasTextOverflow = (refs: React.RefObject<HTMLElement | null>[]) => {
  return refs.some(
    (ref) =>
      ref?.current && ref?.current?.scrollWidth > ref?.current?.offsetWidth,
  );
};

interface FilenameProps extends React.ComponentProps<"span"> {
  children: string;
}

const Filename = ({ children, className, ...props }: FilenameProps) => {
  const [isTruncated, setIsTruncated] = useState(false);

  const rootRef = useRef<HTMLSpanElement>(null);
  const fileNameStartRef = useRef<HTMLSpanElement>(null);
  const fileNameEndRef = useRef<HTMLSpanElement>(null);

  const fileNameMiddle = Math.ceil(children.length / 2);
  const fileNameParts = [
    children.slice(0, fileNameMiddle),
    children.slice(fileNameMiddle),
  ];

  useResizeObserver({
    onResize: () => {
      if (hasTextOverflow([fileNameStartRef, fileNameEndRef])) {
        setIsTruncated(true);
      } else {
        setIsTruncated(false);
      }
    },
    ref: rootRef as React.RefObject<HTMLSpanElement>,
  });

  return (
    <span
      className={cn(
        "relative min-w-0 max-w-full",
        isTruncated && "select-none",
        className,
      )}
      {...props}
    >
      {isTruncated && (
        <span
          aria-hidden
          className="-translate-x-1/2 pointer-events-none absolute left-1/2 after:content-['…']"
        />
      )}
      <span
        className={cn(
          "inline-flex max-w-full items-baseline",
          isTruncated &&
            "mask-l-from-[calc(50%+1ch)] mask-l-to-[calc(50%+3ch)] mask-r-from-[calc(50%+1ch)] mask-r-to-[calc(50%+3ch)] mask-exclude",
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
            ref={fileNameStartRef}
          >
            {fileNameParts[0]}
          </span>,
          <span
            className={cn(
              "shrink overflow-hidden text-ellipsis whitespace-nowrap [direction:rtl] rtl:[direction:ltr]",
              isTruncated && "text-clip",
            )}
            key="end"
            ref={fileNameEndRef}
          >
            {fileNameParts[1]}
          </span>,
        ]}
      </span>
    </span>
  );
};

export { Filename };
