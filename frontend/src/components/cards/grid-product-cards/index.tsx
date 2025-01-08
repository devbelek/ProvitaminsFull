import { Product } from "@/src/api/products";
import GridProductCard from "./item";

function GridProductCards({ data }: { data: Product[] }) {
  return (
    <ul className="grid xs:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-2.5 sm:gap-5 mb-10">
      {data.map((item) => (
        <GridProductCard key={item.id} {...item} />
      ))}
    </ul>
  );
}

export default GridProductCards;
