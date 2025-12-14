import { countries } from "@/constants/countries";

export const getCountry = (countryCode: string) => {
  return countries.find(
    (country) => country.code === countryCode || country.code3 === countryCode,
  );
};
