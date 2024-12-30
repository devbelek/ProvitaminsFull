import { MultipleResponse } from "../types/api";

export interface Banner {
  id: number;
  images: {
    id: number;
    image: string;
    link: string;
  };
}

export async function getBanner() {
  const response = await fetch(`${process.env.BASE_URL}/contents/banner/`, {
    cache: "no-cache",
  });
  const banners = (await response.json()) as MultipleResponse<Banner>;
  return banners.results[0].images as unknown as {
    id: number;
    image: string;
    link: string;
  }[];
}
