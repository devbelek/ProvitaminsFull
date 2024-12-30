"use client";

import Rating from "@/src/components/shared/rating";
import { Tab } from "@headlessui/react";
import classNames from "classnames";
import ReviewModal from "./review-modal";
import { Product, ProductReview } from "@/src/api/products";
import parse from "html-react-parser";
import "./secondary.css";

interface Props {
  data: Product;
  reviews: ProductReview[];
}

function formatDate(inputDate: string): string {
  const parsedDate = new Date(inputDate);

  const day = parsedDate.getDate().toString().padStart(2, "0");
  const month = (parsedDate.getMonth() + 1).toString().padStart(2, "0");
  const year = parsedDate.getFullYear().toString();

  return `${day}.${month}.${year}`;
}

function ProductSecondaryInfo({ data, reviews }: Props) {
  return (
    <div className="border border-stroke rounded-lg">
      <Tab.Group>
        <Tab.List className="px-5 -translate-x-2">
          <Tab
            className={({ selected }) =>
              classNames(
                "py-3 px-4 border-b-2 outline-none",
                selected
                  ? "border-main font-semibold text-main"
                  : "border-white text-[#808080]"
              )
            }
          >
            Описание
          </Tab>
          <Tab
            className={({ selected }) =>
              classNames(
                "py-3 px-4 border-b-2 outline-none",
                selected
                  ? "border-main font-semibold text-main"
                  : "border-white text-[#808080]"
              )
            }
          >
            Отзывы
          </Tab>
        </Tab.List>
        <Tab.Panels className="px-5 py-5 border-t border-stroke w-full">
          <Tab.Panel className="max-w-full relative overflow-hidden p-4">
            {parse(data.description)}
          </Tab.Panel>
          <Tab.Panel>
            <ul className="grid gap-3">
              {reviews.map((item) => (
                <Review key={item.id} {...item} />
              ))}
              <div className="grid sm:flex sm:justify-end">
                <ReviewModal />
              </div>
            </ul>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}

function Review({ date_created, full_name, rating, review }: ProductReview) {
  return (
    <li className="grid gap-2.5 sm:gap-3 border border-stroke rounded-lg p-5">
      <div className="flex justify-between items-center gap-4">
        <Rating value={rating} readonly />
        <p className="text-sm">{formatDate(date_created)}</p>
      </div>
      <p className="font-semibold">{full_name}</p>
      <div>{parse(review)}</div>
    </li>
  );
}

export default ProductSecondaryInfo;
