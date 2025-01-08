import { getProducts } from "@/src/api/products";
import CarouselProductCards from "@/src/components/cards/grid-product-cards/carousel";
import Divider from "@/src/components/shared/divider";

async function SalesProductsSection() {
  const salesProducts = await getProducts({ params: { is_sale: "true" } });
  return (
    salesProducts.results.length > 0 && (
      <section>
        <div className="container">
          <Divider title="Хиты продаж" />
          <CarouselProductCards
            data={salesProducts.results.map((product) => ({
              ...product,
              is_sale: false,
            }))}
          />
        </div>
      </section>
    )
  );
}

export default SalesProductsSection;
