import HomePage from "@/src/screens/home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Главная",
  description: ''
};

export default function Home() {
  return (
    <main>
      <HomePage />
    </main>
  );
}