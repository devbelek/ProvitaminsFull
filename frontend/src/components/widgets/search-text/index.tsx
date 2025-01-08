"use client";

import { useSearchParams } from "next/navigation";

function SearchText() {
  const searchParams = useSearchParams();
  return (
    <h1 className="text-2xl font-bold">
      Результаты поиска для {`"${searchParams.get("search")}"`}
    </h1>
  );
}

export default SearchText;
