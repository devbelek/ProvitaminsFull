"use client";

import { useState, useEffect } from "react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1000) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className="invisible xl:visible fixed z-[100] bottom-8 right-8 stroke-[#2B2A29] p-2.5 border border-stroke rounded-[10px] bg-input hover:bg-main-light hover:stroke-main"
      onClick={scrollToTop}
      style={{ display: isVisible ? "block" : "none" }}
    >
      <svg
        width="14"
        height="18"
        viewBox="0 0 14 18"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7 1L1 7M7 1L13 7M7 1V11.5M7 17V14.5"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};

export default ScrollToTopButton;
