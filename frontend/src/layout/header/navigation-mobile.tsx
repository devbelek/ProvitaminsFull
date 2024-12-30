"use client";

import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import IconButton from "@/src/components/shared/icon-button";
import Link from "next/link";
import Image from "next/image";
import { Contacts } from "@/src/api/contacts";

const links = [
  {
    id: 1,
    title: "О магазине",
    href: "/about",
  },
  {
    id: 2,
    title: "Как заказать",
    href: "/instruction",
  },
  {
    id: 3,
    title: "Доставка и оплата",
    href: "/delivery",
  },
  {
    id: 4,
    title: "Акции",
    href: "/sales",
  },
  {
    id: 5,
    title: "Полезное",
    href: "/posts",
  },
  {
    id: 6,
    title: "Контакты",
    href: "/contacts",
  },
];

interface Props {
  contacts: Contacts;
}

function MobileNavbar({ contacts }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <IconButton.Menu onClick={() => setOpen(true)} />
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 overflow-hidden z-30"
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

            <div className="fixed inset-y-0 left-0 pr-10 max-w-full flex">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-200 sm:duration-300"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-200 sm:duration-300"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <div className="w-screen max-w-[290px]">
                  <div className="h-full flex flex-col py-6 bg-main overflow-y-auto">
                    <div className="px-4 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title></Dialog.Title>
                        <div className="ml-3 h-7 flex items-center">
                          <IconButton.Close onClick={() => setOpen(false)} />
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 relative flex-1 px-4 sm:px-6">
                      <div className="h-full flex flex-col justify-between">
                        <ul className="grid gap-4 font-normal">
                          {links.map(({ id, href, title }) => (
                            <li key={id} className="text-text-light">
                              <Link href={href} onClick={() => setOpen(false)}>
                                {title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                        <div className="grid gap-4">
                          <div className="grid gap-1.5 flex-1 text-white">
                            <a href={`tel:${contacts.phone}`} className="block">
                              {contacts.phone}
                            </a>
                          </div>
                          <div className="grid gap-1.5 flex-1 text-white">
                            {contacts.address}
                          </div>
                          <ul className="flex gap-2 items-center">
                            {contacts.socials.map(({ id, icon, link }) => (
                              <li key={id}>
                                <a
                                  href={link}
                                  className="block relative w-8 aspect-square"
                                >
                                  <Image
                                    src={icon}
                                    alt="social"
                                    fill
                                    sizes="100%"
                                    priority
                                  />
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
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

export default MobileNavbar;
