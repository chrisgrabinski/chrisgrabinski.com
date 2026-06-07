import * as componentsData from "@/app/aura/data/components";
import { Heading } from "@/components/heading";
import { Link } from "@/components/link";

export default function RootPage() {
  return (
    <div className="grid gap-1.5">
      <Heading as="h1" size={7}>
        Welcome to Aura
      </Heading>
      <p className="text-balance text-foreground-muted text-lg">
        A collection of modular components and UI patterns designed for modern
        web applications. This project serves as a practical design system,
        focused on refining architectural patterns and testing new development
        concepts.
      </p>
      <div className="mt-16">
        <Heading>Components</Heading>
        <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-3">
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
  );
}
