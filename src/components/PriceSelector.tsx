"use client";

import { usePathname, useRouter } from "next/navigation";
import React, { ChangeEvent, useState } from "react";

function PriceSelector({
  page,
  limit,
  category,
  rating_filter,
}: {
  page: number;
  limit: number;
  category: string;
  rating_filter: string;
}) {
  const router = useRouter();
  const path = usePathname();
  const [selectedPrice, setSelectedPrice] = useState(""); // Initialize with an empty string

  const handlePriceChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    setSelectedPrice(selectedValue);

    // Update the URL
    const newUrl = `${path}?page=${page}&limit=${limit}&sort_by=price&order=${selectedValue}${
      category !== "" ? `&category=${category}` : ""
    }${rating_filter !== "" ? `&rating_filter=${rating_filter}` : ""}`;
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
