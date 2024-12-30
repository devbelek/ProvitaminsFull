"use client";

import ReactPaginate from "react-paginate";
import IconButton from "../../shared/icon-button";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

interface Props {
  totalCount: number;
}

const LIMIT = 40;

function Pagination({ totalCount }: Props) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const current = new URLSearchParams(Array.from(searchParams.entries()));

  const initialPage = current.get("offset")
    ? Math.floor(Number(current.get("offset")) / LIMIT)
    : 0;

  const [currentPage, setCurrentPage] = useState(initialPage);

  const handlePageClick = (page: { selected: number }) => {
    current.set("offset", `${page.selected * LIMIT}`);
    current.set("limit", `${LIMIT}`);
    router.push(`${pathname}?${current.toString()}`);
  };

  const pageCount = Math.ceil(totalCount / LIMIT);

  useEffect(() => {
    setCurrentPage(
      current.get("offset") ? Math.floor(Number(current.get("offset")) / LIMIT) : 0
    );
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  return (
    pageCount > 1 && (
      <div>
        <ReactPaginate
          breakLabel="..."
          nextLabel={<IconButton.ChevronRight />}
          previousLabel={<IconButton.ChevronLeft />}
          forcePage={currentPage}
          nextClassName="ml-1"
          previousClassName="mr-1"
          className="flex items-center justify-center gap-4"
          pageClassName="hover:text-main"
          activeClassName="text-main"
          onPageChange={handlePageClick}
          pageRangeDisplayed={1}
          marginPagesDisplayed={2}
          pageCount={pageCount}
          renderOnZeroPageCount={null}
          disabledClassName="invisible"
        />
      </div>
    )
  );
}

export default Pagination;
