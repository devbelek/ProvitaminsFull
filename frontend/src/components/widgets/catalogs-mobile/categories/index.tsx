import { getCatalogs } from "@/src/api/catalogs";
import CatalogItem from "./item";

async function MobileCategories() {
  const data = await getCatalogs();
  return (
    <div className="rounded-[10px] overflow-hidden w-full">
      <ul className="border border-stroke rounded-[10px]">
        {data.results.map((catalog, index) => (
          <CatalogItem
            key={catalog.id}
            catalog={catalog}
            isLast={index === data.results.length - 1}
          />
        ))}
      </ul>
    </div>
  );
}

export default MobileCategories;
