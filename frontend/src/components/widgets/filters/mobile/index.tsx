"use client";

import { useCallback, useState } from "react";
import Drawer from "@/src/components/shared/drawer";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import IconButton from "@/src/components/shared/icon-button";
import BasketSidebar from "@/src/modules/basket/components/sidebar";
import ProductFormFilters, { ProductForm } from "../product-form";
import CountryFilters, { Country } from "../country";
import BrandsFilters, { Brand } from "../brands";
import PriceFilter from "../price";
import Button from "@/src/components/shared/button";

interface Props {
  forms: ProductForm[];
  countries: Country[];
  brands: Brand[];
}

function MobileFilters({ forms, countries, brands }: Props) {
  const pathname = usePathname();
  const initSearchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState<boolean>(false);
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
    router.push(`${pathname}?${searchParams}`);
    setIsOpen(false);
  };

  return (
    <div className="lg:hidden">
      <IconButton.Filter
        onClick={() => {
          setIsOpen(true);
        }}
      />
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
        <div className="w-full">
          <div className="shadow">
            <div className="container">
              <div className="flex lg:hidden justify-between items-center py-2.5">
                <IconButton.Back onClick={() => setIsOpen(false)} />
                <p className="font-semibold">Фильтры</p>
                <BasketSidebar />
              </div>
            </div>
          </div>
          <div className="py-5 container">
            <div className="bg-white">
              <div className="w-full xl:w-[310px] border border-stroke rounded-lg">
                <div className="py-4 px-4">
                  <PriceFilter onChange={onPriceChange} />
                </div>
                <div className="py-4 px-4 border-t border-stroke">
                  <ProductFormFilters onChange={onFormsChange} forms={forms} />
                </div>
                <div className="py-4 px-4 border-t border-stroke">
                  <CountryFilters
                    countries={countries}
                    onChange={onCountiesChange}
                  />
                </div>
                <div className="py-4 px-4 border-t border-stroke">
                  <BrandsFilters brands={brands} onChange={onBrandsChange} />
                </div>
              </div>
              <div className="pt-5 sticky bottom-4 grid">
                <Button onClick={submit}>
                  <span className="text-base font-medium">Применить</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Drawer>
    </div>
  );
}

export default MobileFilters;
