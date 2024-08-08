import { Product } from "./product.type";

export type FetchedData = {
    message: string;
    data: { 
        products: Product[]; 
        pagination: {
            page: number;
            limit: number;
            page_size: number;
        }
    };
}

export type FetchedCategories = {
    message: string;
    data: Array<Object>;
}