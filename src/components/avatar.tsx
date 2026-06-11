"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { Avatar as AvatarPrimitive } from "radix-ui";
import { createContext, useContext } from "react";
import { Pile } from "@/components/pile";
import { cn } from "@/lib/styles";

const getAvatarFallbackInitials = (name: string): string => {
  const initials = name.match(/[A-Z]/g) || [];
  return initials.slice(0, 3).join("");
};

const avatarVariants = cva(
  "inline-grid overflow-clip rounded-full bg-surface font-medium text-foreground text-shadow-neutral-800",
  {
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
  },
);

type AvatarVariants = VariantProps<typeof avatarVariants>;

type AvatarSize = NonNullable<AvatarVariants["size"]>;

type AvatarContextProps = {
  size?: AvatarSize;
};

const AvatarContext = createContext<AvatarContextProps>({
  size: 4,
});

type AvatarProviderProps = {
  children?: React.ReactNode;
  value: AvatarContextProps;
};

const AvatarProvider = ({ children, value }: AvatarProviderProps) => {
  return (
    <AvatarContext.Provider value={value}>{children}</AvatarContext.Provider>
  );
};

const useAvatar = () => {
  return useContext(AvatarContext);
};

type AvatarRootProps = React.ComponentProps<typeof AvatarPrimitive.Root> &
  AvatarVariants;

const AvatarRoot = ({
  children,
  className,
  size: providedSize,
  ...props
}: AvatarRootProps) => {
  const { size: contextSize } = useAvatar();

  const size = providedSize || contextSize;

  console.log({ contextSize, providedSize, size });

  return (
    <Pile asChild className={cn(avatarVariants({ size }), className)}>
      <AvatarPrimitive.Root {...props}>{children}</AvatarPrimitive.Root>
    </Pile>
  );
};

type AvatarImageProps = React.ComponentProps<typeof AvatarPrimitive.Image>;

const AvatarImage = ({
  alt = "",
  children,
  className,
  asChild,
  ...props
}: AvatarImageProps) => {
  return (
    <AvatarPrimitive.Image
      alt={alt}
      className={cn("object-cover", className)}
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
      className="select-none"
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

export type { AvatarSize };
export { Avatar, AvatarFallback, AvatarImage, AvatarProvider, AvatarRoot };
