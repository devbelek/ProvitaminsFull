"use client";

import Button from "@/src/components/shared/button";
import { useRouter, useSearchParams } from "next/navigation";
import BrandsFilters, { Brand } from "../../filters/brands";
import CountryFilters, { Country } from "../../filters/country";
import PriceFilter from "../../filters/price";
import ProductFormFilters, { ProductForm } from "../../filters/product-form";
import { useCallback, useState } from "react";

interface Props {
  forms: ProductForm[];
  countries: Country[];
  brands: Brand[];
}

function MobileFilters({ forms, countries, brands }: Props) {
  const initSearchParams = useSearchParams();
  const [searchParams, setSearchParams] = useState<URLSearchParams>(
    new URLSearchParams(initSearchParams)
  );
  const router = useRouter();

  const onPriceChange = useCallback(
    ({ minValue, maxValue }: { minValue: number; maxValue: number }) => {
      searchParams.set("price_min", `${minValue}`);
      searchParams.set("price_max", `${maxValue}`);
      setSearchParams(searchParams);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [initSearchParams]
  );

  const onBrandsChange = useCallback(
    ({ id, value }: { id: number; value: boolean }) => {
      if (value) {
        searchParams.append("brand", `${id}`);
      } else {
        searchParams.delete("brand", `${id}`);
      }

      setSearchParams(searchParams);
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

      setSearchParams(searchParams);
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

      setSearchParams(searchParams);
    },

    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const submit = () => {
    searchParams.delete("filters");
    router.push(`/catalog?${searchParams}`);
  };
  return (
    <div className="bg-white">
      <div className="w-full xl:w-[310px] border border-stroke rounded-lg">
        <div className="py-4 px-4">
          <PriceFilter onChange={onPriceChange} />
        </div>
        <div className="py-4 px-4 border-t border-stroke">
          <ProductFormFilters onChange={onFormsChange} forms={forms} />
        </div>
        <div className="py-4 px-4 border-t border-stroke">
          <CountryFilters countries={countries} onChange={onCountiesChange} />
        </div>
        <div className="py-4 px-4 border-t border-stroke">
          <BrandsFilters brands={brands} onChange={onBrandsChange} />
        </div>
      </div>
      <div className="pt-5 sticky bottom-20 grid">
        <Button onClick={submit}>
          <span className="text-base font-medium">Применить</span>
        </Button>
      </div>
    </div>
  );
}

export default MobileFilters;
