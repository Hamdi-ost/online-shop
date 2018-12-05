import { Component, OnInit } from '@angular/core';
import * as data from '../../../../assets/produits.json';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service.js';
import { OrderService } from 'src/app/services/order.service.js';


@Component({

  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})


export class ProductDetailsComponent implements OnInit {

  id;
  name: string;
  description: string;
  price: string;
  category: string;
  src: string;
  width;
  height;
  case;
  depth;
  material;
  available;
  views = [];
  product = [];



  // tslint:disable-next-line:max-line-length
  constructor(private route: ActivatedRoute, private productService: ProductsService, private orderService: OrderService) {
    this.route.params.subscribe(params => {
      this.productService.getProductById(params['id']).subscribe(
        product => {
          this.id = params['id'];
          this.available = product['disponible'] ? 'YES' : 'NO';
          this.name = product['name'];
          this.description = product['description'];
          this.price = product['prix'];
          this.views = data['products'][params['id'] - 1].views;
          this.width = data['products'][params['id'] - 1].width;
          this.height = data['products'][params['id'] - 1].height;
          this.case = data['products'][params['id'] - 1].case;
          this.depth = data['products'][params['id'] - 1].depth;
          this.material = data['products'][params['id'] - 1].material;
          this.src = data['products'][params['id'] - 1].views[0];

        });
    });
  }


  ngOnInit() {
  }


  addToCart() {
    // tslint:disable-next-line:max-line-length
    const productToOrder = { id: Number(this.id), name: this.name, quantity: 1, prixUnitaire: this.price, total: this.price, img: this.src };
    this.orderService.addToCart(productToOrder);
    console.log(this.orderService.getCart());
  }

}
