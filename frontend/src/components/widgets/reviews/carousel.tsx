"use client";

import { useRef } from "react";
import { Navigation, Pagination } from "swiper/modules";
import { SwiperRef, SwiperSlide, Swiper } from "swiper/react";
import "./carousel.css";
import ReviewItem from "./item";
import { Review } from "@/src/api/reviews";

interface Props {
  list: Review[];
}

function ReviewsCarousel({ list }: Props) {
  const swiperRef = useRef<SwiperRef>(null);
  return (
    <div className="overflow-hidden bg-main-light py-12 md:py-18 xl:py-24">
      <div className="container reviews">
        <h2 className="text-xl md:text-2xl xl:text-3xl font-bold pb-7">
          Отзывы
        </h2>
        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView={1.2}
          spaceBetween={10}
          pagination={{
            clickable: true,
            dynamicBullets: true,
            dynamicMainBullets: 7,
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: true,
          }}
          ref={swiperRef}
          className="pb-10"
          tag="ul"
          breakpoints={{
            475: {
              slidesPerView: 1.2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2.2,
            },
            1024: {
              slidesPerView: 3.2,
            },
          }}
        >
          {list.map((item) => (
            <SwiperSlide tag="li" key={item.id}>
              <ReviewItem {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default ReviewsCarousel;
