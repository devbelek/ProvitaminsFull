"use client";

import { useSearchParams } from "next/navigation";
import Input from "../../shared/input";
import FormWrapper from "./form-wrapper";

export interface Country {
  id: number;
  name: string;
}

function CountryFilters({
  countries,
  onChange,
}: {
  countries: Country[];
  onChange: (_: { id: number; value: boolean }) => void;
}) {
  const searchParams = useSearchParams();
  const selectedCounties = searchParams.getAll("country");
  return (
    <FormWrapper title="Страна производства">
      <div className="grid gap-3">
        {countries.map(({ id, name }) => (
          <div key={id} className="flex gap-2.5 items-center">
            <Input.Checkbox
              defaultChecked={selectedCounties.includes(`${id}`)}
              onChange={(e) =>
                onChange({
                  id,
                  value: e.target.checked,
                })
              }
            />
            <div className="">{name}</div>
          </div>
        ))}
      </div>
    </FormWrapper>
  );
}

export default CountryFilters;
