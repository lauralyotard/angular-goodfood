import { Component } from '@angular/core';
import {Service} from '../config/service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {
  public loaded: boolean = false;
  public lesPizzas:pizzaList[] = [];
  public unePizza:pizzaList = {
    id: 0,
    name: '',
    price: 0,
    image: '',
    description: '',
    quantite: ''
  };
  public lePanier:pizzaList[] = [];

  constructor(private restaurantService: Service) {}
  public status:boolean = false;

  //Ca ne passe pas dans le if ca veut dire qu il considere que value est 
  //null ou vide sinon il te sortirai le console log sauf que la tu as rien

  ngOnInit(): void {
    this.getPizzas();
  }

  getPizzas(){
    this.getPizzasShop();
    let id = 1;
    this.lesPizzas.forEach(uPizza => {
      if(id == uPizza.id){
        this.unePizza.id = uPizza.id,
        this.unePizza.name = uPizza.name,
        this.unePizza.price = uPizza.price,
        this.unePizza.image = uPizza.image,
        this.unePizza.description = uPizza.description,
        this.unePizza.quantite = "1"
      }    
      console.log(this.unePizza);    
    })
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
  id:number,
  name:string;
  price: number;
  image: string;
  description: string;
  quantite: string;
}
