import Image from "next/image";
import type React from "react";
import type { CountryAlpha2Code } from "@/constants/countries";
import { getCountry } from "@/lib/countries";
import { cn } from "@/lib/styles";

interface CountryLabelProps extends React.ComponentProps<"span"> {
  /**
   * ISO 3166-1 alpha-2 code
   */
  code: CountryAlpha2Code;
}

const CountryLabel = ({ children, className, code }: CountryLabelProps) => {
  const country = getCountry(code);

  return (
    <span
      className={cn(
        "inline-flex min-w-0 max-w-full items-baseline gap-[0.5ch]",
        className,
      )}
    >
      {country?.flag && (
        <Image
          alt=""
          className="relative top-[0.125em] h-[1em] w-auto align-middle"
          height={24}
          src={country.flag}
          width={32}
        />
      )}
      <span className="inline-block truncate">
        {children || country?.shortName}
      </span>
    </span>
  );
};

export { CountryLabel };
