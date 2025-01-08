"use client";

import Image from "next/image";
import { useRef } from "react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";

interface Props {
  data: { id: number; image: string; link: string }[];
}

export default function BannerCarousel({ data }: Props) {
  const swiperRef = useRef<SwiperRef>(null);
  return (
    <div className="w-full overflow-hidden rounded">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
        }}
        ref={swiperRef}
      >
        {data.map(({ id, image, link }) => (
          <SwiperSlide key={id}>
            <div className="w-full aspect-[960/682] relative overflow-hidden">
              <a href={link}>
                <Image src={image} alt="banner" fill sizes="100%" priority />
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
