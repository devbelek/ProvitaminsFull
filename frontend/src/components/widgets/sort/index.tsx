"use client";

import { useState } from "react";
import Select, { Option } from "../../shared/select";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

const options = [
  {
    value: "id",
    title: "По умолчанию",
  },
  {
    value: "-id",
    title: "Новинки",
  },
  {
    value: "price",
    title: "Цена: по возрастанию",
  },
  {
    value: "-price",
    title: "Цена: по убыванию",
  },
  {
    value: "name",
    title: "По алфавиту (А-Я)",
  },
  {
    value: "-name",
    title: "По алфавиту (Я-А)",
  },
];

function SortBar() {
  const pathname = usePathname();
  const initSearchParams = useSearchParams();
  const router = useRouter();
  const initValue = initSearchParams.get("ordering");
  const [value, setValue] = useState<Option | undefined>(
    options.find((item) => item.value.toString() === initValue) || options[0]
  );

  const handleChangeSort = (v: Option) => {
    setValue(v);
    const searchParams = new URLSearchParams(initSearchParams);
    searchParams.set(
      "ordering",
      v?.value.toString() || options[0]?.value.toString()
    );
    router.push(`${pathname}/?${searchParams}`);
  };

  return (
    <div className="flex gap-4 items-center">
      <p className="hidden lg:block text-sm">Сортировать</p>
      <div className="grid min-w-[130px] xl:min-w-[200px]">
        <Select
          value={value}
          onChange={handleChangeSort}
          options={options}
          placeholder="По умолчанию"
        />
      </div>
    </div>
  );
}

export default SortBar;
