"use client";

import { SwiperRef } from "swiper/react";
import { Navigation, Pagination, Autoplay, Virtual } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import FormWrapper from "../filters/form-wrapper";
import HitCard from "./card";
import { useRef } from "react";
import "./styles.css";
import { Product } from "@/src/api/products";

interface Props {
  data: Product[];
}

function Hits({ data }: Props) {
  const swiperRef = useRef<SwiperRef>(null);
  const slides: Product[][] = [];
  data.forEach((item, index) => {
    let slide = slides[Math.floor(index / 4)];
    if (slide) {
      slides[Math.floor(index / 4)].push(item);
    } else {
      slides[Math.floor(index / 4)] = [item];
    }
  });

  return (
    data.length > 0 && (
      <div className="side_hits w-[310px] border border-stroke rounded-lg">
        <div className="py-4 px-4">
          <FormWrapper title="Хиты продаж">
            <Swiper
              modules={[Navigation, Pagination, Autoplay, Virtual]}
              slidesPerView={1}
              pagination={{ clickable: true }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: true,
                pauseOnMouseEnter: true,
              }}
              ref={swiperRef}
              virtual
            >
              {slides.map((items, index) => (
                <SwiperSlide key={index}>
                  <ul className="grid gap-2.5 border-r border-white">
                    {items.map((item) => (
                      <li key={item.id}>
                        <HitCard {...item} />
                      </li>
                    ))}
                  </ul>
                </SwiperSlide>
              ))}
            </Swiper>
          </FormWrapper>
        </div>
      </div>
    )
  );
}

export default Hits;
