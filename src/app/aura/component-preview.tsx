"use client";

import { useState } from "react";
import { Button } from "@/components/button";
import { Card } from "@/components/card";
// import {
//   SegmentedControlItem,
//   SegmentedControlRoot,
// } from "@/components/segmented-control";
import { GitHubIcon } from "@/icons/github";
import { cn } from "@/lib/styles";

type PreviewProps = {
  children: React.ReactNode;
  title?: string;
  sourceUrl: string;
};

const ComponentPreview = ({ children, sourceUrl }: PreviewProps) => {
  const [view, setView] = useState("preview");

  return (
    <div
      className={cn(
        "flex",
        "before:float-left before:pb-[62.5%] before:content-['']",
        "after:clear-both after:table after:content-['']",
      )}
    >
      <div className="size-full">
        <Card
          className="flex min-h-full flex-col p-0"
          style={{
            background:
              view === "preview"
                ? "repeating-conic-gradient(hsl(0,0%,95%) 0 25%, hsl(0,0%,100%) 0 50%) 50% / 20px 20px"
                : undefined,
          }}
        >
          <div className="relative flex shrink-0 items-center justify-center gap-3 p-6">
            <div className="flex-1" />
            {/* <SegmentedControlRoot onValueChange={setView} value={view}>
              <SegmentedControlItem value="preview">
                Preview
              </SegmentedControlItem>
              <SegmentedControlItem value="code">Code</SegmentedControlItem>
            </SegmentedControlRoot> */}
            <div className="flex flex-1 justify-end">
              <Button asChild size={2}>
                <a href={sourceUrl} rel="noopener noreferrer" target="_blank">
                  <GitHubIcon />
                  View source
                </a>
              </Button>
            </div>
          </div>
          <div className="grid flex-1 place-items-center p-6">
            {view === "preview" && <>{children}</>}
            {view === "code" && <div>Code</div>}
          </div>
          <div className="h-20 shrink-0" />
        </Card>
      </div>
    </div>
  );
};

export { ComponentPreview };
