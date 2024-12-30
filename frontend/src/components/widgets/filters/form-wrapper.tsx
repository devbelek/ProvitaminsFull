"use client";

import { Disclosure, Transition } from "@headlessui/react";
import classNames from "classnames";

export default function FormWrapper({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="">
      <Disclosure defaultOpen>
        {({ open }) => (
          <div>
            <Disclosure.Button className="flex justify-between w-full items-center gap-4">
              <div className="font-semibold text-start text-wrap">{title}</div>
              <svg
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={classNames(
                  open ? "rotate-0" : "rotate-180",
                  "transition"
                )}
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.83681 5.35316C9.78521 5.39971 9.72392 5.43664 9.65644 5.46183C9.58895 5.48703 9.51661 5.5 9.44355 5.5C9.37048 5.5 9.29814 5.48703 9.23066 5.46183C9.16317 5.43664 9.10188 5.39971 9.05028 5.35316L4.99985 1.70746L0.94943 5.35316C0.845128 5.44701 0.703667 5.49974 0.556163 5.49974C0.408659 5.49974 0.267196 5.44701 0.162895 5.35316C0.0585947 5.25931 0 5.13201 0 4.99929C0 4.86656 0.0585947 4.73926 0.162895 4.64541L4.60659 0.646841C4.65819 0.600295 4.71948 0.563365 4.78696 0.538167C4.85445 0.51297 4.92679 0.5 4.99985 0.5C5.07292 0.5 5.14526 0.51297 5.21274 0.538167C5.28023 0.563365 5.34152 0.600295 5.39312 0.646841L9.83681 4.64541C9.88854 4.69184 9.92958 4.747 9.95758 4.80772C9.98559 4.86844 10 4.93354 10 4.99929C10 5.06503 9.98559 5.13013 9.95758 5.19085C9.92958 5.25157 9.88854 5.30673 9.83681 5.35316Z"
                  fill="#2B2A29"
                />
              </svg>
            </Disclosure.Button>
            <Transition
              show={open}
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Disclosure.Panel static className="mt-5">
                <div>{children}</div>
              </Disclosure.Panel>
            </Transition>
          </div>
        )}
      </Disclosure>
    </div>
  );
}
