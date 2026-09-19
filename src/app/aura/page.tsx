import Link from "next/link";
import * as componentsData from "@/app/aura/(docs)/data/components";
import { AuraLogo } from "@/app/aura/aura-logo";
import { Overline } from "@/components/overline";
import { Text } from "@/components/text";

export default function RootPage() {
  return (
    <div className="grid">
      <div className="col-span-full h-[50dvh] bg-linear-to-t from-accent via-purple-500 to-blue-900" />
      <div className="mx-auto flex w-full max-w-7xl flex-col items-start gap-8 p-8 lg:flex-row">
        <div className="grid shrink-0 gap-4">
          <AuraLogo className="h-10" />
          <Text as="p" className="max-w-md text-pretty" muted size={5}>
            A collection of modular components and UI patterns designed for
            modern web applications.
          </Text>
        </div>
        <div className="flex w-full grow flex-col gap-4">
          <div className="hidden h-10 lg:block" />
          <Overline>Components</Overline>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
            {Object.values(componentsData).map((component) => {
              return (
                <Link
                  className="border-2 p-4 font-mono hover:text-accent"
                  href={`/aura/components/${component.name}`}
                  key={component.name}
                >
                  {component.title}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
