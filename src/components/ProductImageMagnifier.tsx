"use client";
import React from "react";
import Zoom from "react-zoom-image-hover";

function ProductImageMagnifier() {
  return (
    <Zoom
      height={500}
      width={500}
      zoomScale={3}
      transitionTime={0.3}
      src="/assets/images/samsung-s24-ultra.jpg"
    />
  );
}

export default ProductImageMagnifier;
