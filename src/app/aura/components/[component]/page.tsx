import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ComponentPreview } from "@/app/aura/component-preview";
import { components } from "@/app/aura/components/components";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Button } from "@/components/button";
import { Card } from "@/components/card";
import { GitHubIcon } from "@/icons/github";
import { StorybookIcon } from "@/icons/storybook";

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
    <article className="grid gap-12">
      <div className="grid gap-6">
        <Breadcrumbs
          hideCurrent
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
        <div className="grid gap-1.5">
          <h1 className="font-semibold text-4xl">{componentData.title}</h1>
          <p className="neutral-500 text-balance text-lg text-neutral-600">
            {componentData.description}
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button asChild size={2}>
            <a
              href={componentData.sourceUrl}
              rel="noopener noreferrer"
              target="_blank"
            >
              <GitHubIcon />
              View source
            </a>
          </Button>
          {componentData.storybookUrl && (
            <Button asChild size={2} variant="primary">
              <a
                href={componentData.storybookUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                <StorybookIcon />
                View storybook
              </a>
            </Button>
          )}
        </div>
      </div>
      <ComponentPreview>{componentData.example}</ComponentPreview>
      {componentData.variants && (
        <div className="grid gap-6">
          <h2 className="font-medium text-2xl">Variants</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {componentData.variants.map((variant) => (
              <Link
                className="font-medium text-lg"
                href={`/aura/components/${component}/${variant.name}`}
                key={variant.name}
              >
                <Card className="flex flex-col justify-end sm:aspect-2/1">
                  {variant.title}
                </Card>
              </Link>
            ))}
          </div>
        </div>
      )}
    </article>
  );
}
