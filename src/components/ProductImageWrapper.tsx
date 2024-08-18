"use client";

import { Fragment, useState } from "react";
import ProductImageMagnifier from "./ProductImageMagnifier";
import ProductImageSlider from "./ProductImageSlider";
import { ImageSlide } from "@/types/image.slide.type";

interface ProductImageWrapperProps {
  initialImage: string;
  imageSlideList: ImageSlide[];
}

const ProductImageWrapper = ({
  initialImage,
  imageSlideList,
}: ProductImageWrapperProps) => {
  const [currentImage, setCurrentImage] = useState(initialImage);

  return (
    <Fragment>
      <ProductImageMagnifier imageSrc={currentImage} />
      <ProductImageSlider
        imageSlideList={imageSlideList}
        onImageHover={(src: string) => setCurrentImage(src)}
      />
    </Fragment>
  );
};

export default ProductImageWrapper;
