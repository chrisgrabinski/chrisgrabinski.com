import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ComponentCanvas } from "@/app/aura/component-canvas";
import { ComponentPreview } from "@/app/aura/component-preview";
import * as componentsData from "@/app/aura/data/components";
import * as modulesData from "@/app/aura/data/modules";
import { Button } from "@/components/button";
import { GitHubIcon } from "@/icons/github";
import { StorybookIcon } from "@/icons/storybook";

const getComponentData = (name: string) => {
  return Object.values(componentsData).find(
    (component) => component.name === name,
  );
};

export async function generateStaticParams() {
  return Object.values(componentsData).map((component) => ({
    componentName: component.name,
  }));
}

export async function generateMetadata({
  params,
}: PageProps<"/aura/components/[componentName]">): Promise<Metadata> {
  const { componentName } = await params;
  const componentData = getComponentData(componentName);

  return {
    description: componentData?.description,
    title: componentData?.title,
  };
}

export default async function TestPage({
  params,
}: PageProps<"/aura/components/[componentName]">) {
  const { componentName } = await params;

  const componentData = getComponentData(componentName);

  if (!componentData) {
    notFound();
  }

  const {
    title,
    description,
    components,
    demo,
    sourceUrl,
    storybookUrl,
    variants,
  } = componentData;

  const subComponents = Object.values(componentsData).filter((component) =>
    components?.includes(component.name),
  );

  const modules = Object.values(modulesData).filter((test) =>
    test.components.includes(componentName),
  );

  return (
    <article className="grid gap-12 pb-12">
      <div>
        <h1 className="font-semibold text-4xl">{title}</h1>
        {description && (
          <p className="neutral-500 mt-1.5 text-balance text-lg text-neutrmask-t-from-1.5">
            {description}
          </p>
        )}
      </div>
      <div className="flex flex-wrap gap-3">
        <Button asChild size={2}>
          <a href={sourceUrl} rel="noopener noreferrer" target="_blank">
            <GitHubIcon />
            View source
          </a>
        </Button>
        {storybookUrl && (
          <Button asChild size={2} variant="primary">
            <a href={storybookUrl} rel="noopener noreferrer" target="_blank">
              <StorybookIcon />
              Storybook
            </a>
          </Button>
        )}
      </div>
      <ComponentPreview>{demo}</ComponentPreview>
      {!!variants?.length && (
        <section className="grid gap-6">
          <h2 className="font-medium text-2xl">Variants</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {variants?.map((variant) => (
              <div className="grid gap-1.5" key={variant.title}>
                <ComponentCanvas key={variant.title}>
                  {variant.demo}
                </ComponentCanvas>
                <h3 className="font-medium text-lg">{variant.title}</h3>
              </div>
            ))}
          </div>
        </section>
      )}
      {!!subComponents?.length && (
        <section className="grid gap-6">
          <h2 className="font-medium text-2xl">Components</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {subComponents.map((component) => (
              <div className="flex flex-col gap-3" key={component.name}>
                <ComponentCanvas className="aspect-video flex-1">
                  {component.demo}
                </ComponentCanvas>
                <h3 className="font-medium text-lg">
                  <Link
                    className="flex h-full flex-col gap-1.5"
                    href={`/aura/components/${component.name}`}
                    key={component.name}
                  >
                    {component.title}
                  </Link>
                </h3>
              </div>
            ))}
          </div>
        </section>
      )}
      {!!modules?.length && (
        <section className="grid gap-6">
          <h2 className="font-medium text-2xl">Modules</h2>
          <div className="grid gap-6">
            {modules.map((module) => (
              <Link
                className="flex h-full flex-col gap-1.5"
                href={`/aura/modules/${module.name}`}
                key={module.name}
              >
                <ComponentCanvas className="pointer-events-none flex-1">
                  {module.demo}
                </ComponentCanvas>
                <h3 className="font-medium text-lg">{module.title}</h3>
              </Link>
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
