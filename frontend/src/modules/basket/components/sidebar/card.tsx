import { Product } from "@/src/api/products";
import IconButton from "@/src/components/shared/icon-button";
import Image from "next/image";
import parse from "html-react-parser";
import { useBasketStore } from "@/src/stores/basket";
import "./card.css";

function BasketCard({
  id,
  name,
  images,
  price,
  sale_price,
  brand_name
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
    <li className="border border-stroke rounded-[10px] flex items-center">
      {images[0].image && (
        <div className="p-4">
          <div className="relative aspect-square w-[70px]">
            <Image
              src={images[0].image}
              alt="product"
              sizes="100%"
              fill
              placeholder="blur"
              blurDataURL="/images/global/common/blur.jpg"
              className="object-contain"
            />
          </div>
        </div>
      )}
      <div className="py-2.5 px-3 w-full grid gap-1.5 border-l">
        <div className="flex gap-3 justify-between items-start">
          <h3 className="text-sm text-[#808080] line-clamp-3">{brand_name}</h3>
          <CloseButton
            onClick={() => {
              removeBasket(id);
            }}
          />
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
              {count} × {sale_price || price}с
            </p>
            <p className="font-bold">{count * (sale_price || price)}с</p>
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

export default BasketCard;
