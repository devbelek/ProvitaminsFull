import type { Metadata } from "next";
import "./variables.css";
import "swiper/css";
import "swiper/css/pagination";
import "./globals.css";
import Header from "@/src/layout/header";
import Footer from "@/src/layout/footer";
import { roundsNeue } from "./fonts";
import cn from "classnames";
import Head from "next/head";
import NextTopLoader from "nextjs-toploader";
import Provider from "@/src/providers";
import { getContacts } from "@/src/api/contacts";
import ScrollToTopButton from "@/src/components/widgets/scroll-top";
import Script from "next/script";
import { GoogleAnalytics } from "@next/third-parties/google";
import "react-loading-skeleton/dist/skeleton.css";

export const metadata: Metadata = {
  applicationName: "PROVITAMINS - Магазин витаминных добавок",
  title: {
    default: "PROVITAMINS - Магазин витаминных добавок",
    template: "%s - PROVITAMINS",
  },
  description:
    "У нас вы можете найти качественные витамины и минералы из США и Турции. Мы предоставляем низкие цены, быструю доставку и хороший сервис. Работаем с 9:00 до 21:00 без выходных",
  keywords: [
    "купить витамины в Ош",
    "интернет магазин витаминов Ош",
    "витамины доставка Ош",
    "витамины для детей Ош",
    "витамины для женщин Ош",
    "витамины для мужчин Ош",
    "спортивные витамины Ош",
    "мультивитамины Ош",
    "витамины и добавки Ош",
    "лучшие витамины Ош",
    "витамины с доставкой по Ош",
  ],
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const contacts = await getContacts();
  return (
    <html lang="ru">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <body className={cn(roundsNeue.className, "min-h-screen flex flex-col")}>
        <Provider>
          <div className="min-h-screen flex flex-col">
            <ScrollToTopButton />
            <NextTopLoader
              color="#2ca89a"
              initialPosition={0.08}
              height={3}
              easing="ease"
              shadow="0 0 10px #2ca89a,0 0 5px #2ca89a"
              showSpinner={false}
            />
            <Header contacts={contacts} />
            <div className="flex-1">{children}</div>
            <Footer contacts={contacts} />
          </div>
        </Provider>
        <Script src="//code.jivo.ru/widget/iARUPiawg4" />
      </body>
      <GoogleAnalytics gaId="AW-16697600717" />
    </html>
  );
}
