"use client";

import Image from "next/image";
import { HoverCard } from "radix-ui";
import { Card } from "@/components/card";

export const SpotifyNowPlayingCard = ({
  children,
  artists,
  title,
  image,
}: {
  children: React.ReactNode;
  artists: string;
  title: string;
  image: string;
}) => {
  return (
    <HoverCard.Root>
      <HoverCard.Trigger asChild>{children}</HoverCard.Trigger>
      <HoverCard.Portal>
        <HoverCard.Content align="start" side="top" sideOffset={3}>
          <Card className="flex items-center p-0 shadow-xl">
            <Image
              alt=""
              className="size-16 shrink-0"
              height={56}
              src={image}
              width={56}
            />
            <div className="min-w-0 pr-4 pl-3">
              <span className="block truncate text-base">{title}</span>
              <span className="line-clamp-1 block text-foreground-muted text-xs">
                {artists}
              </span>
            </div>
          </Card>
          <HoverCard.Arrow className="h-2 w-3 fill-white" />
        </HoverCard.Content>
      </HoverCard.Portal>
    </HoverCard.Root>
  );
};
