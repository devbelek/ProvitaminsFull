import Banner from "@/src/components/widgets/banner";
import Benefits from "@/src/components/widgets/benefits";
import Catalogs from "@/src/components/widgets/catalogs";
import Reviews from "@/src/components/widgets/reviews";
import AnimatedSection from "./snowfall";
import AboutCompanySection from "@/src/components/widgets/about-company";
import { Suspense } from "react";
import Skeleton from "react-loading-skeleton";
import HitProductsSection from "./hits";
import GridProductCardsSkeleton from "@/src/components/cards/grid-product-cards/skeleton";
import SalesProductsSection from "./sales";
import RecomendedProductsSection from "./recomended";
import ReviewsSkeleton from "@/src/components/widgets/reviews/skeleton";

async function HomePage() {
  return (
    <div>
      <div className="pt-5 md:pt-10 xl:pt-20 flex flex-col gap-14">
        <section>
          <div className="container">
            <div className="flex relative gap-8 items-stretch">
              <div className="hidden lg:block">
                <Suspense
                  fallback={
                    <div className="w-[310px] h-screen">
                      <Skeleton className="w-[310px] h-screen" />
                    </div>
                  }
                >
                  <Catalogs />
                </Suspense>
              </div>
              <Suspense
                fallback={
                  <div className="w-full aspect-[960/682]">
                    <Skeleton className="w-full aspect-[960/682]" />
                  </div>
                }
              >
                <Banner />
              </Suspense>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <Benefits />
          </div>
        </section>
        <AnimatedSection />
        <Suspense
          fallback={
            <div className="container">
              <GridProductCardsSkeleton />
            </div>
          }
        >
          <HitProductsSection />
        </Suspense>
        <Suspense
          fallback={
            <div className="container">
              <GridProductCardsSkeleton />
            </div>
          }
        >
          <SalesProductsSection />
        </Suspense>
        <Suspense
          fallback={
            <div className="container">
              <GridProductCardsSkeleton />
            </div>
          }
        >
          <RecomendedProductsSection />
        </Suspense>
        <section>
          <Suspense fallback={<ReviewsSkeleton />}>
            <Reviews />
          </Suspense>
        </section>
      </div>
      <Suspense
        fallback={
          <div className="container">
            <Skeleton className="w-full h-[50vh]" />
          </div>
        }
      >
        <AboutCompanySection />
      </Suspense>
    </div>
  );
}

export default HomePage;
