import { Component, OnInit } from '@angular/core';
import * as data from '../../../../assets/produits.json';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service.js';
import { OrdersService } from 'src/app/services/orders.service.js';
import { map } from 'rxjs/operators';


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
  quantity = 1;
  orders = [];
  existe = false;

  // tslint:disable-next-line:max-line-length
  constructor(private route: ActivatedRoute, private productService: ProductsService, private orderService: OrdersService) {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.available = data['products'][params['id'] - 1].disponible ? 'YES' : 'NO';
      this.name = data['products'][params['id'] - 1].name;
      this.description = data['products'][params['id'] - 1].description;
      this.price = data['products'][params['id'] - 1].prix;
      this.views = data['products'][params['id'] - 1].views;
      this.width = data['products'][params['id'] - 1].width;
      this.height = data['products'][params['id'] - 1].height;
      this.case = data['products'][params['id'] - 1].case;
      this.depth = data['products'][params['id'] - 1].depth;
      this.material = data['products'][params['id'] - 1].material;
      this.src = data['products'][params['id'] - 1].views[0];
      this.productService.getProductById(params['id']).subscribe(
        product => {
          // this.id = params['id'];
          // this.available = product['disponible'] ? 'YES' : 'NO';
          // this.name = product['name'];
          // this.description = product['description'];
          // this.price = product['prix'];
          // this.views = data['products'][params['id'] - 1].views;
          // this.width = data['products'][params['id'] - 1].width;
          // this.height = data['products'][params['id'] - 1].height;
          // this.case = data['products'][params['id'] - 1].case;
          // this.depth = data['products'][params['id'] - 1].depth;
          // this.material = data['products'][params['id'] - 1].material;
          // this.src = data['products'][params['id'] - 1].views[0];

        });
    });
  }


  ngOnInit() {
  }

  plus() {
    this.quantity++;
    data['products'][this.id - 1]['quantity'] = this.quantity;
  }

  minus() {
    this.quantity--;
    data['products'][this.id - 1]['quantity'] = this.quantity;
  }

  addToCart() {
    this.getOrdersList();
    data['products'][this.id - 1]['quantity'] = this.quantity;
    data['products'][this.id - 1]['total'] = this.quantity * data['products'][this.id - 1]['prix'];
    if (this.existe) {
      this.orderService.updateOrder(this.orders[0].key, data['products'][this.id - 1]);
    } else {
      this.orderService.createOrder(data['products'][this.id - 1]);
    }
  }

  getOrdersList() {
    this.orderService.getOrdersList().snapshotChanges().pipe(map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    })).subscribe(orders => {
      this.orders = orders;
      this.orders.forEach(element => {
        if (Number(element.id) === Number(this.id)) {
          this.existe = true;
        }
      });
    });
  }

}
