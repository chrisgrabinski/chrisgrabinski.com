"use client";

import { Activity, useState } from "react";
import { Button } from "@/components/button";
import { Card } from "@/components/card";
import {
  SegmentedControlItem,
  SegmentedControlRoot,
} from "@/components/segmented-control";
import { GitHubIcon } from "@/icons/github";

type PreviewProps = {
  children: React.ReactNode;
  title?: string;
  sourceUrl: string;
};

const ComponentPreview = ({ children, sourceUrl }: PreviewProps) => {
  const [view, setView] = useState("preview");

  return (
    <div className="grid gap-3">
      <Card
        className="flex aspect-16/10 flex-col p-0"
        style={{
          background:
            view === "preview"
              ? "repeating-conic-gradient(hsl(0,0%,95%) 0 25%, hsl(0,0%,100%) 0 50%) 50% / 20px 20px"
              : undefined,
        }}
      >
        <div className="grid flex-1 place-items-center p-6">
          <Activity mode={view === "preview" ? "visible" : "hidden"}>
            {children}
          </Activity>
          <Activity mode={view === "code" ? "visible" : "hidden"}>
            <div>Code</div>
          </Activity>
        </div>
        <div className="relative flex shrink-0 items-center justify-between gap-3 p-6">
          {/* <SegmentedControlRoot onValueChange={setView} value={view}>
            <SegmentedControlItem value="preview">Preview</SegmentedControlItem>
            <SegmentedControlItem value="code">Code</SegmentedControlItem>
          </SegmentedControlRoot> */}
          <Button asChild size={2}>
            <a href={sourceUrl} rel="noopener noreferrer" target="_blank">
              <GitHubIcon />
              View source
            </a>
          </Button>
        </div>
      </Card>
    </div>
  );
};

export { ComponentPreview };
