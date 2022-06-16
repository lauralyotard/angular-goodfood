import { Component } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  public myReceipts:receiptList[] = [
    {num: '3A192374', price: 22, desc: 'P-Reine ; P-Saumon'},
    {num: '4Z218463', price: 18, desc: 'P-Raclette'},
    {num: '9W821367', price: 42, desc: 'P-Saumon ; P-Raclettex2 ; P-Champignons ; P-Reine ; P-Chorizo'},
    {num: '7U237432', price: 28, desc: 'P-Forestiere ; P-Reinex2 ; P-Raclette ; P-Saumon'},
  ];

  num: number = 1;

  showPage(numero: number) {
    switch(this.num) {
      case 1: {
        numero = 1
        this.num = numero
        console.log(this.num + 'here')
        break;
      }
      case 2: {
        numero = 2
        this.num = numero
        console.log(this.num + 'heree')
        break;
      }
      case 3: {
        numero = 3
        this.num = numero
        console.log(this.num + 'hereee')
        break;
      }
      case 4: {
        numero = 4
        this.num = numero
        console.log(this.num + 'hereeee')
        break;
      }
      default: {
        numero = 1
        this.num = numero
        console.log(this.num + 'heeeere')
        break;
      }
    }
  }
}

export interface receiptList{
  num:string;
  price: number;
  desc:string;
}
