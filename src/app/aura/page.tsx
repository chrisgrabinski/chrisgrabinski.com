import * as componentsData from "@/app/aura/data/components";
import { Heading } from "@/components/heading";
import { Text } from "@/components/text";
import { TextLink } from "@/components/text-link";

export default function RootPage() {
  return (
    <div className="grid gap-1.5">
      <Heading as="h1" size={7}>
        Welcome to Aura
      </Heading>
      <Text as="p" className="mt-2" muted size={5}>
        A collection of modular components and UI patterns designed for modern
        web applications. This project serves as a practical design system,
        focused on refining architectural patterns and testing new development
        concepts.
      </Text>
      <div className="mt-16">
        <Heading>Components</Heading>
        <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-3">
          {Object.values(componentsData).map((component) => {
            return (
              <TextLink
                // @ts-expect-error - TODO: fix link types
                href={`/aura/components/${component.name}`}
                key={component.name}
              >
                {component.title}
              </TextLink>
            );
          })}
        </div>
      </div>
    </div>
  );
}
