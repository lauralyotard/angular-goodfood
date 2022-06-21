import {Component, OnInit} from '@angular/core';
import {RestaurantService} from '../config/service';

@Component({
  selector: 'app-pizzaList',
  templateUrl: './pizzaList.component.html',
  styleUrls: ['./pizzaList.component.css']
})
export class PizzalistComponent implements OnInit {
  public lesPizzas:pizzaList[] = [];
  public loaded: boolean = false;

  constructor(private restaurantService: RestaurantService) {}

  ngOnInit(): void {
    this.getPizzas();
  }

  getPizzas(): void {
    this.loaded = true;
    this.restaurantService.getPizzas(1)
      .subscribe(
        (data: any) => {
          console.log(data.data)
          this.lesPizzas = data.data
          this.loaded = false;
        });
  }

  public log() {
    console.log('print');
  }
}

export interface pizzaList{
  name:string;
  price: number;
  img: string;
  description:string;
}
