import { MultipleResponse } from "../types/api";

export interface Ticker {
  id: number;
  text: string;
}

export async function getTickers() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/contents/tickers/?limit=1000`,
    { cache: "no-cache" }
  );

  return (await response.json()) as MultipleResponse<Ticker>;
}
