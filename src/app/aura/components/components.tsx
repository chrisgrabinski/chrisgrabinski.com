import { GhostIcon, StarIcon, TrashIcon } from "lucide-react";
import avatarImage from "@/app/(homepage)/images/chris-grabinski.jpg";
import { AudioButton } from "@/components/audio-button";
import { AudioControls } from "@/components/audio-controls";
import { AuraButton } from "@/components/aura-button";
import { Avatar } from "@/components/avatar";
import { CountryAvatar } from "@/components/avatar-country";
import { VerifiedAvatar } from "@/components/avatar-verified";
import { Badge } from "@/components/badge";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Button } from "@/components/button";
import { Card } from "@/components/card";
import { CheckboxIndicator, CheckboxRoot } from "@/components/checkbox";
import { CopyToClipboard } from "@/components/copy-to-clipboard";
import { CountryLabel } from "@/components/country-label";
import { Dropzone } from "@/components/dropzone";
import { Filename } from "@/components/filename";
import { IconBox } from "@/components/icon-box";
import { IconButton } from "@/components/icon-button";
import { InlineToast } from "@/components/inline-toast";
import {
  SegmentedControlItem,
  SegmentedControlRoot,
} from "@/components/segmented-control";
import { Slider } from "@/components/slider";
import { Switch } from "@/components/switch";
import {
  TooltipContent,
  TooltipRoot,
  TooltipTrigger,
} from "@/components/tooltip";

type Component = {
  description: string;
  name: string;
  title: string;
  variants?: Component[];
  sourceUrl: string;
  example: React.ReactNode;
};

