"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  { image: "/slider/sld1.jpg" },
  { image: "/slider/sld2.jpg" },
];

export default function Slider() {
  return (
    <div
      className="relative mt-5 w-full h-[200px] sm:h-[300px] md:h-[550px] lg:h-[600px] xl:h-[680px]"
      dir="rtl" // Important for Arabic direction
    >
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          reverseDirection: true, // Ensures autoplay runs right → left
        }}
        navigation
        pagination={{ clickable: true }}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <Image
                src={slide.image}
                alt={`Slide ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
                sizes="100vw" // Makes it responsive
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
