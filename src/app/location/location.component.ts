import { AgmMap } from '@agm/core';
import { getLocaleDirection } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {Service} from '../config/service';

@Component({
  selector: 'app-location',
  templateUrl: 'location.component.html',
  styleUrls: ['location.component.css'],
})

export class LocationComponent /* implements OnInit */ {

  latitude:number = 0
  longitude:number = 0
  zoom:number = 10

  async getLocation() {
    try {
      let position = await this.getCurrentPosition();
      this.latitude = position.latitude, this.longitude = position.longitude;
    }
    catch(e: GeolocationPositionError| any) {
      // code 1 is "Permission Denied"
      if(e.code === 1) {
        console.log("Activez la géolocalisation");
      }
      else {
        console.log("Une erreur est survenue");
      }
    }
  }

  async getCurrentPosition(): Promise<GeolocationCoordinates> {
    return new Promise( (resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        position => resolve(position.coords),
        error => reject(error)
      )
    })
  }

  restaurants: Array<{name: string, address: string, zipcode: string, city: string, lat: number, lng: number}> = [
    {name: 'GoodFood Saint-Etienne', address: 'Place de l’hôtel de Ville', zipcode: '42000', city: 'Saint-Etienne', lat: 45.4383819, lng: 4.3874402},
    {name: 'GoodFood Marseille', address: '72 Rue Paul Coxe', zipcode: '13014', city: 'Marseille', lat: 43.3456027, lng: 5.3795738},
    {name: 'GoodFood Paris', address: '71 Av. Henri Martin', zipcode: '75016', city: 'Paris', lat: 48.863767, lng: 2.276827}
  ];

  focusOn(lat: number, lng: number) {
    this.latitude = lat,
    this.longitude = lng,
    this.zoom = 10
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
