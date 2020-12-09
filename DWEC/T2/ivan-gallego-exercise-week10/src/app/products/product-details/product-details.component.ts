import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../interfaces/product';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'sp-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product!: Product;

  constructor(private route: ActivatedRoute, private productService: ProductsService, private router: Router) { }

  ngOnInit(): void {
    this.product = this.route.snapshot.data.product;
  }

  productDeleted(): void {
    this.productService.deleteProduct(this.product.id as number).subscribe(
      () => this.router.navigate(['/products'])
    );

  }

  goBack(): void {
    this.router.navigate(['/products']);
  }
}
