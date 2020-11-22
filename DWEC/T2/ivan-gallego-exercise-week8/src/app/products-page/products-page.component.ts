import { Component, OnInit } from '@angular/core';
import { Product } from '../interfaces/product';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'sp-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent implements OnInit {

  products: Product[] = [];
  search = '';

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.products = this.productsService.getProducts();
  }

  addProduct(product: Product): void {
    this.products.push(product);
  }

  deleteProduct(product: Product): void {
    const index = this.products.indexOf(product);
    if (index > -1) {
      this.products.splice(index, 1);
    }
  }

}
