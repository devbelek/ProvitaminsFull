import { Product, Variation } from "@/src/api/products";
import Rating from "@/src/components/shared/rating";
import classNames from "classnames";
import MainInfoActions from "./main-info-actions";
import Link from "next/link";

interface Props {
  data: Product;
}

function ProductMainInfo({ data }: Props) {
  const variations = [
    data.variations.current,
    ...data.variations.available_variations,
  ];

  const uniqueFlavor = variations.filter((variation, index, self) => {
    return self.findIndex((v) => v.flavor === variation.flavor) === index;
  });

  const uniqueDosage = variations.filter((variation, index, self) => {
    return self.findIndex((v) => v.dosage === variation.dosage) === index;
  });

  const uniqueQuantity = variations.filter((variation, index, self) => {
    return self.findIndex((v) => v.quantity === variation.quantity) === index;
  });

  const allFlavorsEqual =
    (data.variations.current.flavor === null &&
      data.variations.available_variations.every(
        (variation) => variation.flavor === null
      )) ||
    (data.variations.current.flavor &&
      data.variations.available_variations.every(
        (variation) => variation.flavor === data.variations.current.flavor
      ));

  const allDosageEqual =
    (data.variations.current.dosage === null &&
      data.variations.available_variations.every(
        (variation) => variation.dosage === null
      )) ||
    (data.variations.current.dosage &&
      data.variations.available_variations.every(
        (variation) => variation.dosage === data.variations.current.dosage
      ));

  const allQuantityEqual =
    (data.variations.current.quantity === null &&
      data.variations.available_variations.every(
        (variation) => variation.quantity === null
      )) ||
    (data.variations.current.quantity &&
      data.variations.available_variations.every(
        (variation) => variation.quantity === data.variations.current.quantity
      ));

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

        {allFlavorsEqual && data.variations.current.flavor !== null && (
          <div className="flex gap-3.5 items-center">
            <p className="font-medium">Вкус</p>
            <p className="text-[#808080]">{data.variations.current.flavor}</p>
          </div>
        )}

        {allDosageEqual && (
          <div className="flex gap-3.5 items-center">
            <p className="font-medium">Дозировка</p>
            <p className="text-[#808080]">{data.variations.current.dosage}</p>
          </div>
        )}

        {allQuantityEqual && (
          <div className="flex gap-3.5 items-center">
            <p className="font-medium">Количество в упаковке</p>
            <p className="text-[#808080]">{data.variations.current.quantity}</p>
          </div>
        )}

        {
          <div className="flex gap-3.5 items-center">
            <p className="font-medium">Артикул</p>
            <p className="text-[#808080]">{data.vendor_code}</p>
          </div>
        }

        <div className="flex flex-col gap-3.5">
          {!allFlavorsEqual && data.variations.current.flavor !== null && (
            <div>
              <div className="flex gap-3.5 pt-3.5 items-center border-t">
                <p className="font-medium">Вкус</p>
                <p className="text-[#808080]">
                  {data.variations.current.flavor}
                </p>
              </div>
              <div className="flex gap-3.5 mt-1">
                {uniqueFlavor
                  .sort((a, b) => a.id - b.id)
                  .map((variation) => (
                    <Link
                      key={variation.id}
                      href={"/products/" + variation.id}
                      scroll={false}
                      style={{
                        pointerEvents:
                          variation.in_stock &&
                          variation.id !== data.variations.current.id
                            ? "auto"
                            : "none",
                      }}
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

          {!allDosageEqual && (
            <div>
              <div className="flex gap-3.5 pt-3.5 items-center border-t">
                <p className="font-medium">Дозировка</p>
                <p className="text-[#808080]">
                  {data.variations.current.dosage}
                </p>
              </div>

              <div className="flex gap-3.5 mt-1">
                {uniqueDosage
                  .sort((a, b) => parseInt(a.dosage) - parseInt(b.dosage))
                  .map((variation) => {
                    let clickable = true;

                    const currentVar =
                      variation.id !== data.variations.current.id;

                    if (variation.in_stock) {
                      if (!allFlavorsEqual) {
                        if (
                          variation.flavor !== data.variations.current.flavor
                        ) {
                          clickable = false;
                        }
                      }
                    } else {
                      clickable = false;
                    }
                    return (
                      <Link
                        key={variation.id}
                        href={"/products/" + variation.id}
                        scroll={false}
                        style={{
                          pointerEvents: clickable ? "auto" : "none",
                        }}
                        className={`font-normal p-3 border transition-all duration-200 rounded-[8px] relative ${
                          currentVar
                            ? "border-[#E6E6E6] hover:border-[#2CA89A]"
                            : "border-[#2CA89A] cursor-default border-2"
                        } ${!clickable ? "bg-[#F6F6F6] text-[#808080]" : ""}`}
                      >
                        {variation.dosage}
                        {!clickable && (
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
                    );
                  })}
              </div>
            </div>
          )}

          {!allQuantityEqual && (
            <div>
              <div className="flex gap-3.5 pt-3.5 items-center border-t">
                <p className="font-medium">Количество в упаковке</p>
                <p className="text-[#808080]">
                  {data.variations.current.quantity}
                </p>
              </div>

              <div className="flex gap-3.5 mt-1 overflow-auto">
                {uniqueQuantity
                  .sort((a, b) => parseInt(a.quantity) - parseInt(b.quantity))
                  .map((variation) => {
                    let clickable = true;

                    const currentVar =
                      variation.id !== data.variations.current.id;

                    if (variation.in_stock) {
                      if (!allDosageEqual && !allFlavorsEqual) {
                        if (
                          variation.dosage !== data.variations.current.dosage || variation.flavor !== data.variations.current.flavor
                        ) {
                          clickable = false;
                        }
                      } else if(!allDosageEqual && allFlavorsEqual){
                        if (
                          variation.dosage !== data.variations.current.dosage
                        ) {
                          clickable = false;
                        }
                      } else if (!allFlavorsEqual) {
                        if (
                          variation.flavor !== data.variations.current.flavor
                        ) {
                          clickable = false;
                        }
                      }
                    } else {
                      clickable = false;
                    }

                    return (
                      <Link
                        key={variation.id}
                        href={"/products/" + variation.id}
                        scroll={false}
                        style={{
                          pointerEvents: clickable ? "auto" : "none",
                        }}
                        className={`font-normal p-3 border transition-all duration-200 rounded-[8px] relative text-center ${
                          currentVar
                            ? "border-[#E6E6E6] hover:border-[#2CA89A]"
                            : "border-[#2CA89A] cursor-default border-2"
                        } ${!clickable ? "bg-[#F6F6F6] text-[#808080]" : ""}`}
                      >
                        {variation.quantity}
                        <span className="block font-medium mt-1">
                          {variation.price}с
                        </span>
                        {!clickable && (
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
                    );
                  })}
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

interface VariationSectionProps {
  title: string;
  currentValue: string | null;
  uniqueValues: (string | null)[];
  variations: Variation[];
  keyName: keyof Variation;
}

function VariationSection({
  title,
  currentValue,
  uniqueValues,
  variations,
  keyName,
}: VariationSectionProps) {
  return (
    <div>
      <div className="flex gap-3.5 pt-3.5 items-center border-t">
        <p className="font-medium">{title}</p>
        <p className="text-[#808080]">{currentValue}</p>
      </div>

      <div className="flex gap-3.5 mt-1">
        {uniqueValues
          .filter((value) => value !== currentValue)
          .map((value, index) => (
            <Link
              key={index}
              href={"/products/" + variations[index].id}
              scroll={false}
            >
              <div className="font-normal p-3 border transition-all duration-200 rounded-[8px]">
                {value}
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}

export default ProductMainInfo;
