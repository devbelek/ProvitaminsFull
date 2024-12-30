"use client";

import { Ticker as TickerType, getTickers } from "@/src/api/ticker";
import { useEffect, useRef, useState } from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";

function Ticker() {
  const swiperRef = useRef<SwiperRef>(null);
  const [tickers, setTickers] = useState<TickerType[]>([]);

  useEffect(() => {
    getTickers().then((response) => {
      setTickers(response.results);
    });
  }, []);
  return (
    tickers.length > 0 && (
      <Swiper
        modules={[Navigation, Autoplay]}
        slidesPerView={1}
        pagination={{
          clickable: true,
          dynamicBullets: true,
          dynamicMainBullets: 7,
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: true,
        }}
        ref={swiperRef}
        className="!py-1.5 md:!py-3 bg-main-light"
        loop
        tag="ul"
      >
        {tickers.map((item) => (
          <SwiperSlide tag="li" key={item.id}>
            <h5 className="text-center text-sm md:text-base xl:text-lg">
              {item.text}
            </h5>
          </SwiperSlide>
        ))}
      </Swiper>
    )
  );
}

export default Ticker;
