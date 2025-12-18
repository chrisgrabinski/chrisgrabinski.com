import { CountryLabel } from "@/components/country-label";

const name = "country-label";

const components = ["country-label"];

const Component = () => {
  return <CountryLabel className="text-xl" code="TH" />;
};

export const CountryLabelDemo = {
  Component,
  components,
  name,
};
