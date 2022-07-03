import { Component, OnInit } from '@angular/core';
import {Service} from '../config/service';

@Component({
  selector: 'app-location',
  templateUrl: 'location.component.html',
  styleUrls: ['location.component.css'],
})

export class LocationComponent /* implements OnInit */ {
  lat = 51.678418;
  lng = 7.809007;

  restaurants: Array<{name: string, address: string, zipcode: string, city: string}> = [
    {name: 'GoodFood Saint-Etienne', address: 'Place de l’hôtel de Ville', zipcode: '42000', city: 'Saint-Etienne'},
    {name: 'GoodFood Marseille', address: '72 Rue Paul Coxe', zipcode: '13014', city: 'Marseille'},
    {name: 'GoodFood Paris', address: '71 Av. Henri Martin', zipcode: '75016', city: 'Paris'}
  ];

  /*
  public restaurants:Restaurants[] = [];
  public loaded: boolean = false;

  constructor(private restaurantService: Service) {}

  ngOnInit(): void {
    this.getRestaurants();
  }

  getRestaurants(): void {
    this.loaded = true;
    this.restaurantService.getRestaurants()
      .subscribe(
        (data: any) => {
          console.log(data.data)
          this.restaurants = data.data
          this.loaded = false;
        });
  }

  public log() {
    console.log('print');
  }
  */
}

/*
export interface Restaurants {
  name: string;
  address: number;
  zipcode: string;
  city: string;
}
*/
