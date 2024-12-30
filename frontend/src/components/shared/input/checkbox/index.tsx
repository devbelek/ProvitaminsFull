import React from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

const Checkbox = React.forwardRef<HTMLInputElement, Props>(function MyCheckbox(
  props: Props,
  ref
) {
  return (
    <div>
      <div className="relative flex items-center cursor-pointer">
        <input
          className="before:content[''] peer relative h-4 w-4 cursor-pointer appearance-none rounded-sm border border-stroke checked:border-main checked:bg-main"
          {...props}
          ref={ref}
          type="checkbox"
        />
        <span className="absolute w-4 h-4 text-white flex justify-center items-center opacity-0 pointer-events-none top-0 left-0 peer-checked:opacity-100 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3.5 w-3.5"
            viewBox="0 0 20 20"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="1"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
        </span>
      </div>
    </div>
  );
});

export default Checkbox;
