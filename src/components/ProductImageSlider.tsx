// "use client";

import React, { useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ImageSlide } from "@/types/image.slide.type";

const Prev = (props: any) => {
  const { onClick } = props; //This onClick prop is native to React Slick

  return (
    <button
      onClick={onClick}
      className={
        "absolute left-0 top-1/2 z-10 h-9 w-5 -translate-y-1/2 bg-black/20 text-white hover:cursor-pointer"
      }
    >
      <ChevronLeft width={20} height={20} strokeWidth={1.5} />
    </button>
  );
};
const Next = (props: any) => {
  const { onClick } = props; //This onClick prop is native to React Slick

  return (
    <button
      onClick={onClick}
      className={
        "absolute right-0 top-1/2 z-10 h-9 w-5 -translate-y-1/2 bg-black/20 text-white hover:cursor-pointer"
      }
    >
      <ChevronRight width={20} height={20} strokeWidth={1.5} />
    </button>
  );
};

export default function ProductImageSlider({
  imageSlideList,
  onImageHover,
}: {
  imageSlideList: ImageSlide[];
  onImageHover: (src: string) => void;
}) {
  const settings = {
    dots: false,
    draggable: false,
    fade: false,
    infinite: false,
    speed: 100,
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: <Prev />,
    nextArrow: <Next />,
  };

  const [current, setCurrent] = useState("variant 0"); // Initial the first image is the chosen image

  return (
    <Slider {...settings} className="mt-4">
      {imageSlideList?.map((imageSlide) => (
        <div
          key={imageSlide.alt}
          className={`relative w-full pt-[100%] border-2 ${
            current === imageSlide.alt
              ? "border-orange-primary"
              : "border-white"
          }`}
          onMouseEnter={() => {
            setCurrent(imageSlide.alt);
            onImageHover(imageSlide.src);
          }}
        >
          <Image
            className="absolute left-0 top-0 h-full w-full bg-white object-cover"
            src={imageSlide.src}
            alt={imageSlide.alt}
            width={100}
            height={100}
          />
        </div>
      ))}
    </Slider>
  );
}
