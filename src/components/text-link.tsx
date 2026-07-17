import NextLink from "next/link";
import { cn } from "@/lib/styles";

const TextLink = ({
  children,
  className,
  ...props
}: React.ComponentProps<typeof NextLink>) => {
  return (
    <NextLink
      className={cn(
        "underline underline-offset-3 transition hover:text-accent",
        className,
      )}
      {...props}
    >
      {children}
    </NextLink>
  );
};

export { TextLink };
