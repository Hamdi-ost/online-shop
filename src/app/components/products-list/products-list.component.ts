import { Component, OnInit } from '@angular/core';
import * as data from '../../../assets/produits.json';
import { ProductsService } from 'src/app/services/products.service.js';
import { OrdersService } from 'src/app/services/orders.service.js';
@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  products = [];
  // tslint:disable-next-line:max-line-length
  public src = ['15-BS042NK_m.jpg', 'lenovo.jpg', 'hp.jpg', 'lenovo.jpg', 'clavier.jpeg', 'dd.jpeg', 'server.jpeg', 'iphone.jpeg', 'cable.jpg', 'carteGra.jpg'];
  constructor(private productService: ProductsService, private orderService: OrdersService) {
    this.products.push(data['products']);
    this.productService.getProduct().subscribe(product => {
      for (let i = 0; i < this.src.length; i++) {
      product[i]['src'] = 'src/assets/img/' + this.src[i];
      }
      this.products.push(product);
      console.log(this.products);
    });
  }
  ngOnInit() {
  }
}
