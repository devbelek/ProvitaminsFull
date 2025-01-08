"use client";

import { ChangeEvent, useState } from "react";
import { Combobox } from "@headlessui/react";
import { useRouter } from "next/navigation";
function Search() {
  const [query, setQuery] = useState("");

  const router = useRouter();

  const handleChange = async (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        const queryText = query;
        query && router.push(`/search/?search=${queryText}`);
        const activeElement = document.activeElement as HTMLInputElement;
        if (activeElement) {
          activeElement.blur();
        }
      }}
    >
      <Combobox
        value={query}
        onChange={async (value) => {
          setQuery(value);
        }}
      >
        <div className="relative w-full">
          <Combobox.Input
            value={query}
            onChange={handleChange}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                event.preventDefault();
                const queryText = query;

                query && router.push(`/search/?search=${queryText}`);
                const activeElement =
                  document.activeElement as HTMLInputElement;
                if (activeElement) {
                  activeElement.blur();
                }
              }
            }}
            type="search"
            placeholder="Найти"
            autoComplete="off"
            className="w-full border p-3 rounded-lg transition outline-none text-base pr-10 bg-input xl:bg-white"
          />
          <Combobox.Button
            className="absolute inset-y-0 right-0 flex items-center mx-3.5 xl:bg-white"
            type="submit"
          >
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.7026 11.6229L16.2204 15.1457C16.3775 15.3204 16.3698 15.588 16.2028 15.7533L15.5872 16.3698C15.5046 16.4532 15.3922 16.5001 15.275 16.5001C15.1578 16.5001 15.0454 16.4532 14.9628 16.3698L11.4449 12.8471C11.3476 12.7496 11.2593 12.6434 11.1811 12.53L10.5215 11.6493C9.43013 12.522 8.07486 12.9972 6.67823 12.9968C3.80028 13.0068 1.29945 11.0188 0.656305 8.20966C0.0131589 5.40057 1.39934 2.52012 3.9942 1.27362C6.58905 0.0271181 9.70005 0.747245 11.4854 3.00766C13.2707 5.26808 13.2539 8.46551 11.4449 10.707L12.3244 11.3147C12.4617 11.4027 12.5886 11.5061 12.7026 11.6229ZM2.28106 6.83174C2.28106 9.26369 4.2498 11.2352 6.67838 11.2352C7.84462 11.2352 8.96309 10.7713 9.78775 9.94545C10.6124 9.11964 11.0757 7.9996 11.0757 6.83174C11.0757 4.39978 9.10695 2.42828 6.67838 2.42828C4.2498 2.42828 2.28106 4.39978 2.28106 6.83174Z"
                fill="#2B2A29"
              />
            </svg>
          </Combobox.Button>
        </div>
      </Combobox>
    </form>
  );
}

export default Search;
