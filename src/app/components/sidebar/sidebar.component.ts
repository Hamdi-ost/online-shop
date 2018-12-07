import { Component, OnInit, NgModule, VERSION  } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import * as data from '../../../assets/produits.json';
import { CategoriesService } from '../../services/categories.service';
import { BrowserModule } from '@angular/platform-browser';
import { Pipe, PipeTransform } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './filter.pipe';
import { $$ } from 'protractor';

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


    games = [
      {
        name: 'Chess',
        id: 1,
        selected: true
      },
      {
        name: 'Ludo',
        id: 2,
        selected: false
      },
      {
        name: 'Snakes & Ladders',
        id: 3,
        selected: false
      },
      {
        name: 'Carrom',
        id: 4,
        selected: false
      },
      {
        name: 'Scrabble',
        id: 5,
        selected: false
      },
      {
        name: 'Monopoly',
        id: 6,
        selected: true
      },
      {
        name: 'Uno',
        id: 7,
        selected: false
      }
    ]
    name: string;
  searchText: string = "";
  selected_count: number = 0;
  selected_games;

    constructor( ) {
      this.name = `Angular! v${VERSION.full}`;
      this.getSelected();
     }
     
  ngOnInit() {
  }

  // Getting Selected Games and Count
  getSelected() {
    this.selected_games = this.categories.filter(s => {
      console.log(s);
      return s;
    });
   // console.log(this.selected_games);
    this.selected_count = this.selected_games.length;
    //alert(this.selected_games);    
  }
 
 
  //Clear term types by user
  clearFilter() {
    this.searchText = "";
  }

  indexof(str:string)
{
return this.categories.indexOf(str)+1;
}}
