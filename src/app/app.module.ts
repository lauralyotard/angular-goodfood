import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatBadgeModule} from '@angular/material/badge';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';

import { AppComponent } from './app.component';
import {PizzalistComponent} from './pizzaList/pizzaList.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {NavbarComponent} from './navbar/navbar.component';
import {HomeComponent} from './home/home.component';
import {ShopComponent} from './shop/shop.component';
import {LocationComponent} from './location/location.component';
import {FooterComponent} from './footer/footer.component';
import {RestaurantService} from './config/service';
import {ConnexionComponent} from './connexion/connexion.component';
import {SignupComponent} from './signup/signup.component';
import {AccountComponent} from "./compte/account.component";

@NgModule({
  declarations: [
    AppComponent,
    LocationComponent,
    AppComponent,
    PizzalistComponent,
    PageNotFoundComponent,
    NavbarComponent,
    HomeComponent,
    ShopComponent,
    HomeComponent,
    FooterComponent,
    ConnexionComponent,
    SignupComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatGridListModule,
    MatButtonModule,
    MatCardModule,
    AppRoutingModule,
    MatCardModule,
    MatIconModule,
    MatMenuModule,
    MatBadgeModule,
    MatListModule,
    MatTableModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDm28JF7IhXy0Umx51bEIW_FVTx4zisOBQ'
    }),
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [ RestaurantService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
