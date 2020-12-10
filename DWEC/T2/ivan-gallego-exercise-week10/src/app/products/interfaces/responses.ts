import { Category } from './category';
import { Product } from './product';

export interface ProductsResponse {
    products: Product[];
}

export interface ProductResponse {
    product: Product;
}

export interface CategoriesResponse {
    categories: Category[];
}
