export type Product = {
  _id: string;
  image: string;
  name: string;
  price: number;
  price_before_discount: number;
  sold: number;
};

export type ProductCardProps = {
  product: Product;
  handleClick: () => void;
};

export type ProductCardListProps = {
  data: Product[];
  handleClick: () => void;
};