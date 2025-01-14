import SortBar from "../../sort";
import ViewType from "../../view-type";
import ProductList from "../../product-list";
import { getProducts } from "@/src/api/products";
import { CatalogPageProps } from "@/src/screens/catalog/desktop";
import Pagination from "../../pagination";
import MobileFilters from "../../filters/mobile";
import { ProductForm } from "../../filters/product-form";
import { Country } from "../../filters/country";
import { Brand } from "../../filters/brands";

interface Props {
  searchParams: CatalogPageProps;
  forms: ProductForm[];
  countries: Country[];
  brands: Brand[];
}

async function MobileProducts({
  searchParams,
  forms,
  brands,
  countries,
}: Props) {
  
  const data = await getProducts({
    params: { ...searchParams.searchParams, limit: "40" },
  });
  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center justify-between gap-4">
        <div className="flex gap-2.5 items-start">
          <MobileFilters forms={forms} countries={countries} brands={brands} />
          <SortBar />
        </div>
        <ViewType />
      </div>
      <div>
        <ProductList list={data.results} />
        <Pagination totalCount={data.count} />
      </div>
    </div>
  );
}

export default MobileProducts;
