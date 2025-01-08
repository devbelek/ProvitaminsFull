"use client";

import { Faq } from "@/src/api/faq";
import FaqItem from "./item";
import Divider from "../../shared/divider";
import { Masonry, ResponsiveMasonry } from "@/src/components/shared/masonry";

interface Props {
  list: Faq[];
}

export default function QuestionsMasonryList({ list }: Props) {
  return (
    list.length > 0 && (
      <section>
        <div className="container">
          <Divider title="Частые вопросы" />
          <div className="my-5 lg:my-14">
            <ResponsiveMasonry columnsCountBreakPoints={{ 0: 1, 1024: 2 }}>
              <Masonry gutter="16px">
                {list.map(({ id, question, answer }) => (
                  <FaqItem key={id} question={question} answer={answer} />
                ))}
              </Masonry>
            </ResponsiveMasonry>
          </div>
        </div>
      </section>
    )
  );
}
