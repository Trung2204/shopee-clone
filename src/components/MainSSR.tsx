import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Product } from "@/types/product.type";
import { FetchedCategories, FetchedData } from "@/types/fetched.data.type";
import ProductCardList from "./ProductCardList";
import PriceSelector from "./PriceSelector";
import { Category } from "@/types/category.type";
import PriceForm from "./PriceForm";
import { searchParamsProps } from "@/types/search.params.type";

type ApiProductsRequestParams = {
  page: number;
  limit: number;
  sort_by: string;
  order: string;
  category?: string; // Make category optional
  rating_filter?: string;
  price_max?: string;
  price_min?: string;
};

// Fetch data from API
async function getProducts({
  page,
  limit,
  sort_by,
  order,
  category,
  rating_filter,
  price_max,
  price_min,
}: ApiProductsRequestParams) {
  const requestParams = new URLSearchParams({
    page: page.toString(),
    limit: limit.toString(),
    sort_by: sort_by,
    order: order,
  });

  // Only add category to requestParams if it's not empty or undefined
  if (category) {
    requestParams.append("category", category);
  }
  if (rating_filter) {
    requestParams.append("rating_filter", rating_filter);
  }
  if (price_max) {
    requestParams.append("price_max", price_max);
  }
  if (price_min) {
    requestParams.append("price_min", price_min);
  }
  // console.log("URLSearchParams from getProducts()", requestParams);

  const res = await fetch(
    `https://api-ecom.duthanhduoc.com/products?${requestParams.toString()}`
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
  // console.log(fetchedData.message);
  return fetchedData.data;
}

const MainSSR = async (props: searchParamsProps) => {
  const { searchParams } = props;
  console.log(
    "searchParam from MainSSR",
    new URLSearchParams(searchParams),
    new URLSearchParams(searchParams).toString()
  );

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
  const rating_filterParam = searchParams.rating_filter || "";
  const price_maxParam = searchParams.price_max || "";
  const price_minParam = searchParams.price_min || "";

  const productData = await getProducts({
    page: pageParam,
    limit: limitParam,
    sort_by: sort_byParam,
    order: orderParam,
    category: categoryParam || undefined, // Pass undefined if categoryParam is empty
    rating_filter: rating_filterParam || undefined, // Pass undefined if rating_filterParam is empty
    price_max: price_maxParam || undefined, // Pass undefined if price_maxParam is empty
    price_min: price_minParam || undefined, // Pass undefined if price_minParam is empty
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
                      href={{
                        pathname: "/",
                        query: new URLSearchParams({
                          ...searchParams,
                          category: category._id,
                        }).toString(),
                      }}
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

              {/* Search Filter Title */}
              <div className="mt-4 flex items-center font-bold uppercase">
                <Image
                  src="/assets/icons/filter.svg"
                  alt="Filter Icon"
                  width={18}
                  height={18}
                  className="mr-3 h-4 w-3 fill-current stroke-current"
                />
                <span>Search Filter</span>
              </div>
              <div className="divider"></div>
              {/* Price Range */}
              <div className="my-5">
                <p>Price Range</p>
                <PriceForm searchParams={searchParams} />
              </div>
              <div className="divider"></div>
              {/* Review */}
              <p className="text-sm">Review</p>
              <ul className="my-3">
                {starPosition.map((stars, index) => (
                  <li key={index} className="py-1 pl-2">
                    <Link
                      href={{
                        pathname: "/",
                        query: new URLSearchParams({
                          ...searchParams,
                          rating_filter: `${5 - index}`,
                        }).toString(),
                      }}
                      scroll={false}
                      className="relative"
                    >
                      <svg
                        viewBox="0 0 4 7"
                        className={`absolute left-[-14px] top-[5px] h-[9px] w-[9px] fill-orange-primary ${
                          rating_filterParam !== `${5 - index}`
                            ? "hidden"
                            : "block"
                        }`}
                      >
                        <polygon points="4 3.5 0 0 0 7"></polygon>
                      </svg>
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
                        <p className="px-3">{5 - index} Star+</p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="divider"></div>
              {/* Clear All Button */}
              <Link
                href={"/"}
                scroll={false}
                className="flex w-full items-center justify-center bg-orange-primary p-2 text-sm uppercase text-white hover:bg-orange-primary/80"
              >
                Clear All
              </Link>
            </div>
          </section>

          {/* Product Area */}
          <section className="col-span-9">
            {/* Sort Options + Pagination Buttons */}
            <section className="bg-gray-300/40 px-3 py-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                {/* Sort Option Buttons */}
                <div className="flex flex-wrap items-center gap-2">
                  <div>Sort By</div>
                  {["view", "createdAt", "sold"].map((sortBy) => (
                    <Link
                      key={sortBy}
                      href={{
                        pathname: "/",
                        query: new URLSearchParams({
                          ...searchParams,
                          sort_by: sortBy,
                        }).toString(),
                      }}
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
                  <PriceSelector searchParams={searchParams} />
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
                        href={`/?page=${pageParam - 1}&limit=${limitParam}${
                          sort_byParam !== "" ? `&sort_by=${sort_byParam}` : ""
                        }${orderParam !== "" ? `&order=${orderParam}` : ""}${
                          categoryParam !== ""
                            ? `&category=${categoryParam}`
                            : ""
                        }${
                          rating_filterParam !== ""
                            ? `&rating_filter=${rating_filterParam}`
                            : ""
                        }${
                          price_maxParam !== ""
                            ? `&price_max=${price_maxParam}`
                            : ""
                        }${
                          price_minParam !== ""
                            ? `&price_min=${price_minParam}`
                            : ""
                        }`}
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
                          sort_byParam !== "" ? `&sort_by=${sort_byParam}` : ""
                        }${orderParam !== "" ? `&order=${orderParam}` : ""}${
                          categoryParam !== ""
                            ? `&category=${categoryParam}`
                            : ""
                        }${
                          rating_filterParam !== ""
                            ? `&rating_filter=${rating_filterParam}`
                            : ""
                        }${
                          price_maxParam !== ""
                            ? `&price_max=${price_maxParam}`
                            : ""
                        }${
                          price_minParam !== ""
                            ? `&price_min=${price_minParam}`
                            : ""
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
                  href={`/?page=${pageParam - 1}&limit=${limitParam}${
                    sort_byParam !== "" ? `&sort_by=${sort_byParam}` : ""
                  }${orderParam !== "" ? `&order=${orderParam}` : ""}${
                    categoryParam !== "" ? `&category=${categoryParam}` : ""
                  }${
                    rating_filterParam !== ""
                      ? `&rating_filter=${rating_filterParam}`
                      : ""
                  }${
                    price_maxParam !== "" ? `&price_max=${price_maxParam}` : ""
                  }${
                    price_minParam !== "" ? `&price_min=${price_minParam}` : ""
                  }`}
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
                  href={`/?page=${pageNum}&limit=${limitParam}${
                    sort_byParam !== "" ? `&sort_by=${sort_byParam}` : ""
                  }${orderParam !== "" ? `&order=${orderParam}` : ""}${
                    categoryParam !== "" ? `&category=${categoryParam}` : ""
                  }${
                    rating_filterParam !== ""
                      ? `&rating_filter=${rating_filterParam}`
                      : ""
                  }${
                    price_maxParam !== "" ? `&price_max=${price_maxParam}` : ""
                  }${
                    price_minParam !== "" ? `&price_min=${price_minParam}` : ""
                  }`}
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
                  href={`/?page=${pageParam + 1}&limit=${limitParam}${
                    sort_byParam !== "" ? `&sort_by=${sort_byParam}` : ""
                  }${orderParam !== "" ? `&order=${orderParam}` : ""}${
                    categoryParam !== "" ? `&category=${categoryParam}` : ""
                  }${
                    rating_filterParam !== ""
                      ? `&rating_filter=${rating_filterParam}`
                      : ""
                  }${
                    price_maxParam !== "" ? `&price_max=${price_maxParam}` : ""
                  }${
                    price_minParam !== "" ? `&price_min=${price_minParam}` : ""
                  }`}
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
