import classNames from "classnames";
import React from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isActive?: boolean;
}

function List({ isActive, ...props }: Props) {
  return (
    <button
      className={classNames(
        "rounded hover:bg-main-light transition hover:fill-main w-10 aspect-square flex items-center justify-center",
        isActive ? "bg-main fill-white" : "bg-input fill-[#2B2A29]"
      )}
      {...props}
    >
      <svg
        width="18"
        height="10"
        viewBox="0 0 18 10"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 6H2V4H0V6ZM0 10H2V8H0V10ZM0 2H2V0H0V2ZM4 6H18V4H4V6ZM4 10H18V8H4V10ZM4 0V2H18V0H4ZM0 6H2V4H0V6ZM0 10H2V8H0V10ZM0 2H2V0H0V2ZM4 6H18V4H4V6ZM4 10H18V8H4V10ZM4 0V2H18V0H4Z" />
      </svg>
    </button>
  );
}

export default List;
