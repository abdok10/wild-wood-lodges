import { getCountries } from "@lib/data-service";
import { CountryTypes } from "@lib/types";

type SelectCountryProps = {
  defaultCountry: string;
  name: string;
  id: string;
  className?: string;
};

type CountryFlag = {
  name: string;
  flag: string;
};

async function SelectCountry({
  defaultCountry,
  name,
  id,
  className,
}: SelectCountryProps) {
  const countries: CountryTypes[] = await getCountries();
  const flag =
    countries.find((country: CountryFlag) => country.name === defaultCountry)
      ?.flag ?? "";


  return (
    <select
      name={name}
      id={id}
      // Here we use a trick to encode BOTH the country name and the flag into the value. Then we split them up again later in the server action
      defaultValue={`${defaultCountry}%${flag}`}
      className={className}
    >
      <option value="">Select country...</option>
      {countries.map((c: CountryFlag) => (
        <option key={c.name} value={`${c.name}%${c.flag}`}>
          {c.name}
        </option>
      ))}
    </select>
  );
}

export default SelectCountry;
