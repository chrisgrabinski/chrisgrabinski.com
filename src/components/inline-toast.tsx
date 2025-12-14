"use client";

import { useState } from "react";
import { ButtonPrimitive } from "@/primitives/button";

interface InlineToastProps
  extends React.ComponentProps<typeof ButtonPrimitive> {
  message: string;
}

const InlineToast = ({
  children,
  message,
  onClick,
  ...props
}: InlineToastProps) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = async (
    event,
  ) => {
    onClick?.(event);

    setIsVisible(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 1500);
  };
  return (
    <ButtonPrimitive
      aria-live="polite"
      className="relative"
      onClick={handleClick}
      {...props}
    >
      {children}
      {isVisible && (
        <span className="-translate-x-1/2 -translate-y-1.5 fade-in slide-in-from-bottom-15 pointer-events-none absolute bottom-full left-1/2 animate-in cursor-default rounded-full bg-neutral-800 px-[1ch] py-1 text-neutral-50 text-xs">
          {message}
        </span>
      )}
    </ButtonPrimitive>
  );
};

export { InlineToast };
