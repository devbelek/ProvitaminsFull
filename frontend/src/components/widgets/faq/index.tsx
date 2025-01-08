import { getFaqs } from "@/src/api/faq";
import dynamic from "next/dynamic";

const QuestionsMasonryList = dynamic(() => import("./list"), { ssr: false });

export default async function QuestionsList() {
  const data = await getFaqs();
  const list = data.results;
  return <QuestionsMasonryList list={list} />;
}
