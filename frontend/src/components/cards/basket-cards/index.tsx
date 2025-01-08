import { Product } from "@/src/api/products";
import BasketCard from "./item";

interface Props {
  list: Product[];
}

function BasketCards({ list }: Props) {
  return (
    <ul className="grid gap-5">
      {list.map((item) => (
        <BasketCard key={item.id} {...item} />
      ))}
    </ul>
  );
}

export default BasketCards;
