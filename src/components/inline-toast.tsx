"use client";

import { useState } from "react";
import { ButtonPrimitive } from "@/primitives/button";

interface InlineToastProps extends React.ComponentProps<typeof ButtonPrimitive> {
  message: string;
}

const InlineToast = ({ children, message, onClick, ...props }: InlineToastProps) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = async (event) => {
    onClick?.(event);

    setIsVisible(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 1500);
  };
  return (
    <ButtonPrimitive
      aria-live="polite"
      className="relative rounded-action focus-visible:focus-ring"
      onClick={handleClick}
      {...props}
    >
      {children}
      {isVisible && (
        <span className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 -translate-y-1.5 animate-in cursor-default rounded-tooltip bg-neutral-800 px-[1ch] py-1 text-xs text-neutral-50 slide-in-from-bottom-15 fade-in">
          {message}
        </span>
      )}
    </ButtonPrimitive>
  );
};

export { InlineToast };