export const components: Component[] = [
  {
    description: "A simple button that plays a short audio clip when clicked.",
    example: <AudioButton size={4} src="/aura/music.mp3" />,
    name: "audio-button",
    sourceUrl:
      "https://github.com/chrisgrabinski/chrisgrabinski.com/blob/main/src/components/audio-button.tsx",
    title: "Audio button",
  },
  {
    description:
      "A classic audio controls interface with commonly used functionality.",
    example: (
      <Card className="w-full">
        <AudioControls src="/aura/music.mp3" />
      </Card>
    ),
    name: "audio-controls",
    sourceUrl:
      "https://github.com/chrisgrabinski/chrisgrabinski.com/blob/main/src/components/audio-controls.tsx",
    title: "Audio controls",
  },
  {
    description:
      "A branded button component that displays a sparkles icon and animated agent ring, perfect for highlighting primary actions.",
    example: <AuraButton size={4}>Ask Aura</AuraButton>,
    name: "aura-button",
    sourceUrl:
      "https://github.com/chrisgrabinski/chrisgrabinski.com/blob/main/src/components/aura-button.tsx",
    title: "Aura button",
  },
  {
    description:
      "Displays user profile pictures with automatic fallback to initials when images are unavailable or fail to load.",
    example: (
      <div className="flex gap-6">
        <Avatar fallback="Chris Grabiński" size={7} src={avatarImage.src} />
        <Avatar fallback="Chris Grabiński" size={7} />
      </div>
    ),
    name: "avatar",
    sourceUrl:
      "https://github.com/chrisgrabinski/chrisgrabinski.com/blob/main/src/components/avatar.tsx",
    title: "Avatar",
    variants: [
      {
        description:
          "An avatar variant that overlays a country flag in the bottom-right corner, ideal for displaying user location or geographic context.",
        example: (
          <div className="flex gap-6">
            <CountryAvatar
              code="DE"
              fallback="Chris Grabiński"
              size={7}
              src={avatarImage.src}
            />
            <CountryAvatar code="DE" fallback="Chris Grabiński" size={7} />
          </div>
        ),
        name: "country",
        sourceUrl:
          "https://github.com/chrisgrabinski/chrisgrabinski.com/blob/main/src/components/avatar-country.tsx",
        title: "Country Avatar",
      },
      {
        description:
          "An avatar variant that displays a verified badge overlay in the bottom-right corner, perfect for authenticated or verified accounts.",
        example: (
          <div className="flex gap-6">
            <VerifiedAvatar
              fallback="Chris Grabiński"
              size={7}
              src={avatarImage.src}
            />
            <VerifiedAvatar fallback="Chris Grabiński" size={7} />
          </div>
        ),
        name: "verified",
        sourceUrl:
          "https://github.com/chrisgrabinski/chrisgrabinski.com/blob/main/src/components/avatar-verified.tsx",
        title: "Verified Avatar",
      },
    ],
  },
  {
    description:
      "A compact label component for displaying status indicators, tags, or metadata with multiple size and variant options.",
    example: <Badge>Beta</Badge>,
    name: "badge",
    sourceUrl:
      "https://github.com/chrisgrabinski/chrisgrabinski.com/blob/main/src/components/badge.tsx",
    title: "Badge",
  },
  {
    description:
      "A breadcrumb navigation component that displays a list of links to the current page's location, helping users understand their path and navigate back through hierarchical structures.",
    example: (
      <Breadcrumbs
        items={[
          { name: "Home", url: "#" },
          { name: "Components", url: "#" },
          { name: "Breadcrumbs", url: "#" },
        ]}
      />
    ),
    name: "breadcrumbs",
    sourceUrl:
      "https://github.com/chrisgrabinski/chrisgrabinski.com/blob/main/src/components/breadcrumbs.tsx",
    title: "Breadcrumbs",
  },
  {
    description:
      "A versatile button component with multiple variants, sizes, and states that supports loading and disabled states for building interactive interfaces.",
    example: <Button size={4}>You can click me</Button>,
    name: "button",
    sourceUrl:
      "https://github.com/chrisgrabinski/chrisgrabinski.com/blob/main/src/components/button.tsx",
    title: "Button",
    variants: [
      {
        description:
          "A button variant styled in red for destructive actions like delete or remove operations.",
        example: (
          <Button size={4} variant="destructive">
            <TrashIcon />
            Delete
          </Button>
        ),
        name: "destructive",
        sourceUrl:
          "https://github.com/chrisgrabinski/chrisgrabinski.com/blob/main/src/components/button.tsx",
        title: "Destructive button",
      },
      {
        description:
          "A button variant with transparent background and subtle hover effect, perfect for secondary actions that don't need emphasis.",
        example: (
          <Button size={4} variant="ghost">
            Spooky! 👻
          </Button>
        ),
        name: "ghost",
        sourceUrl:
          "https://github.com/chrisgrabinski/chrisgrabinski.com/blob/main/src/components/button.tsx",
        title: "Ghost button",
      },
      {
        description:
          "A button variant with a visible border and transparent background, ideal for secondary actions that need visual distinction.",
        example: (
          <Button size={4} variant="outline">
            You may click me
          </Button>
        ),
        name: "outline",
        sourceUrl:
          "https://github.com/chrisgrabinski/chrisgrabinski.com/blob/main/src/components/button.tsx",
        title: "Outline button",
      },
      {
        description:
          "A button variant styled in the brand color for primary actions that require the most user attention and engagement.",
        example: (
          <Button size={4} variant="primary">
            You must click me
          </Button>
        ),
        name: "primary",
        sourceUrl:
          "https://github.com/chrisgrabinski/chrisgrabinski.com/blob/main/src/components/button.tsx",
        title: "Primary button",
      },
    ],
  },
  {
    description:
      "A container component with rounded corners and subtle borders that provides a clean way to group and organize related content.",
    example: (
      <Card className="flex items-center gap-3">
        <CountryAvatar
          code="DE"
          fallback="Chris Grabiński"
          size={4}
          src={avatarImage.src}
        />
        <div className="flex flex-col">
          <p className="flex items-baseline gap-1.5 font-medium text-base">
            Chris Grabiński
            <Badge size={1}>Admin</Badge>
          </p>
          <p className="text-neutral-500 text-sm">mail@example.com</p>
        </div>
      </Card>
    ),
    name: "card",
    sourceUrl:
      "https://github.com/chrisgrabinski/chrisgrabinski.com/blob/main/src/components/card.tsx",
    title: "Card",
  },
  {
    description:
      "A checkbox input with custom styling that displays a checkmark icon when selected and supports both controlled and uncontrolled states.",
    example: (
      <CheckboxRoot>
        <CheckboxIndicator />
      </CheckboxRoot>
    ),
    name: "checkbox",
    sourceUrl:
      "https://github.com/chrisgrabinski/chrisgrabinski.com/blob/main/src/components/checkbox.tsx",
    title: "Checkbox",
  },
  {
    description:
      "A clickable component that copies text content to the clipboard and displays a success toast notification, providing immediate visual feedback to users.",
    example: (
      <CopyToClipboard className="text-xl">You can copy me</CopyToClipboard>
    ),
    name: "copy-to-clipboard",
    sourceUrl:
      "https://github.com/chrisgrabinski/chrisgrabinski.com/blob/main/src/components/copy-to-clipboard.tsx",
    title: "Copy to clipboard",
  },
  {
    description:
      "Displays a country flag and name based on an ISO country code, offering a compact and recognizable way to present geographic information.",
    example: <CountryLabel className="text-xl" code="TH" />,
    name: "country-label",

    sourceUrl:
      "https://github.com/chrisgrabinski/chrisgrabinski.com/blob/main/src/components/country-label.tsx",
    title: "Country label",
  },
  {
    description:
      "A dropzone component that allows users to drag and files to upload them.",
    example: (
      <Dropzone
        accept={{
          "audio/*": [".mp3", ".wav", ".ogg"],
          "video/*": [".mp4", ".mov", ".avi"],
        }}
      />
    ),
    name: "dropzone",

    sourceUrl:
      "https://github.com/chrisgrabinski/chrisgrabinski.com/blob/main/src/components/dropzone.tsx",
    title: "Dropzone",
  },
  {
    description:
      "Intelligently truncates long filenames using a center-ellipsis approach that keeps both the beginning and end visible while preserving the file extension.",
    example: (
      <Filename className="text-xl">
        LandingPage_HeroSection_V3_final_FINALreallyFINAL_ApprovedByClient_SaturdayNightEdit_20240614_v2_finalfinal_(do-not-use-this-one)_MergedLayers.psd
      </Filename>
    ),
    name: "filename",
    sourceUrl:
      "https://github.com/chrisgrabinski/chrisgrabinski.com/blob/main/src/components/filename.tsx",
    title: "Filename",
  },
  {
    description:
      "A bordered container component for displaying icons in a consistent, visually distinct box format with multiple size options.",
    example: (
      <IconBox size={4}>
        <StarIcon />
      </IconBox>
    ),
    name: "icon-box",
    sourceUrl:
      "https://github.com/chrisgrabinski/chrisgrabinski.com/blob/main/src/components/icon-box.tsx",
    title: "Icon box",
  },
  {
    description:
      "A button component that displays only an icon without text, perfect for compact interfaces, toolbar actions, and space-constrained layouts.",
    example: (
      <IconButton size={4}>
        <StarIcon />
      </IconButton>
    ),
    name: "icon-button",
    sourceUrl:
      "https://github.com/chrisgrabinski/chrisgrabinski.com/blob/main/src/components/icon-button.tsx",
    title: "Icon button",
    variants: [
      {
        description:
          "An icon button variant styled in red for destructive actions like delete or remove operations.",
        example: (
          <IconButton size={4} variant="destructive">
            <TrashIcon />
          </IconButton>
        ),
        name: "destructive",
        sourceUrl:
          "https://github.com/chrisgrabinski/chrisgrabinski.com/blob/main/src/components/icon-button.tsx",
        title: "Destructive icon button",
      },
      {
        description:
          "An icon button variant with transparent background and subtle hover effect, ideal for secondary actions that don't need emphasis.",
        example: (
          <IconButton size={4} variant="ghost">
            <GhostIcon />
          </IconButton>
        ),
        name: "ghost",
        sourceUrl:
          "https://github.com/chrisgrabinski/chrisgrabinski.com/blob/main/src/components/icon-button.tsx",
        title: "Ghost icon button",
      },
      {
        description:
          "An icon button variant with a visible border and transparent background, perfect for secondary actions that need visual distinction.",
        example: (
          <IconButton size={4} variant="outline">
            <StarIcon />
          </IconButton>
        ),
        name: "outline",
        sourceUrl:
          "https://github.com/chrisgrabinski/chrisgrabinski.com/blob/main/src/components/icon-button.tsx",
        title: "Outline icon button",
      },
      {
        description:
          "An icon button variant styled in the brand color for primary actions that require the most user attention and engagement.",
        example: (
          <IconButton size={4} variant="primary">
            <StarIcon />
          </IconButton>
        ),
        name: "primary",
        sourceUrl:
          "https://github.com/chrisgrabinski/chrisgrabinski.com/blob/main/src/components/icon-button.tsx",
        title: "Primary icon button",
      },
    ],
  },
  {
    description:
      "A clickable component that displays a temporary toast notification above the element when clicked, providing instant visual feedback for user actions.",
    example: (
      <InlineToast message="Ta-da!">
        Something happens when you click me
      </InlineToast>
    ),
    name: "inline-toast",
    sourceUrl:
      "https://github.com/chrisgrabinski/chrisgrabinski.com/blob/main/src/components/inline-toast.tsx",
    title: "Inline toast",
  },
  {
    description:
      "A toggle group component that allows users to select a single option from multiple related choices, displayed as a visually connected set of buttons.",
    example: (
      <SegmentedControlRoot defaultValue="desktop" size={3}>
        <SegmentedControlItem value="mobile">Mobile</SegmentedControlItem>
        <SegmentedControlItem value="tablet">Tablet</SegmentedControlItem>
        <SegmentedControlItem value="desktop">Desktop</SegmentedControlItem>
      </SegmentedControlRoot>
    ),
    name: "segmented-control",
    sourceUrl:
      "https://github.com/chrisgrabinski/chrisgrabinski.com/blob/main/src/components/segmented-control.tsx",
    title: "Segmented control",
  },
  {
    description: "An input for selecting values from a range of values",
    example: <Slider defaultValue={[50]} />,
    name: "slider",
    sourceUrl:
      "https://github.com/chrisgrabinski/chrisgrabinski.com/blob/main/src/components/slider.tsx",
    title: "Slider",
  },
  {
    description:
      "A toggle switch component for binary on/off states with smooth animations, customizable sizes, and a sliding thumb indicator.",
    example: <Switch />,
    name: "switch",
    sourceUrl:
      "https://github.com/chrisgrabinski/chrisgrabinski.com/blob/main/src/components/switch.tsx",
    title: "Switch",
  },
  {
    description:
      "Displays contextual information in a small popover when users hover over or focus an element, enhancing discoverability and providing helpful guidance.",
    example: (
      <TooltipRoot>
        <TooltipTrigger asChild>
          <IconButton size={3} variant="ghost">
            <StarIcon />
          </IconButton>
        </TooltipTrigger>
        <TooltipContent>Add to favorites</TooltipContent>
      </TooltipRoot>
    ),
    name: "tooltip",
    sourceUrl:
      "https://github.com/chrisgrabinski/chrisgrabinski.com/blob/main/src/components/tooltip.tsx",
    title: "Tooltip",
  },
];
