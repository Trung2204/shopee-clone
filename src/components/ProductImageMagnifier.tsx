"use client";

import React from "react";
import Zoom from "react-zoom-image-hover";

function ProductImageMagnifier({ imageSrc }: { imageSrc: string }) {
  return (
    <div className="relative w-full cursor-zoom-in overflow-hidden pt-[100%] shadow">
      <Zoom
        height={"100%"}
        width={"100%"}
        zoomScale={2}
        transitionTime={0.2}
        src={imageSrc}
        className="absolute left-0 top-0 h-full w-full bg-white object-cover border-black"
      />
    </div>
  );
}

export default ProductImageMagnifier;
