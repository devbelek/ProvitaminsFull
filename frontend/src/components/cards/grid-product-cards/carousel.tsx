"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Autoplay, Navigation, Pagination, Virtual } from "swiper/modules";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import GridProductCard from "./item";
import "./carousel.css";
import useWindowDimensions from "@/src/hooks/useWindowDimensions";
import IconButton from "../../shared/icon-button";
import { Product } from "@/src/api/products";

interface Props {
  data: Product[];
}

function getSlidesPerView(width?: number): number {
  if (!width) return 0;
  else if (width <= 374) return 1;
  else if (width <= 768) return 2;
  else if (width <= 1024) return 3;
  else return 4;
}

function CarouselProductCards({ data }: Props) {
  const [loading, setLoading] = useState<boolean>(false);
  const [swiper, setSwiper] = useState<number>(0);
  const swiperRef = useRef<SwiperRef>(null);

  const { width } = useWindowDimensions();

  const slidesPerView = useMemo(() => getSlidesPerView(width), [width]);

  const clickNext = () => {
    swiperRef.current?.swiper?.slideNext();
  };
  const clickPrev = () => {
    swiperRef.current?.swiper?.slidePrev();
  };

  useEffect(() => {
    setLoading(true);
  }, []);

  return (
    loading && (
      <div className="product-cards mt-8">
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Virtual, Autoplay]}
            slidesPerView={slidesPerView}
            slidesPerGroup={slidesPerView}
            virtual
            pagination={{
              clickable: true,
              dynamicBullets: true,
              dynamicMainBullets: 7,
            }}
            spaceBetween={width || 1 <= 768 ? 10 : 20}
            className="mb-10"
            ref={swiperRef}
            tag="ul"
            onActiveIndexChange={(swiper) => setSwiper(swiper.activeIndex)}
            allowTouchMove={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: true,
            }}
          >
            {data.map((item) => (
              <SwiperSlide tag="li" key={item.id}>
                <GridProductCard {...item} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="flex justify-between items-center absolute top-0 left-0 right-0 h-full">
            {swiper >= 1 ? (
              <div className="relative right-4 lg:right-9 bottom-4">
                <IconButton.ChevronLeft onClick={clickPrev} />
              </div>
            ) : (
              <div />
            )}
            {swiper < data.length - slidesPerView && (
              <div className="relative left-4 lg:left-9 bottom-4">
                <IconButton.ChevronRight onClick={clickNext} />
              </div>
            )}
          </div>
        </div>
      </div>
    )
  );
}

export default CarouselProductCards;
