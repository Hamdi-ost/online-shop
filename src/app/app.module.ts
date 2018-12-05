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
import { ProductsCategoryComponent } from './components/products-list/products-category/products-category.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SliderComponent } from './components/slider/slider.component';
import { LastRowComponent } from './components/last-row/last-row.component';
import { FilterPipe } from './filter.pipe';
import { ProductDetailsComponent } from './components/products-list/product-details/product-details.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import {NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { UserProfilComponent } from './components/user-profil/user-profil.component';
import { AuthGuard } from './core/auth.guard';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { FlashMessagesModule } from 'angular2-flash-messages';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import { CommandeTableComponent } from './commande-table/commande-table.component';
import { MatPaginatorModule, MatSortModule } from '@angular/material';





const appRoutes: Routes = [

  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'products', component: ProductsListComponent },
  { path: 'products/:categor', component: ProductsCategoryComponent },
  { path: 'products/:id', component: ProductDetailsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'profile', component: UserProfilComponent, canActivate: [AuthGuard] },
  { path: 'checkout', component: CheckoutComponent, canActivate: [AuthGuard] },
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
    LastRowComponent,
    FilterPipe,
    ProductDetailsComponent,
    ProductsCategoryComponent,
    SidebarComponent,
    UserProfilComponent,
    CommandeTableComponent,
    CheckoutComponent
  ],
  imports: [
    MatTableModule,
    BrowserAnimationsModule,
    FlashMessagesModule.forRoot(),
    HttpClientModule,
    FormsModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    NgxPaginationModule,
    AngularFireModule.initializeApp(environment.firebase),
    CoreModule,
    AngularFireDatabaseModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
