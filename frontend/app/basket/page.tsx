import BasketPage from "@/src/screens/basket";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Корзина",
};

function Page() {
  return <BasketPage />;
}

export default Page;
