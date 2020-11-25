import { Category } from './category';
import { ProductBase } from './product-base';

export interface Product extends ProductBase {
    category: Category;
}
