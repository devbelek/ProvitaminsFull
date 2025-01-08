import { MultipleResponse } from "../types/api";

export interface Faq {
  id: number;
  question: string;
  answer: string;
}

export async function getFaqs() {
  const response = await fetch(`${process.env.BASE_URL}/contents/faqs/?limit=1000`, {
    cache: "no-cache",
  });

  return (await response.json()) as MultipleResponse<Faq>;
}
