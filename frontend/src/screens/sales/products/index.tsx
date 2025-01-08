import { SalesPageProps } from "@/app/sales/page";
import { getProducts } from "@/src/api/products";
import Divider from "@/src/components/shared/divider";
import Pagination from "@/src/components/widgets/pagination";
import ProductList from "@/src/components/widgets/product-list";

async function SalesProductsSection({ searchParams }: SalesPageProps) {
  const data = await getProducts({
    params: {
      ...searchParams,
      is_sale: "true",
    },
  });
  return (
    <div className="flex flex-col gap-7">
      <div className="hidden lg:block">
        <Divider title="Акции" />
      </div>
      <ProductList list={data.results} />
      <Pagination totalCount={data.count} />
    </div>
  );
}

export default SalesProductsSection;
