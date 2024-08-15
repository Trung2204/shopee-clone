"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

export default function SimpleSlider() {
  var settings = {
    arrows: true,
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <Image
          src="/assets/images/example.jpg"
          alt="Example picture"
          width={1024}
          height={1024}
          className="h-[100px] w-[100px] bg-white object-cover"
        />
      </div>
      <div>
        <Image
          src="/assets/images/example.jpg"
          alt="Example picture"
          width={1024}
          height={1024}
          className="h-[100px] w-[100px] bg-white object-cover"
        />
      </div>
      <div>
        <Image
          src="/assets/images/example.jpg"
          alt="Example picture"
          width={1024}
          height={1024}
          className="h-[100px] w-[100px] bg-white object-cover"
        />
      </div>
    </Slider>
  );
}
