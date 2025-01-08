"use client";

import classNames from "classnames";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

// const cardVariants: Variants = {
//   offscreen: {
//     x: "100%",
//   },
//   onscreen: {
//     x: 0,
//     transition: {
//       type: "spring",
//       bounce: 0,
//       duration: 0.7,
//     },
//   },
// };

const countVariants: Variants = {
  offscreen: {
    backgroundColor: "#F6F6F6",
  },
  onscreen: {
    backgroundColor: "#2CA89A",
    color: "#FFF",
    transition: {
      //type: "spring",
      duration: 0,
    },
  },
};

const mainVariants: Variants = {
  offscreen: {
    borderWidth: 2,
    borderColor: "#F6F6F6",
  },
  onscreen: {
    borderColor: "#2CA89A",
    borderWidth: 2,
    transition: {
      //type: "spring",
      duration: 0,
    },
  },
};

const list = [
  {
    id: 1,
    image: "/images/global/instruction/1.svg",
    title: "Выберите товары из каталога и добавьте в корзину",
  },
  {
    id: 2,
    image: "/images/global/instruction/2.svg",
    title: "Перейдите в ‘Корзину’",
  },
  {
    id: 3,
    image: "/images/global/instruction/3.svg",
    title: "Нажмите ‘Оформить заказ’",
  },
  {
    id: 4,
    image: "/images/global/instruction/4.svg",
    title: "Заполните данные и нажмите “Оформить”",
  },
  {
    id: 5,
    image: "/images/global/instruction/5.svg",
    title: "Далее с вами свяжется менеджер для получения оплаты",
  },
  {
    id: 6,
    image: "/images/global/instruction/6.svg",
    title: "Оплатите заказ",
  },
  {
    id: 7,
    image: "/images/global/instruction/7.svg",
    title: "Доставим товар до ваших дверей",
  },
];

function InstructionList() {
  return (
    <ul className="w-full overflow-hidden grid gap-5">
      {list.map(({ image, id, title }, index) => (
        <Item
          key={id}
          image={image}
          index={index}
          isFirst={index === 0}
          title={title}
        />
      ))}
    </ul>
  );
}

function Item({
  title,
  image,
  index,
  isFirst = false,
}: {
  title: string;
  image: string;
  index: number;
  isFirst?: boolean;
}) {
  return (
    <motion.li
      initial={"offscreen"}
      whileInView="onscreen"
      viewport={{ once: false, amount: 1 }}
      className="flex items-center justify-between gap-3 sm:gap-6 lg:gap-8 xl:gap-[60px] w-full"
    >
      <div className="relative h-full flex items-center">
        {!isFirst && (
          <motion.div
            //variants={countVariants}
            className="absolute top-0 left-0 w-0.5 lg:w-1 h-full bg-stroke translate-x-[22px] -translate-y-[150px] sm:translate-x-[40px] xl:translate-x-[50px]"
          />
        )}
        <motion.div
          variants={countVariants}
          className="w-11 sm:w-20 xl:w-[100px] aspect-square flex justify-center items-center rounded-full relative z-10"
        >
          <span className="text-lg sm:text-xl xl:text-[32px] xl:leading-10">
            {index + 1}
          </span>
        </motion.div>
      </div>
      <motion.div
        className={classNames(
          "flex flex-col gap-3 items-center justify-center w-full border rounded-[10px] py-5 px-8"
        )}
        variants={mainVariants}
      >
        <div className="w-full max-w-[250px] aspect-[300/250] relative">
          <Image src={image} alt="banner" fill sizes="100%" priority />
        </div>
        <p className="font-semibold text-base text-center xl:text-lg">
          {title}
        </p>
      </motion.div>
    </motion.li>
  );
}

export default InstructionList;
