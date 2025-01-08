"use client";

import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Swiper as SwiperType } from "swiper";
import classNames from "classnames";
import ImageModal from "./image-modal";

interface ProductImage {
  id: number;
  image: string;
}

function ProductCarousel({ images }: { images: ProductImage[] }) {
  const swiperRefMain = useRef<SwiperRef>(null);
  const swiperRefSecondary = useRef<SwiperRef>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [loading, setLoading] = useState(true);

  const handleSecondarySlideChange = (swiper: SwiperType): void => {
    swiperRefSecondary?.current?.swiper.slideTo(swiper.activeIndex);
    //swiperRefMain?.current?.swiper.slideTo(swiper.activeIndex);
    //setActiveIndex(swiper.activeIndex);
  };

  const handleMainSlideChange = (swiper: SwiperType): void => {
    swiperRefMain?.current?.swiper.slideTo(swiper.activeIndex);
    swiperRefSecondary?.current?.swiper.slideTo(swiper.activeIndex);
    setActiveIndex(swiper.activeIndex);
  };

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <div className="flex gap-4 flex-col-reverse sm:flex-row sm:justify-center">
      {loading ? (
        <div className="gap-2.5 hidden sm:grid">
          <div className="w-20 2xl:w-20 aspect-square bg-gray-100 rounded-lg" />
          <div className="w-20 2xl:w-20 aspect-square bg-gray-100 rounded-lg" />
          <div className="w-20 2xl:w-20 aspect-square bg-gray-100 rounded-lg" />
        </div>
      ) : (
        <div className="min-w-0">
          <Swiper
            slidesPerView={3}
            ref={swiperRefSecondary}
            spaceBetween={10}
            onSlideChange={handleSecondarySlideChange}
            className="sm:h-80 xl:h-60 2xl:h-80 border border-white py-0.5"
            breakpoints={{
              640: {
                direction: "vertical",
              },
            }}
          >
            {images.map((item, index) => (
              <SwiperSlide
                key={item.id}
                className="aspect-square select-none"
              >
                <div
                  className={classNames(
                    "rounded-lg overflow-hidden aspect-square flex justify-center items-center",
                    index === activeIndex
                      ? "border-2 border-main"
                      : "border border-stroke"
                  )}
                  onClick={() => {
                    swiperRefMain?.current?.swiper.slideTo(index);
                    swiperRefSecondary?.current?.swiper.slideTo(index);
                    setActiveIndex(index);
                  }}
                >
                  <button className="w-20 aspect-square xl:w-14 2xl:w-20 h-20 xl:h-14 2xl:h-20 relative">
                    <Image
                      src={item.image}
                      fill
                      priority
                      sizes="full"
                      alt="product"
                    />
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
      <div className="min-w-0 w-full sm:w-auto flex justify-center items-start">
        {loading ? (
          <div className="w-full sm:w-80 aspect-square rounded-lg bg-gray-100" />
        ) : (
          <Swiper
            ref={swiperRefMain}
            onSlideChange={handleMainSlideChange}
            className="sm:w-80 aspect-square xl:w-60 2xl:w-80 mx-0 border border-stroke rounded-[10px]"
          >
            {images.map((item) => (
              <SwiperSlide
                key={item.id}
                className="sm:w-80 aspect-square xl:w-60 2xl:w-80 flex justify-center items-center"
              >
                <ImageModal
                  images={images.map((item) => item.image)}
                  activeIndex={activeIndex}
                  setActiveIndex={setActiveIndex}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </div>
  );
}

export default ProductCarousel;
