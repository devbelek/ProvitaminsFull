import { getProducts } from "@/src/api/products";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const products = await getProducts({
    params: {
      limit: "1000",
    },
  });

  const plist = products.results.map((p) => ({
    url: `https://${process.env.DOMAIN_NAME}/products/${p.id}`,
  }));

  return [
    {
      url: `https://${process.env.DOMAIN_NAME}/about`,
      lastModified: new Date(),
    },
    {
      url: `https://${process.env.DOMAIN_NAME}/delivery`,
    },
    {
      url: `https://${process.env.DOMAIN_NAME}/instruction`,
    },
    ...plist,
  ];
}
