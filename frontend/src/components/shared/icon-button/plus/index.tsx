interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

function Plus(props: Props) {
  return (
    <button className="rounded p-2 bg-input" {...props}>
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 3.33325V12.6666"
          stroke={props.disabled ? "#808080" : "#2CA89A"}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3.3335 8H12.6668"
          stroke={props.disabled ? "#808080" : "#2CA89A"}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

export default Plus;
