import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { use } from "react";
import { ComponentPreview } from "@/app/aura/component-preview";
import { components } from "@/app/aura/components/components";

const getVariantData = (component: string, variant: string) => {
  return components
    .find((c) => c.name === component)
    ?.variants?.find((v) => v.name === variant);
};

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

  const variantData = getVariantData(component, variant);

  if (!variantData) {
    notFound();
  }

  return (
    <div className="mx-auto grid max-w-4xl gap-12 p-8">
      <div className="grid gap-1.5">
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
