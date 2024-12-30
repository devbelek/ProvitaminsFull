import { Catalog } from "@/src/api/catalogs";
import Link from "next/link";
import { ResponsiveMasonry, Masonry } from "@/src/components/shared/masonry";

interface Props {
  catalog: Catalog;
  setHovered: (_: boolean) => void;
}

function CatalogItemMasonry({ catalog, setHovered }: Props) {
  return (
    <div className="border border-stroke rounded-[10px] ml-2.5 py-7 px-10 bg-white relative">
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry>
          {catalog.children?.map(({ id, children, name }) => (
            <div key={id} className="flex flex-col gap-1 py-2.5">
              <div>
                <Link
                  className="font-semibold hover:text-main inline-block"
                  href={`/catalog?category=${id}`}
                  key={id}
                  onClick={() => setHovered(false)}
                >
                  {name}
                </Link>
              </div>
              {children?.map(({ id: sub_id, name }) => (
                <div key={sub_id}>
                  <Link
                    className="hover:text-main inline-block"
                    href={`/catalog?category=${id}&sub_category=${sub_id}`}
                    onClick={() => setHovered(false)}
                  >
                    {name}
                  </Link>
                </div>
              ))}
            </div>
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
}

export default CatalogItemMasonry;
