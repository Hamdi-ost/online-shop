import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import * as data from '../../../assets/produits.json';
import { CategoriesService } from '../../services/categories.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
    
  categories = ["Composants Informatique",
    "Ordinateur Portable",
    "Périphérique", 
    "Smart Phone & Mobile",
    "Serveurs",
    "Stockage",
    "Accesoires Téléphonie"];

    constructor( ) {
     
     }
     
  ngOnInit() {
  }


  indexof(str:string)
{
return this.categories.indexOf(str)+1;
}}
