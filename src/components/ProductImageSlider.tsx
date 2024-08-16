"use client";

import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

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

export default function SimpleSlider() {
  const settings = {
    autoplaySpeed: 3500,
    fade: false,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnHover: false,
    pauseOnFocus: false,
    prevArrow: <Prev />,
    nextArrow: <Next />,
  };

  return (
    <Slider {...settings}>
      <div>
        <h3>1</h3>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
      {/* <div className="relative w-full pt-[100%]">
        <Image
          src="/assets/images/example.jpg"
          alt="Example Image"
          width={1024}
          height={1024}
          className="absolute left-0 top-0 h-full w-full bg-white object-cover"
        />
      </div> */}
    </Slider>
  );
}
