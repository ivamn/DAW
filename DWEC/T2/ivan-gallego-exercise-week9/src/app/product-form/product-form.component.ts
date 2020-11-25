import { Component, OnInit } from '@angular/core';
import { Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CanComponentDeactivate } from '../guards/page-leave-guard.guard';
import { ProductAdd } from '../interfaces/product-add';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'sp-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit, CanComponentDeactivate {
  newProduct!: ProductAdd;
  imageFile = '';
  productAdded = false;

  constructor(
    private productsService: ProductsService,
    private router: Router) { }

  canDeactivate(): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.productAdded || confirm('Are you sure you want to leave the page? Changes will not be saved!');
  }

  ngOnInit(): void {
    this.newProduct = {
      category: 0,
      description: '',
      mainPhoto: '',
      price: 0,
      title: ''
    };
  }

  submitForm(): void {
    this.productsService.addProduct({ ...this.newProduct, category: +this.newProduct.category }).subscribe(
      product => {
        this.productAdded = true;
        this.router.navigate(['/products']);
      },
      err => {
        alert(err);
      }
    );
  }

  changeImage(fileInput: HTMLInputElement): void {
    if (!fileInput.files || fileInput.files.length === 0) { return; }
    const reader: FileReader = new FileReader();
    reader.readAsDataURL(fileInput.files[0]);
    reader.addEventListener('loadend', e => {
      this.newProduct.mainPhoto = reader.result as string;
    });
  }

}
