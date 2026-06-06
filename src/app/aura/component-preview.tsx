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
      <Card className="grid size-full flex-col place-items-center gap-6 bg-canvas p-4 md:p-6">
        {children}
      </Card>
    </div>
  );
};

export { ComponentPreview };
