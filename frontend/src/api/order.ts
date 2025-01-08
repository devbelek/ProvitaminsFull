export async function createOrder({
  body,
}: {
  body: {
    full_name: string;
    phone: string;
    items: {
      product: number;
      quantity: number;
    }[];
  };
}) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/marketplace/order/`,
    {
      cache: "no-cache",
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    }
  );

  return response;
}
