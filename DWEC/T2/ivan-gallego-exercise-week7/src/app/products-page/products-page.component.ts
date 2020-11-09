import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sp-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent implements OnInit {

  products = [];
  newPorduct = null;

  constructor() { }

  ngOnInit(): void {
  }

}
