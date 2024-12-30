import { Country } from "../components/widgets/filters/country";

export async function getCountries() {
  const response = await fetch(
    `${process.env.BASE_URL}/marketplace/countries/?limit=1000`,
    { cache: "no-cache" }
  );

  return (await response.json()) as Country[];
}
