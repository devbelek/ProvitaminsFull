"use client";

import { Product } from "@/src/api/products";
import EmptyContent from "@/src/components/widgets/empty-content";
import ProductList from "@/src/components/widgets/product-list";
import { useFavoritesStore } from "@/src/stores/favorites";
import { MultipleResponse } from "@/src/types/api";
import { useState, useEffect } from "react";

const fetchProducts = async ({ favorites }: { favorites: number[] }) => {
  const searchParams = new URLSearchParams();
  if (favorites.length === 0) {
    return {
      count: 0,
      next: "",
      prev: "",
      results: [],
    };
  }
  favorites.forEach((item) => {
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

function FavoritesData() {
  const [products, setProducts] = useState<Product[]>([]);
  const { favorites, removeFavorite } = useFavoritesStore();

  useEffect(() => {
    if (favorites.size > 0) {
      fetchProducts({ favorites: Array.from(favorites) }).then((data): void => {
        setProducts(data.results);
        const productIds = data.results.map((item) => item.id);
        favorites.forEach((item) => {
          if (!productIds.includes(item)) {
            removeFavorite(item);
          }
        });
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [favorites.size]);

  useEffect(() => {
    setProducts(products.filter((item) => favorites.has(item.id)));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [favorites]);
  return products.length > 0 ? (
    <div className="flex flex-col gap-5 md:flex-row">
      <div className="w-full">
        <div className="relative">
          <div className="relative flex-1 overflow-y-auto">
            {<ProductList list={products} />}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <EmptyContent title="У вас нет сохраненных товаров" />
  );
}

export default FavoritesData;
