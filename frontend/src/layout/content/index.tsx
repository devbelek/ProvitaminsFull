import Catalogs from "@/src/components/widgets/catalogs";
import { Suspense } from "react";
import Skeleton from "react-loading-skeleton";

interface Props {
  children?: React.ReactNode;
}

async function ContentLayout({ children }: Props) {
  return (
    <div className="pt-5 md:pt-10 flex flex-col gap-5 sm:gap-8 xl:gap-14 pb-20">
      <section>
        <div className="container">
          <div className="flex relative gap-8 items-start">
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
            <div className="w-full min-w-0">{children}</div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContentLayout;
