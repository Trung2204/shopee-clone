"use client";

import { searchParamsProps } from "@/types/search.params.type";
import { usePathname, useRouter } from "next/navigation";
import React, { ChangeEvent, useState } from "react";

function PriceSelector({ searchParams }: searchParamsProps) {
  const router = useRouter();
  const path = usePathname();
  const [selectedPrice, setSelectedPrice] = useState(""); // Initialize with an empty string

  const handlePriceChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    setSelectedPrice(selectedValue);

    // Construct the query parameters
    const queryParams = new URLSearchParams({
      ...searchParams,
      sort_by: "price", // You can set this value dynamically if needed
      order: selectedValue,
    }).toString();

    // Update the URL
    const newUrl = `${path}?${queryParams}`;

    router.push(newUrl, { scroll: false });
  };

  return (
    <select
      value={selectedPrice}
      onChange={handlePriceChange}
      className={`h-8 px-4 text-left text-sm capitalize outline-none ${
        selectedPrice !== ""
          ? "bg-orange-primary text-white hover:bg-orange-primary/90"
          : "bg-white text-black hover:bg-slate-200"
      }`}
    >
      <option value="" disabled className="bg-white text-black">
        Price
      </option>
      <option value="asc" className="bg-white text-black">
        Price: Low to High
      </option>
      <option value="desc" className="bg-white text-black">
        Price: High to Low
      </option>
    </select>
  );
}

export default PriceSelector;
