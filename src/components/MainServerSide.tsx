import Link from "next/link";
import Image from "next/image";
import React from "react";

export const MainServerSide = () => {
  return (
    <main className="main-body h-auto bg-gray-200 py-6 text-black">
      <div className="main-content">
        <div className="grid grid-cols-12 gap-6">
          {/* Filter Options */}
          <section className="col-span-3">
            <div className="py-4">
              {/* All Categories */}
              <Link
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
              </Link>
              <div className="divider"></div>
              {/* Category list */}
              <ul></ul>
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
                        value={""}
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
                        value={""}
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
              <ul className="my-3"></ul>
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
                {/* Pagnigation */}
                <div className="flex items-center"></div>
              </div>
            </section>
            {/* Product Listings */}
            <section className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"></section>
            {/* Pagigation buttons */}
            <div className="mt-6 flex flex-wrap justify-center"></div>
          </section>
        </div>
      </div>
    </main>
  );
};
