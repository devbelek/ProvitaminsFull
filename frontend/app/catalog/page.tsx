import CatalogPage from "@/src/screens/catalog";
import { CatalogPageProps } from "@/src/screens/catalog/desktop";

export default function Catalog({ searchParams }: CatalogPageProps) {
  return <CatalogPage searchParams={searchParams} />;
}
