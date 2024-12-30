/* eslint-disable react/display-name */
import React from "react";
import classNames from "classnames";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: string;
}

const Close = React.forwardRef<HTMLButtonElement, Props>(
  ({ color = "white", ...props }, ref) => {
    return (
      <button ref={ref} className={classNames("p-3 rounded-lg")} {...props}>
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 11L10.8995 1"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11 11L1.10051 1"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    );
  }
);

export default Close;
