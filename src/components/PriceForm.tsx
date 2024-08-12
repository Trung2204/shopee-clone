"use client";

import { searchParamsProps } from "@/types/search.params.type";
import { formatNumber, unformatNumber } from "@/utils/formatNumber";
import { usePathname, useRouter } from "next/navigation";
import React, { ChangeEvent, FormEvent, useState } from "react";

function PriceForm({ searchParams }: searchParamsProps) {
  const router = useRouter();
  const path = usePathname();
  const [minPrice, setMinPrice] = useState(""); // Initialize with an empty string
  const [maxPrice, setMaxPrice] = useState(""); // Initialize with an empty string
  console.log(minPrice, maxPrice);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Construct the query parameters
    const queryParams = new URLSearchParams({
      ...searchParams,
      price_max: maxPrice,
      price_min: minPrice,
    }).toString();

    // Update the URL
    const newUrl = `${path}?${queryParams}`;

    router.push(newUrl, { scroll: false });
  };

  const isInvalidPrice =
    maxPrice !== "" &&
    minPrice !== "" &&
    parseFloat(maxPrice) < parseFloat(minPrice);

  return (
    <form onSubmit={handleSubmit} className="mt-2">
      {/* Input field */}
      <div className="flex items-start">
        {/* Min Price */}
        <div className="grow">
          <input
            type="text"
            placeholder="₫ FROM"
            value={formatNumber(minPrice)}
            onChange={(e) => setMinPrice(unformatNumber(e.target.value))}
            className="p-1 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm"
          />
        </div>
        <div className="mx-2 mt-2 shrink-0">-</div>
        {/* Max Price */}
        <div className="grow">
          <input
            type="text"
            placeholder="₫ TO"
            value={formatNumber(maxPrice)}
            onChange={(e) => setMaxPrice(unformatNumber(e.target.value))}
            className="p-1 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm"
          />
        </div>
      </div>
      {/* Warning div */}
      {isInvalidPrice ? (
        <div className="mt-1 min-h-[1.25rem] text-center text-sm text-red-600">
          Invalid Price
        </div>
      ) : (
        <div className="mt-1 min-h-[1.25rem] text-center text-sm text-red-600"></div>
      )}
      {/* Submit Button */}
      <button
        className={`flex w-full items-center justify-center bg-orange-primary p-2 text-sm uppercase text-white hover:bg-orange-primary/80 ${
          isInvalidPrice
            ? "cursor-not-allowed opacity-70 hover:bg-orange-primary"
            : ""
        }`}
        disabled={isInvalidPrice}
      >
        <span>Apply</span>
      </button>
    </form>
  );
}

export default PriceForm;
