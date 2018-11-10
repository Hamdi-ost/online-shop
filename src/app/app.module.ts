import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SliderComponent } from './components/slider/slider.component';
import { LastRowComponent } from './components/last-row/last-row.component';
<<<<<<< HEAD
import { MenuComponent } from './components/menu/menu.component';
import { ProductsComponent } from './components/products/products.component';
import {NgxPaginationModule } from 'Ngx-pagination';
||||||| merged common ancestors

=======
import { FilterPipe } from './filter.pipe';
import { ProductDetailsComponent } from './components/products-list/product-details/product-details.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

>>>>>>> dfd8592fc95fa48306ac13444a22d3af812c4a33
const appRoutes: Routes = [

  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
<<<<<<< HEAD
  { path: 'products', component: ProductsComponent },
||||||| merged common ancestors
  { path: 'products', component: ProductsListComponent },
=======
  { path: 'products', component: ProductsListComponent },
  { path: 'products/:id', component: ProductDetailsComponent },
>>>>>>> dfd8592fc95fa48306ac13444a22d3af812c4a33
  { path: 'contact', component: ContactComponent },
  { path: 'not-found', component: ErrorComponent },
  { path: '', component: HomeComponent },

  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ErrorComponent,
    ProductsListComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    RegisterComponent,
    SliderComponent,
<<<<<<< HEAD
    LastRowComponent,
    MenuComponent,
    ProductsComponent
||||||| merged common ancestors
    LastRowComponent
=======
    LastRowComponent,
    FilterPipe,
    ProductDetailsComponent,
    SidebarComponent
>>>>>>> dfd8592fc95fa48306ac13444a22d3af812c4a33
  ],
  imports: [
    FormsModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
