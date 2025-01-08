import { getProducts } from "@/src/api/products";
import CarouselProductCards from "@/src/components/cards/grid-product-cards/carousel";
import Divider from "@/src/components/shared/divider";

async function HitProductsSection() {
  const hitProducts = await getProducts({ params: { is_hit: "true" } });
  return (
    hitProducts.results.length > 0 && (
      <section>
        <div className="container">
          <Divider title="Хиты продаж" />
          <CarouselProductCards
            data={hitProducts.results.map((product) => ({
              ...product,
              is_sale: false,
            }))}
          />
        </div>
      </section>
    )
  );
}

export default HitProductsSection;
