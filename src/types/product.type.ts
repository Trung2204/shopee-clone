export type Product = {
    _id: string;
    // images: [];
    price: number;
    rating: number;
    price_before_discount: number;
    // quantity: number;
    sold: number;
    // view: number;
    name: string;
    category: {
        _id: string;
        name: string;
    },
    image: string;
    // createdAt: string;
    // updatedAt: string;
};

export type ProductCardProps = {
  product: Product;
  handleClick: () => void;
};

export type ProductCardListProps = {
  data: Product[];
  handleClick: () => void;
};