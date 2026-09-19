import type { ComponentData } from "@/app/aura/(docs)/data/components/types";
import { Callout } from "@/components/callout";

export const callout: ComponentData = {
  demo: (
    <Callout
      description="Protect your account by adding a second verification step from Settings."
      title="Two-factor authentication is available"
    />
  ),
  description:
    "Highlights important messages with a title, supporting description, and a status-colored icon.",
  name: "callout",
  sourceUrl:
    "https://github.com/chrisgrabinski/chrisgrabinski.com/blob/main/src/components/callout.tsx",
  storybookUrl: "https://storybook.chrisgrabinski.com/?path=/docs/card--docs",
  title: "Callout",
  variants: [
    {
      demo: (
        <Callout
          description="Your card was declined. Update your billing details and try again."
          status="error"
          title="Unable to process payment"
        />
      ),
      title: "Error",
    },
    {
      demo: (
        <Callout
          description="You're using 92% of your plan. Free up space or upgrade to avoid interruptions."
          status="warning"
          title="Storage almost full"
        />
      ),
      title: "Warning",
    },
    {
      demo: (
        <Callout
          description="Your changes have been saved and are now visible to your team."
          status="success"
          title="Profile updated"
        />
      ),
      title: "Success",
    },
  ],
};
