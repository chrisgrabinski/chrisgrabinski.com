"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { CopyIcon } from "lucide-react";
import { useRef } from "react";
import { InlineToast } from "@/components/inline-toast";
import { cn } from "@/lib/styles";

const copyTextVariants = cva("", {
  defaultVariants: {
    size: 2,
  },
  variants: {
    size: {
      1: "text-xs",
      2: "text-sm",
      3: "text-base",
      4: "text-lg",
      5: "text-xl",
      6: "text-2xl",
    },
  },
});

type CopyTextVariants = VariantProps<typeof copyTextVariants>;

const messages = {
  action: "Copy to clipboard",
  success: "Copied",
} as const;

interface CopyTextProps extends Omit<React.ComponentProps<"button">, "onCopy">, CopyTextVariants {
  children: React.ReactNode;
  onCopy?: (textContent: string) => void;
  textContent?: string;
}

const CopyText = ({
  children,
  className,
  onCopy,
  size = 2,
  textContent: providedTextContent,
  ...props
}: CopyTextProps) => {
  const childrenRef = useRef<HTMLSpanElement>(null);

  const handleCopy = async () => {
    if (!childrenRef.current) return;

    const textContent = providedTextContent ?? (childrenRef.current?.textContent || "");

    onCopy?.(textContent);

    await navigator.clipboard.writeText(textContent);
  };

  return (
    <InlineToast
      aria-description={messages.action}
      className={cn(
        "group/copy-text relative inline-flex min-w-0 rounded-action align-baseline",
        copyTextVariants({ size }),
        className,
      )}
      message={messages.success}
      onClick={handleCopy}
      {...props}
    >
      <span className="contents" ref={childrenRef}>
        {children}
      </span>
      <CopyIcon className="ml-[0.5ch] size-[1em] shrink-0 self-center transition group-hover/copy-text:stroke-accent" />
    </InlineToast>
  );
};

export { CopyText };
