"use client";

import { useSearchParams } from "next/navigation";
import GridProductCards from "../../cards/grid-product-cards";
import ListProductCards from "../../cards/list-product-cards";
import { Product } from "@/src/api/products";

interface Props {
  list: Product[];
}

function ProductList({ list }: Props) {
  const searchParams = useSearchParams();
  return (
    <div>
      {searchParams.get("view") === "LIST" ? (
        <ListProductCards data={list} />
      ) : (
        <GridProductCards data={list} />
      )}
    </div>
  );
}

export default ProductList;
