import { PlayIcon, ThumbsUpIcon } from "lucide-react";
import Image from "next/image";
import { AudioButton } from "@/components/audio-button";
import { Card } from "@/components/card";
import albumCover from "../../../../public/aura/album-cover.png";

const title = "Audio Card";
const description = "";

const components = ["card", "audio-button"];

const Item = ({
  title,
  tags,
  plays,
  likes,
}: {
  title: string;
  tags: string[];
  plays: string;
  likes: string;
}) => {
  return (
    <Card className="-mx-1.5 flex items-center gap-6 p-1.5 text-sm ring-0 transition hover:bg-neutral-50">
      <div className="flex items-center gap-3">
        <AudioButton src="/" />
        <div>
          <div className="font-medium">{title}</div>
          <div className="text-neutral-600 text-xs">{tags.join(", ")}</div>
        </div>
      </div>
      <div className="ml-auto flex gap-2">
        <div className="flex items-center gap-[0.25ch]">
          <PlayIcon className="size-3" />
          <span className="text-neutral-600">{plays}</span>
        </div>
        <div className="flex items-center gap-[0.25ch]">
          <ThumbsUpIcon className="size-3" />
          <span className="text-neutral-600">{likes}</span>
        </div>
      </div>
    </Card>
  );
};

const Component = () => {
  return (
    <Card className="grid gap-3">
      <div>
        <p className="font-medium">Trending</p>
        <p className="text-neutral-600 text-sm">
          Listen to the most popular tracks on our platform.
        </p>
      </div>
      <div className="grid gap-1.5">
        <Item
          likes="6k"
          plays="12k"
          tags={["atmospheric", "anticipation", "chillwave"]}
          title="Middle of beyond"
        />
        <Item
          likes="5k"
          plays="26k"
          tags={["atmospheric", "anticipation", "chillwave"]}
          title="Middle of beyond"
        />
        <Item
          likes="3k"
          plays="2k"
          tags={["atmospheric", "anticipation", "chillwave"]}
          title="Middle of beyond"
        />
      </div>
    </Card>
  );
};

export const AudioCard = {
  Component,
  components,
  description,
  title,
};
