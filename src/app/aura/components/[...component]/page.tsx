import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ComponentCanvas } from "@/app/aura/component-canvas";
import { ComponentPreview } from "@/app/aura/component-preview";
import {
  type Component,
  component as componentConfig,
} from "@/app/aura/components/components";
import * as patterns from "@/app/aura/patterns";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Button } from "@/components/button";
import { Card } from "@/components/card";
import { GitHubIcon } from "@/icons/github";
import { StorybookIcon } from "@/icons/storybook";

const getComponentName = (component: string[]) => {
  return component.join("/");
};

const getComponentsData = (component: string[]) => {
  const componentNames = component.map((name, index) => {
    return component.slice(0, index + 1).join("/");
  });

  return componentNames.map((name) => componentConfig[name]);
};

const getVariantsData = (component: string[]) => {
  const componentName = getComponentName(component);
  const expression = new RegExp(`^(?:/)?${componentName}(?:/).+(?:/)?$`);

  return Object.keys(componentConfig).reduce<Component[]>(
    (accumulator, currentValue) => {
      console.log(currentValue, expression.test(currentValue));
      if (expression.test(currentValue)) {
        accumulator.push({
          ...componentConfig[currentValue as keyof typeof componentConfig],
          name: currentValue,
        });
      }

      return accumulator;
    },
    [],
  );
};

export async function generateStaticParams() {
  return Object.keys(componentConfig).map((component) => ({
    component: component.split("/"),
  }));
}

export async function generateMetadata({
  params,
}: PageProps<"/aura/components/[...component]">): Promise<Metadata> {
  const { component } = await params;

  const componentsData = getComponentsData(component);

  const componentData = componentsData[componentsData.length - 1];

  return {
    description: componentData.description,
    title: componentData.title,
  };
}

export default async function ComponentPage({
  params,
}: PageProps<"/aura/components/[...component]">) {
  const { component } = await params;

  const componentName = getComponentName(component);

  if (!(componentName in componentConfig)) {
    notFound();
  }

  const componentsData = getComponentsData(component);

  const componentData = componentsData[componentsData.length - 1];

  const componentDemo = Object.values(patterns).find(
    (pattern) => pattern.name === componentName,
  );

  const variantsData = getVariantsData(component);

  const componentPatterns = Object.values(patterns)
    .filter((pattern) => pattern.components.includes(componentName))
    .filter((pattern) => pattern.name !== componentName);

  return (
    <article className="grid gap-12 pb-12">
      <div className="grid gap-6">
        <Breadcrumbs
          hideCurrent
          includeJsonLd
          items={[
            { name: "Home", url: "/aura" },
            // @ts-expect-error - TODO: Look into dynamic route segments with typed routes
            ...componentsData.map((componentData) => ({
              name: componentData.title,
              url: `/aura/components/${componentData.name}`,
            })),
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
                Storybook
              </a>
            </Button>
          )}
        </div>
      </div>
      <ComponentPreview>
        {componentDemo && <componentDemo.Component />}
      </ComponentPreview>
      {variantsData.length > 0 && (
        <div className="grid gap-6">
          <h2 className="font-medium text-2xl">Variants</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {variantsData.map((variant) => (
              <Link
                className="font-medium text-lg"
                href={`/aura/components/${variant.name}`}
                key={variant.name}
              >
                <Card className="flex flex-col justify-end">
                  {variant.title}
                </Card>
              </Link>
            ))}
          </div>
        </div>
      )}
      {componentPatterns.length > 0 && (
        <div className="grid gap-6">
          <h2 className="font-medium text-2xl">Examples</h2>
          {componentPatterns.map(({ Component, name }) => (
            <div className="grid gap-3" key={name}>
              <Card className="p-0">
                <ComponentCanvas>
                  <Component />
                </ComponentCanvas>
              </Card>
            </div>
          ))}
        </div>
      )}
    </article>
  );
}
