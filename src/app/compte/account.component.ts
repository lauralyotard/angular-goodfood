import { Component } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
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
