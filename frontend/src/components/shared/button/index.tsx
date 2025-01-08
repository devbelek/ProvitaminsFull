import classNames from "classnames";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: "primary" | "secondary";
  variant?: "contained" | "outlined";
  loading?: boolean;
}

function Button({
  color = "primary",
  variant = "contained",
  loading,
  disabled,
  ...props
}: Props) {
  return (
    <button
      className={classNames(
        "p-3 rounded-lg relative",
        variant === "contained" &&
          color === "primary" &&
          "bg-main text-white stroke-white hover:bg-main-hover",
        variant === "outlined" &&
          color === "primary" &&
          "bg-white text-main border border-main hover:bg-main-hover stroke-main hover:text-white hover:stroke-white",
        variant === "contained" &&
          color === "secondary" &&
          "bg-secondary text-white stroke-white hover:bg-secondary-hover",
        variant === "outlined" &&
          color === "secondary" &&
          "bg-white text-secondary stroke-secondary border border-secondary hover:bg-secondary-hover hover:text-white hover:stroke-white"
      )}
      disabled={disabled || loading}
      {...props}
    >
      {loading && (
        <div className="absolute left-0 right-0 mx-auto top-0 bottom-0 flex justify-center items-center">
          <Loading variant={variant} color={color} />
        </div>
      )}
      <div className={classNames(loading && "invisible")}>{props.children}</div>
    </button>
  );
}

function Loading({
  variant,
}: {
  variant: "outlined" | "contained";
  color?: "primary" | "secondary";
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{
        margin: "auto",
        background: "none",
        display: "block",
        shapeRendering: "auto",
      }}
      width="20px"
      height="20px"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
    >
      <circle
        cx="50"
        cy="50"
        fill="none"
        strokeWidth="10"
        r="35"
        strokeDasharray="164.93361431346415 56.97787143782138"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          repeatCount="indefinite"
          dur="1s"
          values="0 50 50;360 50 50"
          keyTimes="0;1"
        ></animateTransform>
      </circle>
    </svg>
  );
}

export default Button;
