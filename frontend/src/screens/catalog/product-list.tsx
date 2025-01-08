import Pagination from "@/src/components/widgets/pagination";
import ProductList from "@/src/components/widgets/product-list";
import { CatalogPageProps } from "./desktop";
import { getProducts } from "@/src/api/products";

async function ProductListSection({ searchParams }: CatalogPageProps) {
  const data = await getProducts({
    params: { ...searchParams, limit: "40" },
  });
  return (
    <div>
      <ProductList list={data.results} />
      <Pagination totalCount={data.count} />
    </div>
  );
}

export default ProductListSection;
