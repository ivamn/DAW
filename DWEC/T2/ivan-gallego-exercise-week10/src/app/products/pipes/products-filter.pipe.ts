import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../interfaces/product';

@Pipe({
  name: 'productsFilter'
})
export class ProductsFilterPipe implements PipeTransform {

  transform(value: Product[], search: string): Product[] {
    if (search) {
      return value.filter(p => p.title.includes(search));
    } else {
      return value;
    }
  }

}
