import ContentLayout from "@/src/layout/content";
import Divider from "@/src/components/shared/divider";
import FavoritesData from "./data";
import BreadCrumbs from "@/src/components/widgets/bread-crumbs";

const location = [
  {
    href: "/",
    name: "Главная",
  },
  {
    href: "/favorites",
    name: "Избранное",
  },
];

function FavoritesPage() {
  return (
    <div>
      <div className="container pt-5 hidden lg:block">
        <BreadCrumbs location={location} />
      </div>
      <ContentLayout>
        <div className="flex flex-col gap-7">
          <div className="hidden lg:block">
            <Divider title="Избранное" />
          </div>
          <FavoritesData />
        </div>
      </ContentLayout>
    </div>
  );
}

export default FavoritesPage;
