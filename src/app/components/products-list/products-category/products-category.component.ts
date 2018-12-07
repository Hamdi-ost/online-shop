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
  list = data['products'];

  prods;
  constructor(private route: ActivatedRoute, private catgService: ProductsService, private test: CategoriesService) {
    this.route.params.subscribe(params => {
      this.prods = [] ;
             console.log(params) ;
              for (let i = 0; i < this.list.length  ; i++) {
              console.log(this.list[i].categoryName);
              if (this.list[i].categoryName === params['categor']) {
              this.prods.push(this.list[i]);
              }
            }
     console.log(this.prods);

    }); }
  ngOnInit() {
  }

}
