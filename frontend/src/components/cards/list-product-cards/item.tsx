"use client";

import Image from "next/image";
import IconButton from "../../shared/icon-button";
import Rating from "../../shared/rating";
import { Product } from "@/src/api/products";
import parse from "html-react-parser";
import { useFavoritesStore } from "@/src/stores/favorites";
import { useBasketStore } from "@/src/stores/basket";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

function GridProductCard(data: Product) {
  const searchParams = useSearchParams();
  const { favorites, toggleFavorite } = useFavoritesStore();
  const { basket, toggleBasket } = useBasketStore();
  const isFavorite = favorites.has(data.id);

  const handleClickFavorite = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.nativeEvent.stopImmediatePropagation();
    toggleFavorite(Number(data.id));
  };

  const handleClickBasket = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.nativeEvent.stopImmediatePropagation();
    toggleBasket(Number(data.id));
  };

  return (
    <Link href={`/products/${data.id}?${searchParams.toString()}`}>
      <div className="border border-stroke overflow-hidden rounded-[10px] h-full flex">
        <div className="p-4 md:p-8 xl:px-12 xl:py-5 relative select-none flex flex-col justify-center">
          {data.is_hit && (
            <div className="absolute z-10 -left-7 top-0 bg-secondary text-white text-xs md:text-sm leading-6 md:leading-6 font-semibold w-32 h-6 transform -rotate-45 flex justify-center pr-[34px]">
              Хит
            </div>
          )}
          {data.is_sale && (
            <div className="absolute z-10 -left-7 top-0 bg-[#E51616] text-white text-xs md:text-sm leading-6 md:leading-6 font-semibold w-32 h-6 transform -rotate-45 flex justify-center pr-[34px]">
              Акция
            </div>
          )}

          <div className="absolute top-2 right-2 md:top-3 md:right-3 z-10">
            <IconButton.Favorite
              isActive={isFavorite}
              onClick={handleClickFavorite}
            />
          </div>

          {data.images[0] && (
            <div className="relative w-20 sm:w-30 xl:w-40 2xl:w-44 aspect-square">
              <Image
                src={data.images[0].image}
                className="object-contain"
                fill
                sizes="100%"
                alt={data.name}
                placeholder="blur"
                blurDataURL="/images/global/common/blur.jpg"
              />
            </div>
          )}
        </div>

        <div className="w-full grid p-2.5 md:p-5 border-l border-stroke">
          <div className="flex flex-col justify-between">
            <div className="grid gap-1">
              <div className="flex justify-between items-center">
                {data.rating && (
                  <div className="lg:hidden">
                    <Rating value={data.rating} readonly />
                  </div>
                )}
                <p className="hidden lg:block text-xs md:text-sm text-[#808080] line-clamp-2">
                  {data.brand_name}
                </p>
                <p className="text-xs">
                  {data.status === "coming_soon" ? "Нет в наличии" : "В наличии"}
                </p>
              </div>
              <div className="lg:hidden">
                <p className="text-[#808080] text-sm">{data.brand_name}</p>
              </div>
              <div className="hidden lg:block">
                <p className="font-medium">{data.name}</p>
              </div>
              <div className="hidden lg:block">
                {data.rating && <Rating value={data.rating} readonly />}
              </div>
              <div className="text-sm break-words overflow-hidden line-clamp-3 lg:hidden">
                {data.name && parse(data.name)}
              </div>
            </div>
          </div>
          <div className="hidden xl:block w-full overflow-hidden">
            <div className="line-clamp-3 px-4 overflow-hidden">
              {parse(data.description)}
            </div>
          </div>
          <div className="flex gap-3 justify-between items-center mt-2 xl:mt-0">
            <p className="md:text-lg font-bold leading-[16px]">
              {`${data.sale_price || data.price}c`}{" "}
              {
                <span className="text-xs sm:text-sm md:text-base font-normal line-through md:ml-1">
                  <br className="md:hidden" />
                  {data.sale_price && `${data.price}c`}
                </span>
              }
            </p>
            <IconButton.Buy
              isActive={basket.has(data.id)}
              size="md"
              onClick={handleClickBasket}
            />
          </div>
        </div>
      </div>
    </Link>
  );
}

export default GridProductCard;
