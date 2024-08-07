import { ProductCardListProps } from "@/types/product.type";
import { FC, Fragment } from "react";
import ProductCard from "./ProductCard";

const ProductCardList: FC<ProductCardListProps> = ({ data, handleClick }) => {
  return (
    <Fragment>
      {data.map((product) => (
        <ProductCard
          key={product._id}
          product={product}
          handleClick={handleClick}
        />
      ))}
    </Fragment>
  );
};

export default ProductCardList;;