import { PuzzleIcon } from "lucide-react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ComponentCanvas } from "@/app/aura/component-canvas";
import { ComponentPreview } from "@/app/aura/component-preview";
import * as componentsData from "@/app/aura/data/components";
import * as modulesData from "@/app/aura/data/modules";
import { Button } from "@/components/button";
import { Link } from "@/components/link";
import { GitHubIcon } from "@/icons/github";

const getModuleData = (name: string) => {
  return Object.values(modulesData).find((module) => module.name === name);
};

export async function generateStaticParams() {
  return Object.values(modulesData).map((module) => ({
    moduleName: module.name,
  }));
}

export async function generateMetadata({
  params,
}: PageProps<"/aura/modules/[moduleName]">): Promise<Metadata> {
  const { moduleName } = await params;
  const moduleData = getModuleData(moduleName);

  return {
    description: moduleData?.description,
    title: moduleData?.title,
  };
}

export default async function TestPage({
  params,
}: PageProps<"/aura/modules/[moduleName]">) {
  const { moduleName } = await params;

  const moduleData = getModuleData(moduleName);

  if (!moduleData) {
    notFound();
  }

  const { title, description, demo, sourceUrl } = moduleData;

  const components = Object.values(componentsData).filter((component) =>
    moduleData.components.includes(component.name),
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
      {sourceUrl && (
        <div className="flex flex-wrap gap-3">
          <Button asChild size={2}>
            <a href={sourceUrl} rel="noopener noreferrer" target="_blank">
              <GitHubIcon />
              View source
            </a>
          </Button>
        </div>
      )}
      <ComponentPreview>{demo}</ComponentPreview>
      {!!components?.length && (
        <section className="grid gap-6">
          <h2 className="flex items-center gap-[0.25ch] font-medium text-2xl">
            <PuzzleIcon />
            Sub components
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {components.map((component) => (
              <div className="flex flex-col gap-3" key={component.name}>
                <ComponentCanvas className="aspect-video flex-1">
                  {component.demo}
                </ComponentCanvas>
                <h3 className="font-medium text-lg">
                  <Link
                    className="flex h-full flex-col gap-1.5"
                    // @ts-expect-error - TODO: fix link types
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
    </article>
  );
}
