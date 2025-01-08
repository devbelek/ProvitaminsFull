import { getProducts } from "@/src/api/products";
import CarouselProductCards from "@/src/components/cards/grid-product-cards/carousel";
import Divider from "@/src/components/shared/divider";

async function RecomendedProductsSection() {
  const recomendedProducts = await getProducts({
    params: { is_recommend: "true" },
  });
  return (
    recomendedProducts.results.length > 0 && (
      <section>
        <div className="container">
          <Divider title="Хиты продаж" />
          <CarouselProductCards
            data={recomendedProducts.results.map((product) => ({
              ...product,
              is_sale: false,
            }))}
          />
        </div>
      </section>
    )
  );
}

export default RecomendedProductsSection;
