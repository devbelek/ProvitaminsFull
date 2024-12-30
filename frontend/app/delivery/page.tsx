import { getDeliveryWays } from "@/src/api/delivery";
import BreadCrumbs from "@/src/components/widgets/bread-crumbs";
import DeliverWay from "@/src/components/widgets/delivery-way";
import PaymentInfo from "@/src/components/widgets/payment-info";
import ContentLayout from "@/src/layout/content";
import { Metadata } from "next";
import { Suspense } from "react";
import Skeleton from "react-loading-skeleton";

export const metadata: Metadata = {
  title: "Доставка и оплата",
};

const location = [
  {
    href: "/",
    name: "Главная",
  },
  {
    href: "/delivery",
    name: "Доставка и оплата",
  },
];

async function Page() {
  return (
    <div>
      <div className="container pt-5 hidden lg:block">
        <BreadCrumbs location={location} />
      </div>
      <ContentLayout>
        <div className="grid gap-2.5 sm:gap-5 sm:grid-cols-2">
          <Suspense fallback={<Skeleton className="w-full h-[30vh]" />}>
            <DeliverWay />
          </Suspense>
          <div className="sm:col-span-2">
            <Suspense fallback={<Skeleton className="w-full h-[30vh]" />}>
              <PaymentInfo />
            </Suspense>
          </div>
        </div>
      </ContentLayout>
    </div>
  );
}

export default Page;
