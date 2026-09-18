import NextLink from "next/link";
import { cn } from "@/lib/styles";

const Link = ({
  children,
  className,
  ...props
}: React.ComponentProps<typeof NextLink>) => {
  return (
    <NextLink
      className={cn(
        "focus-visible:focus-ring rounded-action underline underline-offset-3 transition hover:text-accent",
        className,
      )}
      {...props}
    >
      {children}
    </NextLink>
  );
};

export { Link };
