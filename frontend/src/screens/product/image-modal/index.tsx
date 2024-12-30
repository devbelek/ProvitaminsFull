"use client";

import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import Carousel from "./carousel";
import Image from "next/image";
import { isMobile, isDesktop } from "react-device-detect";

interface Props {
  images: string[];
  activeIndex: number;
  setActiveIndex: (index: number) => void;
}

export default function ImageModal({ images, activeIndex }: Props) {
  let [isOpen, setIsOpen] = useState<boolean>(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <MainImage image={images[activeIndex]} openModal={openModal} />

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-[10000]" onClose={closeModal}>
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
            <div className="flex min-h-full items-center justify-center p-6 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-200"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="max-w-[740px] min-w-[300px] transform rounded-[10px] bg-white p-4 lg:p-8 text-left align-middle shadow-xl">
                  <Carousel images={images} activeIndex={activeIndex} />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

function MainImage({
  image,
  openModal,
}: {
  image: string;
  openModal: () => void;
}) {
  //   const [scale, setScale] = useState<number>(1);
  //   const [originX, setOriginX] = useState<number>(50);
  //   const [originY, setOriginY] = useState<number>(50);
  //   const handleZoom = (
  //     event: React.MouseEvent<HTMLImageElement, MouseEvent>
  //   ) => {
  //     const img = event.currentTarget;
  //     const rect = img.getBoundingClientRect();
  //     const x = ((event.clientX - rect.left) / rect.width) * 100;
  //     const y = ((event.clientY - rect.top) / rect.height) * 100;
  //     setOriginX(x);
  //     setOriginY(y);
  //     setScale(scale === 1 ? 2 : 1); // Toggle scale between 1 and 2
  return (
    <div className="w-[250px] aspect-square relative cursor-pointer">
      <Image
        src={image}
        fill
        priority
        sizes="full"
        alt="product"
        // className={classNames(
        //   scale === 1 ? "cursor-zoom-in" : "cursor-zoom-out"
        // )}
        // style={{
        //   transformOrigin: `${originX}% ${originY}%`,
        //   transform: `scale(${scale})`,
        // }}
        onClick={openModal}
      />
    </div>
  );
}
