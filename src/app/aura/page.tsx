import NextLink from "next/link";
import avatarImage from "@/app/(homepage)/images/chris-grabinski.jpg";
import * as componentsData from "@/app/aura/(docs)/data/components";
import { AuraLogo } from "@/app/aura/aura-logo";
import { BlurContainer } from "@/app/aura/blur-container";
import { Avatar } from "@/components/avatar";
import { Link } from "@/components/link";
import { Overline } from "@/components/overline";
import { Text } from "@/components/text";

export default function RootPage() {
  return (
    <div className="grid">
      <BlurContainer className="fixed inset-x-0 top-0 z-10 h-18 rotate-180" />
      <div className="z-20 col-span-full h-[50dvh] bg-linear-to-t from-accent via-purple-500 to-blue-900" />
      <div className="mx-auto flex w-full max-w-7xl flex-col items-start gap-8 p-8 lg:flex-row">
        <div className="grid shrink-0 gap-4">
          <AuraLogo className="h-10" />
          <Text as="p" className="max-w-md text-pretty" muted size={5}>
            A collection of modular components and UI patterns designed for
            modern web applications.
          </Text>
          <div className="flex items-center gap-2">
            <Avatar
              aria-hidden
              fallback="Chris Grabiński"
              src={avatarImage.src}
            />
            by <Link href="/">Chris Grabiński</Link>
          </div>
        </div>
        <div className="flex w-full grow flex-col gap-4">
          <div className="hidden h-10 lg:block" />
          <Overline>Components</Overline>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
            {Object.values(componentsData).map((component) => {
              return (
                <NextLink
                  className="border-2 p-4 font-mono hover:text-accent"
                  href={`/aura/components/${component.name}`}
                  key={component.name}
                >
                  {component.title}
                </NextLink>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
