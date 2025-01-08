"use client";

import classNames from "classnames";

interface Props {
  readonly?: boolean;
  value: number;
  onChange?: (value: number) => void;
  size?: "md" | "lg";
}

export default function Rating({
  readonly,
  value,
  onChange,
  size = "md",
}: Props) {
  return (
    <div
      className={classNames(
        "flex items-center",
        !readonly && "gap-2 sm:gap-2.5"
      )}
    >
      {[...Array(5)].map((_, index) => (
        <label
          key={index}
          className={classNames(!readonly && "cursor-pointer")}
        >
          <input
            type="radio"
            className="sr-only"
            name="rating"
            value={index + 1}
            checked={index + 1 === value}
            onChange={() => onChange && onChange(index + 1)}
            disabled={readonly}
          />
          <svg
            className={classNames(
              "aspect-square",
              size === "md" && "w-3 sm:w-4",
              size === "lg" && "w-5"
            )}
            viewBox="0 0 16 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8 12.0553L12.944 15L11.632 9.45L16 5.71579L10.248 5.23421L8 0L5.752 5.23421L0 5.71579L4.368 9.45L3.056 15L8 12.0553Z"
              fill={value > index ? "#FF9017" : "#E6E6E6"}
            />
          </svg>
        </label>
      ))}
    </div>
  );
}
