import { getProduct } from "@/src/api/products";
import ResponsibilityDenial from "@/src/components/widgets/responsibility-denial";
import ContentLayout from "@/src/layout/content";
import ProductProfile from "@/src/screens/product";
import ProductProfileBreadcrumbs from "@/src/screens/product/breadcrumbs";
import SimilarProductsSection from "@/src/screens/product/similar-products";
import { Metadata } from "next";
import { Suspense } from "react";
import Skeleton from "react-loading-skeleton";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const product = await getProduct({ id: Number(params.id) });

  return {
    title: product.name,
    description: `${product.description}`,
    alternates: {
      canonical: `https://${process.env.DOMAIN_NAME}/products/${product.id}`,
    },
    openGraph: {
      images: product.images.map((item) => ({
        url: item.image,
        width: 800,
        height: 600,
        alt: product.name,
      })),
    },
    keywords: [
      `витамины ${product.brand_name}`,
      `витамины ${product.catalogue_name}`,
      `витамины ${product.category_name}`,
      product.name,
    ],
  };
}

export interface ProductProfilePageProps {
  params: { id: string };
  searchParams: { category?: string; sub_category?: string };
}

async function Page({ params, searchParams }: ProductProfilePageProps) {
  // const jsonLd = {
  //   "@context": "https://schema.org",
  //   "@type": "Product",
  //   name: product.name,
  //   brand: {
  //     "@type": "Brand",
  //     name: product.brand_name,
  //   },
  //   offers: {
  //     "@type": "Offer",
  //     price: product.price,
  //     priceCurrency: "KGS",
  //     availability: "https://schema.org/InStock",
  //     url: `https://${process.env.DOMAIN_NAME}/products/${product.id}`,
  //     priceValidUntil: "2024-12-31",
  //     discount: product.is_sale ? product.price - product.sale_price : null,
  //     seller: {
  //       "@type": "Organization",
  //       name: "PROVITAMINS - Магазин витаминов в г. Ош",
  //     },
  //   },
  //   description: product.description,
  //   category: product.category_name,
  //   countryOfOrigin: product.country_name,
  //   aggregateRating: product.rating
  //     ? {
  //         "@type": "AggregateRating",
  //         ratingValue: product.rating,
  //         bestRating: "5",
  //       }
  //     : undefined,
  // };

  return (
    <div>
      <div className="container pt-5 hidden lg:block">
        <ProductProfileBreadcrumbs
          params={params}
          searchParams={searchParams}
        />
      </div>
      <ContentLayout>
        <Suspense fallback={<Skeleton className="w-full h-screen" />}>
          <ProductProfile
            productId={params.id}
            category={searchParams.category}
            sub_category={searchParams.sub_category}
          />
          {/* <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      /> */}
        </Suspense>
      </ContentLayout>
      <Suspense>
        <SimilarProductsSection productId={params.id} />
      </Suspense>
      <Suspense>
        <ResponsibilityDenial />
      </Suspense>
    </div>
  );
}

export default Page;
