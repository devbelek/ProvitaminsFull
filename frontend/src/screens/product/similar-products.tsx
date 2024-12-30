import { getSimilarProducts } from "@/src/api/products";
import CarouselProductCards from "@/src/components/cards/grid-product-cards/carousel";
import Divider from "@/src/components/shared/divider";

async function SimilarProductsSection({ productId }: { productId: string }) {
  const similar = await getSimilarProducts({ id: Number(productId) });
  return (
    similar.results.length > 0 && (
      <div className="my-10 xl:my-20 container">
        <Divider title="Похожие товары" />
        <CarouselProductCards data={similar.results} />
      </div>
    )
  );
}

export default SimilarProductsSection;
