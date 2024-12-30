import classNames from "classnames";
import React from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isActive?: boolean;
  size?: "lg" | "md";
  variant?: "outlined" | "contained";
}

function Favorite({
  isActive,
  size = "md",
  variant = "contained",
  ...props
}: Props) {
  if (variant === "outlined") {
    return (
      <button
        className={classNames(
          "w-11 aspect-square rounded-lg border border-main flex justify-center items-center hover:bg-main-light hover:stroke-main transition",
          isActive ? "bg-main stroke-white" : "stroke-main"
        )}
        {...props}
      >
        <svg
          width="20"
          height="18"
          viewBox="0 0 20 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.99384 2.91615C8.19442 0.819134 5.19377 0.255042 2.93923 2.17528C0.68468 4.09552 0.367271 7.30607 2.13778 9.57714C3.60984 11.4654 8.06479 15.4478 9.52489 16.7368C9.68824 16.881 9.76992 16.9531 9.86519 16.9815C9.94834 17.0062 10.0393 17.0062 10.1225 16.9815C10.2178 16.9531 10.2994 16.881 10.4628 16.7368C11.9229 15.4478 16.3778 11.4654 17.8499 9.57714C19.6204 7.30607 19.3417 4.07532 17.0484 2.17528C14.7551 0.275241 11.7933 0.819134 9.99384 2.91615Z"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    );
  }
  return (
    <button
      className={classNames(
        "rounded-lg hover:bg-main-light transition hover:stroke-main",
        isActive ? "bg-main stroke-white" : "bg-input stroke-[#2B2A29]",
        size === "lg" && "p-3",
        size === "md" && "p-2"
      )}
      {...props}
    >
      <svg
        width="15"
        height="14"
        viewBox="0 0 15 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.49538 2.43711C6.14581 0.86435 3.89533 0.441282 2.20442 1.88146C0.51351 3.32164 0.275453 5.72955 1.60333 7.43286C2.70738 8.84904 6.0486 11.8359 7.14367 12.8026C7.26618 12.9108 7.32744 12.9648 7.39889 12.9861C7.46126 13.0046 7.5295 13.0046 7.59186 12.9861C7.66331 12.9648 7.72457 12.9108 7.84709 12.8026C8.94216 11.8359 12.2834 8.84904 13.3874 7.43286C14.7153 5.72955 14.5063 3.30649 12.7863 1.88146C11.0664 0.456431 8.84494 0.86435 7.49538 2.43711Z"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

export default Favorite;
