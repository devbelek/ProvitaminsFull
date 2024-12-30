"use client";

import Image from "next/image";
import IconButton from "../../shared/icon-button";
import { Product } from "@/src/api/products";
import parse from "html-react-parser";
import { useBasketStore } from "@/src/stores/basket";
import Link from "next/link";

function HitCard({
  id,
  is_hit,
  images,
  name,
  sale_price,
  price,
  brand_name,
}: Product) {
  const { toggleBasket } = useBasketStore();
  const handleClickBasket = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.nativeEvent.stopImmediatePropagation();
    toggleBasket(Number(id));
  };
  return (
    <Link href={`/products/${id}`}>
      <div className="border border-stroke overflow-hidden rounded-[10px] h-full flex">
        <div className="p-2 relative select-none flex flex-col justify-center">
          {is_hit && (
            <div className="absolute z-10 -left-[44px] top-0 bg-secondary text-white text-xs leading-4 font-semibold w-32 h-4 transform -rotate-45 flex justify-center pr-4">
              Хит
            </div>
          )}

          <div className="relative w-[70px] aspect-square">
            <Image
              src={images[0].image}
              className="object-contain"
              fill
              sizes="100%"
              alt="product"
              placeholder="blur"
              blurDataURL="/images/global/common/blur.jpg"
            />
          </div>
        </div>

        <div className="w-full h-full flex flex-col justify-between p-2.5 border-l border-stroke">
          <div className="flex flex-col justify-between">
            <div className="grid gap-1">
              <div className="flex justify-between items-center">
                <div className="text-sm md:text-sm text-[#808080] line-clamp-1">
                  {parse(brand_name)}
                </div>
              </div>
              <div className="text-sm line-clamp-2">{parse(name)}</div>
            </div>
          </div>
          <div className="flex gap-3 justify-between items-center mt-2 xl:mt-0">
            <p className="md:text-lg font-bold leading-[16px]">
              {sale_price ? sale_price : price}c
            </p>
            <IconButton.Buy size="md" onClick={handleClickBasket} />
          </div>
        </div>
      </div>
    </Link>
  );
}

export default HitCard;
