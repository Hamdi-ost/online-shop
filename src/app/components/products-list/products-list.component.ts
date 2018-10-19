import { Component, OnInit } from '@angular/core';
//import * as data from 'src/assets/contenu.json' ;
@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  name : string;
  description: string ;
  price : string;
  src: string;
  constructor() { }

  ngOnInit() {
  }

}
