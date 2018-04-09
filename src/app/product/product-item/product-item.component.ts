import { Component, OnInit } from '@angular/core';

import {Product} from '../../model/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  public products: Array<Product>;
  // public productClasses;

  constructor() { }

  ngOnInit() {
    this.products = [
      new Product('Test Product','image',11.99,100,true),
      new Product('Test Product','image',21.99,9,true),
      new Product('Test Product','image',45.99,5,false),
      new Product('Test Product','image',1.99,3,true)

  ];

  //   this.productClasses = {
  //     //   "positive":this.stock.isPositiveChange(),
  //     "for-sale":this.product.isForSale(),
  //     "not-for-sale":!this.product.isForSale()
  //   };
  //
  //
  // }
  //
  // decrement(event) {
  //   console.log('Decrementing quantity');
  //   this.product.decQuantity();
  // }
  //
  // increment(event){
  //   console.log('Incrementing quantity');
  //   this.product.incQuantity();
  }
}
