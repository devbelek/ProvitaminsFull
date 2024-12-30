import { MultipleResponse } from "../types/api";

type Info = {
  id: number;
  description: string;
  image: string;
};

export async function getInfo() {
  const response = await fetch(
    `${process.env.BASE_URL}/contents/info_blocks/`,
    { cache: "no-cache" }
  );

  return (await response.json()) as MultipleResponse<Info>;
}
