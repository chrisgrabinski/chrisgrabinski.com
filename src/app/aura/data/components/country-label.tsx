import type { ComponentData } from "@/app/aura/data/components/types";
import { CountryLabel } from "@/components/country-label";

export const countryLabel: ComponentData = {
  demo: <CountryLabel code="US" />,
  description:
    "Displays a country with its flag icon and localized name, with support for custom labels.",
  name: "country-label",
  sourceUrl:
    "https://github.com/chrisgrabinski/chrisgrabinski.com/blob/main/src/components/country-label.tsx",
  storybookUrl:
    "https://storybook.chrisgrabinski.com/?path=/docs/countrylabel--docs",
  title: "Country Label",
  variants: [
    {
      demo: <CountryLabel code="TH">ราชอาณาจักรไทย</CountryLabel>,
      title: "Custom label",
    },
  ],
};
