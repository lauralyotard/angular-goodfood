import { AgmMap } from '@agm/core';
import { Component, OnInit } from '@angular/core';
import {Service} from '../config/service';

@Component({
  selector: 'app-location',
  templateUrl: 'location.component.html',
  styleUrls: ['location.component.css'],
})

export class LocationComponent /* implements OnInit */ {

  markers: Array<{name: string, lat: number, lng: number}> = [
    {name: 'currentPosition', lat: 51.678418, lng: 7.809007},
    {name: 'GoodFood Saint-Etienne', lat: 45.4383819, lng: 4.3874402},
    {name: 'GoodFood Marseille', lat: 43.3456027, lng: 5.3795738},
    {name: 'GoodFood Paris', lat: 48.863767, lng: 2.276827}
  ];

  restaurants: Array<{name: string, address: string, zipcode: string, city: string}> = [
    {name: 'GoodFood Saint-Etienne', address: 'Place de l’hôtel de Ville', zipcode: '42000', city: 'Saint-Etienne', },
    {name: 'GoodFood Marseille', address: '72 Rue Paul Coxe', zipcode: '13014', city: 'Marseille', },
    {name: 'GoodFood Paris', address: '71 Av. Henri Martin', zipcode: '75016', city: 'Paris', }
  ];

  latitude:number = 51.678418
  longitude:number = 7.809007
  zoom:number = 10

  focusOn(name: string) {
    let i = 0;
    while (this.markers[i].name != name) {
      i++
    }
    if (this.markers[i].name == name) {
      this.latitude = this.markers[i].lat,
      this.longitude = this.markers[i].lng,
      this.zoom = 10
    }
  }

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
