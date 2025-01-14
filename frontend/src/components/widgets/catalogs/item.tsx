"use client";

import { Catalog } from "@/src/api/catalogs";
import classNames from "classnames";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const CatalogItemMasonry = dynamic(() => import("./masonry"), { ssr: false });

function CatalogItem({
  catalog,
  isLast,
}: {
  catalog: Catalog;
  isLast?: boolean;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <li
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link href={`/catalog?catalogue=${catalog.id}`}>
        <div
          className={classNames(
            "flex justify-between items-center p-3.5 gap-4 cursor-pointer transition border-b border-stroke fill-[#2B2A29] hover:bg-input hover:text-main hover:fill-main",
            isLast && "border-none"
          )}
        >
          <div className="flex items-center gap-2">
            <div className="relative w-6 aspect-square">
              <Image
                src={catalog.icon}
                alt={catalog.name}
                sizes="100%"
                fill
                priority
              />
            </div>
            <p>{catalog.name}</p>
          </div>
          <div>
            <svg
              width="5"
              height="11"
              viewBox="0 0 5 11"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.146841 10.3368C0.100294 10.2852 0.0633643 10.2239 0.0381669 10.1564C0.0129695 10.089 0 10.0166 0 9.94355C0 9.87048 0.0129695 9.79814 0.0381669 9.73066C0.0633643 9.66317 0.100294 9.60188 0.146841 9.55028L3.79254 5.49985L0.146841 1.44943C0.0529878 1.34513 0.000261326 1.20367 0.000261326 1.05616C0.000261326 0.908659 0.0529878 0.767196 0.146841 0.662895C0.240694 0.558595 0.367986 0.5 0.500714 0.5C0.633443 0.5 0.760735 0.558595 0.854588 0.662895L4.85316 5.10659C4.89971 5.15819 4.93664 5.21948 4.96183 5.28696C4.98703 5.35445 5 5.42679 5 5.49985C5 5.57292 4.98703 5.64526 4.96183 5.71274C4.93664 5.78023 4.89971 5.84152 4.85316 5.89312L0.854588 10.3368C0.808159 10.3885 0.753003 10.4296 0.692279 10.4576C0.631556 10.4856 0.566458 10.5 0.500714 10.5C0.434971 10.5 0.369873 10.4856 0.30915 10.4576C0.248426 10.4296 0.19327 10.3885 0.146841 10.3368Z"
              />
            </svg>
          </div>
        </div>
      </Link>
      <div
        className={classNames(
          "absolute z-[15] top-0 right-0 left-[310px] min-h-full transition grid bg-white",
          hovered ? "block" : "hidden"
        )}
      >
        <CatalogItemMasonry catalog={catalog} setHovered={setHovered} />
      </div>
    </li>
  );
}

export default CatalogItem;
