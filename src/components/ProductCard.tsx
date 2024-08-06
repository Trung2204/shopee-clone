import Link from "next/link";
import React, { FC } from "react";
import Image from "next/image";
import { ProductCardProps } from "@/types/product.type";

const ProductCard: FC<ProductCardProps> = ({ product, handleClick }) => {
  const { _id, name, price, price_before_discount, image, sold } = product;

  return (
    <div key={_id} className="col-span-1">
      <Link href="/">
        <div className="overflow-hidden rounded-sm bg-white shadow transition-transform duration-100 hover:translate-y-[-0.04rem] hover:shadow-md">
          {/* Image */}
          <div className="relative w-full pt-[100%]">
            <Image
              src={image}
              alt={name}
              width={1024}
              height={1024}
              className="absolute left-0 top-0 h-full w-full bg-white object-cover"
            />
          </div>
          {/* Desciption */}
          <div className="overflow-hidden p-2">
            {/* Product's name */}
            <div className="min-h-[2rem] text-xs line-clamp-2">{name}</div>
            {/* Price */}
            <div className="mt-3 flex items-center">
              <div className="max-w-[50%] truncate text-gray-500 line-through">
                <span className="text-xs">₫</span>
                <span className="text-sm">{price_before_discount}</span>{" "}
                {/* * 19000 */}
              </div>
              <div className="ml-1 truncate text-orange-primary">
                <span className="text-xs">₫</span>
                <span className="text-sm">{price}</span> {/* * 19000 */}
              </div>
            </div>
            {/* Review + Sold */}
            <div className="mt-3 flex items-center justify-end">
              <div className="flex items-center">
                <div className="relative">
                  <div
                    className="absolute left-0 top-0 h-full overflow-hidden"
                    style={{ width: "100%" }}
                  >
                    <svg
                      enableBackground="new 0 0 15 15"
                      viewBox="0 0 15 15"
                      x="0"
                      y="0"
                      className="h-3 w-3 fill-yellow-300 text-yellow-300"
                    >
                      <polygon
                        points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit="10"
                      ></polygon>
                    </svg>
                  </div>
                  <svg
                    enableBackground="new 0 0 15 15"
                    viewBox="0 0 15 15"
                    x="0"
                    y="0"
                    className="h-3 w-3 fill-current text-gray-300"
                  >
                    <polygon
                      points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeMiterlimit="10"
                    ></polygon>
                  </svg>
                </div>
                <div className="relative">
                  <div
                    className="absolute left-0 top-0 h-full overflow-hidden"
                    style={{ width: "100%" }}
                  >
                    <svg
                      enableBackground="new 0 0 15 15"
                      viewBox="0 0 15 15"
                      x="0"
                      y="0"
                      className="h-3 w-3 fill-yellow-300 text-yellow-300"
                    >
                      <polygon
                        points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit="10"
                      ></polygon>
                    </svg>
                  </div>
                  <svg
                    enableBackground="new 0 0 15 15"
                    viewBox="0 0 15 15"
                    x="0"
                    y="0"
                    className="h-3 w-3 fill-current text-gray-300"
                  >
                    <polygon
                      points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeMiterlimit="10"
                    ></polygon>
                  </svg>
                </div>
                <div className="relative">
                  <div
                    className="absolute left-0 top-0 h-full overflow-hidden"
                    style={{ width: "100%" }}
                  >
                    <svg
                      enableBackground="new 0 0 15 15"
                      viewBox="0 0 15 15"
                      x="0"
                      y="0"
                      className="h-3 w-3 fill-yellow-300 text-yellow-300"
                    >
                      <polygon
                        points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit="10"
                      ></polygon>
                    </svg>
                  </div>
                  <svg
                    enableBackground="new 0 0 15 15"
                    viewBox="0 0 15 15"
                    x="0"
                    y="0"
                    className="h-3 w-3 fill-current text-gray-300"
                  >
                    <polygon
                      points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeMiterlimit="10"
                    ></polygon>
                  </svg>
                </div>
                <div className="relative">
                  <div
                    className="absolute left-0 top-0 h-full overflow-hidden"
                    style={{ width: "100%" }}
                  >
                    <svg
                      enableBackground="new 0 0 15 15"
                      viewBox="0 0 15 15"
                      x="0"
                      y="0"
                      className="h-3 w-3 fill-yellow-300 text-yellow-300"
                    >
                      <polygon
                        points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit="10"
                      ></polygon>
                    </svg>
                  </div>
                  <svg
                    enableBackground="new 0 0 15 15"
                    viewBox="0 0 15 15"
                    x="0"
                    y="0"
                    className="h-3 w-3 fill-current text-gray-300"
                  >
                    <polygon
                      points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeMiterlimit="10"
                    ></polygon>
                  </svg>
                </div>
                <div className="relative">
                  <div
                    className="absolute left-0 top-0 h-full overflow-hidden"
                    style={{ width: "60%" }}
                  >
                    <svg
                      enableBackground="new 0 0 15 15"
                      viewBox="0 0 15 15"
                      x="0"
                      y="0"
                      className="h-3 w-3 fill-yellow-300 text-yellow-300"
                    >
                      <polygon
                        points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit="10"
                      ></polygon>
                    </svg>
                  </div>
                  <svg
                    enableBackground="new 0 0 15 15"
                    viewBox="0 0 15 15"
                    x="0"
                    y="0"
                    className="h-3 w-3 fill-current text-gray-300"
                  >
                    <polygon
                      points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeMiterlimit="10"
                    ></polygon>
                  </svg>
                </div>
              </div>
              <div className="ml-2 text-sm">
                <span>{sold}</span>
                <span className="ml-1">Sold</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
