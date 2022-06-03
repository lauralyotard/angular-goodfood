import { Component } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {
  public lesPizzas:pizzaList[] = [
    {name: 'Pizza Forestiere', price: 10, desc: 'Sauce tomate, mozzarella, bacon, jambon & champignons'},
    {name: 'Pizza Forestiere', price: 10, desc: 'Sauce tomate, mozzarella, bacon, jambon & champignons'},
    {name: 'Pizza American', price: 12, desc: 'Sauce tomate, mozzarella & pepperoni'},
    {name: 'Pizza American', price: 12, desc: 'Sauce tomate, mozzarella & pepperoni'},
    {name: 'Pizza American', price: 12, desc: 'Sauce tomate, mozzarella & pepperoni'},
    {name: 'Pizza Margherita', price: 11, desc: 'Sauce tomate, mozzarella, extra mozzarella & origan'},
    {name: 'Pizza Margherita', price: 11, desc: 'Sauce tomate, mozzarella, extra mozzarella & origan'},
    {name: 'Pizza Margherita', price: 11, desc: 'Sauce tomate, mozzarella, extra mozzarella & origan'},
    {name: 'Pizza Margherita', price: 11, desc: 'Sauce tomate, mozzarella, extra mozzarella & origan'},
    {name: 'Pizza Margherita', price: 11, desc: 'Sauce tomate, mozzarella, extra mozzarella & origan'},
    {name: 'Pizza Margherita', price: 11, desc: 'Sauce tomate, mozzarella, extra mozzarella & origan'},
    {name: 'Pizza Margherita', price: 11, desc: 'Sauce tomate, mozzarella, extra mozzarella & origan'},
    {name: 'Pizza Margherita', price: 11, desc: 'Sauce tomate, mozzarella, extra mozzarella & origan'},
  ];
}

export interface pizzaList{
  name:string;
  price: number;
  desc:string;
}
