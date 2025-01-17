import { convertObjectToSearchParams } from "../helpers/convertToSearchParams";
import { MultipleResponse } from "../types/api";

interface SearchParams {
  [key: string]: string | string[] | undefined;
}

export interface ProductReview {
  id: number;
  date_created: string;
  full_name: string;
  review: string;
  rating: number;
  is_allow: boolean;
  product: number;
}

export interface Variation {
  id: number;
  flavor: string;
  dosage: string;
  quantity: string;
  in_stock: boolean;
  price: number;
}

export interface Product {
  id: number;
  category_name: string;
  catalogue_name: string;
  catalogue_id: number;
  brand_name: string;
  form_name: string;
  country_name: string;
  name: string;
  description: string;
  price: number;
  sale_price: number;
  status: "in_stock" | "out_of_stock";
  is_hit: boolean;
  is_sale: boolean;
  is_recommend: boolean;
  quantity: string;
  vendor_code: string;
  rating: null | number;
  category_id: number;
  sub_category_id: number;
  sub_category_name: string;
  brand: number;
  manufacturer_country: number;
  form: number;
  variations: {
    current: Variation;
    available_variations: Variation[];
  };
  images: {
    id: number;
    image: string;
  }[];
}

export async function getProducts({ params }: { params?: SearchParams }) {
  const searchParams = convertObjectToSearchParams(params);
  const response = await fetch(
    `${process.env.BASE_URL}/marketplace/products?${searchParams.toString()}`,
    { cache: "no-cache" }
  );

  return (await response.json()) as MultipleResponse<Product>;
}

export async function createProductReview({
  body,
}: {
  body: {
    full_name: string;
    review: string;
    rating: number;
    product: number;
  };
}) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/marketplace/product_reviews/?limit=1000`,
    {
      cache: "no-cache",
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    }
  );

  return await response.json();
}

export async function getProductReviews({ id }: { id: string }) {
  const response = await fetch(
    `${process.env.BASE_URL}/marketplace/product_reviews?product=${id}&limit=1000`,
    { cache: "no-cache" }
  );

  return (await response.json()) as MultipleResponse<ProductReview>;
}

export async function getProduct({
  id,
  params,
}: {
  id: number;
  params?: SearchParams;
}) {
  const searchParams = convertObjectToSearchParams(params);
  const response = await fetch(
    `${
      process.env.BASE_URL
    }/marketplace/products/${id}/?${searchParams.toString()}`,
    { cache: "no-cache" }
  );

  return (await response.json()) as Product;
}

export async function getSimilarProducts({ id }: { id: number }) {
  const response = await fetch(
    `${process.env.BASE_URL}/marketplace/products/${id}/similar/?limit=1000`,
    { cache: "no-cache" }
  );

  return (await response.json()) as MultipleResponse<Product>;
}
