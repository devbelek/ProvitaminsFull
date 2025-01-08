import Catalogs from "@/src/components/widgets/catalogs";
import Filters from "@/src/components/widgets/filters";
import Pagination from "@/src/components/widgets/pagination";
import ProductList from "@/src/components/widgets/product-list";
import SortBar from "@/src/components/widgets/sort";
import ViewType from "@/src/components/widgets/view-type";
import { getProducts } from "@/src/api/products";
import { getProductForms } from "@/src/api/product-forms";
import { getBrands } from "@/src/api/brands";
import { getCountries } from "@/src/api/countries";
import { getCatalog, getCategory } from "@/src/api/catalogs";
import BreadCrumbs from "@/src/components/widgets/bread-crumbs";
import SearchText from "@/src/components/widgets/search-text";
import Image from "next/image";
import Input from "@/src/components/shared/input";
import MobileFilters from "@/src/components/widgets/filters/mobile";

export interface CatalogPageProps {
  searchParams: {
    brand?: string | string[];
    category?: string | string[];
    form?: string | string[];
    manufacturer_country?: string | string[];
    price_max?: string;
    price_min?: string;
    filters?: string;
    catalog?: string;
    ordering?: string;
  };
}

async function Page({ searchParams }: CatalogPageProps) {
  const data = await getProducts({ params: searchParams });
  const forms = await getProductForms();
  const brands = await getBrands();
  const countries = await getCountries();

  const location = [
    {
      href: "/",
      name: "Главная",
    },
    {
      href: `/search`,
      name: "Поиск",
    },
  ];

  return (
    <div>
      <div className="container pt-5 hidden lg:block">
        <BreadCrumbs location={location} />
      </div>
      <div className="py-4 pb-10 xl:pb-20">
        <section>
          <div className="container">
            <div className="flex relative gap-8 items-stretch">
              <div className="hidden xl:flex flex-col gap-5">
                <Catalogs />
                <Filters
                  forms={forms.results}
                  brands={brands.results}
                  countries={countries}
                />
              </div>
              <div className="w-full flex flex-col gap-7">
                <div className="hidden lg:block">
                  <SearchText />
                </div>
                <div className="lg:hidden">
                  <Input.Search />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex gap-2 items-center">
                    <div className="lg:hidden">
                      <MobileFilters
                        forms={forms.results}
                        brands={brands.results}
                        countries={countries}
                      />
                    </div>
                    <SortBar />
                  </div>
                  <ViewType />
                </div>
                {data.results.length ? (
                  <div>
                    <ProductList list={data.results} />
                    <Pagination totalCount={data.count} />
                  </div>
                ) : (
                  <div className="flex flex-col items-center gap-4 lg:gap-6 xl:gap-8 py-24">
                    <div>
                      <p className="text-center text-lg lg:text-xl font-bold">
                        Результаты не найдены
                      </p>
                      <p className="text-center mt-1.5 text-sm sm:text-base lg:text-lg">
                        Попробуйте ввести запрос по другому
                      </p>
                    </div>
                    <div className="relative w-full aspect-[385/264] max-w-[385px]">
                      <Image
                        src="/images/global/common/search-not-found.svg"
                        alt="not found"
                        fill
                        sizes="full"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Page;
