import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ComponentPreview } from "@/app/aura/component-preview";
import { components } from "@/app/aura/components/components";
import { Breadcrumbs } from "@/components/breadcrumbs";

const getComponentData = (componentName: string) => {
  return components.find((c) => c.name === componentName);
};

export async function generateStaticParams() {
  return components.map((component) => ({
    component: component.name,
  }));
}

export async function generateMetadata({
  params,
}: PageProps<"/aura/components/[component]">): Promise<Metadata> {
  const { component } = await params;

  const componentData = getComponentData(component);

  if (!componentData) {
    return {};
  }

  return {
    description: componentData.description,
    title: componentData.title,
  };
}

export default async function ComponentPage({
  params,
}: PageProps<"/aura/components/[component]">) {
  const { component } = await params;

  const componentData = getComponentData(component);

  if (!componentData) {
    notFound();
  }

  return (
    <div className="grid gap-12">
      <div className="grid gap-1.5">
        <Breadcrumbs
          includeJsonLd
          items={[
            { name: "Home", url: "/aura" },
            {
              name: componentData.title,
              // @ts-expect-error - TODO: Look into dynamic route segments with typed routes
              url: `/aura/components/${component}`,
            },
          ]}
        />
        <h1 className="font-semibold text-4xl">{componentData.title}</h1>
        <p className="neutral-500 text-balance text-lg text-neutral-600">
          {componentData.description}
        </p>
      </div>
      <ComponentPreview sourceUrl={componentData.sourceUrl}>
        {componentData.example}
      </ComponentPreview>
    </div>
  );
}
