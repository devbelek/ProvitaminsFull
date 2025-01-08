import { Product } from "@/src/api/products";
import ListProductCard from "./item";

function ListProductCards({ data }: { data: Product[] }) {
  return (
    <ul className="grid gap-5 mb-10">
      {data.map((item) => (
        <ListProductCard key={item.id} {...item} />
      ))}
    </ul>
  );
}

export default ListProductCards;
