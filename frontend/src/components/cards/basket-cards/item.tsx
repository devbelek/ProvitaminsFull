"use client";

import { Product } from "@/src/api/products";
import IconButton from "@/src/components/shared/icon-button";
import Image from "next/image";
import parse from "html-react-parser";
import { useBasketStore } from "@/src/stores/basket";
import Link from "next/link";

function BasketCard({
  id,
  name,
  brand_name,
  price,
  sale_price,
  is_sale,
  images,
}: Product) {
  const { basket, setCount, removeBasket } = useBasketStore();
  const count = basket.get(id)?.count || 1;

  const increment = () => {
    setCount(id, count + 1);
  };

  const decrement = () => {
    setCount(id, count - 1);
  };
  return (
    <li className="border border-stroke rounded-[10px] flex items-stretch overflow-hidden">
      <div className="p-3 xl:p-6 relative border-r flex items-center">
        {is_sale && (
          <div className="absolute z-10 -left-8 top-0 bg-[#E51616] text-white text-xs xl:text-sm leading-6 xl:leading-6 font-semibold w-32 h-6 transform -rotate-45 flex justify-center pl-8 pr-16">
            Акция
          </div>
        )}
        <div className="relative aspect-square w-[70px] xl:w-[100px]">
          <Image
            src={images[0].image}
            alt={name}
            sizes="100%"
            fill
            placeholder="blur"
            blurDataURL="/images/global/common/blur.jpg"
            className="object-contain"
          />
        </div>
      </div>
      <div className="py-2.5 px-3 xl:p-5 w-full grid gap-1.5">
        <div className="flex gap-3 justify-between items-start">
          <h3 className="text-sm text-[#808080] line-clamp-2">{brand_name}</h3>
          {
            <div>
              <div className="hidden lg:block">
                <DeleteButton onClick={() => removeBasket(id)} />
              </div>
              <div className="lg:hidden">
                <CloseButton onClick={() => removeBasket(id)} />
              </div>
            </div>
          }
        </div>
        <div className="text-sm line-clamp-3">{parse(name)}</div>
        <div className="flex gap-4 items-center flex-wrap justify-between">
          <div className="flex items-center gap-2">
            <IconButton.Minus onClick={decrement} disabled={count <= 1} />
            <div>{count}</div>
            <IconButton.Plus onClick={increment} />
          </div>
          <div className="flex flex-col items-end">
            <p className="text-xs text-[#808080]">
              {count} × {sale_price ? sale_price : price}с
            </p>
            {sale_price ? (
              <div className="flex gap-2 items-center">
                <p className="line-through text-xs md:text-base text-[#808080]">
                  {count * price}с
                </p>
                <p className="font-bold">{count * sale_price}с</p>
              </div>
            ) : (
              <p className="font-bold">{count * price}с</p>
            )}
          </div>
        </div>
      </div>
    </li>
  );
}

function CloseButton(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button {...props}>
      <svg
        width="10"
        height="10"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 11L10.8995 1"
          stroke="#808080"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11 11L1.10051 1"
          stroke="#808080"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

function DeleteButton(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button {...props}>
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.5 5H4.16667H17.5"
          stroke="#2CA89A"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.66797 5.00008V3.33341C6.66797 2.89139 6.84356 2.46746 7.15612 2.1549C7.46869 1.84234 7.89261 1.66675 8.33464 1.66675H11.668C12.11 1.66675 12.5339 1.84234 12.8465 2.1549C13.159 2.46746 13.3346 2.89139 13.3346 3.33341V5.00008M15.8346 5.00008V16.6667C15.8346 17.1088 15.659 17.5327 15.3465 17.8453C15.0339 18.1578 14.61 18.3334 14.168 18.3334H5.83464C5.39261 18.3334 4.96868 18.1578 4.65612 17.8453C4.34356 17.5327 4.16797 17.1088 4.16797 16.6667V5.00008H15.8346Z"
          stroke="#2CA89A"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.668 9.16675V14.1667"
          stroke="#2CA89A"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.33203 9.16675V14.1667"
          stroke="#2CA89A"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

export default BasketCard;
