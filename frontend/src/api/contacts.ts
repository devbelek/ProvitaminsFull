import { MultipleResponse } from "../types/api";

export interface Contacts {
  id: number;
  socials: {
    id: number;
    icon: string;
    link: string;
  }[];
  phone: string;
  phone2: string;
  email: string;
  address: string;
  address_extra: string;
  work_time: string;
  instagram_image: string;
  instagram_link: string;
}

export async function getContacts() {
  const response = await fetch(`${process.env.BASE_URL}/contents/contacts/`, {
    cache: "no-cache",
  });

  const data = (await response.json()) as MultipleResponse<Contacts>;
  return data.results[0];
}
