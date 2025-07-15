// app/components/Slider.tsx

"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
// 1. Removed EffectFade from this import line
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// 2. Removed the CSS for the fade effect
// import 'swiper/css/effect-fade'; 

// An array of your slides.
const slides = [
  {
    image: '/slider/sld1.jpg',
  },
  {
    image: '/slider/sld2.jpg',
  },
];

export default function Slider() {
  return (
    <div className="relative w-full h-[500px]"> {/* Full screen height */}
      <Swiper
        // Install Swiper modules
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        // 3. Removed the effect="fade" prop to revert to the default 'slide'
        navigation // Enables Next/Prev arrows
        pagination={{ clickable: true }} // Enables clickable dots
        className="h-full min-h-[630px] "
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              {/* Background Image using Next.js Image component for optimization */}
              <Image
                src={slide.image}
                // 4. Fixed the alt text to prevent errors
                alt={`Slide ${index + 1}`}
                fill // Makes the image fill the container
                style={{ objectFit: 'cover' }} // Ensures the image covers the area without distortion
                priority={index === 0} // Prioritize loading the first slide's image
              />
              
              {/* 5. Removed the overlay and text content divs as they are no longer needed */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}