import { GhostIcon, StarIcon, TrashIcon } from "lucide-react";
import Image from "next/image";
import avatarImage from "@/app/(homepage)/images/chris-grabinski.jpg";
import {
  AnnouncementDemo,
  AudioControlsDemo,
  BadgeDemo,
  BreadcrumbsDemo,
  CardDemo,
  CheckboxDemo,
  CountryLabelDemo,
  DataListDemo,
  DropzoneDemo,
  FilenameDemo,
  IconBoxDemo,
  InlineToastDemo,
  ProgressRingDemo,
  SegmentedControlDemo,
  SliderDemo,
  StatusDemo,
  SwitchDemo,
  TooltipDemo,
} from "@/app/aura/patterns";
import { AudioButtonDemo } from "@/app/aura/patterns/audio-button";
import { CopyToClipboardDemo } from "@/app/aura/patterns/copy-to-clipboard";

import { AuraButton } from "@/components/aura-button";
import { Avatar } from "@/components/avatar";
import { CountryAvatar } from "@/components/avatar-country";
import { VerifiedAvatar } from "@/components/avatar-verified";
import { Badge } from "@/components/badge";

import { Button } from "@/components/button";
import { Card } from "@/components/card";

import { IconButton } from "@/components/icon-button";

import pattern from "../../(homepage)/images/pawel-czerwinski-8uZPynIu-rQ-unsplash.jpg";

type Component = {
  description: string;
  example?: React.ReactNode;
  name?: string;
  sourceUrl: string;
  storybookUrl?: string;
  title: string;
  variants?: Component[];
};

