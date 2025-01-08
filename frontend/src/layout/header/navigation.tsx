import Input from "@/src/components/shared/input";
import classNames from "classnames";
import Link from "next/link";

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

function Navigation() {
  return (
    <nav className="hidden lg:block bg-main py-6">
      <div className="container">
        <div className="flex justify-between items-center">
          <ul className="flex items-center gap-8 2xl:gap-12">
            {links.map(({ id, href, title }) => (
              <li key={id} className="relative">
                <Link
                  href={href}
                  className={classNames(
                    "text-text-light 2xl:text-lg hover:text-main-200 hover:underline underline-offset-8 decoration-2 before:scale-75 before:absolute before:left-[50%] before:translate-x-[-50%] before:bottom-4 before:mx-auto hover:before:content-[url(/images/global/common/navigation-hover.svg)]"
                  )}
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
          <div className="w-full max-w-[300px]">
            <Input.Search />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
