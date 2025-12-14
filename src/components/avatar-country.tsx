import Image from "next/image";
import type React from "react";
import type { CountryAlpha2Code } from "@/constants/countries";
import { getCountry } from "@/lib/countries";
import { cn } from "@/lib/styles";
import { Avatar } from "./avatar";
import countryAvatarMask from "./avatar-country.mask.svg";

const CountryAvatarRoot = ({
  children,
  className,
}: React.ComponentProps<"div">) => {
  return (
    <div className={cn("relative isolate inline-block w-min", className)}>
      {children}
    </div>
  );
};

const CountryAvatarFlag = ({
  className,
  ...props
}: React.ComponentProps<typeof Image>) => {
  return (
    <Image
      className={cn("absolute right-0 bottom-0 z-30 h-1/4 w-auto", className)}
      {...props}
    />
  );
};

interface CountryAvatarProps extends React.ComponentProps<typeof Avatar> {
  code: CountryAlpha2Code;
}

const CountryAvatar = ({ className, code, ...props }: CountryAvatarProps) => {
  const country = getCountry(code);

  return (
    <CountryAvatarRoot>
      <Avatar
        className={cn("mask-cover align-middle", className)}
        style={{
          maskImage: `url(${countryAvatarMask.src})`,
        }}
        {...props}
      />
      <CountryAvatarFlag
        alt={country?.shortName ?? ""}
        className="drop-shadow-sm"
        height={24}
        src={country?.flag ?? ""}
        width={32}
      />
    </CountryAvatarRoot>
  );
};

export { CountryAvatar };