export const component: Record<string, Component> = {
  announcement: {
    description: "An announcement for a new feature or update.",
    sourceUrl:
      "https://github.com/chrisgrabinski/chrisgrabinski.com/blob/main/src/components/announcement.tsx",
    storybookUrl:
      "https://storybook.chrisgrabinski.com/?path=/docs/announcement--docs",
    title: "Announcement",
  },
  "audio-button": {
    description: "A simple button that plays a short audio clip when clicked.",
    sourceUrl:
      "https://github.com/chrisgrabinski/chrisgrabinski.com/blob/main/src/components/audio-button.tsx",
    storybookUrl:
      "https://storybook.chrisgrabinski.com/?path=/docs/audiobutton--docs",
    title: "Audio Button",
  },
  "audio-controls": {
    description:
      "A classic audio controls interface with commonly used functionality.",
    sourceUrl:
      "https://github.com/chrisgrabinski/chrisgrabinski.com/blob/main/src/components/audio-controls.tsx",
    title: "Audio controls",
  },
  "aura-button": {
    description:
      "A branded button component that displays a sparkles icon and animated agent ring, perfect for highlighting primary actions.",
    sourceUrl:
      "https://github.com/chrisgrabinski/chrisgrabinski.com/blob/main/src/components/aura-button.tsx",
    storybookUrl:
      "https://storybook.chrisgrabinski.com/?path=/docs/aurabutton--docs",
    title: "Aura button",
  },
  avatar: {
    description:
      "Displays user profile pictures with automatic fallback to initials when images are unavailable or fail to load.",
    sourceUrl:
      "https://github.com/chrisgrabinski/chrisgrabinski.com/blob/main/src/components/avatar.tsx",
    storybookUrl:
      "https://storybook.chrisgrabinski.com/?path=/docs/avatar--docs",
    title: "Avatar",
  },
  "avatar/country": {
    description:
      "An avatar variant that overlays a country flag in the bottom-right corner, ideal for displaying user location or geographic context.",
    sourceUrl:
      "https://github.com/chrisgrabinski/chrisgrabinski.com/blob/main/src/components/avatar-country.tsx",
    storybookUrl:
      "https://storybook.chrisgrabinski.com/?path=/docs/countryavatar--docs",
    title: "Country Avatar",
  },
  "avatar/verified": {
    description:
      "An avatar variant that displays a verified badge overlay in the bottom-right corner, perfect for authenticated or verified accounts.",
    sourceUrl:
      "https://github.com/chrisgrabinski/chrisgrabinski.com/blob/main/src/components/avatar-verified.tsx",
    storybookUrl:
      "https://storybook.chrisgrabinski.com/?path=/docs/verifiedavatar--docs",
    title: "Verified Avatar",
  },
  badge: {
    description:
      "A compact label component for displaying status indicators, tags, or metadata with multiple size and variant options.",
    sourceUrl:
      "https://github.com/chrisgrabinski/chrisgrabinski.com/blob/main/src/components/badge.tsx",
    storybookUrl:
      "https://storybook.chrisgrabinski.com/?path=/docs/badge--docs",
    title: "Badge",
  },
  breadcrumbs: {
    description:
      "A breadcrumb navigation component that displays a list of links to the current page's location, helping users understand their path and navigate back through hierarchical structures.",
    sourceUrl:
      "https://github.com/chrisgrabinski/chrisgrabinski.com/blob/main/src/components/breadcrumbs.tsx",
    storybookUrl:
      "https://storybook.chrisgrabinski.com/?path=/docs/breadcrumbs--docs",
    title: "Breadcrumbs",
  },
  button: {
    description:
      "A versatile button component with multiple variants, sizes, and states that supports loading and disabled states for building interactive interfaces.",
    sourceUrl:
      "https://github.com/chrisgrabinski/chrisgrabinski.com/blob/main/src/components/button.tsx",
    storybookUrl:
      "https://storybook.chrisgrabinski.com/?path=/docs/button--docs",
    title: "Button",
  },
  "button/destructive": {
    description:
      "A button variant styled in red for destructive actions like delete or remove operations.",
    sourceUrl:
      "https://github.com/chrisgrabinski/chrisgrabinski.com/blob/main/src/components/button.tsx",
    storybookUrl:
      "https://storybook.chrisgrabinski.com/?path=/story/button--destructive",
    title: "Destructive button",
  },
  "button/ghost": {
    description:
      "A button variant with transparent background and subtle hover effect, perfect for secondary actions that don't need emphasis.",
    sourceUrl:
      "https://github.com/chrisgrabinski/chrisgrabinski.com/blob/main/src/components/button.tsx",
    storybookUrl:
      "https://storybook.chrisgrabinski.com/?path=/story/button--ghost",
    title: "Ghost button",
  },
  "button/outline": {
    description:
      "A button variant with a visible border and transparent background, ideal for secondary actions that need visual distinction.",
    sourceUrl:
      "https://github.com/chrisgrabinski/chrisgrabinski.com/blob/main/src/components/button.tsx",
    storybookUrl:
      "https://storybook.chrisgrabinski.com/?path=/story/button--outline",
    title: "Outline button",
  },
  "button/primary": {
    description:
      "A button variant styled in the brand color for primary actions that require the most user attention and engagement.",
    sourceUrl:
      "https://github.com/chrisgrabinski/chrisgrabinski.com/blob/main/src/components/button.tsx",
    storybookUrl:
      "https://storybook.chrisgrabinski.com/?path=/story/button--primary",
    title: "Primary button",
  },
  card: {
    description:
      "A container component with rounded corners and subtle borders that provides a clean way to group and organize related content.",
    name: "card",
    sourceUrl:
      "https://github.com/chrisgrabinski/chrisgrabinski.com/blob/main/src/components/card.tsx",
    storybookUrl: "https://storybook.chrisgrabinski.com/?path=/docs/card--docs",
    title: "Card",
  },
  "card/glass": {
    description:
      "A card variant with a glass-like effect that creates a frosted glass appearance.",
    sourceUrl:
      "https://github.com/chrisgrabinski/chrisgrabinski.com/blob/main/src/components/button.tsx",
    storybookUrl:
      "https://storybook.chrisgrabinski.com/?path=/story/card--glass",
    title: "Glass Card",
  },
  checkbox: {
    description:
      "A checkbox input with custom styling that displays a checkmark icon when selected and supports both controlled and uncontrolled states.",
    sourceUrl:
      "https://github.com/chrisgrabinski/chrisgrabinski.com/blob/main/src/components/checkbox.tsx",
    storybookUrl:
      "https://storybook.chrisgrabinski.com/?path=/docs/checkbox--docs",
    title: "Checkbox",
  },
  "copy-to-clipboard": {
    description:
      "A clickable component that copies text content to the clipboard and displays a success toast notification, providing immediate visual feedback to users.",
    sourceUrl:
      "https://github.com/chrisgrabinski/chrisgrabinski.com/blob/main/src/components/copy-to-clipboard.tsx",
    storybookUrl:
      "https://storybook.chrisgrabinski.com/?path=/docs/copytoclipboard--docs",
    title: "Copy to clipboard",
  },
  "country-label": {
    description:
      "Displays a country flag and name based on an ISO country code, offering a compact and recognizable way to present geographic information.",
    sourceUrl:
      "https://github.com/chrisgrabinski/chrisgrabinski.com/blob/main/src/components/country-label.tsx",
    storybookUrl:
      "https://storybook.chrisgrabinski.com/?path=/docs/countrylabel--docs",
    title: "Country label",
  },
  "data-list": {
    description:
      "A list of data items with labels and values, perfect for displaying key-value pairs or data in a list format.",
    sourceUrl:
      "https://github.com/chrisgrabinski/chrisgrabinski.com/blob/main/src/components/data-list.tsx",
    title: "Data list",
  },
  dropzone: {
    description:
      "A dropzone component that allows users to drag and files to upload them.",
    sourceUrl:
      "https://github.com/chrisgrabinski/chrisgrabinski.com/blob/main/src/components/dropzone.tsx",
    title: "Dropzone",
  },
  filename: {
    description:
      "Intelligently truncates long filenames using a center-ellipsis approach that keeps both the beginning and end visible while preserving the file extension.",
    sourceUrl:
      "https://github.com/chrisgrabinski/chrisgrabinski.com/blob/main/src/components/filename.tsx",
    storybookUrl:
      "https://storybook.chrisgrabinski.com/?path=/docs/filename--docs",
    title: "Filename",
  },
  "icon-box": {
    description:
      "A bordered container component for displaying icons in a consistent, visually distinct box format with multiple size options.",
    sourceUrl:
      "https://github.com/chrisgrabinski/chrisgrabinski.com/blob/main/src/components/icon-box.tsx",
    storybookUrl:
      "https://storybook.chrisgrabinski.com/?path=/docs/iconbox--docs",
    title: "Icon box",
  },
  "icon-button": {
    description:
      "A button component that displays only an icon without text, perfect for compact interfaces, toolbar actions, and space-constrained layouts.",
    sourceUrl:
      "https://github.com/chrisgrabinski/chrisgrabinski.com/blob/main/src/components/icon-button.tsx",
    storybookUrl:
      "https://storybook.chrisgrabinski.com/?path=/docs/iconbutton--docs",
    title: "Icon button",
  },
  "icon-button/destructive": {
    description:
      "An icon button variant styled in red for destructive actions like delete or remove operations.",
    sourceUrl:
      "https://github.com/chrisgrabinski/chrisgrabinski.com/blob/main/src/components/icon-button.tsx",
    storybookUrl:
      "https://storybook.chrisgrabinski.com/?path=/story/iconbutton--destructive",
    title: "Destructive icon button",
  },
  "icon-button/ghost": {
    description:
      "An icon button variant with transparent background and subtle hover effect, ideal for secondary actions that don't need emphasis.",
    sourceUrl:
      "https://github.com/chrisgrabinski/chrisgrabinski.com/blob/main/src/components/icon-button.tsx",
    storybookUrl:
      "https://storybook.chrisgrabinski.com/?path=/story/iconbutton--ghost",
    title: "Ghost icon button",
  },
  "icon-button/outline": {
    description:
      "An icon button variant with a visible border and transparent background, perfect for secondary actions that need visual distinction.",
    sourceUrl:
      "https://github.com/chrisgrabinski/chrisgrabinski.com/blob/main/src/components/icon-button.tsx",
    storybookUrl:
      "https://storybook.chrisgrabinski.com/?path=/story/iconbutton--outline",
    title: "Outline icon button",
  },
  "icon-button/primary": {
    description:
      "An icon button variant styled in the brand color for primary actions that require the most user attention and engagement.",
    sourceUrl:
      "https://github.com/chrisgrabinski/chrisgrabinski.com/blob/main/src/components/icon-button.tsx",
    storybookUrl:
      "https://storybook.chrisgrabinski.com/?path=/story/iconbutton--primary",
    title: "Primary icon button",
  },
  "inline-toast": {
    description:
      "A clickable component that displays a temporary toast notification above the element when clicked, providing instant visual feedback for user actions.",
    sourceUrl:
      "https://github.com/chrisgrabinski/chrisgrabinski.com/blob/main/src/components/inline-toast.tsx",
    storybookUrl:
      "https://storybook.chrisgrabinski.com/?path=/docs/inlinetoast--docs",
    title: "Inline toast",
  },
  "progress-ring": {
    description: "Indicates progress in a circular shape.",
    sourceUrl:
      "https://github.com/chrisgrabinski/chrisgrabinski.com/blob/main/src/components/progress-ring.tsx",
    storybookUrl:
      "https://storybook.chrisgrabinski.com/?path=/docs/progressring--docs",
    title: "Progress ring",
  },
  "segmented-control": {
    description:
      "A toggle group component that allows users to select a single option from multiple related choices, displayed as a visually connected set of buttons.",
    sourceUrl:
      "https://github.com/chrisgrabinski/chrisgrabinski.com/blob/main/src/components/segmented-control.tsx",
    storybookUrl:
      "https://storybook.chrisgrabinski.com/?path=/docs/segmentedcontrol--docs",
    title: "Segmented control",
  },
  slider: {
    description: "An input for selecting values from a range of values",
    sourceUrl:
      "https://github.com/chrisgrabinski/chrisgrabinski.com/blob/main/src/components/slider.tsx",
    storybookUrl:
      "https://storybook.chrisgrabinski.com/?path=/docs/slider--docs",
    title: "Slider",
  },
  status: {
    description:
      "Indicates urgency, severity, or importance of a status or alert.",
    sourceUrl:
      "https://github.com/chrisgrabinski/chrisgrabinski.com/blob/main/src/components/status.tsx",
    storybookUrl:
      "https://storybook.chrisgrabinski.com/?path=/docs/status--docs",
    title: "Status",
  },
  switch: {
    description:
      "A toggle switch component for binary on/off states with smooth animations, customizable sizes, and a sliding thumb indicator.",
    sourceUrl:
      "https://github.com/chrisgrabinski/chrisgrabinski.com/blob/main/src/components/switch.tsx",
    storybookUrl:
      "https://storybook.chrisgrabinski.com/?path=/docs/switch--docs",
    title: "Switch",
  },
  tooltip: {
    description:
      "Displays contextual information in a small popover when users hover over or focus an element, enhancing discoverability and providing helpful guidance.",
    sourceUrl:
      "https://github.com/chrisgrabinski/chrisgrabinski.com/blob/main/src/components/tooltip.tsx",
    storybookUrl:
      "https://storybook.chrisgrabinski.com/?path=/docs/tooltip--docs",
    title: "Tooltip",
  },
};

