import ResponsibilityDenial from "@/src/components/widgets/responsibility-denial";
import Desktop, { CatalogPageProps } from "./desktop";
import Mobile from "./mobile";
import { Suspense } from "react";
import Skeleton from "react-loading-skeleton";

async function CatalogPage(props: CatalogPageProps) {
  return (
    <>
      <div className="hidden lg:block">
        <Suspense fallback={<Skeleton className="w-full h-screen" />}>
          <Desktop searchParams={props.searchParams} />
        </Suspense>
      </div>
      <div className="lg:hidden min-h-full">
        <Suspense fallback={<Skeleton className="w-full h-screen" />}>
          <Mobile searchParams={props.searchParams} />
        </Suspense>
      </div>
      <div className="hidden lg:block">
        <Suspense fallback={<Skeleton className="w-full h-screen" />}>
          <ResponsibilityDenial />
        </Suspense>
      </div>
    </>
  );
}

export default CatalogPage;
