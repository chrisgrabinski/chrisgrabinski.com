import { ChevronRightIcon, type LucideIcon } from "lucide-react";

import type React from "react";
import { Link } from "@/components/link";
import { cn } from "@/lib/styles";

type BreadcrumbsRootProps = React.ComponentProps<"ul">;

const BreadcrumbsRoot = ({
  children,
  className,
  ...props
}: BreadcrumbsRootProps) => {
  return (
    <ul
      className={cn(
        "flex items-center gap-[0.5ch] text-neutral-400 text-sm",
        className,
      )}
      {...props}
    >
      {children}
    </ul>
  );
};

type BreadcrumbsItemProps = React.ComponentProps<"li">;

const BreadcrumbsItem = ({
  children,
  className,
  ...props
}: BreadcrumbsItemProps) => {
  return (
    <li className={cn("flex items-center gap-[inherit]", className)} {...props}>
      {children}
    </li>
  );
};

type BreadcrumbsLinkProps = React.ComponentProps<typeof Link>;

const BreadcrumbsLink = ({
  children,
  className,
  ...props
}: BreadcrumbsLinkProps) => {
  return (
    <Link
      className={cn(
        "flex items-center gap-[inherit] text-neutral-600",
        className,
      )}
      {...props}
    >
      {children}
    </Link>
  );
};

type BreadcrumbsSeparatorProps = React.ComponentProps<LucideIcon>;

const BreadcrumbsSeparator = ({
  children,
  className,
  ...props
}: BreadcrumbsSeparatorProps) => {
  return <ChevronRightIcon className={cn("size-4", className)} {...props} />;
};

interface BreadcrumbsProps extends BreadcrumbsRootProps {
  items: {
    name: string;
    url: React.ComponentProps<typeof Link>["href"];
  }[];
  includeJsonLd?: boolean;
}

const Breadcrumbs = ({
  items,
  includeJsonLd = false,
  ...props
}: BreadcrumbsProps) => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      item: item.url,
      name: item.name,
      position: index + 1,
    })),
  };

  return (
    <>
      <BreadcrumbsRoot {...props}>
        {items.map((item, index) => (
          <BreadcrumbsItem key={item.name}>
            {index === items.length - 1 ? (
              item.name
            ) : (
              <>
                <BreadcrumbsLink href={item.url}>{item.name}</BreadcrumbsLink>
                <BreadcrumbsSeparator />
              </>
            )}
          </BreadcrumbsItem>
        ))}
      </BreadcrumbsRoot>
      {includeJsonLd && (
        <script
          // biome-ignore lint/security/noDangerouslySetInnerHtml: We need to set the inner HTML for the JSON-LD data
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          type="application/ld+json"
        />
      )}
    </>
  );
};

export {
  Breadcrumbs,
  BreadcrumbsRoot,
  BreadcrumbsItem,
  BreadcrumbsLink,
  BreadcrumbsSeparator,
};
