import { MultipleResponse } from "../types/api";

export interface DeliveryWay {
  id: number;
  title: string;
  icon: string;
  description: string;
}

export interface PaymentInfo {
  description: string;
}

export interface Requisite {
  id: number;
  bank_name: string;
  text: string;
  owner_name: string;
}

export async function getDeliveryWays() {
  const response = await fetch(
    `${process.env.BASE_URL}/contents/deliveries/?limit=1000`,
    { cache: "no-cache" }
  );

  return (await response.json()) as MultipleResponse<DeliveryWay>;
}

export async function getRequisites() {
  const response = await fetch(
    `${process.env.BASE_URL}/contents/requisites/?limit=1000`,
    { cache: "no-cache" }
  );

  return (await response.json()) as MultipleResponse<Requisite>;
}

export async function getPaymentInfo() {
  const response = await fetch(`${process.env.BASE_URL}/contents/info_blocks/`,
  { cache: "no-cache" });

  return (await response.json()) as PaymentInfo;
}
