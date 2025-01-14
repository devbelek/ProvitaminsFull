import { CatalogPageProps } from "../screens/catalog/desktop";
import { MultipleResponse } from "../types/api";

interface SearchParams {
  [key: string]: string | string[] | undefined;
}

export interface Catalog {
  id: number;
  name: string;
  icon: string;
  children: Category[];
}

export interface Category {
  id: number;
  name: string;
  catalogue: number;
  children: SubCategory[];
}

export interface SubCategory {
  id: number;
  name: string;
  catalogue: number;
}

export async function getCatalogs() {
  const response = await fetch(
    `${process.env.BASE_URL}/marketplace/tree_catalogues/?limit=100`,
    { cache: "no-cache" }
  );

  return (await response.json()) as MultipleResponse<Catalog>;
}

export async function getCategories({ searchParams }: CatalogPageProps) {
  const params = new URLSearchParams();
  params.set("limit", "1000");
  const response = await fetch(
    `${process.env.BASE_URL}/marketplace/tree_catalogues?${params}`,
    { cache: "no-cache" }
  );
  const data = (await response.json()) as MultipleResponse<Catalog>;
  const categories =
    (params &&
      data.results.find((item) => item.id.toString() === searchParams.catalog)
        ?.children) ||
    [];

  return categories;
}

export async function getCatalog({ id }: { id: number }) {
  const response = await fetch(
    `${process.env.BASE_URL}/marketplace/catalogues/${id}/`,
    { cache: "no-cache" }
  );

  return (await response.json()) as Catalog;
}

export async function getCategory({ id }: { id: number }) {
  const response = await fetch(
    `${process.env.BASE_URL}/marketplace/categories/${id}/`,
    { cache: "no-cache" }
  );

  return (await response.json()) as Category;
}
