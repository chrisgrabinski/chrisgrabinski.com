"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { Avatar as AvatarPrimitive } from "radix-ui";
import { cn } from "@/lib/styles";

const getAvatarFallbackInitials = (name: string): string => {
  const initials = name.match(/[A-Z]/g) || [];
  return initials.slice(0, 3).join("");
};

const avatarVariants = cva("relative isolate inline-block font-medium", {
  defaultVariants: {
    size: 4,
  },
  variants: {
    size: {
      1: "size-6 text-xs",
      2: "size-8 text-sm",
      3: "size-10 text-base",
      4: "size-12 text-lg",
      5: "size-16 text-xl",
      6: "size-20 text-2xl",
      7: "size-24 text-3xl",
      8: "size-32 text-4xl",
      9: "size-36 text-5xl",
    },
  },
});

type AvatarVariants = VariantProps<typeof avatarVariants>;

type AvatarRootProps = React.ComponentProps<typeof AvatarPrimitive.Root> &
  AvatarVariants;

const AvatarRoot = ({
  children,
  className,
  size,
  ...props
}: AvatarRootProps) => {
  return (
    <AvatarPrimitive.Root
      className={cn(avatarVariants({ className, size }))}
      {...props}
    >
      {children}
    </AvatarPrimitive.Root>
  );
};

type AvatarImageProps = React.ComponentProps<typeof AvatarPrimitive.Image>;

const AvatarImage = ({
  children,
  className,
  asChild,
  ...props
}: AvatarImageProps) => {
  return (
    <AvatarPrimitive.Image
      className={cn(
        "absolute inset-0 z-20 overflow-clip rounded-full object-cover",
        className,
      )}
      {...props}
    >
      {children}
    </AvatarPrimitive.Image>
  );
};

type AvatarFallbackProps = React.ComponentProps<
  typeof AvatarPrimitive.Fallback
>;

const AvatarFallback = ({ children, ...props }: AvatarFallbackProps) => {
  return (
    <AvatarPrimitive.Fallback
      aria-hidden="true"
      className="absolute inset-0 z-10 grid select-none place-items-center overflow-clip rounded-full bg-neutral-200 text-shadow-neutral-800"
      {...props}
    >
      {children}
    </AvatarPrimitive.Fallback>
  );
};

interface AvatarProps extends Omit<AvatarRootProps, "children"> {
  delayMs?: AvatarFallbackProps["delayMs"];
  fallback: string;
  imageComponent?: React.ElementType;
  onLoadingStatusChange?: AvatarImageProps["onLoadingStatusChange"];
  src?: string;
}

const Avatar = ({
  delayMs,
  fallback,
  onLoadingStatusChange,
  src,
  ...props
}: AvatarProps) => {
  return (
    <AvatarRoot {...props}>
      <AvatarImage
        asChild
        onLoadingStatusChange={onLoadingStatusChange}
        src={src}
      />
      <AvatarFallback delayMs={delayMs}>
        {getAvatarFallbackInitials(fallback)}
      </AvatarFallback>
    </AvatarRoot>
  );
};

export { Avatar, AvatarRoot, AvatarImage, AvatarFallback };
