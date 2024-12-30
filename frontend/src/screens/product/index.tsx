import ProductCarousel from "./carousel";
import ProductMainInfo from "./main-info";
import ProductSecondaryInfo from "./secondary-info";
import { getProduct, getProductReviews } from "@/src/api/products";

async function ProductProfile({
  productId,
  category,
  sub_category,
}: {
  productId: string;
  category?: string;
  sub_category?: string;
}) {
  const product = await getProduct({
    id: Number(productId),
    params: { category_id: category, sub_category_id: sub_category },
  });
  const reviews = await getProductReviews({ id: productId });
  return (
    <>
      <div className="w-full flex flex-col xl:flex-row gap-[30px]">
        <div className="min-w-full xl:min-w-[300px] 2xl:min-w-[436px]">
          <ProductCarousel images={product.images} />
        </div>
        <div className="w-full">
          <ProductMainInfo data={product} />
        </div>
      </div>
      <div className="mt-[30px] w-full">
        <ProductSecondaryInfo data={product} reviews={reviews.results} />
      </div>
    </>
  );
}

export default ProductProfile;
