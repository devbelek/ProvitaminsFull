"use client";

import { useCallback } from "react";
import BrandsFilters, { Brand } from "./brands";
import CountryFilters, { Country } from "./country";
import PriceFilter from "./price";
import ProductFormFilters, { ProductForm } from "./product-form";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

interface Props {
  forms: ProductForm[];
  countries: Country[];
  brands: Brand[];
}

function Filters({ forms, countries, brands }: Props) {
  const router = useRouter();
  const params = useSearchParams();
  const searchParams = new URLSearchParams(params);

  const onPriceChange = useCallback(
    ({ minValue, maxValue }: { minValue: number; maxValue: number }) => {
      searchParams.set("price_min", `${minValue}`);
      searchParams.set("price_max", `${maxValue}`);
      router.push(`/catalog?${searchParams.toString()}`, { scroll: false });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [] 
  );
  const onBrandsChange = useCallback(
    ({ id, value }: { id: number; value: boolean }) => {
      if (value) {
        searchParams.append("brand", `${id}`);
      } else {
        searchParams.delete("brand", `${id}`);
      }
      router.push(`/catalog?${searchParams.toString()}`, { scroll: false });
    },

    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const onCountiesChange = useCallback(
    ({ id, value }: { id: number; value: boolean }) => {
      if (value) {
        searchParams.append("country", `${id}`);
      } else {
        searchParams.delete("country", `${id}`);
      }

      router.push(`/catalog?${searchParams.toString()}`, { scroll: false });
    },

    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const onFormsChange = useCallback(
    ({ id, value }: { id: number; value: boolean }) => {
      if (value) {
        searchParams.append("form", `${id}`);
      } else {
        searchParams.delete("form", `${id}`);
      }

      router.push(`/catalog?${searchParams.toString()}`, { scroll: false });
    },

    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  return (
    <div className="w-full xl:w-[310px] border border-stroke rounded-lg">
      <div className="py-4 px-4">
        <PriceFilter onChange={onPriceChange} />
      </div>
      <div className="py-4 px-4 border-t border-stroke">
        <ProductFormFilters forms={forms} onChange={onFormsChange} />
      </div>
      <div className="py-4 px-4 border-t border-stroke">
        <CountryFilters countries={countries} onChange={onCountiesChange} />
      </div>
      <div className="py-4 px-4 border-t border-stroke">
        <BrandsFilters brands={brands} onChange={onBrandsChange} />
      </div>
    </div>
  );
}

export default Filters;
