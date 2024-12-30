"use client";

import { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import IconButton from "@/src/components/shared/icon-button";
import BasketCard from "./card";
import Button from "@/src/components/shared/button";
import EmptyBasket from "./empty";
import Link from "next/link";
import OrderModal from "@/src/modules/order/components/modal";
import { useBasketStore } from "@/src/stores/basket";
import { Product } from "@/src/api/products";
import { MultipleResponse } from "@/src/types/api";
import React from "react";
import { usePathname } from "next/navigation";

interface BasketSidebarProps {
  isMobile?: boolean;
}

const fetchProducts = async ({ basket }: { basket: number[] }) => {
  const searchParams = new URLSearchParams();
  if (basket.length === 0) {
    return {
      count: 0,
      next: "",
      prev: "",
      results: [],
    };
  }
  basket.forEach((item) => {
    searchParams.append("id", `${item}`);
  });
  const response = await fetch(
    `${
      process.env.NEXT_PUBLIC_BASE_URL
    }/marketplace/products/?${searchParams.toString()}`,
    { cache: "no-cache" }
  );

  return (await response.json()) as MultipleResponse<Product>;
};

function BasketSidebar({ isMobile }: BasketSidebarProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const [products, setProducts] = useState<Product[]>([]);
  const { basket, getTotalCount, removeBasket } = useBasketStore();
  useEffect(() => {
    fetchProducts({
      basket: Array.from(basket, ([_, value]) => value.id),
    }).then((data) => {
      setProducts(data.results);
      const productIds = data.results.map((item) => item.id);
      basket.forEach((item) => {
        if (!productIds.includes(item.id)) {
          removeBasket(item.id);
        }
      });
    });
  }, [basket.size]);

  const totalPrice = products.reduce(
    (acc, value) =>
      (acc +=
        (value.sale_price || value.price) * (basket.get(value.id)?.count ?? 0)),
    0
  );

  const badge = getTotalCount();

  return (
    <>
      <IconButton.Basket
        isMobile={isMobile}
        onClick={() => setOpen(true)}
        badge={pathname === "/basket" ? 0 : badge}
        isActive={pathname === "/basket"}
      />
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 overflow-hidden z-[10000]"
          onClose={setOpen}
        >
          <div className="absolute inset-0 overflow-hidden">
            <Transition.Child
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-200 sm:duration-300"
                enterFrom="translate-x-full"
                enterTo="-translate-x-0"
                leave="transform transition ease-in-out duration-200 sm:duration-300"
                leaveFrom="-translate-x-0"
                leaveTo="translate-x-full"
              >
                <div className="w-screen max-w-[400px]">
                  <div className="h-full flex flex-col bg-white overflow-y-hidden">
                    <div className="px-7 py-5 border-b border-stroke sticky top-0">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-xl font-bold">
                          Корзина
                        </Dialog.Title>
                        <div className="ml-3 h-7 flex items-center">
                          <IconButton.Close
                            color="#191C1F"
                            onClick={() => setOpen(false)}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="relative flex-1 px-4 sm:px-6 overflow-y-auto">
                      {products.length === 0 ? (
                        <EmptyBasket />
                      ) : (
                        <ul className="py-5 gap-2.5 grid">
                          {products.map((item) => (
                            <React.Fragment key={item.id}>
                              {basket.has(item.id) && <BasketCard {...item} />}
                            </React.Fragment>
                          ))}
                        </ul>
                      )}
                    </div>
                    {basket.size > 0 && (
                      <div className="sticky bottom-0 py-5 px-5 border-t border-stroke gap-2.5 grid">
                        <div className="flex justify-end">
                          <button className="text-sm text-[#808080]">
                            Очистить корзину
                          </button>
                        </div>
                        <div className="flex justify-between items-center">
                          <p className="font-bold text-lg">Итого</p>
                          <p className="font-bold text-lg">{totalPrice}с</p>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-2">
                          <Link href="/basket" className="grid">
                            <Button
                              variant="outlined"
                              color="secondary"
                              onClick={() => setOpen(false)}
                            >
                              Перейти в корзину
                            </Button>
                          </Link>
                          <OrderModal type="one_click" />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}

export default BasketSidebar;
