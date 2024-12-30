import AboutPage from "@/src/screens/about";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "О магазине",
};

function Page() {
  return <AboutPage />;
}

export default Page;
