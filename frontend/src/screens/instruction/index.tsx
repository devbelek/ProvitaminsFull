import BreadCrumbs from "@/src/components/widgets/bread-crumbs";
import InstructionList from "./list";
import ContentLayout from "@/src/layout/content";

const location = [
  {
    href: "/",
    name: "Главная",
  },
  {
    href: "/instruction",
    name: "Как заказать",
  },
];

function InstructionPage() {
  return (
    <div>
      <div className="container pt-5 hidden lg:block">
        <BreadCrumbs location={location} />
      </div>
      <ContentLayout>
        <InstructionList />
      </ContentLayout>
    </div>
  );
}

export default InstructionPage;
