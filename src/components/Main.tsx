"use client";

import React, { ChangeEvent } from "react";
import Image from "next/image";
import { useState } from "react";

const Main = () => {
  const [searchText, setsearchText] = useState("");
  const handleSearchChange = (e: ChangeEvent) => {};

  const starData = [
    { full: 5, empty: 0 },
    { full: 4, empty: 1 },
    { full: 3, empty: 2 },
    { full: 2, empty: 3 },
    { full: 1, empty: 4 },
  ];

  return (
    <main className="main-body h-screen bg-gray-200 py-6 text-black">
      <div className="main-content">
        <div className="grid grid-cols-12 gap-6">
          {/* Filter Options */}
          <div className="col-span-3">
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
                <form className="mt-2">
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
          </div>
          {/* Product Area */}
          <div className="col-span-9">
            {/* Sort Options */}
            <div className="bg-gray-300/40 px-3 py-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex flex-wrap items-center gap-2">
                  <div>Sort By</div>
                  <button className="h-8 px-4 text-center text-sm capitalize  bg-white text-black hover:bg-slate-100">
                    Popular
                  </button>
                  <button className="h-8 px-4 text-center text-sm capitalize  bg-orange-primary text-white hover:bg-orange/80">
                    Newest
                  </button>
                  <button className="h-8 px-4 text-center text-sm capitalize  bg-white text-black hover:bg-slate-100">
                    Best Selling
                  </button>
                </div>
                <div className="flex items-center"></div>
              </div>
            </div>
            {/* Product Listings */}
            {/* Pagigation buttons */}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
