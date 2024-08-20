"use client";

import { getProductsTesting } from "./MainSSR";
import { useQuery } from "@tanstack/react-query";

export default function Product() {
  const { data, error } = useQuery({
    queryKey: ["products"],
    queryFn: getProductsTesting,
  });
  if (error) <h2>{error.message}</h2>;
  if (data)
    return (
      <div>
        <h1>{data[0].name}</h1>
      </div>
    );
}
