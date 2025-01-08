"use client";

import { useState } from "react";
import Input from "../../shared/input";
import FormWrapper from "./form-wrapper";
import { useSearchParams } from "next/navigation";

export interface Brand {
  id: number;
  name: string;
}

function BrandsFilters({
  brands,
  onChange,
}: {
  brands: Brand[];
  onChange: (_: { id: number; value: boolean }) => void;
}) {
  const [hidden, setHidden] = useState(true);
  brands = hidden ? brands.slice(0, 3) : brands;

  const searchParams = useSearchParams();
  const selectedBrands = searchParams.getAll("brand");

  return (
    <FormWrapper title="Бренды">
      <div className="grid gap-3">
        {brands.map(({ id, name }) => (
          <div key={id} className="flex gap-2.5 items-center">
            <Input.Checkbox
              defaultChecked={selectedBrands.includes(`${id}`)}
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
        <div className="mt-1">
          {hidden ? (
            <button className="text-main" onClick={() => setHidden(false)}>
              Посмотреть все
            </button>
          ) : (
            <button className="text-main" onClick={() => setHidden(true)}>
              Скрыть
            </button>
          )}
        </div>
      </div>
    </FormWrapper>
  );
}

export default BrandsFilters;
