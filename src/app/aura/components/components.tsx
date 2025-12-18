export type Component = {
  description: string;
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

    name: "announcement",
    sourceUrl:
      "https://github.com/chrisgrabinski/chrisgrabinski.com/blob/main/src/components/announcement.tsx",
    storybookUrl:
      "https://storybook.chrisgrabinski.com/?path=/docs/announcement--docs",
    title: "Announcement",
  },
  {
    description: "A simple button that plays a short audio clip when clicked.",

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

    name: "audio-controls",
    sourceUrl:
      "https://github.com/chrisgrabinski/chrisgrabinski.com/blob/main/src/components/audio-controls.tsx",
    title: "Audio controls",
  },
  {
    description:
      "A branded button component that displays a sparkles icon and animated agent ring, perfect for highlighting primary actions.",
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

    name: "card",
    sourceUrl:
      "https://github.com/chrisgrabinski/chrisgrabinski.com/blob/main/src/components/card.tsx",
    storybookUrl: "https://storybook.chrisgrabinski.com/?path=/docs/card--docs",
    title: "Card",
    variants: [
      {
        description:
          "A card variant with a glass-like effect that creates a frosted glass appearance.",
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

    name: "data-list",
    sourceUrl:
      "https://github.com/chrisgrabinski/chrisgrabinski.com/blob/main/src/components/data-list.tsx",
    title: "Data list",
  },
  {
    description:
      "A dropzone component that allows users to drag and files to upload them.",

    name: "dropzone",
    sourceUrl:
      "https://github.com/chrisgrabinski/chrisgrabinski.com/blob/main/src/components/dropzone.tsx",
    title: "Dropzone",
  },
  {
    description:
      "Intelligently truncates long filenames using a center-ellipsis approach that keeps both the beginning and end visible while preserving the file extension.",

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

    name: "inline-toast",
    sourceUrl:
      "https://github.com/chrisgrabinski/chrisgrabinski.com/blob/main/src/components/inline-toast.tsx",
    storybookUrl:
      "https://storybook.chrisgrabinski.com/?path=/docs/inlinetoast--docs",
    title: "Inline toast",
  },
  {
    description: "Indicates progress in a circular shape.",

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

    name: "segmented-control",
    sourceUrl:
      "https://github.com/chrisgrabinski/chrisgrabinski.com/blob/main/src/components/segmented-control.tsx",
    storybookUrl:
      "https://storybook.chrisgrabinski.com/?path=/docs/segmentedcontrol--docs",
    title: "Segmented control",
  },
  {
    description: "An input for selecting values from a range of values",

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

    name: "tooltip",
    sourceUrl:
      "https://github.com/chrisgrabinski/chrisgrabinski.com/blob/main/src/components/tooltip.tsx",
    storybookUrl:
      "https://storybook.chrisgrabinski.com/?path=/docs/tooltip--docs",
    title: "Tooltip",
  },
];
