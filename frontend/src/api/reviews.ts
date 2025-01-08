import { MultipleResponse } from "../types/api";

export interface Review {
  id: number;
  full_name: string;
  icon: string;
  review: string;
  rating: number;
}

export async function getReviews() {
  const response = await fetch(
    `${process.env.BASE_URL}/contents/reviews/?limit=1000`,
    {
      cache: "no-cache",
    }
  );

  return (await response.json()) as MultipleResponse<Review>;
}
