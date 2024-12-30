import React from "react";
import classNames from "classnames";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isActive?: boolean;
}

function Menu({ isActive, ...props }: Props) {
  return (
    <button
      className={classNames(
        "p-2 md:p-3 rounded-lg hover:bg-main-light transition hover:stroke-main",
        isActive ? "bg-main stroke-white" : "bg-input stroke-[#2B2A29]"
      )}
      {...props}
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_432_13071)">
          <path
            d="M2.8125 9H15.1875"
            stroke="#2B2A29"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2.8125 4.5H15.1875"
            stroke="#2B2A29"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2.8125 13.5H15.1875"
            stroke="#2B2A29"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_432_13071">
            <rect width="18" height="18" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </button>
  );
}

export default Menu;
