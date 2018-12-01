import { Component, OnInit } from '@angular/core';
import * as data from '../../../../assets/produits.json';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service.js';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  name: string;
  description: string;
  price: string;
  category: string;
  src: string;
  width ;
  height;
  case;
  depth;
  material;
  available;
  views = [];
  product = [];



  constructor(private route: ActivatedRoute, private productService: ProductsService) {
     this.route.params.subscribe(params => {
       this.productService.getProductById(params['id']).subscribe(
         product => {
           console.log(product);
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

}
