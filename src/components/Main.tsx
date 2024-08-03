import React from "react";
import Image from "next/image";

const Main = () => {
  return (
    <main className="main-body h-screen bg-gray-200 py-6 text-black">
      <div className="main-content">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-3">
            <div className="py-4">
              {/* All Categories */}
              <a
                href="/"
                className="flex items-center font-bold text-lg text-orange-primary"
              >
                <Image
                  src="../../assets/icons/hamburger-list-menu.svg"
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
                  src="../../assets/icons/filter.svg"
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
                        value=""
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
                        value=""
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
          </div>
          <div className="col-span-9"></div>
        </div>
      </div>
    </main>
  );
};

export default Main;
