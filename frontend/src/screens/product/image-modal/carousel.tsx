"use client";

import Image from "next/image";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { useRef, useState } from "react";
import IconButton from "@/src/components/shared/icon-button";
import classNames from "classnames";
import { isDesktop, isMobile } from "react-device-detect";
import {
  TransformComponent,
  TransformWrapper,
  useControls,
} from "react-zoom-pan-pinch";

interface Props {
  images: string[];
  activeIndex: number;
}

function Carousel({ images, activeIndex: initActiveIndex }: Props) {
  const swiperRef = useRef<SwiperRef>(null);
  const [activeIndex, setActiveIndex] = useState(initActiveIndex);

  const clickNext = () => {
    swiperRef.current?.swiper?.slideNext();
  };
  const clickPrev = () => {
    swiperRef.current?.swiper?.slidePrev();
  };

  const slidesPerView = 1;

  return (
    !!images.length && (
      <div>
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={1}
            spaceBetween={30}
            ref={swiperRef}
            initialSlide={activeIndex}
            onActiveIndexChange={(swiper) =>
              setActiveIndex(swiper.activeIndex + 1)
            }
            allowTouchMove={false}
          >
            {images.map((item) => {
              return (
                <SwiperSlide key={item}>
                  {isMobile ? (
                    <div>
                      <TransformWrapper>
                        <TransformComponent
                          wrapperClass="!w-full"
                          contentClass="!w-full"
                        >
                          <SlideItemMobile image={item} />
                        </TransformComponent>
                      </TransformWrapper>
                    </div>
                  ) : (
                    <SlideItemDesktop image={item} />
                  )}
                </SwiperSlide>
              );
            })}
          </Swiper>
          {images.length > slidesPerView && (
            <div className="flex justify-between items-center absolute top-0 bottom-0 w-full">
              <div>
                {activeIndex > 1 && (
                  <IconButton.ChevronLeft onClick={clickPrev} />
                )}
              </div>
              <div>
                {activeIndex < images.length && (
                  <IconButton.ChevronRight onClick={clickNext} />
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    )
  );
}

function SlideItemDesktop({ image }: { image: string }) {
  const [scale, setScale] = useState<number>(1);
  const [originX, setOriginX] = useState<number>(50);
  const [originY, setOriginY] = useState<number>(50);
  const [isZoomed, setIsZoomed] = useState<boolean>(false);
  const [isMoving, setIsMoving] = useState<boolean>(false); // Состояние для отслеживания движения

  const handleZoom = () => {
    setIsZoomed(!isZoomed);
    setScale(isZoomed ? 1 : 3); // Toggle scale between 1 and 3
  };

  const handleMoveStart = () => {
    if (isMobile) {
      setIsMoving(true); // Устанавливаем состояние isMoving в true при начале движения
    }
  };

  const handleMoveEnd = () => {
    if (isMobile) {
      setIsMoving(false); // Сбрасываем состояние isMoving в false при завершении движения
    }
  };

  const handleMove = (event: React.TouchEvent<HTMLImageElement>) => {
    if (isMoving && isZoomed && isMobile) {
      // Проверяем, что движение и увеличение активны
      const img = event.currentTarget;
      const rect = img.getBoundingClientRect();
      const touch = event.touches[0];
      const newX = ((touch.clientX - rect.left) / rect.width) * 100;
      const newY = ((touch.clientY - rect.top) / rect.height) * 100;

      setOriginX(originX + (newX - originX));
      setOriginY(originY + (newY - originY));
    }
  };

  const handleMouseMove = (
    event: React.MouseEvent<HTMLImageElement, MouseEvent>
  ) => {
    if (isZoomed && isDesktop) {
      const img = event.currentTarget;
      const rect = img.getBoundingClientRect();
      const newX = ((event.clientX - rect.left) / rect.width) * 100;
      const newY = ((event.clientY - rect.top) / rect.height) * 100;

      setOriginX(originX + (newX - originX));
      setOriginY(originY + (newY - originY));
    }
  };

  return (
    <div className="w-full aspect-[3/5] sm:aspect-square xl:aspect-[5/3] relative">
      <Image
        src={image}
        fill
        sizes="100%"
        priority
        alt="product"
        className={classNames(
          scale === 1 ? "cursor-zoom-in" : "cursor-zoom-out",
          "object-contain"
        )}
        style={{
          transformOrigin: `${originX}% ${originY}%`,
          transform: `scale(${scale})`,
        }}
        onClick={handleZoom}
        onTouchStart={handleMoveStart}
        onTouchMove={handleMove}
        onTouchEnd={handleMoveEnd}
        onMouseMove={handleMouseMove}
      />
    </div>
  );
}

const SlideItemMobile = ({ image }: { image: string }) => {
  const [zoomed, setZoomed] = useState(false);
  const { zoomIn, resetTransform } = useControls();

  const handleZoomIn = () => {
    setZoomed(true);
    zoomIn(1);
  };

  const handleZoomOut = () => {
    setZoomed(false);
    resetTransform();
  };

  return (
    <button
      className={classNames(
        "relative w-full aspect-[3/5] sm:aspect-square block outline-none",
        zoomed ? "cursor-zoom-out" : "cursor-zoom-in"
      )}
      onClick={() => {
        zoomed ? handleZoomOut() : handleZoomIn();
      }}
    >
      <Image
        src={image}
        alt="ТрудИнвест"
        fill
        sizes="100%"
        priority
        className="object-contain"
      />
    </button>
  );
};

export default Carousel;
