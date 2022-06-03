import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {PizzalistComponent} from './pizzaList/pizzaList.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {NavbarComponent} from './navbar/navbar.component';
import {HomeComponent} from './home/home.component';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatBadgeModule} from '@angular/material/badge';
import {ShopComponent} from './shop/shop.component';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import {LocationComponent} from './location/location.component';

@NgModule({
  declarations: [
    AppComponent,
    LocationComponent,
    AppComponent,
    PizzalistComponent,
    PageNotFoundComponent,
    NavbarComponent,
    HomeComponent,
    ShopComponent
    HomeComponent
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
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDm28JF7IhXy0Umx51bEIW_FVTx4zisOBQ'
    })
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatGridListModule,
        MatButtonModule,
        MatCardModule,
        AppRoutingModule,
        MatIconModule,
        MatMenuModule,
        MatBadgeModule,
        MatListModule,
        MatTableModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
