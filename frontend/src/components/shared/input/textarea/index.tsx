import classNames from "classnames";
import React from "react";
import ReactTextareaAutosize, {
  TextareaAutosizeProps,
} from "react-textarea-autosize";

interface Props extends TextareaAutosizeProps {
  label?: string;
  error?: string;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, Props>(
  function MyTextarea({ ...props }, ref) {
    return (
      <div>
        {props.label && (
          <label className="block font-medium mb-1.5 text-start">
            {props.label}
          </label>
        )}
        <div className="relative rounded-md shadow-sm flex">
          <ReactTextareaAutosize
            ref={ref}
            className={classNames(
              "block w-full px-3 py-3 border border-stroke rounded-[5px] outline-none focus:border-main transition text-sm resize-none",
              props?.error ? "border-red-500" : "border-stroke"
            )}
            {...props}
          />
        </div>
        {props.error && (
          <p className="text-red-500 mt-1 text-start">{props.error}</p>
        )}
      </div>
    );
  }
);

export default Textarea;
