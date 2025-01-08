import classNames from "classnames";
import React from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isActive?: boolean;
  size?: "lg" | "md";
}

function Buy({ isActive, size = "md", ...props }: Props) {
  return (
    <button
      className={classNames(
        "rounded-lg hover:bg-main-hover hover:text-white hover:stroke-white transition stroke-main text-main flex gap-2 items-center",
        isActive
          ? "bg-main stroke-white text-white"
          : "bg-input stroke-main text-main",
        size === "lg" && "px-5 py-3",
        size === "md" && "p-2"
      )}
      {...props}
    >
      <svg
        width="16"
        height="14"
        viewBox="0 0 16 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.25 1H1.70474C2.47021 1 3.11288 1.57638 3.19589 2.33733L3.80411 7.91267C3.88712 8.67362 4.5298 9.25 5.29526 9.25H11.7845C12.4702 9.25 13.0686 8.78506 13.238 8.12066L14.2729 4.06233C14.5148 3.11391 13.7982 2.19167 12.8195 2.19167H3.95M3.96857 11.9687H4.53107M3.96857 12.5312H4.53107M12.2186 11.9687H12.7811M12.2186 12.5312H12.7811M5 12.25C5 12.6642 4.66421 13 4.25 13C3.83579 13 3.5 12.6642 3.5 12.25C3.5 11.8358 3.83579 11.5 4.25 11.5C4.66421 11.5 5 11.8358 5 12.25ZM13.25 12.25C13.25 12.6642 12.9142 13 12.5 13C12.0858 13 11.75 12.6642 11.75 12.25C11.75 11.8358 12.0858 11.5 12.5 11.5C12.9142 11.5 13.25 11.8358 13.25 12.25Z"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>

      <p
        className={classNames(
          size === "md" && "text-xs",
          size === "lg" && "text-base"
        )}
      >
        Купить
      </p>
    </button>
  );
}

export default Buy;
