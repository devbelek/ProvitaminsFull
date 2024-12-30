"use client";

import Button from "@/src/components/shared/button";
import Image from "next/image";
import Link from "next/link";

function Page() {
  return (
    <div className="flex items-center flex-col gap-7 xl:gap-10 py-20">
      <div className="relative w-full max-w-[600px] mx-auto aspect-[600/430]">
        <Image
          src="/images/global/common/404.svg"
          alt="404"
          fill
          sizes="full"
          priority
        />
      </div>
      <div className="flex flex-col items-center gap-2.5 xl:gap-5">
        <h1 className="text-xl font-bold text-center xl:text-3xl">
          Страница не найдена
        </h1>
        <p className="text-center max-w-[490px] xl:text-lg">
          Страница, которую вы ищете, возможно, была удалена или Временно
          недостуна.
        </p>
        <Link href="/">
          <Button>На главную</Button>
        </Link>
      </div>
    </div>
  );
}

export default Page;
