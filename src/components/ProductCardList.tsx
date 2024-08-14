import { ProductCardListProps } from "@/types/product.type";
import { FC, Fragment } from "react";
import ProductCard from "./ProductCard";

const ProductCardList: FC<ProductCardListProps> = ({ productList }) => {
  return (
    <Fragment>
      {productList.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </Fragment>
  );
};

export default ProductCardList;
