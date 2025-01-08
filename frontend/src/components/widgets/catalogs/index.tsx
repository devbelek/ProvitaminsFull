import Image from "next/image";
import { getCatalogs } from "@/src/api/catalogs";
import CatalogItem from "./item";

async function Catalogs() {
  const data = await getCatalogs();
  return (
    <aside className="rounded-[10px] overflow-hidden w-[310px]">
      <div className="bg-main py-3 px-4 flex items-center gap-2.5">
        <div className="w-6 aspect-square relative">
          <Image
            src="/images/global/icons/menu-catalog.svg"
            alt="menu"
            sizes="100%"
            fill
            priority
          />
        </div>
        <h5 className="text-xl font-bold text-text-light">Каталог</h5>
      </div>
      <ul className="border border-stroke rounded-b-[10px]">
        {data.results.map((catalog, index) => (
          <CatalogItem
            key={catalog.id}
            catalog={catalog}
            isLast={index === data.results.length - 1}
          />
        ))}
      </ul>
    </aside>
  );
}

export default Catalogs;
