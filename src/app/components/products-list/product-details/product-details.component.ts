import { Component, OnInit } from '@angular/core';
import * as data from '../../../../assets/produits.json';
import { ActivatedRoute } from '@angular/router';

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
  width;
  height;
  case;
  depth;
  material;
  available;
  views;

  getDetails(id) {
    const details = data['products'].filter(detail => {
      if (detail.id === Number(id)) {
        this.name = detail.name;
        this.price = detail.price;
        this.description = detail.description;
        this.src = detail.src;
        this.category = detail.category;

        this.width = detail.width;
        this.height = detail.height;
        this.case = detail.case;
        this.depth = detail.depth;
        this.material = detail.material;
        this.available = detail.available;
        this.views = detail.views;
      }
    });
  }

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      console.log(this.getDetails(params['id']));
    });
  }

  ngOnInit() {
  }

}
