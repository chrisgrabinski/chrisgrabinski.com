import { Breadcrumbs } from "@/components/breadcrumbs";

const name = "breadcrumbs";

const components = ["breadcrumbs", "link"];

const Component = () => {
  return (
    <Breadcrumbs
      items={[
        { name: "Home", url: "#" },
        { name: "Components", url: "#" },
        { name: "Breadcrumbs", url: "#" },
      ]}
    />
  );
};

export const BreadcrumbsDemo = {
  Component,
  components,
  name,
};
