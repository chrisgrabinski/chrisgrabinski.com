import NextLink from "next/link";
import { cn } from "@/lib/styles";

const Link = ({ children, className, ...props }: React.ComponentProps<typeof NextLink>) => {
  return (
    <NextLink
      className={cn(
        "rounded-action underline underline-offset-3 transition hover:text-accent focus-visible:focus-ring",
        className,
      )}
      {...props}
    >
      {children}
    </NextLink>
  );
};

export { Link };
