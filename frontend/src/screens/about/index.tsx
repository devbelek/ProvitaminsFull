import QuestionsList from "@/src/components/widgets/faq";
import ContentLayout from "@/src/layout/content";
import AboutCompanySection from "@/src/components/widgets/about-company";
import BreadCrumbs from "@/src/components/widgets/bread-crumbs";
import Banner from "@/src/components/widgets/banner";
import { Suspense } from "react";
import Skeleton from "react-loading-skeleton";

async function AboutPage() {
  const location = [
    {
      href: "/",
      name: "Главная",
    },
    {
      href: "/about",
      name: "О магазине",
    },
  ];

  return (
    <div className="flex flex-col">
      <div className="container pt-5 hidden lg:block">
        <BreadCrumbs location={location} />
      </div>
      <ContentLayout>
        <div className="min-w-0">
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
      </ContentLayout>
      <Suspense fallback={<Skeleton className="w-full h-[50vh]" />}>
        <QuestionsList />
      </Suspense>
      <Suspense
        fallback={
          <div className="container">
            <Skeleton className="w-full h-[50vh]" />
          </div>
        }
      >
        <AboutCompanySection bg="#DFFAF7" />
      </Suspense>
    </div>
  );
}

export default AboutPage;
