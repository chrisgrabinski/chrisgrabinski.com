import NextLink from "next/link";
import { cn } from "@/lib/styles";

const Link = ({
  children,
  className,
  ...props
}: React.ComponentProps<typeof NextLink>) => {
  return (
    <NextLink
      className={cn("transition hover:text-pink-500", className)}
      {...props}
    >
      {children}
    </NextLink>
  );
};

export { Link };
