"use client";

import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ImageSlide } from "@/types/image.slide.type";

const Prev = (props: any) => {
  const { onClick } = props;
  //This onClick prop is native to React Slick
  return (
    <button
      onClick={onClick}
      className={`w-fit top-1/2 opacity-0 lg:opacity-100 text-primary flex items-center justify-center rounded-full bg-background/20 hover:bg-background/30 p-1 shadow-md absolute z-10 left-5`}
    >
      <ChevronLeft width={40} height={40} color="white" strokeWidth={2} />
    </button>
  );
};
const Next = (props: any) => {
  const { onClick } = props;
  //This onClick prop is native to React Slick
  return (
    <button
      onClick={onClick}
      className={`w-fit top-1/2 opacity-0 lg:opacity-100 text-primary flex items-center justify-center rounded-full bg-background/20 hover:bg-background/30 p-1 shadow-md absolute z-10 right-5`}
    >
      <ChevronRight width={40} height={40} color="white" strokeWidth={2} />
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
    speed: 200,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <Prev />,
    nextArrow: <Next />,
  };

  return (
    <div className="relative">
      <Slider {...settings}>
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
    </div>
  );
}
