"use client";

import React from "react";
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
        "absolute left-0 top-1/2 z-10 h-9 w-5 -translate-y-1/2 bg-black/20 text-white"
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
        "absolute right-0 top-1/2 z-10 h-9 w-5 -translate-y-1/2 bg-black/20 text-white"
      }
    >
      <ChevronRight width={20} height={20} strokeWidth={1.5} />
    </button>
  );
};

export default function ProductImageSlider({
  ImageSlideList,
}: {
  ImageSlideList: ImageSlide[];
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

  return (
    <Slider {...settings}>
      <div className="relative mt-4 grid grid-cols-5 gap-1">
        
        <div className="relative w-full pt-[100%]">
          {/* <Image
            src={image}
            alt={productName}
            width={1024}
            height={1024}
            className="absolute left-0 top-0 h-full w-full bg-white object-cover"
          /> */}
        </div>
        
      </div>
      {ImageSlideList?.map((imageSlide) => (
        <div
          key={imageSlide.alt}
          className="w-full h-[240px] md:h-[350px] lg:h-[500px] overflow-hidden relative"
        >
          <Image
            className="w-full h-full object-cover object-center"
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
