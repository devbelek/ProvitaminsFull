"use client";

import IconButton from "@/src/components/shared/icon-button";
import Image from "next/image";
import Link from "next/link";
import Navigation from "./navigation";
import MobileNavbar from "./navigation-mobile";
import Ticker from "./ticker";
import BasketSidebar from "@/src/modules/basket/components/sidebar";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Contacts } from "@/src/api/contacts";
import { useFavoritesStore } from "@/src/stores/favorites";

interface Props {
  contacts: Contacts;
}

function Header({ contacts }: Props) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  const catalog = searchParams.get("catalog");
  const category = searchParams.get("category");
  const catalogue = searchParams.get("catalogue");

  const title = searchParams.get("name");

  const { favorites } = useFavoritesStore();

  const withBack =
    (pathname === "/catalog" && catalog) ||
    (pathname === "/catalog" && category) ||
    (pathname === "/catalog" && catalogue);

  return (
    <header className="border-b border-stroke shadow-sm">
      <Ticker />
      <div className="container">
        <div className="flex lg:hidden justify-between items-center py-2.5">
          <div className="flex-1">
            {withBack ? (
              <IconButton.Back onClick={() => router.back()} />
            ) : (
              <MobileNavbar contacts={contacts} />
            )}
          </div>
          <div className="flex-1 flex justify-center text-center">
            {pathname.startsWith("/catalog") ? (
              <p className="font-semibold">{withBack ? title : "Каталог"}</p>
            ) : pathname.startsWith("/basket") ? (
              <p className="font-semibold">{"Корзина"}</p>
            ) : pathname.startsWith("/products") ? (
              <p className="font-semibold">Витамины</p>
            ) : pathname.startsWith("/posts") ? (
              <p className="font-semibold">Полезное</p>
            ) : pathname.startsWith("/favorites") ? (
              <p className="font-semibold">Избранное</p>
            ) : pathname.startsWith("/search") ? (
              <p className="font-semibold">Поиск</p>
            ) : (
              <Link href={"/"}>
                <div className="relative aspect-[228/55] h-9">
                  <Image
                    src="/images/global/logo/header.svg"
                    alt="logo"
                    fill
                    sizes="full"
                    priority
                  />
                </div>
              </Link>
            )}
          </div>
          <div className="flex-1 flex items-center justify-end gap-3"></div>
        </div>
        <div className="hidden lg:grid grid-cols-3 py-2.5">
          <div className="grid gap-1.5">
            <a href={`tel:${contacts.phone}`} className="block">
              {contacts.phone}
            </a>
            <a className="block">{contacts.address}</a>
            {contacts.address_extra ? (
              <a className="block">{contacts.address_extra}</a>
            ) : (
              ""
            )}
            <a className="block">{contacts.work_time}</a>
            <ul className="flex gap-2 items-center">
              {contacts.socials.map(({ id, icon, link }) => (
                <li key={id}>
                  <a href={link} className="block relative w-8 aspect-square">
                    <Image src={icon} alt="social" fill sizes="100%" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-center items-center">
            <Link href={"/"}>
              <div className="relative aspect-[228/55] h-[55px]">
                <Image
                  src="/images/global/logo/header.svg"
                  alt="logo"
                  fill
                  sizes="full"
                />
              </div>
            </Link>
          </div>
          <div className="flex items-center justify-end gap-3">
            <Link href="/favorites">
              <IconButton.Favorite size="lg" isActive={favorites.size > 0} />
            </Link>
            <BasketSidebar />
          </div>
        </div>
      </div>
      <Navigation />
    </header>
  );
}

export default Header;
