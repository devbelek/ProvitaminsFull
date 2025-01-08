"use server";

import { redirect } from "next/navigation";

export const updateCatalogFilters = (searchParams: string) => {
  redirect(`/catalog?${searchParams}`);
};
