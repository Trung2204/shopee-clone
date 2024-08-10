"use client";

import { usePathname, useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";

function PriceForm({
  page,
  limit,
  sort_by,
  order,
  category,
  rating_filter,
}: {
  page: number;
  limit: number;
  sort_by: string;
  order: string;
  category: string;
  rating_filter: string;
}) {
  const router = useRouter();
  const path = usePathname();
  const [minPrice, setMinPrice] = useState(""); // Initialize with an empty string
  const [maxPrice, setMaxPrice] = useState(""); // Initialize with an empty string

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Update the URL
    const newUrl = `${path}?page=${page}&limit=${limit}${
      sort_by !== "" ? `&sort_by=${sort_by}` : ""
    }${order !== "" ? `&order=${order}` : ""}${
      category !== "" ? `&category=${category}` : ""
    }${
      rating_filter !== "" ? `&rating_filter=${rating_filter}` : ""
    }&price_max=${maxPrice}&price_min=${minPrice}`;

    router.push(newUrl, { scroll: false });
  };

  return (
    <form onSubmit={handleSubmit} className="mt-2">
      {/* Input field */}
      <div className="flex items-start">
        {/* Min Price */}
        <div className="grow">
          <input
            type="text"
            placeholder="₫ FROM"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            className="p-1 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm"
          />
        </div>
        <div className="mx-2 mt-2 shrink-0">-</div>
        {/* Max Price */}
        <div className="grow">
          <input
            type="text"
            placeholder="₫ TO"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
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
  );
}

export default PriceForm;
