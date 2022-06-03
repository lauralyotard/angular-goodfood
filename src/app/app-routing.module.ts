import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import {PizzalistComponent} from './pizzaList/pizzaList.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {HomeComponent} from './home/home.component';
import {LocationComponent} from './location/location.component'; // CLI imports router

const routes: Routes = [
  { path: '',   redirectTo: '/', pathMatch: 'full' },
  { path: 'app-component', component: AppComponent },
  { path: 'app-pizzaList', component: PizzalistComponent },
  { path: 'app-home', component: HomeComponent },
  { path: 'app-location', component: LocationComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
