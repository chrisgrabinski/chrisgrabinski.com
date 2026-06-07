import { PuzzleIcon } from "lucide-react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleHeader } from "@/app/aura/article-header";
import { ComponentCanvas } from "@/app/aura/component-canvas";
import { ComponentPreview } from "@/app/aura/component-preview";
import * as componentsData from "@/app/aura/data/components";
import * as modulesData from "@/app/aura/data/modules";

import { Heading } from "@/components/heading";
import { Link } from "@/components/link";

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
      <ArticleHeader
        breadcrumbs={[
          {
            name: "Modules",
            url: "/aura/modules/",
          },
          {
            name: title,
            url: `/aura/modules/${moduleName}`,
          },
        ]}
        description={description}
        sourceUrl={sourceUrl}
        title={title}
      />
      <ComponentPreview>{demo}</ComponentPreview>
      {!!components?.length && (
        <section className="grid gap-6">
          <Heading className="flex items-center gap-[0.5ch]">
            <PuzzleIcon />
            Sub components
          </Heading>
          <div className="grid gap-6 sm:grid-cols-2">
            {components.map((component) => (
              <div className="flex flex-col gap-3" key={component.name}>
                <ComponentCanvas className="aspect-video flex-1" inert>
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
