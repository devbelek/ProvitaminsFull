import { ProductForm } from "../components/widgets/filters/product-form";
import { MultipleResponse } from "../types/api";

export async function getProductForms() {
  const response = await fetch(
    `${process.env.BASE_URL}/marketplace/forms/?limit=1000`,
    { cache: "no-cache" }
  );

  return (await response.json()) as MultipleResponse<ProductForm>;
}
