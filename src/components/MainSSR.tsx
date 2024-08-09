import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Product } from "@/types/product.type";
import { FetchedCategories, FetchedData } from "@/types/fetched.data.type";
import ProductCardList from "./ProductCardList";
import PriceSelector from "./PriceSelector";
import { Category } from "@/types/category.type";

type Props = {
  searchParams: {
    page?: string;
    limit?: string;
    // sort_by?: "view" | "createdAt" | "sold" | "price" | "";
    // order?: "asc" | "desc" | "";
    sort_by?: string;
    order?: string;
    category?: string;
  };
};

// Fetch data from API
async function getProducts({
  page,
  limit,
  sort_by,
  order,
  category,
}: {
  page: number;
  limit: number;
  // sort_by: "view" | "createdAt" | "sold" | "price" | "";
  // order: "asc" | "desc" | "";
  sort_by: string;
  order: string;
  category?: string; // Make category optional
}) {
  const queryParams = new URLSearchParams({
    page: page.toString(),
    limit: limit.toString(),
    sort_by: sort_by,
    order: order,
  });

  // Only add category to queryParams if it's not empty or undefined
  if (category) {
    queryParams.append("category", category);
  }
  console.log("getProducts", queryParams);

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

async function getCategories() {
  const res = await fetch("https://api-ecom.duthanhduoc.com/categories");

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  const fetchedData: FetchedCategories = await res.json();
  console.log(fetchedData.message);
  return fetchedData.data;
}

const MainSSR = async (props: Props) => {
  const { searchParams } = props;
  console.log("searchParam", searchParams);
  const pageParam =
    parseInt(searchParams.page || "1", 10) < 0
      ? 1
      : parseInt(searchParams.page || "1", 10);
  const limitParam =
    parseInt(searchParams.limit || "20", 10) < 0
      ? 1
      : parseInt(searchParams.limit || "20", 10);

  const sort_byParam = searchParams.sort_by || "";
  const orderParam = searchParams.order || "";
  const categoryParam = searchParams.category || "";
  console.log("categoryParam", categoryParam);

  const productData = await getProducts({
    page: pageParam,
    limit: limitParam,
    sort_by: sort_byParam,
    order: orderParam,
    category: categoryParam || undefined, // Pass undefined if categoryParam is empty
  });

  const products: Product[] = productData.products;

  const totalPages = productData.pagination.page_size;
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  const categories: Category[] = await getCategories();

  const starPosition = [
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
          {/* Side bar / Filter Options */}
          <section className="col-span-3">
            <div className="py-4">
              {/* All Categories */}
              <Link
                href="/"
                className={`flex items-center font-bold text-lg ${
                  !categoryParam ? "text-orange-primary" : "text-black"
                }`}
              >
                <svg viewBox="0 0 12 10" className="mr-3 h-4 w-3 fill-current">
                  <g fillRule="evenodd" stroke="none" strokeWidth="1">
                    <g transform="translate(-373 -208)">
                      <g transform="translate(155 191)">
                        <g transform="translate(218 17)">
                          <path d="m0 2h2v-2h-2zm4 0h7.1519633v-2h-7.1519633z"></path>
                          <path d="m0 6h2v-2h-2zm4 0h7.1519633v-2h-7.1519633z"></path>
                          <path d="m0 10h2v-2h-2zm4 0h7.1519633v-2h-7.1519633z"></path>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
                <span>All Categories</span>
              </Link>
              <div className="divider"></div>
              {/* Category list */}
              <ul>
                {categories.map((category) => (
                  <li className="py-2 pl-2" key={category._id}>
                    <Link
                      href={`/?page=${pageParam}&limit=${limitParam}&category=${category._id}`}
                      className={`relative px-2 ${
                        categoryParam === category._id
                          ? "text-orange-primary font-semibold"
                          : "text-black"
                      }`}
                      scroll={false}
                    >
                      <svg
                        viewBox="0 0 4 7"
                        className={`absolute left-[-10px] top-2 h-2 w-2 fill-orange-primary ${
                          categoryParam !== category._id ? "hidden" : "block"
                        }`}
                      >
                        <polygon points="4 3.5 0 0 0 7"></polygon>
                      </svg>
                      {category.name}
                    </Link>
                  </li>
                ))}
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
                {starPosition.map((stars, index) => (
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
              <Link
                href={`/?page=${pageParam}&limit=${limitParam}`}
                scroll={false}
                className="flex w-full items-center justify-center bg-orange-primary p-2 text-sm uppercase text-white hover:bg-orange-primary/80"
              >
                Clear All
              </Link>
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
                      href={`/?page=${pageParam}&limit=${limitParam}&sort_by=${sortBy}${
                        categoryParam !== "" ? `&category=${categoryParam}` : ""
                      }`}
                      scroll={false}
                    >
                      <div
                        className={`h-8 px-4 text-center text-sm capitalize flex items-center justify-center ${
                          sort_byParam === sortBy ||
                          (sort_byParam === "" && sortBy === "createdAt")
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
                  <PriceSelector page={pageParam} limit={limitParam} />
                </div>
                {/* Pagnigation */}
                <div className="flex items-center">
                  <div>
                    <span className="text-orange-primary">{pageParam}</span>
                    <span>/{totalPages}</span>
                  </div>
                  <div className="ml-2 flex">
                    {pageParam > 1 ? (
                      <Link
                        href={
                          // sort_byParam === ""
                          //   ? `/?page=${pageParam - 1}&limit=${limitParam}`
                          //   : `/?page=${
                          //       pageParam - 1
                          //     }&limit=${limitParam}&sort_by=${sort_byParam}&order=${orderParam}`
                          // &order=${orderParam}${
                          //         categoryParam !== ""
                          //           ? `&category=${categoryParam}`
                          //           : ""
                          //       }
                          `/?page=${pageParam - 1}&limit=${limitParam}${
                            sort_byParam !== ""
                              ? `&sort_by=${sort_byParam}${
                                  orderParam !== ""
                                    ? `&order=${orderParam}${
                                        categoryParam !== ""
                                          ? `&category=${categoryParam}`
                                          : ""
                                      }`
                                    : `${
                                        categoryParam !== ""
                                          ? `&category=${categoryParam}`
                                          : ""
                                      }`
                                }`
                              : `${
                                  categoryParam !== ""
                                    ? `&category=${categoryParam}`
                                    : ""
                                }`
                          }`
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
                    {pageParam < totalPages ? (
                      <Link
                        href={`/?page=${pageParam + 1}&limit=${limitParam}${
                          sort_byParam !== ""
                            ? `&sort_by=${sort_byParam}${
                                orderParam !== ""
                                  ? `&order=${orderParam}${
                                      categoryParam !== ""
                                        ? `&category=${categoryParam}`
                                        : ""
                                    }`
                                  : `${
                                      categoryParam !== ""
                                        ? `&category=${categoryParam}`
                                        : ""
                                    }`
                              }`
                            : `${
                                categoryParam !== ""
                                  ? `&category=${categoryParam}`
                                  : ""
                              }`
                        }`}
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
              {pageParam > 1 ? (
                <Link
                  href={
                    // sort_byParam === ""
                    //   ? `/?page=${pageParam - 1}&limit=${limitParam}`
                    //   : `/?page=${
                    //       pageParam - 1
                    //     }&limit=${limitParam}&sort_by=${sort_byParam}&order=${orderParam}`
                    `/?page=${pageParam - 1}&limit=${limitParam}${
                      sort_byParam !== ""
                        ? `&sort_by=${sort_byParam}${
                            orderParam !== ""
                              ? `&order=${orderParam}${
                                  categoryParam !== ""
                                    ? `&category=${categoryParam}`
                                    : ""
                                }`
                              : `${
                                  categoryParam !== ""
                                    ? `&category=${categoryParam}`
                                    : ""
                                }`
                          }`
                        : `${
                            categoryParam !== ""
                              ? `&category=${categoryParam}`
                              : ""
                          }`
                    }`
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
                    // sort_byParam === ""
                    //   ? `/?page=${pageNum}&limit=${limitParam}`
                    //   : `/?page=${pageNum}&limit=${limitParam}&sort_by=${sort_byParam}&order=${orderParam}`
                    `/?page=${pageParam - 1}&limit=${limitParam}${
                      sort_byParam !== ""
                        ? `&sort_by=${sort_byParam}${
                            orderParam !== ""
                              ? `&order=${orderParam}${
                                  categoryParam !== ""
                                    ? `&category=${categoryParam}`
                                    : ""
                                }`
                              : `${
                                  categoryParam !== ""
                                    ? `&category=${categoryParam}`
                                    : ""
                                }`
                          }`
                        : `${
                            categoryParam !== ""
                              ? `&category=${categoryParam}`
                              : ""
                          }`
                    }`
                  }
                  scroll={false}
                >
                  <div
                    className={`mx-2 cursor-pointer rounded border bg-white px-3 py-2 shadow-sm ${
                      pageParam === pageNum
                        ? "border-cyan-500"
                        : "border-transparent"
                    }`}
                  >
                    {pageNum}
                  </div>
                </Link>
              ))}
              {pageParam < totalPages ? (
                <Link
                  href={
                    // sort_byParam === ""
                    //   ? `/?page=${pageParam - 1}&limit=${limitParam}`
                    //   : `/?page=${
                    //       pageParam - 1
                    //     }&limit=${limitParam}&sort_by=${sort_byParam}&order=${orderParam}`
                    `/?page=${pageParam + 1}&limit=${limitParam}${
                      sort_byParam !== ""
                        ? `&sort_by=${sort_byParam}${
                            orderParam !== ""
                              ? `&order=${orderParam}${
                                  categoryParam !== ""
                                    ? `&category=${categoryParam}`
                                    : ""
                                }`
                              : `${
                                  categoryParam !== ""
                                    ? `&category=${categoryParam}`
                                    : ""
                                }`
                          }`
                        : `${
                            categoryParam !== ""
                              ? `&category=${categoryParam}`
                              : ""
                          }`
                    }`
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

export default MainSSR;
