import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Product } from "@/types/product.type";
import { FetchedData } from "@/types/fetched.data.type";
import ProductCardList from "./ProductCardList";

type Props = {
  searchParams: {
    page?: string;
    limit?: string;
    sort_by?: string;
  };
};

// Fetch data from API
async function getData({
  page,
  limit,
  sort_by,
}: {
  page: number;
  limit: number;
  sort_by: string;
}) {
  const queryParams = new URLSearchParams({
    page: page.toString(),
    limit: limit.toString(),
    sort_by: sort_by,
  });

  const res = await fetch(
    `https://api-ecom.duthanhduoc.com/products?${queryParams.toString()}`
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  const fetchedData: FetchedData = await res.json();
  console.log(fetchedData.message);
  return fetchedData.data;
}

const MainServerSide = async (props: Props) => {
  const { searchParams } = props;
  const page = parseInt(searchParams.page || "1", 10);
  const limit = parseInt(searchParams.limit || "20", 10);
  const sort_by = searchParams.sort_by || "";

  const data = await getData({ page: page, limit: limit, sort_by: sort_by });

  const totalPages = data.pagination.page_size;
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );
  const products: Product[] = data.products;

  const starData = [
    { full: 5, empty: 0 },
    { full: 4, empty: 1 },
    { full: 3, empty: 2 },
    { full: 2, empty: 3 },
    { full: 1, empty: 4 },
  ];

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
              {/* <ul>
                {categories.map((category) => (
                  <li className="py-2 pl-2" key={category._id}>
                    <Link href="/" className="relative px-2">
                      {category.name}
                    </Link>
                  </li>
                ))}
              </ul> */}
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
                {/* Sort Option Buttons */}
                <div className="flex flex-wrap items-center gap-2">
                  <div>Sort By</div>
                  {["view", "createdAt", "sold"].map((sortBy) => (
                    <Link
                      key={sortBy}
                      href={`/?page=${page}&limit=${limit}&sort_by=${sortBy}`}
                      scroll={false}
                    >
                      <div
                        className={`h-8 px-4 text-center text-sm capitalize flex items-center justify-center ${
                          sort_by === sortBy ||
                          (sort_by === "" && sortBy === "createdAt")
                            ? "bg-orange-primary text-white hover:bg-orange-primary/80"
                            : "bg-white text-black hover:bg-slate-200"
                        }`}
                      >
                        {sortBy === "view"
                          ? "View"
                          : sortBy === "createdAt"
                          ? "Newest"
                          : "Best Selling"}
                      </div>
                    </Link>
                  ))}
                  <select className="h-8  px-4 text-left text-sm capitalize  outline-none  bg-white text-black hover:bg-slate-200">
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
                <div className="flex items-center">
                  <div>
                    <span className="text-orange-primary">{page}</span>
                    <span>/{totalPages}</span>
                  </div>
                  <div className="ml-2 flex">
                    {page > 1 ? (
                      <Link
                        href={
                          sort_by === ""
                            ? `/?page=${page - 1}&limit=${limit}`
                            : `/?page=${
                                page - 1
                              }&limit=${limit}&sort_by=${sort_by}`
                        }
                        scroll={false}
                      >
                        <div className="rounded border px-2 py-1 shadow-sm bg-white hover:bg-slate-200">
                          <Image
                            src="/assets/icons/left.svg"
                            alt="Left Icon"
                            width={12}
                            height={12}
                          />
                        </div>
                      </Link>
                    ) : (
                      <div className="rounded border px-2 py-1 shadow-sm cursor-not-allowed bg-white/50">
                        <Image
                          src="/assets/icons/left.svg"
                          alt="Left Icon"
                          width={12}
                          height={12}
                        />
                      </div>
                    )}
                    {page < totalPages ? (
                      <Link
                        href={
                          sort_by === ""
                            ? `/?page=${page + 1}&limit=${limit}`
                            : `/?page=${
                                page + 1
                              }&limit=${limit}&sort_by=${sort_by}`
                        }
                        scroll={false}
                      >
                        <div className="rounded border px-2 py-1 shadow-sm bg-white hover:bg-slate-200">
                          <Image
                            src="/assets/icons/right.svg"
                            alt="Right Icon"
                            width={12}
                            height={12}
                          />
                        </div>
                      </Link>
                    ) : (
                      <div className="rounded border px-2 py-1 shadow-sm cursor-not-allowed bg-white/50">
                        <Image
                          src="/assets/icons/right.svg"
                          alt="Right Icon"
                          width={12}
                          height={12}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </section>
            {/* Product Listings */}
            <section className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              <ProductCardList data={products} handleClick={() => {}} />
            </section>
            {/* Pagigation buttons */}
            <div className="mt-6 flex flex-wrap justify-center">
              {page > 1 ? (
                <Link
                  href={
                    sort_by === ""
                      ? `/?page=${page - 1}&limit=${limit}`
                      : `/?page=${page - 1}&limit=${limit}&sort_by=${sort_by}`
                  }
                  scroll={false}
                >
                  <div className="mx-2 rounded border px-3 py-2 shadow-sm bg-white">
                    Prev
                  </div>
                </Link>
              ) : (
                <div className="mx-2 rounded border px-3 py-2 shadow-sm cursor-not-allowed bg-white/50">
                  Prev
                </div>
              )}
              {pageNumbers.map((pageNum) => (
                <Link
                  key={pageNum}
                  href={
                    sort_by === ""
                      ? `/?page=${pageNum}&limit=${limit}`
                      : `/?page=${pageNum}&limit=${limit}&sort_by=${sort_by}`
                  }
                  scroll={false}
                >
                  <div
                    className={`mx-2 cursor-pointer rounded border bg-white px-3 py-2 shadow-sm ${
                      page === pageNum
                        ? "border-cyan-500"
                        : "border-transparent"
                    }`}
                  >
                    {pageNum}
                  </div>
                </Link>
              ))}
              {page < totalPages ? (
                <Link
                  href={
                    sort_by === ""
                      ? `/?page=${page - 1}&limit=${limit}`
                      : `/?page=${page - 1}&limit=${limit}&sort_by=${sort_by}`
                  }
                  scroll={false}
                >
                  <div className="mx-2 rounded border px-3 py-2 shadow-sm bg-white">
                    Next
                  </div>
                </Link>
              ) : (
                <div className="mx-2 rounded border px-3 py-2 shadow-sm cursor-not-allowed bg-white/50">
                  Next
                </div>
              )}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default MainServerSide;
