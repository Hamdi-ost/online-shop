import { Component, OnInit } from '@angular/core';
import * as data from '../../../assets/produits.json' ;
@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  name : string;
  description: string ;
  price : string;
  category:string;
  src: string;
  product;

  constructor() { 
   this.product=data['products'];
   this.name=this.product.name;
   this.price=this.product.price;
   this.description=this.product.description;
   this.src=this.product.src;
   this.category=this.product.category;
  }
  ngOnInit() {
  }

}
