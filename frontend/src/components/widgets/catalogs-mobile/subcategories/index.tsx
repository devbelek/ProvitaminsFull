import { getCategories } from "@/src/api/catalogs";
import { CatalogPageProps } from "@/src/screens/catalog/desktop";
import Link from "next/link";

async function MobileSubcategories({ searchParams }: CatalogPageProps) {
  const categories = await getCategories({
    searchParams,
  });

  return (
    <div className="w-full">
      <ul className="border border-stroke rounded-[10px] w-full p-4">
          {/* <li className="flex flex-col gap-1 py-2.5">
            <Link
              className="font-semibold hover:text-main inline-block"
              href={`/catalog?catalogue=1&name=Продукция%20iHerb`}
              
            >
              Продукция
            </Link>
            </li> */}
        {categories.map(({ id, name, children }) => (
          <li key={id} className="flex flex-col gap-1 py-2.5">
            <Link
              className="font-semibold hover:text-main inline-block"
              href={`/catalog?category=${id}&name=${name}`}
              key={id}
            >
              {name}
            </Link>
            {children?.map(({ id, name }) => (
              <Link
                key={id}
                className="hover:text-main inline-block text-sm"
                href={`/catalog?category=${id}&name=${name}`}
              >
                {name}
              </Link>
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MobileSubcategories;