export const components: Component[] = [
  {
    description: "A simple button that plays a short audio clip when clicked.",
    example: <AnnouncementDemo.Component />,
    name: "announcement",
    sourceUrl:
      "https://github.com/chrisgrabinski/chrisgrabinski.com/blob/main/src/components/announcement.tsx",
    storybookUrl:
      "https://storybook.chrisgrabinski.com/?path=/docs/announcement--docs",
    title: "Announcement",
  },
  {
    description: "A simple button that plays a short audio clip when clicked.",
    example: <AudioButtonDemo.Component />,
    name: "audio-button",
    sourceUrl:
      "https://github.com/chrisgrabinski/chrisgrabinski.com/blob/main/src/components/audio-button.tsx",
    storybookUrl:
      "https://storybook.chrisgrabinski.com/?path=/docs/audiobutton--docs",
    title: "Audio button",
  },
  {
    description:
      "A classic audio controls interface with commonly used functionality.",
    example: <AudioControlsDemo.Component />,
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
    storybookUrl:
      "https://storybook.chrisgrabinski.com/?path=/docs/aurabutton--docs",
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
    storybookUrl:
      "https://storybook.chrisgrabinski.com/?path=/docs/avatar--docs",

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
        storybookUrl:
          "https://storybook.chrisgrabinski.com/?path=/docs/countryavatar--docs",
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
        storybookUrl:
          "https://storybook.chrisgrabinski.com/?path=/docs/verifiedavatar--docs",
        title: "Verified Avatar",
      },
    ],
  },
  {
    description:
      "A compact label component for displaying status indicators, tags, or metadata with multiple size and variant options.",
    example: <BadgeDemo.Component />,
    name: "badge",
    sourceUrl:
      "https://github.com/chrisgrabinski/chrisgrabinski.com/blob/main/src/components/badge.tsx",
    storybookUrl:
      "https://storybook.chrisgrabinski.com/?path=/docs/badge--docs",
    title: "Badge",
  },
  {
    description:
      "A breadcrumb navigation component that displays a list of links to the current page's location, helping users understand their path and navigate back through hierarchical structures.",
    example: <BreadcrumbsDemo.Component />,
    name: "breadcrumbs",
    sourceUrl:
      "https://github.com/chrisgrabinski/chrisgrabinski.com/blob/main/src/components/breadcrumbs.tsx",
    storybookUrl:
      "https://storybook.chrisgrabinski.com/?path=/docs/breadcrumbs--docs",
    title: "Breadcrumbs",
  },
  {
    description:
      "A versatile button component with multiple variants, sizes, and states that supports loading and disabled states for building interactive interfaces.",
    example: <Button size={4}>You can click me</Button>,
    name: "button",
    sourceUrl:
      "https://github.com/chrisgrabinski/chrisgrabinski.com/blob/main/src/components/button.tsx",
    storybookUrl:
      "https://storybook.chrisgrabinski.com/?path=/docs/button--docs",
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
        storybookUrl:
          "https://storybook.chrisgrabinski.com/?path=/story/button--destructive",
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
        storybookUrl:
          "https://storybook.chrisgrabinski.com/?path=/story/button--ghost",
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
        storybookUrl:
          "https://storybook.chrisgrabinski.com/?path=/story/button--outline",
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
        storybookUrl:
          "https://storybook.chrisgrabinski.com/?path=/story/button--primary",
        title: "Primary button",
      },
    ],
  },
  {
    description:
      "A container component with rounded corners and subtle borders that provides a clean way to group and organize related content.",
    example: <CardDemo.Component />,
    name: "card",
    sourceUrl:
      "https://github.com/chrisgrabinski/chrisgrabinski.com/blob/main/src/components/card.tsx",
    storybookUrl: "https://storybook.chrisgrabinski.com/?path=/docs/card--docs",
    title: "Card",
    variants: [
      {
        description:
          "A card variant with a glass-like effect that creates a frosted glass appearance.",
        example: (
          <div className="relative grid w-full place-items-center overflow-clip rounded-xl p-12">
            <Image
              alt=""
              className="absolute inset-0 object-cover contrast-200"
              src={pattern}
            />
            <Card
              className="col-start-1 row-start-1 flex items-center gap-3"
              variant="glass"
            >
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
          </div>
        ),
        name: "glass",
        sourceUrl:
          "https://github.com/chrisgrabinski/chrisgrabinski.com/blob/main/src/components/button.tsx",
        storybookUrl:
          "https://storybook.chrisgrabinski.com/?path=/story/card--glass",
        title: "Glass card",
      },
    ],
  },
  {
    description:
      "A checkbox input with custom styling that displays a checkmark icon when selected and supports both controlled and uncontrolled states.",
    example: <CheckboxDemo.Component />,
    name: "checkbox",
    sourceUrl:
      "https://github.com/chrisgrabinski/chrisgrabinski.com/blob/main/src/components/checkbox.tsx",
    storybookUrl:
      "https://storybook.chrisgrabinski.com/?path=/docs/checkbox--docs",
    title: "Checkbox",
  },
  {
    description:
      "A clickable component that copies text content to the clipboard and displays a success toast notification, providing immediate visual feedback to users.",
    example: <CopyToClipboardDemo.Component />,
    name: "copy-to-clipboard",
    sourceUrl:
      "https://github.com/chrisgrabinski/chrisgrabinski.com/blob/main/src/components/copy-to-clipboard.tsx",
    storybookUrl:
      "https://storybook.chrisgrabinski.com/?path=/docs/copytoclipboard--docs",
    title: "Copy to clipboard",
  },
  {
    description:
      "Displays a country flag and name based on an ISO country code, offering a compact and recognizable way to present geographic information.",
    example: <CountryLabelDemo.Component />,
    name: "country-label",
    sourceUrl:
      "https://github.com/chrisgrabinski/chrisgrabinski.com/blob/main/src/components/country-label.tsx",
    storybookUrl:
      "https://storybook.chrisgrabinski.com/?path=/docs/countrylabel--docs",
    title: "Country label",
  },
  {
    description:
      "A list of data items with labels and values, perfect for displaying key-value pairs or data in a list format.",
    example: <DataListDemo.Component />,
    name: "data-list",
    sourceUrl:
      "https://github.com/chrisgrabinski/chrisgrabinski.com/blob/main/src/components/data-list.tsx",
    title: "Data list",
  },
  {
    description:
      "A dropzone component that allows users to drag and files to upload them.",
    example: <DropzoneDemo.Component />,
    name: "dropzone",
    sourceUrl:
      "https://github.com/chrisgrabinski/chrisgrabinski.com/blob/main/src/components/dropzone.tsx",
    title: "Dropzone",
  },
  {
    description:
      "Intelligently truncates long filenames using a center-ellipsis approach that keeps both the beginning and end visible while preserving the file extension.",
    example: <FilenameDemo.Component />,
    name: "filename",
    sourceUrl:
      "https://github.com/chrisgrabinski/chrisgrabinski.com/blob/main/src/components/filename.tsx",
    storybookUrl:
      "https://storybook.chrisgrabinski.com/?path=/docs/filename--docs",
    title: "Filename",
  },
  {
    description:
      "A bordered container component for displaying icons in a consistent, visually distinct box format with multiple size options.",
    example: <IconBoxDemo.Component />,
    name: "icon-box",
    sourceUrl:
      "https://github.com/chrisgrabinski/chrisgrabinski.com/blob/main/src/components/icon-box.tsx",
    storybookUrl:
      "https://storybook.chrisgrabinski.com/?path=/docs/iconbox--docs",
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
    storybookUrl:
      "https://storybook.chrisgrabinski.com/?path=/docs/iconbutton--docs",
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
        storybookUrl:
          "https://storybook.chrisgrabinski.com/?path=/story/iconbutton--destructive",
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
        storybookUrl:
          "https://storybook.chrisgrabinski.com/?path=/story/iconbutton--ghost",
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
        storybookUrl:
          "https://storybook.chrisgrabinski.com/?path=/story/iconbutton--outline",
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
        storybookUrl:
          "https://storybook.chrisgrabinski.com/?path=/story/iconbutton--primary",
        title: "Primary icon button",
      },
    ],
  },
  {
    description:
      "A clickable component that displays a temporary toast notification above the element when clicked, providing instant visual feedback for user actions.",
    example: <InlineToastDemo.Component />,
    name: "inline-toast",
    sourceUrl:
      "https://github.com/chrisgrabinski/chrisgrabinski.com/blob/main/src/components/inline-toast.tsx",
    storybookUrl:
      "https://storybook.chrisgrabinski.com/?path=/docs/inlinetoast--docs",
    title: "Inline toast",
  },
  {
    description: "Indicates progress in a circular shape.",
    example: <ProgressRingDemo.Component />,
    name: "progress-ring",
    sourceUrl:
      "https://github.com/chrisgrabinski/chrisgrabinski.com/blob/main/src/components/progress-ring.tsx",
    storybookUrl:
      "https://storybook.chrisgrabinski.com/?path=/docs/progressring--docs",
    title: "Progress ring",
  },
  {
    description:
      "A toggle group component that allows users to select a single option from multiple related choices, displayed as a visually connected set of buttons.",
    example: <SegmentedControlDemo.Component />,
    name: "segmented-control",
    sourceUrl:
      "https://github.com/chrisgrabinski/chrisgrabinski.com/blob/main/src/components/segmented-control.tsx",
    storybookUrl:
      "https://storybook.chrisgrabinski.com/?path=/docs/segmentedcontrol--docs",
    title: "Segmented control",
  },
  {
    description: "An input for selecting values from a range of values",
    example: <SliderDemo.Component />,
    name: "slider",
    sourceUrl:
      "https://github.com/chrisgrabinski/chrisgrabinski.com/blob/main/src/components/slider.tsx",
    storybookUrl:
      "https://storybook.chrisgrabinski.com/?path=/docs/slider--docs",
    title: "Slider",
  },
  {
    description:
      "Indicates urgency, severity, or importance of a status or alert.",
    example: <StatusDemo.Component />,
    name: "status",
    sourceUrl:
      "https://github.com/chrisgrabinski/chrisgrabinski.com/blob/main/src/components/status.tsx",
    storybookUrl:
      "https://storybook.chrisgrabinski.com/?path=/docs/status--docs",
    title: "Status",
  },
  {
    description:
      "A toggle switch component for binary on/off states with smooth animations, customizable sizes, and a sliding thumb indicator.",
    example: <SwitchDemo.Component />,
    name: "switch",
    sourceUrl:
      "https://github.com/chrisgrabinski/chrisgrabinski.com/blob/main/src/components/switch.tsx",
    storybookUrl:
      "https://storybook.chrisgrabinski.com/?path=/docs/switch--docs",
    title: "Switch",
  },
  {
    description:
      "Displays contextual information in a small popover when users hover over or focus an element, enhancing discoverability and providing helpful guidance.",
    example: <TooltipDemo.Component />,
    name: "tooltip",
    sourceUrl:
      "https://github.com/chrisgrabinski/chrisgrabinski.com/blob/main/src/components/tooltip.tsx",
    storybookUrl:
      "https://storybook.chrisgrabinski.com/?path=/docs/tooltip--docs",
    title: "Tooltip",
  },
];
