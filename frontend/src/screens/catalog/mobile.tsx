import MobileCategories from "@/src/components/widgets/catalogs-mobile/categories";
import MobileFilters from "@/src/components/widgets/catalogs-mobile/filters";
import MobileSubcategories from "@/src/components/widgets/catalogs-mobile/subcategories";
import { CatalogPageProps } from "./desktop";
import MobileProducts from "@/src/components/widgets/catalogs-mobile/products";
import { getProductForms } from "@/src/api/product-forms";
import { getBrands } from "@/src/api/brands";
import { getCountries } from "@/src/api/countries";

async function Mobile({ searchParams }: CatalogPageProps) {
  const isCatalogSelected =
    !!searchParams.catalog || !!searchParams.category || !!searchParams.catalogue; 
  const isCategorySelected = !!searchParams.category || !!searchParams.catalogue; 
  const isFiltersOpened = searchParams.filters;

  const forms = await getProductForms();
  const brands = await getBrands();
  const countries = await getCountries();

  return (
    <div>
      <div className="container py-4">
        {isCatalogSelected ? (
          isCategorySelected ? (
            isFiltersOpened ? (
              <MobileFilters
                forms={forms.results}
                brands={brands.results}
                countries={countries}
              />
            ) : (
              <MobileProducts
                searchParams={{ searchParams }}
                brands={brands.results}
                countries={countries}
                forms={forms.results}
              />
            )
          ) : (
            <MobileSubcategories searchParams={searchParams} />
          )
        ) : (
          <MobileCategories />
        )}
      </div>
    </div>
  );
}

export default Mobile;
