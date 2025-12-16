"use client";

import { Button } from "@/components/button";
import { Card } from "@/components/card";

import { GitHubIcon } from "@/icons/github";
import { cn } from "@/lib/styles";

type PreviewProps = {
  children: React.ReactNode;
  title?: string;
  sourceUrl: string;
};

const ComponentPreview = ({ children, sourceUrl }: PreviewProps) => {
  const view = "preview";

  return (
    <div
      className={cn(
        "before:float-left before:pb-[62.5%] before:content-['']",
        "after:clear-both after:table after:content-['']",
      )}
    >
      <Card
        className="flex size-full flex-col gap-6 p-4 md:p-6"
        style={{
          background:
            view === "preview"
              ? "repeating-conic-gradient(hsl(0,0%,95%) 0 25%, hsl(0,0%,100%) 0 50%) 50% / 20px 20px"
              : undefined,
        }}
      >
        <div className="flex justify-end">
          <Button asChild size={2}>
            <a href={sourceUrl} rel="noopener noreferrer" target="_blank">
              <GitHubIcon />
              View source
            </a>
          </Button>
        </div>
        <div className="grid grow place-items-center">{children}</div>
        <div className="h-8" />
      </Card>
    </div>
  );
};

export { ComponentPreview };
