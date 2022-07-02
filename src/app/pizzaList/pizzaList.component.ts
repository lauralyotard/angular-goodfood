import {Component, OnInit} from '@angular/core';
import {RestaurantService} from '../config/service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-pizzaList',
  templateUrl: './pizzaList.component.html',
  styleUrls: ['./pizzaList.component.css']
})
export class PizzalistComponent implements OnInit {
  public lesPizzas:pizzaList[] = [];
  public loaded: boolean = false;
  durationInSeconds = 5;

  constructor(private restaurantService: RestaurantService, private _snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.getPizzas();
  }

  openSnackBar() {
    this._snackBar.open("Pizza ajoutée !", "Fermer", {
      duration: 3000,
    });
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
  image: string;
  description:string;
}
