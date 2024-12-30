"use client";

import { Disclosure, Transition } from "@headlessui/react";
import classNames from "classnames";

interface Props {
  question: string;
  answer: string;
}

function FaqItem({ question, answer }: Props) {
  return (
    <Disclosure>
      {({ open }) => (
        <div
          className={classNames(
            "rounded-[10px] border",
            open ? "border-main" : "border-stroke"
          )}
        >
          <Disclosure.Button className="p-3 sm:p-5 flex justify-between w-full items-center gap-4">
            <div className="font-semibold text-start text-wrap">{question}</div>
            <div
              className={classNames(
                `${
                  open ? "bg-main" : "bg-white"
                } min-w-8 w-8 h-8 lg:w-11 lg:h-11 aspect-square rounded-full flex justify-center items-center shadow shadow-main-200`
              )}
            >
              <div>
                <svg
                  width="16"
                  height="12"
                  viewBox="0 0 16 8"
                  className={classNames(
                    open ? "fill-white -rotate-180" : "fill-main",
                    "transition aspect-square scale-75 sm:scale-100"
                  )}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.2611 0.293682C0.343656 0.200589 0.44173 0.126729 0.549703 0.0763338C0.657676 0.0259389 0.773427 0 0.890327 0C1.00723 0 1.12298 0.0259389 1.23095 0.0763338C1.33892 0.126729 1.437 0.200589 1.51955 0.293682L8.00023 7.58508L14.4809 0.293682C14.6478 0.105976 14.8741 0.000522651 15.1101 0.000522651C15.3461 0.000522651 15.5725 0.105976 15.7394 0.293682C15.9062 0.481388 16 0.735972 16 1.00143C16 1.26689 15.9062 1.52147 15.7394 1.70918L8.62946 9.70632C8.5469 9.79941 8.44883 9.87327 8.34086 9.92367C8.23288 9.97406 8.11713 10 8.00023 10C7.88333 10 7.76758 9.97406 7.65961 9.92367C7.55164 9.87327 7.45356 9.79941 7.37101 9.70632L0.2611 1.70918C0.178335 1.61632 0.11267 1.50601 0.0678664 1.38456C0.0230625 1.26311 0 1.13292 0 1.00143C0 0.869941 0.0230625 0.739747 0.0678664 0.6183C0.11267 0.496853 0.178335 0.38654 0.2611 0.293682Z"
                  />
                </svg>
              </div>
            </div>
          </Disclosure.Button>
          <Transition
            show={open}
            enter="transition duration-200 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-175 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Disclosure.Panel
              static
              className="p-3 sm:p-5 text-sm xl:text-base leading-5 border-t border-stroke"
            >
              {answer}
            </Disclosure.Panel>
          </Transition>
        </div>
      )}
    </Disclosure>
  );
}

export default FaqItem;
