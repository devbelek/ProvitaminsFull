import { Product } from "@/src/api/products";
import Rating from "@/src/components/shared/rating";
import classNames from "classnames";
import MainInfoActions from "./main-info-actions";
import Link from "next/link";

interface Props {
  data: Product;
}

function ProductMainInfo({ data }: Props) {
  return (
    <div className="grid gap-3 w-full">
      <h1 className="text-xl font-semibold">{data.name}</h1>
      <div className="flex items-center justify-between gap-4 w-full">
        {data.rating && <Rating value={data.rating} size="lg" readonly />}
        <div className="flex gap-4 items-center">
          <p className="text-sm">
            {data.status === "out_of_stock" ? "Нет в наличии" : "В наличии"}
          </p>
          <Tag isHit={data.is_hit} isSale={data.is_sale} />
        </div>
      </div>
      <div className="grid gap-3">
        {
          <div className="flex gap-3.5 items-center">
            <p className="font-medium">Бренд</p>
            <p className="text-[#808080]">{data.brand_name}</p>
          </div>
        }
        {
          <div className="flex gap-3.5 items-center">
            <p className="font-medium">Страна производства</p>
            <p className="text-[#808080]">{data.country_name}</p>
          </div>
        }
        {
          <div className="flex gap-3.5 items-center">
            <p className="font-medium">Форма продукта</p>
            <p className="text-[#808080]">{data.form_name}</p>
          </div>
        }

        {
          <div className="flex gap-3.5 items-center">
            <p className="font-medium">Бренд</p>
            <p className="text-[#808080]">{data.brand_name}</p>
          </div>
        }

        <div className="flex flex-col gap-3.5">
          {data.variations.current.flavor && (
            <div>
              <div className="flex gap-3.5 pt-3.5 items-center border-t">
                <p className="font-medium">Вкус</p>
                <p className="text-[#808080]">
                  {data.variations.current.flavor}
                </p>
              </div>
              <div className="flex gap-3.5 mt-1">
                <a
                  className={`font-normal p-3 border transition-all duration-200 rounded-[8px] relative ${"border-[#2CA89A] cursor-default border-2"} ${
                    !data.variations.current.in_stock
                      ? "bg-[#F6F6F6] text-[#808080]"
                      : ""
                  }`}
                >
                  {data.variations.current.flavor}
                  {data.variations.current.in_stock || (
                    <span
                      style={{
                        position: "absolute",
                        content: '""',
                        left: 0,
                        top: 0,
                        width: "100%",
                        height: "100%",
                        background:
                          "linear-gradient(to bottom right,#0000 48%, #E6E6E6 ,#0000 52%)",
                      }}
                    ></span>
                  )}
                </a>
                {data.variations?.available_variations?.map((variation) => (
                  <Link
                    key={variation.id}
                    href={"/products/" + variation.id}
                    className={`font-normal p-3 border transition-all duration-200 rounded-[8px] relative ${
                      variation.flavor !== data.variations.current.flavor
                        ? "border-[#E6E6E6] hover:border-[#2CA89A]"
                        : "border-[#2CA89A] cursor-default border-2"
                    } ${
                      !variation.in_stock ? "bg-[#F6F6F6] text-[#808080]" : ""
                    }`}
                  >
                    {variation.flavor}
                    {variation.in_stock || (
                      <span
                        style={{
                          position: "absolute",
                          content: '""',
                          left: 0,
                          top: 0,
                          width: "100%",
                          height: "100%",
                          background:
                            "linear-gradient(to bottom right,#0000 48%, #E6E6E6 ,#0000 52%)",
                        }}
                      ></span>
                    )}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {data.variations.current.dosage && (
            <div>
              <div className="flex gap-3.5 pt-3.5 items-center border-t">
                <p className="font-medium">Дозировка</p>
                <p className="text-[#808080]">
                  {data.variations.current.dosage}
                </p>
              </div>

              <div className="flex gap-3.5 mt-1">
                <a
                  className={`font-normal p-3 border transition-all duration-200 rounded-[8px] relative ${"border-[#2CA89A] cursor-default border-2"} ${
                    !data.variations.current.in_stock
                      ? "bg-[#F6F6F6] text-[#808080]"
                      : ""
                  }`}
                >
                  {data.variations.current.dosage}
                  {data.variations.current.in_stock || (
                    <span
                      style={{
                        position: "absolute",
                        content: '""',
                        left: 0,
                        top: 0,
                        width: "100%",
                        height: "100%",
                        background:
                          "linear-gradient(to bottom right,#0000 48%, #E6E6E6 ,#0000 52%)",
                      }}
                    ></span>
                  )}
                </a>
                {data.variations?.available_variations?.map((variation) => (
                  <Link
                    key={variation.id}
                    href={"/products/" + variation.id}
                    className={`font-normal p-3 border transition-all duration-200 rounded-[8px] relative ${
                      variation.id !== data.variations.current.id
                        ? "border-[#E6E6E6] hover:border-[#2CA89A]"
                        : "border-[#2CA89A] cursor-default border-2"
                    } 
                    ${
                      !variation.in_stock ? "bg-[#F6F6F6] text-[#808080]" : ""
                    }`}
                  >
                    {variation.dosage}
                    {variation.in_stock || (
                      <span
                        style={{
                          position: "absolute",
                          content: '""',
                          left: 0,
                          top: 0,
                          width: "100%",
                          height: "100%",
                          background:
                            "linear-gradient(to bottom right,#0000 47%, #E6E6E6 ,#0000 53%)",
                        }}
                      ></span>
                    )}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {data.variations.current.quantity && (
            <div>
              <div className="flex gap-3.5 pt-3.5 items-center border-t">
                <p className="font-medium">Количество в упаковке</p>
                <p className="text-[#808080]">
                  {data.variations.current.quantity}
                </p>
              </div>

              <div className="flex gap-3.5 mt-1 overflow-auto">
                <a
                  className={`font-normal text-center p-3 border transition-all duration-200 rounded-[8px] relative ${"border-[#2CA89A] cursor-default border-2"} ${
                    !data.variations.current.in_stock
                      ? "bg-[#F6F6F6] text-[#808080]"
                      : ""
                  }`}
                >
                  {data.variations.current.quantity}
                  <span className="block font-medium mt-1">
                    {data.variations.current.price}с
                  </span>
                  {data.variations.current.in_stock || (
                    <span
                      style={{
                        position: "absolute",
                        content: '""',
                        left: 0,
                        top: 0,
                        width: "100%",
                        height: "100%",
                        background:
                          "linear-gradient(to bottom right,#0000 48%, #E6E6E6 ,#0000 52%)",
                      }}
                    ></span>
                  )}
                </a>
                {data.variations?.available_variations
                  ?.sort((a, b) => a.quantity - b.quantity)
                  .map((variation) => (
                    <a
                      key={variation.id}
                      href={"/products/" + variation.id}
                      className={`font-normal p-3 border transition-all duration-200 rounded-[8px] relative text-center ${
                        variation.quantity !== data.variations.current.quantity
                          ? "border-[#E6E6E6] hover:border-[#2CA89A]"
                          : "border-[#2CA89A] cursor-default border-2"
                      } ${
                        !variation.in_stock ? "bg-[#F6F6F6] text-[#808080]" : ""
                      }`}
                    >
                      {variation.quantity}
                      <span className="block font-medium mt-1">
                        {variation.price}с
                      </span>
                      {variation.in_stock || (
                        <span
                          style={{
                            position: "absolute",
                            content: '""',
                            left: 0,
                            top: 0,
                            width: "100%",
                            height: "100%",
                            background:
                              "linear-gradient(to bottom right,#0000 47%, #E6E6E6 ,#0000 53%)",
                          }}
                        ></span>
                      )}
                    </a>
                  ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="flex justify-between items-center gap-4">
        <div className="flex gap-2.5">
          <p className="text-xl font-semibold">
            {data.sale_price || data.price}с
          </p>
          {data.sale_price && (
            <p className="text-[20px] leading-6 line-through">{data.price}с</p>
          )}
        </div>
        <MainInfoActions />
      </div>
    </div>
  );
}

interface TagProps {
  isHit?: boolean;
  isSale?: boolean;
}

function Tag({ isHit, isSale }: TagProps) {
  return (
    (isHit || isSale) && (
      <div
        className={classNames(
          "py-1 px-5 rounded",
          isHit ? "bg-secondary" : "bg-[#E51616]"
        )}
      >
        <span className="font-semibold text-white">
          {isHit ? "Хит" : "Акция"}
        </span>
      </div>
    )
  );
}

export default ProductMainInfo;
