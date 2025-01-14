import Divider from "@/src/components/shared/divider";
import Catalogs from "@/src/components/widgets/catalogs";
import Filters from "@/src/components/widgets/filters";
import Hits from "@/src/components/widgets/hits";
import SortBar from "@/src/components/widgets/sort";
import ViewType from "@/src/components/widgets/view-type";
import { getProducts } from "@/src/api/products";
import { getProductForms } from "@/src/api/product-forms";
import { getBrands } from "@/src/api/brands";
import { getCountries } from "@/src/api/countries";
import { getCatalog, getCategory } from "@/src/api/catalogs";
import BreadCrumbs from "@/src/components/widgets/bread-crumbs";
import { Suspense } from "react";
import Skeleton from "react-loading-skeleton";
import ProductListSection from "./product-list";

export interface CatalogPageProps {
  searchParams: {
    brand?: string | string[];
    category?: string | string[];
    catalogue?: string | string[];  
    sub_category?: string | string[];
    form?: string | string[];
    manufacturer_country?: string | string[];
    price_max?: string;
    price_min?: string;
    filters?: string;
    catalog?: string;
    ordering?: string;
  };
}

async function Desktop({ searchParams }: CatalogPageProps) {
  const hits = await getProducts({ params: { is_hit: "true" } });
  const forms = await getProductForms();
  const brands = await getBrands();
  const countries = await getCountries();

  const category = await getCategory({
    id: Number(searchParams.category),
  });

  const sub_category = await getCategory({
    id: Number(searchParams.sub_category),
  });

  const catalog = await getCatalog({
    id: Number(searchParams.catalogue),
  });

  const location = [
    {
      href: "/",
      name: "Главная",
    },
    {
      href: `/catalog?catalogue=${catalog.id}`,
      name: catalog.name,
    },
    {
      href: `/catalog?category=${category.id}`,
      name: category.name,
    },
    {
      href: `/catalog?sub_category=${sub_category.id}`,
      name: sub_category.name,
    },
  ];

  return (
    <div>
      <div className="container pt-5 hidden lg:block">
        <BreadCrumbs location={location} />
      </div>
      <div className="py-10">
        <section>
          <div className="container">
            <div className="flex relative gap-8 items-stretch">
              <div className="hidden lg:flex flex-col gap-5">
                <Suspense fallback={<Skeleton className="-wfull h-screen" />}>
                  <Catalogs />
                </Suspense>
                <Filters
                  forms={forms.results}
                  brands={brands.results}
                  countries={countries}
                />
                <Hits data={hits.results} />
              </div>
              <div className="w-full flex flex-col gap-7">
                <div>
                  <Divider
                    title={sub_category.name || category.name || catalog.name}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <SortBar />
                  <ViewType />
                </div>
                <Suspense fallback={<Skeleton className="w-full h-screen" />}>
                  <ProductListSection searchParams={searchParams} />
                </Suspense>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Desktop;
