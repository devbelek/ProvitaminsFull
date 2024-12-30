"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";
import IconButton from "../../shared/icon-button";
import { useTransition } from "react";

type ViewType = "GRID" | "LIST";
const QUERY_KEY = "view";

function ViewType() {
  const [_, startTransition] = useTransition();
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentViewType = searchParams.get(QUERY_KEY);

  const handleChange = (view: ViewType) => {
    const newSearchParams = new URLSearchParams(
      searchParams as unknown as URLSearchParams
    );
    newSearchParams.set(QUERY_KEY, view);
    startTransition(() => {
      router.push(`${pathname}?${newSearchParams}`);
    });
  };
  return (
    <div className="flex items-center gap-2.5">
      <IconButton.Grid isActive={currentViewType === "GRID" || !currentViewType} onClick={() => handleChange("GRID")} />
      <IconButton.List isActive={currentViewType === "LIST"} onClick={() => handleChange("LIST")} />
    </div>
  );
}

export default ViewType;
