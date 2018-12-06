import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as data from '../../../../assets/produits.json';
import { CategoriesService } from '../../../services/categories.service';
import { ProductsService } from '../../../services/products.service';

@Component({
  selector: 'app-products-category',
  templateUrl: './products-category.component.html',
  styleUrls: ['./products-category.component.css']
})
export class ProductsCategoryComponent implements OnInit {
 
  products;
 public src = ['15-BS042NK_m.jpg', 'lenovo.jpg', 'hp.jpg', 'lenovo.jpg', 'clavier.jpeg', 'dd.jpeg', 'server.jpeg', 'iphone.jpeg', 'cable.jpg', 'carteGra.jpg'];
  constructor(private route: ActivatedRoute, private catgService: ProductsService, private test : CategoriesService) {
    this.route.params.subscribe(params => {
      this.products = [] ;
      this.catgService.getProduct().subscribe(
        product => {
          this.test.getCategoryById(params['categor']).subscribe(
            product => {
              for (let i = 0; i < product['products'].length  ; i++) {
              console.log(product['products'][i]);
              this.products.push(product['products'][i]);
            }
      });   
         });
    });}
  
  ngOnInit() {
  }

}
