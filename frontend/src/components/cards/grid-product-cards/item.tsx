"use client";

import Image from "next/image";
import IconButton from "../../shared/icon-button";
import Rating from "../../shared/rating";
import Link from "next/link";
import { Product } from "@/src/api/products";
import parse from "html-react-parser";
import { useFavoritesStore } from "@/src/stores/favorites";
import { useBasketStore } from "@/src/stores/basket";
import { useSearchParams } from "next/navigation";

function GridProductCard(data: Product) {
  const searchParams = useSearchParams();
  const { favorites, toggleFavorite } = useFavoritesStore();
  const isFavorite = favorites.has(data.id);
  const { basket, toggleBasket } = useBasketStore();

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
      <div className="border border-stroke overflow-hidden rounded-[10px] h-full flex flex-col justify-between gap-1.5 relative z-10">
        <div>
          <div className="border-b border-stroke p-4 md:p-8 xl:px-12 xl:py-5 relative select-none">
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

            <div className="absolute top-2.5 md:top-3 right-3 z-10">
              <IconButton.Favorite
                isActive={isFavorite}
                onClick={handleClickFavorite}
              />
            </div>
            {data.images[0] && (
              <div className="relative w-full aspect-square">
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
          <div className="px-2.5 sm:px-4 flex flex-col gap-1.5 justify-between pt-2.5 sm:pt-4">
            <div className="grid gap-1.5">
              <div className="flex justify-between items-center">
                {data.rating && <Rating value={data.rating} readonly />}
                <p className="text-xs">
                  {data.status === "coming_soon" ? "Нет в наличии" : "В наличии"}
                </p>
              </div>
              <p className="text-xs md:text-sm text-[#808080] line-clamp-1">
                {data.brand_name}
              </p>
            </div>
            <div className="line line-clamp-3 text-sm gap-1.5">
              {data.name && parse(data.name)}
            </div>
          </div>
        </div>
        <div className="flex gap-3 justify-between items-center px-2.5 sm:px-4 pb-2.5 sm:pb-4">
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
            isActive={basket.has(Number(data.id))}
            size="md"
            onClick={handleClickBasket}
          />
        </div>
      </div>
    </Link>
  );
}

export default GridProductCard;
