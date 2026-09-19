import * as componentsData from "@/app/aura/(docs)/data/components";
import { AuraLogo } from "@/app/aura/aura-logo";
import { Link } from "@/components/link";
import { Overline } from "@/components/overline";
import { Text } from "@/components/text";

export default function RootPage() {
  return (
    <div className="mx-auto grid max-w-7xl gap-8 p-8">
      <div className="col-span-full h-[50dvh]" />
      <AuraLogo className="h-12" />
      <div className="grid gap-[inherit] lg:grid-cols-2">
        <div>
          <div className="grid gap-8">
            <Text as="p" className="max-w-lg text-pretty" muted size={5}>
              A collection of modular components and UI patterns designed for
              modern web applications. This project serves as a practical design
              system, focused on refining architectural patterns and testing new
              development concepts.
            </Text>
          </div>
        </div>
        <div className="grid gap-[inherit]">
          <Overline>Components</Overline>
          <div className="grid max-w-3xl grid-cols-2 gap-4 md:grid-cols-3">
            {Object.values(componentsData).map((component) => {
              return (
                <Link
                  // @ts-expect-error - TODO: fix link types
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
