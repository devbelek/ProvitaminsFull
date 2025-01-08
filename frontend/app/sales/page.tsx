import BreadCrumbs from "@/src/components/widgets/bread-crumbs";
import ContentLayout from "@/src/layout/content";
import ResponsibilityDenial from "@/src/components/widgets/responsibility-denial";
import { Suspense } from "react";
import Skeleton from "react-loading-skeleton";
import SalesProductsSection from "@/src/screens/sales/products";

export interface SalesPageProps {
  searchParams: {
    page: string;
  };
}

async function Page({ searchParams }: SalesPageProps) {

  const location = [
    {
      href: "/",
      name: "Главная",
    },
    {
      href: `/sales`,
      name: "Акции",
    },
  ];

  return (
    <div>
      <div className="container pt-5 hidden lg:block">
        <BreadCrumbs location={location} />
      </div>
      <ContentLayout>
        <Suspense fallback={<Skeleton className="h-screen w-full" />}>
          <SalesProductsSection searchParams={searchParams} />
        </Suspense>
      </ContentLayout>
      <ResponsibilityDenial />
    </div>
  );
}

export default Page;
