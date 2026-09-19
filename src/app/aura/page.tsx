import * as componentsData from "@/app/aura/(docs)/data/components";
import { AuraLogo } from "@/app/aura/aura-logo";
import { Link } from "@/components/link";
import { Overline } from "@/components/overline";
import { Text } from "@/components/text";

export default function RootPage() {
  return (
    <div className="grid gap-8">
      <div className="col-span-full h-[50dvh] bg-linear-to-t from-accent via-purple-500 to-blue-900" />
      <div className="mx-auto grid w-full max-w-7xl gap-8 p-8">
        <AuraLogo className="h-12" />
        <div className="flex flex-col gap-inherit md:flex-row">
          <div>
            <Text as="p" className="max-w-md text-pretty" muted size={5}>
              A collection of modular components and UI patterns designed for
              modern web applications.
            </Text>
          </div>
          <div className="grid flex-1 gap-8 pb-8">
            <Overline>Components</Overline>
            <div className="grid max-w-3xl grid-cols-2 gap-4 lg:grid-cols-3">
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
    </div>
  );
}
