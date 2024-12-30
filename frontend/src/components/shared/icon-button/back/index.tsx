import React from "react";
import classNames from "classnames";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isActive?: boolean;
}

function Back({ isActive, ...props }: Props) {
  return (
    <button
      className={classNames(
        "p-2 md:p-3 rounded-lg hover:bg-main-light transition hover:stroke-main aspect-square block",
        isActive ? "bg-main stroke-white" : "bg-input stroke-[#2B2A29]"
      )}
      {...props}
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.8238 13.8042C10.8796 13.7423 10.924 13.6687 10.9542 13.5877C10.9844 13.5067 11 13.4199 11 13.3323C11 13.2446 10.9844 13.1578 10.9542 13.0768C10.924 12.9958 10.8796 12.9223 10.8238 12.8603L6.44895 7.99982L10.8238 3.13931C10.9364 3.01415 10.9997 2.8444 10.9997 2.66739C10.9997 2.49039 10.9364 2.32064 10.8238 2.19547C10.7112 2.07031 10.5584 2 10.3991 2C10.2399 2 10.0871 2.07031 9.97449 2.19547L5.17621 7.5279C5.12035 7.58982 5.07604 7.66338 5.0458 7.74436C5.01556 7.82534 5 7.91215 5 7.99982C5 8.0875 5.01556 8.17431 5.0458 8.25529C5.07604 8.33627 5.12035 8.40983 5.17621 8.47174L9.97449 13.8042C10.0302 13.8662 10.0964 13.9155 10.1693 13.9491C10.2421 13.9827 10.3203 14 10.3991 14C10.478 14 10.5562 13.9827 10.629 13.9491C10.7019 13.9155 10.7681 13.8662 10.8238 13.8042Z"
          fill="#2B2A29"
        />
      </svg>
    </button>
  );
}

export default Back;
