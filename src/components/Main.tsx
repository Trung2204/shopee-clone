"use client";

import React, { ChangeEvent, FormEvent } from "react";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const Main = () => {
  const [searchText, setsearchText] = useState("");
  const handleSearchChange = (e: ChangeEvent) => {};
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle the form submission logic here
    console.log("Form submitted");
  };

  const starData = [
    { full: 5, empty: 0 },
    { full: 4, empty: 1 },
    { full: 3, empty: 2 },
    { full: 2, empty: 3 },
    { full: 1, empty: 4 },
  ];

  const productItems = Array.from({ length: 20 }, (_, index) => (
    <div key={index} className="col-span-1">
      <Link href="/">
        <div className="overflow-hidden rounded-sm bg-white shadow transition-transform duration-100 hover:translate-y-[-0.04rem] hover:shadow-md">
          <div className="relative w-full pt-[100%]">
            <Image
              src="/assets/images/samsung-s24-ultra.jpeg"
              alt="Smartphone"
              width={1024}
              height={1024}
              className="absolute left-0 top-0 h-full w-full bg-white object-cover"
            />
          </div>
          <div className="overflow-hidden p-2">
            <div className="min-h-[2rem] text-xs line-clamp-2">
              Samsung Galaxy S24 Ultra 12GB 256GB
            </div>
            <div className="mt-3 flex items-center">
              <div className="max-w-[50%] truncate text-gray-500 line-through">
                <span className="text-xs">₫</span>
                <span className="text-sm">3.990.000</span>
              </div>
              <div className="ml-1 truncate text-orange-primary">
                <span className="text-xs">₫</span>
                <span className="text-sm">3.990.000</span>
              </div>
            </div>
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
                <span>1,2k</span>
                <span className="ml-1">Sold</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  ));

  return (
    <main className="main-body h-auto bg-gray-200 py-6 text-black">
      <div className="main-content">
        <div className="grid grid-cols-12 gap-6">
          {/* Filter Options */}
          <section className="col-span-3">
            <div className="py-4">
              {/* All Categories */}
              <a
                href="/"
                className="flex items-center font-bold text-lg text-orange-primary"
              >
                <Image
                  src="/assets/icons/hamburger-list-menu.svg"
                  alt="List Icon"
                  width={15}
                  height={15}
                  className="mr-3 h-4 w-3 fill-current"
                />
                <span>All Categories</span>
              </a>
              <div className="divider"></div>
              {/* Category list */}
              <ul>
                <li className="py-2 pl-2">
                  <a href="/" className="relative px-2">
                    Watches
                  </a>
                </li>
                <li className="py-2 pl-2">
                  <a href="/" className="relative px-2">
                    T-Shirts
                  </a>
                </li>
                <li className="py-2 pl-2">
                  <a href="/" className="relative px-2">
                    Smartphones
                  </a>
                </li>
              </ul>
              {/* Search Filter */}
              <a
                href="/"
                className="mt-4 flex items-center font-bold uppercase"
              >
                <Image
                  src="/assets/icons/filter.svg"
                  alt="Filter Icon"
                  width={18}
                  height={18}
                  className="mr-3 h-4 w-3 fill-current stroke-current"
                />
                <span>Search Filter</span>
              </a>
              <div className="divider"></div>
              {/* Price Range */}
              <div className="my-5">
                <p>Price Range</p>
                <form className="mt-2" onSubmit={handleSubmit}>
                  {/* Input field */}
                  <div className="flex items-start">
                    {/* Min Price */}
                    <div className="grow">
                      <input
                        type="text"
                        placeholder="₫ FROM"
                        value={searchText}
                        onChange={handleSearchChange}
                        className="p-1 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm"
                      />
                    </div>
                    <div className="mx-2 mt-2 shrink-0">-</div>
                    {/* Max Price */}
                    <div className="grow">
                      <input
                        type="text"
                        placeholder="₫ TO"
                        name="price_max"
                        value={searchText}
                        onChange={handleSearchChange}
                        className="p-1 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm"
                      />
                    </div>
                  </div>
                  {/* Divider div */}
                  <div className="mt-1 min-h-[1.25rem] text-center text-sm text-red-600"></div>
                  {/* Submit Button */}
                  <button className="flex w-full items-center justify-center bg-orange-primary p-2 text-sm uppercase text-white hover:bg-orange-primary/80">
                    <span>Apply</span>
                  </button>
                </form>
              </div>
              <div className="divider"></div>
              {/* Review */}
              <p className="text-sm">Review</p>
              <ul className="my-3">
                {starData.map((stars, index) => (
                  <li key={index} className="py-1 pl-2">
                    <div className="flex gap-1 cursor-pointer items-center text-sm">
                      {[...Array(stars.full)].map((_, i) => (
                        <Image
                          key={`full-${i}`}
                          src="/assets/icons/star-full.svg"
                          alt="Full Star Icon"
                          width={18}
                          height={18}
                        />
                      ))}
                      {[...Array(stars.empty)].map((_, i) => (
                        <Image
                          key={`empty-${i}`}
                          src="/assets/icons/star-empty.svg"
                          alt="Empty Star Icon"
                          width={18}
                          height={18}
                        />
                      ))}
                    </div>
                  </li>
                ))}
              </ul>
              <div className="divider"></div>
              {/* Clear All Button */}
              <button className="flex w-full items-center justify-center bg-orange-primary p-2 text-sm uppercase text-white hover:bg-orange-primary/80">
                <span>Clear All</span>
              </button>
            </div>
          </section>

          {/* Product Area */}
          <section className="col-span-9">
            {/* Sort Options */}
            <section className="bg-gray-300/40 px-3 py-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex flex-wrap items-center gap-2">
                  <div>Sort By</div>
                  <button className="h-8 px-4 text-center text-sm capitalize  bg-white text-black hover:bg-slate-100">
                    Popular
                  </button>
                  <button className="h-8 px-4 text-center text-sm capitalize  bg-orange-primary text-white hover:bg-orange-primary/80">
                    Newest
                  </button>
                  <button className="h-8 px-4 text-center text-sm capitalize  bg-white text-black hover:bg-slate-100">
                    Best Selling
                  </button>
                  <select className="h-8  px-4 text-left text-sm capitalize  outline-none  bg-white text-black hover:bg-slate-100">
                    <option value="" className="bg-white text-black">
                      Price
                    </option>
                    <option value="asc" className="bg-white text-black">
                      Price: Low to High
                    </option>
                    <option value="desc" className="bg-white text-black">
                      Price: High to Low
                    </option>
                  </select>
                </div>
                <div className="flex items-center">
                  <div>
                    <span className="text-orange-primary">1</span>
                    <span>/3</span>
                  </div>
                  <div className="ml-2 flex">
                    <button>
                      <Image
                        src="/assets/icons/left.svg"
                        alt="Left Icon"
                        width={20}
                        height={20}
                        className="cursor-not-allowed bg-white/40 shadow"
                      />
                    </button>
                    <button>
                      <Image
                        src="/assets/icons/right.svg"
                        alt="Right Icon"
                        width={20}
                        height={20}
                        className="rounded-bl-sm rounded-tl-sm bg-white shadow hover:bg-slate-300"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </section>
            {/* Product Listings */}
            <section className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {productItems}
            </section>
            {/* Pagigation buttons */}
            <div className="mt-6 flex flex-wrap justify-center">
              <span className="mx-2 cursor-not-allowed rounded border bg-white/60 px-3 py-2 shadow-sm">
                Prev
              </span>
              <Link
                className="mx-2 cursor-pointer rounded border bg-white px-3 py-2 shadow-sm border-cyan-500"
                href="/"
              >
                1
              </Link>
              <Link
                className="mx-2 cursor-pointer rounded border bg-white px-3 py-2 shadow-sm border-transparent"
                href="/"
              >
                2
              </Link>
              <Link
                className="mx-2 cursor-pointer rounded border bg-white px-3 py-2 shadow-sm border-transparent"
                href="/"
              >
                3
              </Link>
              <Link
                className="mx-2 cursor-pointer rounded border bg-white px-3 py-2 shadow-sm"
                href="/"
              >
                Next
              </Link>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Main;
