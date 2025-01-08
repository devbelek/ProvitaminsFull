import Checkbox from "./checkbox";
import React from "react";
import classNames from "classnames";
import Search from "./search";
import Textarea from "./textarea";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input = Object.assign(
  React.forwardRef<HTMLInputElement, Props>(function MyInput(
    { ...props },
    ref
  ) {
    return (
      <div>
        {props.label && (
          <label className="block font-medium mb-1.5 text-start">
            {props.label}
          </label>
        )}
        <div className="relative rounded-md shadow-sm flex">
          <input
            ref={ref}
            type="text"
            className={classNames(
              "block w-full px-3 py-3 border border-stroke rounded-[5px] outline-none focus:border-main transition text-sm",
              props?.error ? "border-red-500" : "border-stroke"
            )}
            {...props}
          />
        </div>
        <p className="text-red-500 mt-1 text-start">{props.error} </p>
      </div>
    );
  }),
  {
    Search,
    Checkbox,
    Textarea,
  }
);

export default Input;
