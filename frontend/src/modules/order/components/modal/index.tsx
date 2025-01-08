"use client";

import Button from "@/src/components/shared/button";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useCallback, useState } from "react";
import CreateOrderForm from "./form";
import IconButton from "@/src/components/shared/icon-button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useBasketStore } from "@/src/stores/basket";

interface Props {
  type?: "default" | "one_click";
}

export default function OrderModal({ type = "default" }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSuccessMessage, setIsSuccessMessage] = useState<boolean>(false);
  const { clear } = useBasketStore();

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const onSubmit = useCallback(() => {
    setIsOpen(false);
    setIsSuccessMessage(true);
  }, []);

  function closeSuccessMessage() {
    clear();
    setIsSuccessMessage(false);
  }

  const router = useRouter();

  return (
    <>
      <Button color="secondary" onClick={openModal}>
        {type === "default" ? "Оформить заказ" : "Купить в 1 клик"}
      </Button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-[10000]" onClose={() => {}}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="p-[30px] rounded-[10px] w-full bg-white max-w-[600px] grid gap-3">
                  <div className="flex items-center justify-between gap-4">
                    <Dialog.Title as="h3" className="font-semibold text-xl">
                      Оформить заказ
                    </Dialog.Title>
                    <IconButton.Close color="#808080" onClick={closeModal} />
                  </div>
                  <CreateOrderForm onSubmit={onSubmit} />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

      {/* Success modal */}
      <Transition appear show={isSuccessMessage} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-[10001]"
          onClose={closeSuccessMessage}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="p-[30px] rounded-[10px] w-full bg-white max-w-[600px] grid gap-3">
                  <div>
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <Dialog.Title
                          as="h3"
                          className="font-semibold text-xl text-start"
                        >
                          Заказ оформлен
                        </Dialog.Title>
                      </div>
                      <IconButton.Close
                        type="button"
                        color="#808080"
                        onClick={closeSuccessMessage}
                      />
                    </div>
                    <p className="lg:text-lg mt-1.5 text-start">
                      Далее с Вами свяжется менеджер
                    </p>
                  </div>
                  <div className="relative w-[144px] aspect-[144/132] mx-auto my-5 sm:my-10">
                    <Image
                      src="/images/global/common/review-success.svg"
                      alt="success"
                      fill
                      sizes="full"
                    />
                  </div>
                  <div className="flex justify-end">
                    <Button
                      onClick={() => {
                        router.push("/");
                        closeSuccessMessage();
                      }}
                    >
                      На главную
                    </Button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
