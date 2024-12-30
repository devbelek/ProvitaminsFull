import { ProductProfilePageProps } from "@/app/products/[id]/page";
import { getProduct } from "@/src/api/products";
import BreadCrumbs from "@/src/components/widgets/bread-crumbs";

async function ProductProfileBreadcrumbs({
  params,
  searchParams,
}: ProductProfilePageProps) {
  const product = await getProduct({
    id: Number(params.id),
    params: {
      category_id: searchParams.category,
      sub_category_id: searchParams.sub_category,
    },
  });

  const location = [
    {
      href: "/",
      name: "Главная",
    },
    {
      href: `/catalog?category=${product.category_id}`,
      name: product.catalogue_name,
      disabled: true,
    },
    {
      href: `/catalog?category=${product.sub_category_id}`,
      name: product.sub_category_name,
    },
    {
      href: `/product/${product.id}`,
      name: product.name,
    },
  ];

  return (
    <div className="container pt-5 hidden lg:block">
      <BreadCrumbs location={location} />
    </div>
  );
}

export default ProductProfileBreadcrumbs;
