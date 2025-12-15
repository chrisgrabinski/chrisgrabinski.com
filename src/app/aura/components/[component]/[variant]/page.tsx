import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { use } from "react";
import { ComponentPreview } from "@/app/aura/component-preview";
import { components } from "@/app/aura/components/components";
import { Breadcrumbs } from "@/components/breadcrumbs";

const getComponentData = (component: string) => {
  return components.find((c) => c.name === component);
};

const getVariantData = (component: string, variant: string) => {
  return components
    .find((c) => c.name === component)
    ?.variants?.find((v) => v.name === variant);
};

export async function generateStaticParams() {
  const params: Array<{ component: string; variant: string }> = [];

  for (const component of components) {
    if (component.variants) {
      for (const variant of component.variants) {
        params.push({
          component: component.name,
          variant: variant.name,
        });
      }
    }
  }

  return params;
}

export async function generateMetadata({
  params,
}: PageProps<"/aura/components/[component]/[variant]">): Promise<Metadata> {
  const { component, variant } = await params;

  const variantData = getVariantData(component, variant);

  if (!variantData) {
    return {};
  }

  return {
    description: variantData.description,
    title: variantData.title,
  };
}

export default function VariantPage({
  params,
}: PageProps<"/aura/components/[component]/[variant]">) {
  const { component, variant } = use(params);

  const componentData = getComponentData(component);

  if (!componentData) {
    return {};
  }

  const variantData = getVariantData(component, variant);

  if (!variantData) {
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
            {
              name: variantData.title,
              // @ts-expect-error - TODO: Look into dynamic route segments with typed routes
              url: `/aura/components/${component}/${variant}`,
            },
          ]}
        />
        <h1 className="font-semibold text-4xl">{variantData.title}</h1>
        <p className="neutral-500 text-balance text-lg text-neutral-600">
          {variantData.description}
        </p>
      </div>
      <ComponentPreview sourceUrl={variantData.sourceUrl}>
        {variantData.example}
      </ComponentPreview>
    </div>
  );
}
