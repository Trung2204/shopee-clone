export type Product = {
    _id: string;
    images: [];
    price: number;
    rating: number;
    price_before_discount: number;
    quantity: number;
    sold: number;
    view: number;
    name: string;
    description: string;
    category: {
        _id: string;
        name: string;
    },
    image: string;
    createdAt: string;
    updatedAt: string;
};

export type ProductCardProps = {
  product: Product;
};

export type ProductCardListProps = {
  productList: Product[];
};