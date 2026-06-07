import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import type React from "react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Button } from "@/components/button";
import { Heading } from "@/components/heading";
import { IconButton } from "@/components/icon-button";
import { Text } from "@/components/text";
import { GitHubIcon } from "@/icons/github";

interface ArticleHeaderProps<TUrl extends string>
  extends Omit<React.ComponentProps<"header">, "children"> {
  title: string;
  description?: string;
  previous?: {
    url: string;
    name: string;
  };
  next?: {
    url: string;
    name: string;
  };
  sourceUrl?: string;
  breadcrumbs?: React.ComponentProps<typeof Breadcrumbs<TUrl>>["items"];
}

const ArticleHeader = <TUrl extends string>({
  breadcrumbs,
  title,
  description,
  next,
  previous,
  sourceUrl,
}: ArticleHeaderProps<TUrl>) => {
  return (
    <header className="grid gap-4">
      {(breadcrumbs || next || previous) && (
        <div className="flex h-8 items-center justify-between">
          {breadcrumbs && <Breadcrumbs items={breadcrumbs} />}
          {(next || previous) && (
            <div className="flex gap-2">
              {previous && (
                <IconButton size={2}>
                  <ArrowLeftIcon />
                </IconButton>
              )}
              {next && (
                <IconButton size={2}>
                  <ArrowRightIcon />
                </IconButton>
              )}
            </div>
          )}
        </div>
      )}
      <div className="grid gap-2">
        <Heading as="h1" size={7}>
          {title}
        </Heading>
        {description && (
          <Text as="p" muted size={5}>
            {description}
          </Text>
        )}
      </div>
      {sourceUrl && (
        <div className="mt-3">
          <Button asChild size={2}>
            <a href={sourceUrl} rel="noopener noreferrer" target="_blank">
              <GitHubIcon />
              View source
            </a>
          </Button>
        </div>
      )}
    </header>
  );
};

export { ArticleHeader };
