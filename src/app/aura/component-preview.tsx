"use client";

import { Card } from "@/components/card";

import { cn } from "@/lib/styles";

type PreviewProps = {
  children: React.ReactNode;
  title?: string;
};

const ComponentPreview = ({ children }: PreviewProps) => {
  const view = "preview";

  return (
    <div
      className={cn(
        "before:float-left before:pb-[62.5%] before:content-['']",
        "after:clear-both after:table after:content-['']",
      )}
    >
      <Card
        className="grid size-full flex-col place-items-center gap-6 p-4 md:p-6"
        style={{
          background:
            view === "preview"
              ? "repeating-conic-gradient(hsl(0,0%,95%) 0 25%, hsl(0,0%,100%) 0 50%) 50% / 20px 20px"
              : undefined,
        }}
      >
        {children}
      </Card>
    </div>
  );
};

export { ComponentPreview };
