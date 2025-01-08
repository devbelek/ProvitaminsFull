interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

function ChevronRight(props: Props) {
  return (
    <button
      className="relative z-10 bg-white hover:bg-main-light transition shadow-lg rounded-full flex justify-center items-center aspect-square w-9 lg:w-12 fill-main"
      {...props}
    >
      <svg
        width="10"
        height="16"
        viewBox="0 0 10 16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0.293682 15.7389C0.200589 15.6563 0.126729 15.5583 0.0763338 15.4503C0.0259389 15.3423 0 15.2266 0 15.1097C0 14.9928 0.0259389 14.877 0.0763338 14.769C0.126729 14.6611 0.200589 14.563 0.293682 14.4804L7.58508 7.99977L0.293682 1.51909C0.105976 1.35221 0.000522651 1.12587 0.000522651 0.88986C0.000522651 0.653854 0.105976 0.427514 0.293682 0.260633C0.481388 0.093751 0.735972 0 1.00143 0C1.26689 0 1.52147 0.093751 1.70918 0.260633L9.70632 7.37054C9.79941 7.4531 9.87327 7.55117 9.92367 7.65914C9.97406 7.76712 10 7.88287 10 7.99977C10 8.11667 9.97406 8.23242 9.92367 8.34039C9.87327 8.44836 9.79941 8.54644 9.70632 8.62899L1.70918 15.7389C1.61632 15.8217 1.50601 15.8873 1.38456 15.9321C1.26311 15.9769 1.13292 16 1.00143 16C0.869941 16 0.739747 15.9769 0.6183 15.9321C0.496853 15.8873 0.38654 15.8217 0.293682 15.7389Z"
          fill="#2CA89A"
        />
      </svg>
    </button>
  );
}

export default ChevronRight;
