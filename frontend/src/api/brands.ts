import { Brand } from "../components/widgets/filters/brands";
import { MultipleResponse } from "../types/api";

export async function getBrands() {
  const response = await fetch(
    `${process.env.BASE_URL}/marketplace/brands/?limit=1000`,
    { cache: "no-cache" }
  );

  return (await response.json()) as MultipleResponse<Brand>;
}
