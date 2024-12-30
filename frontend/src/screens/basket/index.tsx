import Divider from "@/src/components/shared/divider";
import ContentLayout from "@/src/layout/content";
import BasketData from "./data";
import BreadCrumbs from "@/src/components/widgets/bread-crumbs";

const location = [
  {
    href: "/",
    name: "Главная",
  },
  {
    href: "/basket",
    name: "Корзина",
  },
];

function BasketPage() {
  return (
    <div>
      <div className="container pt-5 hidden lg:block">
        <BreadCrumbs location={location} />
      </div>
      <ContentLayout>
        <div className="flex flex-col gap-7">
          <div className="hidden lg:block">
            <Divider title="Корзина" />
          </div>
          <BasketData />
        </div>
      </ContentLayout>
    </div>
  );
}

export default BasketPage;
