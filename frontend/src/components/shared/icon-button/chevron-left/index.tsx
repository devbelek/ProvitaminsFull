interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

function ChevronLeft(props: Props) {
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
          d="M9.70632 15.7389C9.79941 15.6563 9.87327 15.5583 9.92367 15.4503C9.97406 15.3423 10 15.2266 10 15.1097C10 14.9928 9.97406 14.877 9.92367 14.769C9.87327 14.6611 9.79941 14.563 9.70632 14.4804L2.41492 7.99977L9.70632 1.51909C9.89402 1.35221 9.99948 1.12587 9.99948 0.88986C9.99948 0.653854 9.89402 0.427514 9.70632 0.260633C9.51861 0.093751 9.26403 0 8.99857 0C8.73311 0 8.47853 0.093751 8.29082 0.260633L0.293682 7.37054C0.200589 7.4531 0.12673 7.55117 0.076335 7.65914C0.0259409 7.76712 -9.53674e-07 7.88287 -9.53674e-07 7.99977C-9.53674e-07 8.11667 0.0259409 8.23242 0.076335 8.34039C0.12673 8.44836 0.200589 8.54644 0.293682 8.62899L8.29082 15.7389C8.38368 15.8217 8.49399 15.8873 8.61544 15.9321C8.73689 15.9769 8.86708 16 8.99857 16C9.13006 16 9.26025 15.9769 9.3817 15.9321C9.50315 15.8873 9.61346 15.8217 9.70632 15.7389Z"
        />
      </svg>
    </button>
  );
}

export default ChevronLeft;
