import { Component } from '@angular/core';
import {RestaurantService} from '../config/service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {
  public loaded: boolean = false;
  public lesPizzas:pizzaList[] = [];

  constructor(private restaurantService: RestaurantService) {}

  ngOnInit(): void {
    this.getPizzasShop();
  }

  getPizzasShop(): void {
    this.loaded = true;
    this.restaurantService.getPizzas(1)
      .subscribe(
        (data: any) => {
          console.log(data.data)
          this.lesPizzas = data.data
          this.loaded = false;
        });
  }
}

export interface pizzaList{
  name:string;
  price: number;
  image: string;
  description: string;
}
