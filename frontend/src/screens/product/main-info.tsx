import { Product } from "@/src/api/products";
import Rating from "@/src/components/shared/rating";
import classNames from "classnames";
import MainInfoActions from "./main-info-actions";

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
          <p className="text-sm">{data.status === "coming_soon" ? "Нет в наличии" : "В наличии"}</p>
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
            <p className="font-medium">Количество в упаковке</p>
            <p className="text-[#808080]">{data.quantity}</p>
          </div>
        }
        {
          <div className="flex gap-3.5 items-center">
            <p className="font-medium">Артикул</p>
            <p className="text-[#808080]">{data.vendor_code}</p>
          </div>
        }
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
