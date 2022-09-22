import { Component, OnInit } from '@angular/core';
import {Service} from '../config/service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit{
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
    this.getPizzasShop();
    //console.log(this.lesPizzas);
    this.getLesPizzas();
  }

  getLesPizzas(){
    this.getPizza1();
    this.getPizza2();
    this.getPizza3();
    this.getPizza4();
  }

  getPizzasShop(): void {
    this.loaded = true;
    this.restaurantService.getPizzas(1)
      .subscribe(
        (data: any) => {
          this.lesPizzas = data.data;
          //console.log(this.lesPizzas);
          this.loaded = false;
        });
  }

  getPizza1(){
    let id = 1;
    this.lesPizzas.forEach(uPizza => {
      if(id == uPizza.id){
        this.unePizza.id = uPizza.id,
        this.unePizza.name = uPizza.name,
        this.unePizza.price = uPizza.price,
        this.unePizza.image = uPizza.image,
        this.unePizza.description = uPizza.description,
        this.unePizza.quantite = localStorage.getItem('1')!;
        this.lePanier.push(this.unePizza);
      }
    })
  }

  getPizza2(){
    let id = 2;
    this.lesPizzas.forEach(uPizza => {
      if(id == uPizza.id){
        this.unePizza.id = uPizza.id,
        this.unePizza.name = uPizza.name,
        this.unePizza.price = uPizza.price,
        this.unePizza.image = uPizza.image,
        this.unePizza.description = uPizza.description,
        this.unePizza.quantite = localStorage.getItem('2')!;
        this.lePanier.push(this.unePizza);
      }
    })
  }

  getPizza3(){
    let id = 3;
    this.lesPizzas.forEach(uPizza => {
      if(id == uPizza.id){
        this.unePizza.id = uPizza.id,
        this.unePizza.name = uPizza.name,
        this.unePizza.price = uPizza.price,
        this.unePizza.image = uPizza.image,
        this.unePizza.description = uPizza.description,
        this.unePizza.quantite = localStorage.getItem('3')!;
        this.lePanier.push(this.unePizza);
      }
    })
  }

  getPizza4(){
    let id = 4;
    this.lesPizzas.forEach(uPizza => {
      if(id == uPizza.id){
        this.unePizza.id = uPizza.id,
        this.unePizza.name = uPizza.name,
        this.unePizza.price = uPizza.price,
        this.unePizza.image = uPizza.image,
        this.unePizza.description = uPizza.description,
        this.unePizza.quantite = localStorage.getItem('4')!;
        this.lePanier.push(this.unePizza);
      }
    })
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
