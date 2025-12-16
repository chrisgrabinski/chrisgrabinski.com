"use client";

import { BanIcon, FilePlus2Icon } from "lucide-react";

import { type DropzoneProps, useDropzone } from "react-dropzone";
import { Card } from "@/components/card";
import { IconBox } from "@/components/icon-box";
import { cn } from "@/lib/styles";

const Dropzone = (props: DropzoneProps) => {
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone(props);

  return (
    <Card
      className={cn(
        "grid place-items-center gap-3 border-2 border-neutral-300 border-dashed p-8 text-center transition",
        isDragActive && "border-neutral-400",
        isDragReject && "border-red-500 bg-red-50",
      )}
      {...getRootProps()}
    >
      <IconBox color={isDragReject ? "red" : undefined}>
        {isDragReject ? <BanIcon /> : <FilePlus2Icon />}
      </IconBox>
      <div>
        <p className="font-medium">
          {isDragActive && isDragAccept
            ? "Drop files here"
            : "Click or drag and drop files here"}
        </p>
        <p className="text-neutral-500">Audio or video files up to 50MB each</p>
      </div>
      <input {...getInputProps()} />
    </Card>
  );
};

export { Dropzone };
