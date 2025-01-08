import React from "react";
import Link from "next/link";

interface Props {
  location: {
    href: string;
    name: string;
    disabled?: boolean;
  }[];
}

const BreadCrumbs: React.FC<Props> = ({ location }: Props) => {
  return (
    <div className="flex items-center gap-3 text-sm text-[#808080]">
      {location.map((item, index) => {
        return index === location.length - 1 ? (
          <>
            {index !== 0 && item.name && (
              <svg
                width="8"
                height="10"
                viewBox="0 0 8 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.08711 0L0.912109 1.175L4.72878 5L0.912109 8.825L2.08711 10L7.08711 5L2.08711 0Z"
                  fill="#808080"
                />
              </svg>
            )}
            <span className="">{item.name}</span>
          </>
        ) : (
          item.name && item.href && (
            <>
              {index !== 0 && item.name && (
                <svg
                  width="8"
                  height="10"
                  viewBox="0 0 8 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.08711 0L0.912109 1.175L4.72878 5L0.912109 8.825L2.08711 10L7.08711 5L2.08711 0Z"
                    fill="#808080"
                  />
                </svg>
              )}
              {item.disabled ? (
                <span className="">{item.name}</span>
              ) : (
                <Link href={item.href} className="hover:text-main">
                  <span className="">{item.name}</span>
                </Link>
              )}
            </>
          )
        );
      })}
    </div>
  );
};

export default BreadCrumbs;
