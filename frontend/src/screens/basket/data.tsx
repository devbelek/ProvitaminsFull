"use client";

import { Product } from "@/src/api/products";
import BasketCards from "@/src/components/cards/basket-cards";
import EmptyContent from "@/src/components/widgets/empty-content";
import { useBasketStore } from "@/src/stores/basket";
import { MultipleResponse } from "@/src/types/api";
import { useState, useEffect } from "react";
import Counter from "./counter";

const fetchProducts = async ({ basket }: { basket: number[] }) => {
  const searchParams = new URLSearchParams();
  if (basket.length === 0) {
    return {
      count: 0,
      next: "",
      prev: "",
      results: [],
    };
  }
  basket.forEach((item) => {
    searchParams.append("id", `${item}`);
  });
  const response = await fetch(
    `${
      process.env.NEXT_PUBLIC_BASE_URL
    }/marketplace/products/?${searchParams.toString()}`,
    { cache: "no-cache" }
  );

  return (await response.json()) as MultipleResponse<Product>;
};

function BasketData() {
  const [products, setProducts] = useState<Product[]>([]);
  const { basket } = useBasketStore();

  useEffect(() => {
    fetchProducts({
      basket: Array.from(basket, ([_, value]) => value.id),
    }).then((data) => {
      setProducts(data.results);
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [basket.size]);

  const totalFullPrice = products.reduce(
    (acc, value) => (acc += value.price * (basket.get(value.id)?.count ?? 0)),
    0
  );

  const totalSale = products.reduce(
    (acc, value) =>
      (acc +=
        (value.sale_price ? value.price - value.sale_price : 0) *
        (basket.get(value.id)?.count ?? 0)),
    0
  );

  const totalCount = products.reduce(
    (acc, value) => (acc += basket.get(value.id)?.count ?? 0),
    0
  );

  return products.length > 0 ? (
    <div className="flex flex-col gap-5 md:flex-row">
      <div className="w-full">
        <div className="relative">
          <div className="relative flex-1 overflow-y-auto">
            {<BasketCards list={products} />}
          </div>
        </div>
      </div>
      <div className="min-w-[300px]">
        <Counter
          totalCount={totalCount}
          totalFullPrice={totalFullPrice}
          totalSale={totalSale}
        />
      </div>
    </div>
  ) : (
    <EmptyContent title="Ваша корзина пуста" />
  );
}

export default BasketData;
