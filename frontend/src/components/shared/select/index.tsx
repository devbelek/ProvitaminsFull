"use client";

import React from "react";
import { Listbox, Transition } from "@headlessui/react";
import classNames from "classnames";

type Nullable<T> = T | null;

interface Props {
  value?: Option;
  onChange: (value: Option) => void;
  options: Option[];
  placeholder?: string;
  title?: string;
  error?: string;
  disabled?: boolean;
}

export type Option = Nullable<{
  value: number | string;
  title: string;
}>;

export default function Select({
  value,
  onChange,
  placeholder,
  options,
  title,
  error,
  disabled,
}: Props) {
  return (
    <div className="w-full relative z-[11]">
      <Listbox value={value} onChange={onChange}>
        {({ open }) => (
          <>
            {title && (
              <p className="text-sm font-semibold lg:text-base">{title}</p>
            )}
            <Listbox.Button
              className={classNames(
                "p-2.5 xl:p-3 border rounded-[5px] w-full flex justify-between gap-4 items-center text-sm",
                open ? "border-main" : "border-stroke",
                disabled && "cursor-default"
              )}
              aria-disabled={disabled}
            >
              <p className="line-clamp-1 max-w-full text-start">
                {value ? (
                  value.title
                ) : (
                  <span className="text-[#B3B6BA]">{placeholder}</span>
                )}
              </p>
              {!disabled && (
                <div>
                  <svg
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={classNames(
                      `${
                        open ? "rotate-0" : "rotate-180"
                      } transition aspect-square`
                    )}
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.83681 5.35316C9.78521 5.39971 9.72392 5.43664 9.65644 5.46183C9.58895 5.48703 9.51661 5.5 9.44355 5.5C9.37048 5.5 9.29814 5.48703 9.23066 5.46183C9.16317 5.43664 9.10188 5.39971 9.05028 5.35316L4.99985 1.70746L0.94943 5.35316C0.845128 5.44701 0.703667 5.49974 0.556163 5.49974C0.408659 5.49974 0.267196 5.44701 0.162895 5.35316C0.0585947 5.25931 0 5.13201 0 4.99929C0 4.86656 0.0585947 4.73926 0.162895 4.64541L4.60659 0.646841C4.65819 0.600295 4.71948 0.563365 4.78696 0.538167C4.85445 0.51297 4.92679 0.5 4.99985 0.5C5.07292 0.5 5.14526 0.51297 5.21274 0.538167C5.28023 0.563365 5.34152 0.600295 5.39312 0.646841L9.83681 4.64541C9.88854 4.69184 9.92958 4.747 9.95758 4.80772C9.98559 4.86844 10 4.93354 10 4.99929C10 5.06503 9.98559 5.13013 9.95758 5.19085C9.92958 5.25157 9.88854 5.30673 9.83681 5.35316Z"
                      fill="#2B2A29"
                    />
                  </svg>
                </div>
              )}
            </Listbox.Button>
            {options?.length > 0 && (
              <div className="relative z-10">
                <Transition
                  enter="transition duration-100 ease-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-100 opacity-100"
                  leave="transition duration-75 ease-out"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                >
                  <Listbox.Options className="p-3 xl:p-5 grid gap-2.5 xl:gap-4 border border-stroke rounded-[5px] absolute top-[calc(100%+4px)] left-0 w-full bg-white">
                    {options.map((option) => (
                      <Listbox.Option
                        key={option?.value}
                        value={option}
                        className={classNames(
                          "cursor-pointer hover:text-main text-sm",
                          option?.value === value?.value && "text-main"
                        )}
                      >
                        {option?.title}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            )}
          </>
        )}
      </Listbox>
      {error && <p className="mt-1 text-red-500 text-sm">{error}</p>}
    </div>
  );
}
