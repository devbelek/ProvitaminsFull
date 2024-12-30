"use client";

import React, { useEffect, useState } from "react";
import classNames from "classnames";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isActive?: boolean;
  badge?: number;
  isMobile?: boolean;
}

function Basket({ isActive, badge, isMobile, ...props }: Props) {
  const [mounted, setMounted] = useState(false);
  const [count, setCount] = useState<number>();

  useEffect(() => {
    setCount(badge);
  }, [badge]);

  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    mounted && (
      <div className="relative">
        <div
          className={classNames(
            "absolute  w-[18px] aspect-square rounded-full bg-main text-text-light text-xs flex justify-center items-center leading-4",
            isMobile ? "-top-2 -right-2" : "-top-1 -right-1",
            !count && "hidden"
          )}
        >
          {count}
        </div>
        {isMobile ? (
          <button
            className={classNames(
              "rounded-lg hover:bg-main-light transition hover:stroke-main bg-white stroke-main text-center absolute inset-0 w-full h-full bg-transparent border-none p-0"
            )}
            {...props}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="16"
              viewBox="0 0 24 18"
              fill="none"
              className={classNames(
                "text-center block w-full opacity-0"
              )}
            >
              <path
                d="M1.30078 1H1.9071C2.92772 1 3.78462 1.7685 3.8953 2.78311L4.70626 10.2169C4.81694 11.2315 5.67384 12 6.69447 12H15.3468C16.261 12 17.0589 11.3801 17.2848 10.4942L18.6647 5.08311C18.9872 3.81854 18.0318 2.58889 16.7267 2.58889H4.90078M4.92554 15.6249H5.67554M4.92554 16.3749H5.67554M15.9255 15.6249H16.6755M15.9255 16.3749H16.6755M6.30078 16C6.30078 16.5523 5.85307 17 5.30078 17C4.7485 17 4.30078 16.5523 4.30078 16C4.30078 15.4477 4.7485 15 5.30078 15C5.85307 15 6.30078 15.4477 6.30078 16ZM17.3008 16C17.3008 16.5523 16.8531 17 16.3008 17C15.7485 17 15.3008 16.5523 15.3008 16C15.3008 15.4477 15.7485 15 16.3008 15C16.8531 15 17.3008 15.4477 17.3008 16Z"
                stroke="#2B2A29"
                stroke-width="1.5"
                stroke-linecap="round"
              />
            </svg>
          </button>
        ) : (
          <button
            className={classNames(
              "p-3 rounded-lg hover:bg-main-light transition hover:stroke-main",
              isActive
                ? "bg-main stroke-white"
                : badge
                ? "bg-[#DFFAF7] stroke-main"
                : "bg-input stroke-[#2B2A29]"
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
          </button>
        )}
      </div>
    )
  );
}

export default Basket;
