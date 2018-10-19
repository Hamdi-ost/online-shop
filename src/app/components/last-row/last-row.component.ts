import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-last-row',
  templateUrl: './last-row.component.html',
  styleUrls: ['./last-row.component.css']
})
export class LastRowComponent implements OnInit {

  titles = ['HOT SALE', 'TOP RATED', 'POPULAR'];

  lastRowHomePage = [
    [
      {category: 'WIRELESS', productName: 'productName', price: 98, img: 'product-31.jpg'},
      {category: 'WIRELESS', productName: 'productName', price: 98, img: 'product-32.jpg'},
      {category: 'WIRELESS', productName: 'productName', price: 98, img: 'product-33.jpg'}
    ],
    [
      {category: 'WIRELESS', productName: 'productName', price: 98, img: 'product-34.jpg'},
      {category: 'WIRELESS', productName: 'productName', price: 98, img: 'product-35.jpg'},
      {category: 'WIRELESS', productName: 'productName', price: 98, img: 'product-36.jpg'}
    ], [
      {category: 'WIRELESS', productName: 'productName', price: 98, img: 'product-37.jpg'},
      {category: 'WIRELESS', productName: 'productName', price: 98, img: 'product-38.jpg'},
      {category: 'WIRELESS', productName: 'productName', price: 98, img: 'product-39.jpg'}
    ]
  ];

  constructor() { }

  ngOnInit() {
  }

}
