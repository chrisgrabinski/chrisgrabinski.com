"use client";

import { CopyIcon } from "lucide-react";
import { useRef } from "react";

import type { IconButton } from "@/components/icon-button";
import { InlineToast } from "@/components/inline-toast";
import { cn } from "@/lib/styles";

const messages = {
  action: "Copy to clipboard",
  success: "Copied",
} as const;

interface CopyToClipboardProps
  extends Omit<React.ComponentProps<"button">, "onCopy">,
    Pick<React.ComponentProps<typeof IconButton>, "size"> {
  children: React.ReactNode;
  onCopy?: (textContent: string) => void;
  textContent?: string;
}

const CopyToClipboard = ({
  children,
  className,
  onCopy,
  size = 2,
  textContent: providedTextContent,
  ...props
}: CopyToClipboardProps) => {
  const childrenRef = useRef<HTMLSpanElement>(null);

  const handleCopy = async () => {
    if (!childrenRef.current) return;

    const textContent =
      providedTextContent ?? (childrenRef.current?.textContent || "");

    onCopy?.(textContent);

    await navigator.clipboard.writeText(textContent);
  };

  return (
    <InlineToast
      aria-description={messages.action}
      className={cn(
        "group/copy-to-clipboard relative inline-flex min-w-0 align-baseline",
        className,
      )}
      message={messages.success}
      onClick={handleCopy}
      {...props}
    >
      <span className="contents" ref={childrenRef}>
        {children}
      </span>
      <CopyIcon className="ml-[0.5ch] size-[1em] shrink-0 self-center transition group-hover/copy-to-clipboard:stroke-pink-600" />
    </InlineToast>
  );
};

export { CopyToClipboard };
