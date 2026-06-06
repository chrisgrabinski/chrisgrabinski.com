import NextLink from "next/link";
import { cn } from "@/lib/styles";

const Link = ({
  children,
  className,
  ...props
}: React.ComponentProps<typeof NextLink>) => {
  return (
    <NextLink
      className={cn("transition hover:text-orange-400", className)}
      {...props}
    >
      {children}
    </NextLink>
  );
};

export { Link };
