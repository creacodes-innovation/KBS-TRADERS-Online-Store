import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import { Search, Sparkles, Truck } from "lucide-react";

import banner1 from "@/assets/banner1.jpeg";
import banner2 from "@/assets/banner2.jpeg";
import banner3 from "@/assets/banner3.jpeg";
import banner4 from "@/assets/banner4.jpeg";
// import banner5 from "@/assets/banner5.jpeg";
// import banner6 from "@/assets/banner6.jpeg";
import mbanner1 from '@/assets/mobilebanner1.jpeg'
import mbanner2 from '@/assets/mobilebanner2.jpeg'
import mbanner3 from '@/assets/mobilebanner3.jpeg'
import mbanner4 from '@/assets/mobilebanner4.jpeg'

const Hero = () => {
  const [activeSlide, setActiveSlide] = useState(1);

 const desktopBanners = [
  banner1,
  banner2,
  banner3,
  banner4,
];

const mobileBanners = [
  mbanner1,
  mbanner2,
  mbanner3,
  mbanner4,
];

  return (
    <section className="bg-[#F8EFE5] pt-2 pb-8">

      <div className="container mx-auto px-4">

       

        {/* TRUSTED BADGE */}

        <div className="flex justify-center  mt-4">

          <div
            className="
            flex
            items-center
            gap-2
            rounded-full
            border
            border-[#C89B5E]
            px-5
            py-2
            text-[#C89B5E]
            bg-white
          "
          >
            <Sparkles className="h-4 w-4" />

            <span className="font-medium text-sm">
              Trusted Quality Since 1970
            </span>
          </div>

        </div>

 {/* SEARCH BAR */}

        <div className="pt-4">
          <div className="relative">

            <Search
              className="
                absolute
                left-4
                top-1/2
                -translate-y-1/2
                h-5
                w-5
                text-gray-500
              "
            />

            <input
              type="text"
              placeholder="Search for Dates, Nuts, Spices..."
              className="
                w-full
                rounded-full
                border
                border-gray-300
                bg-white
                py-4
                pl-12
                pr-4
                text-sm
                outline-none
                shadow-sm
              "
            />
          </div>
        </div>

        {/* SHIPPING BANNER */}

        <div
          className="
          mt-5
          rounded-xl
          bg-[#EFE4D8]
          px-4
          py-3
          flex
          items-center
          justify-center
          gap-3
          text-center
        "
        >
          <Truck className="h-5 w-5 text-[#5A3E2B]" />

          <span
            className="
            text-sm
            md:text-base
            font-medium
            text-[#5A3E2B]
          "
          >
            Dispatch in 24 hours | Free shipping on orders above ₹1999
          </span>
        </div>

        

       {/* HERO CAROUSEL */}

<div className="mt-6 overflow-hidden rounded-2xl">
  <Swiper
    modules={[Pagination, Autoplay]}
    autoplay={{
      delay: 3000,
      disableOnInteraction: false,
    }}
    loop={true}
    onSlideChange={(swiper) => {
      setActiveSlide(swiper.realIndex + 1);
    }}
  >
    {desktopBanners.map((banner, index) => (
      <SwiperSlide key={index}>
        <picture>
          <source
            media="(max-width: 768px)"
            srcSet={mobileBanners[index]}
          />

          <img
            src={banner}
            alt={`Banner ${index + 1}`}
            className="w-full rounded-2xl"
          />
        </picture>
      </SwiperSlide>
    ))}
  </Swiper>
</div>

      {/* COUNTER */}

<div
  className="
    flex
    items-center
    justify-center
    gap-4
    mt-4
  "
>
  <button
    className="
      text-2xl
      text-[#5A3E2B]
    "
  >
    ‹
  </button>

  <span
    className="
      text-xl
      font-semibold
      text-[#000]
    "
  >
    {activeSlide} / {desktopBanners.length}
  </span>

  <button
    className="
      text-2xl
      text-[#5A3E2B]
    "
  >
    ›
  </button>
</div>

       {/* DOTS */}

<div
  className="
    flex
    justify-center
    gap-2
    mt-3
  "
>
  {desktopBanners.map((_, index) => (
    <div
      key={index}
      className={`
        h-2
        rounded-full
        transition-all
        duration-300
        ${
          activeSlide === index + 1
            ? "w-8 bg-[#C89B5E]"
            : "w-2 bg-gray-300"
        }
      `}
    />
  ))}
</div>

      </div>
    </section>
  );
};

export default Hero;