import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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

  popularProducts = [
    {category: 'SMART WATCHES', productName: 'SMARTWATCH 3 SWR50', price: 630, img: 'product-120.jpg', description: 'description'},
    {category: 'SMART WATCHES', productName: 'SMARTWATCH 3 SWR50', price: 630, img: 'product-119.jpg', description: 'description'},
    {category: 'SMART WATCHES', productName: 'SMARTWATCH 3 SWR50', price: 630, img: 'product-118.jpg', description: 'description'},
    {category: 'SMART WATCHES', productName: 'SMARTWATCH 3 SWR50', price: 630, img: 'product-117.jpg', description: 'description'}
  ];

  countDown = ['days', 'hours', 'minutes', 'seconds'];

  bestProposes = [
    {category: 'Modern Edition', productName: 'Modern beat ht', img: 'product-115.jpg', description: 'description'},
    {category: 'Modern Edition', productName: 'Modern beat ht', img: 'product-116.jpg', description: 'description'}
  ];

  firstRowHomePage = [
    {solde: 'Modern Edition', promotion: 'Modern beat ht', img: 'product-130.jpg', description: 'description'},
    {solde: 'Modern Edition', promotion: 'Modern beat ht', img: 'product-131.jpg', description: 'description'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
