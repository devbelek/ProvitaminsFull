"use client";

import Image from "next/image";
import FooterMobileNavigation from "./navigation";
import { usePathname, useSearchParams } from "next/navigation";
import classNames from "classnames";
import FooterMap from "./map";
import { Contacts } from "@/src/api/contacts";
import Link from "next/link";

interface Props {
  contacts: Contacts;
}

function Footer({ contacts }: Props) {
  const navigation = [
    {
      id: 1,
      text: "О магазине",
      image: "/images/temp/locationIcon.svg",
      link: "/about",
    },
    {
      id: 2,
      text: "Как заказать",
      image: "/images/temp/mailIcon.svg",
      link: "/instruction",
    },
    {
      id: 3,
      text: "Доставка и оплата",
      image: "/images/temp/mailIcon.svg",
      link: "/delivery",
    },
    {
      id: 4,
      image: "/images/temp/phoneIcon.svg",
      link: "/sales",
      text: "Акции",
    },
    {
      id: 5,
      image: "/images/temp/phoneIcon.svg",
      link: "/posts",
      text: "Полезное",
    },
    {
      id: 6,
      link: "/contacts",
      text: "Контакты",
    },
  ];

  const pathname = usePathname();
  const searchParams = useSearchParams();

  const subcategory = searchParams.get("subcategory");
  const isFiltersOpened = searchParams.get("filters") === "true";

  const withoutFooter =
    pathname === "/catalog" && (!subcategory || isFiltersOpened);

  return (
    <>
      <footer className={classNames(withoutFooter && "hidden lg:block")}>
        <div className="bg-footer pt-20 text-text-light">
          <div className="container pb-16">
            <div className="flex flex-col w-full xl:flex-row justify-between gap-20">
              <div className="flex flex-col items-center xl:items-start gap-16 w-full">
                <div className="grid xl:flex sm:justify-center xl:justify-start gap-10 xl:gap-20 w-full">
                  <div className="flex flex-col gap-7 items-center">
                    <Link href="/">
                      <div className="w-[283px] aspect-[283/143] relative">
                        <Image
                          src="/images/global/logo/footer.svg"
                          sizes="100%"
                          fill
                          priority
                          alt="phone"
                        />
                      </div>
                    </Link>
                    <ul className="flex gap-2 items-center w-full sm:w-auto">
                      {contacts.socials.map(({ id, icon, link }) => (
                        <li key={id}>
                          <a
                            href={link}
                            className="block relative w-8 aspect-square"
                          >
                            <Image src={icon} alt="social" fill sizes="100%" />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="grid gap-5">
                    <h4 className="text-[20px] leading-6 font-bold">
                      Контакты
                    </h4>
                    <ul className="flex flex-col gap-4">
                      <li className="hover:text-main">
                        <a
                          href={`tel:${contacts.phone}`}
                          className="flex items-center gap-2"
                        >
                          <div className="relative w-[36px] min-w-[36px] max-w-[36px] aspect-square">
                            <Image
                              src="/images/global/contacts/phone.svg"
                              alt="social"
                              fill
                              sizes="100%"
                              priority
                            />
                          </div>
                          <p>{contacts.phone}</p>
                        </a>
                      </li>
                      <li className="hover:text-main">
                        <a
                          href={`tel:${contacts.phone2}`}
                          className="flex items-center gap-2"
                        >
                          <div className="relative w-[36px] min-w-[36px] max-w-[36px] aspect-square">
                            <Image
                              src="/images/global/contacts/phone.svg"
                              alt="social"
                              fill
                              sizes="100%"
                              priority
                            />
                          </div>
                          <p>{contacts.phone2}</p>
                        </a>
                      </li>
                      <li className="hover:text-main">
                        <a href={`#`} className="flex items-center gap-2">
                          <div className="relative w-[36px] min-w-[36px] max-w-[36px] aspect-square">
                            <Image
                              src="/images/global/contacts/location.svg"
                              alt="social"
                              fill
                              sizes="100%"
                              priority
                            />
                          </div>
                          <p>{contacts.address}</p>
                        </a>
                      </li>
                      {contacts.address_extra ? (
                        <li className="hover:text-main">
                          <a href={`#`} className="flex items-center gap-2">
                            <div className="relative w-[36px] min-w-[36px] max-w-[36px] aspect-square">
                              <Image
                                src="/images/global/contacts/location.svg"
                                alt="social"
                                fill
                                sizes="100%"
                                priority
                              />
                            </div>
                            <p>{contacts.address_extra}</p>
                          </a>
                        </li>
                      ) : (
                        ""
                      )}

                      <li className="hover:text-main">
                        <a
                          href={`mailto:${contacts.email}`}
                          className="flex items-center gap-2"
                        >
                          <div className="relative w-[36px] min-w-[36px] max-w-[36px] aspect-square">
                            <Image
                              src="/images/global/contacts/mail.svg"
                              alt="social"
                              fill
                              sizes="100%"
                              priority
                            />
                          </div>
                          <p>{contacts.email}</p>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="grid gap-4">
                    <h4 className="text-[20px] leading-6 font-bold">Меню</h4>
                    <ul className="flex flex-col gap-5">
                      {navigation.map(({ id, link, text }) => (
                        <li key={id}>
                          <a
                            href={link}
                            className="flex items-center gap-2 hover:text-main text-nowrap"
                          >
                            <p>{text}</p>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="flex w-full">
                  <FooterMap />
                </div>
              </div>
              <div className="w-auto flex flex-col items-center gap-4">
                <p className="text-[20px] leading-6 font-bold">Наш Instagram</p>
                <a href={contacts.instagram_link} target="_blank">
                  <div className="w-[215px] aspect-[215/468] relative">
                    <Image
                      src={contacts.instagram_image}
                      sizes="100%"
                      fill
                      priority
                      alt="phone"
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-stroke">
            <div className="container py-2.5">
              <div className="flex justify-between items-center gap-4 sm:text-base flex-wrap">
                <p className="text-xs">© Права защищены PROVITAMINS 2024</p>
                <a
                  href="https://astudio.kg"
                  target="_blank"
                  className="w-32 relative aspect-[195/50] block"
                >
                  <Image
                    src="/images/global/logo/remotion.svg"
                    alt="remotion"
                    fill
                    priority
                    sizes="100%"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="sticky bottom-0 z-20 lg:hidden">
        <FooterMobileNavigation />
      </div>
    </>
  );
}

export default Footer;
