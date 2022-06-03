import { Component } from '@angular/core';

@Component({
  selector: 'app-pizzaList',
  templateUrl: './pizzaList.component.html',
  styleUrls: ['./pizzaList.component.css']
})
export class PizzalistComponent {
  public lesPizzas:pizzaList[] = [
    {name: 'Pizza Forestiere', price: 10, desc: 'Sauce tomate, mozzarella, bacon, jambon & champignons'},
    {name: 'Pizza Forestiere', price: 10, desc: 'Sauce tomate, mozzarella, bacon, jambon & champignons'},
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

  public log() {
    console.log('print');
  }
}

export interface pizzaList{
  name:string;
  price: number;
  desc:string;
}
