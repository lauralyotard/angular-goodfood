import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  constructor(public dialog: MatDialog,  private router: Router) {}
  public myReceipts:receiptList[] = [
    {num: '3A192374', price: 22, desc: 'P-Reine ; P-Saumon'},
    {num: '4Z218463', price: 18, desc: 'P-Raclette'},
  ];

  num: number = 1;

  showPage(numero: number) {
    switch(this.num) {
      case 1: {
        numero = 1
        this.num = numero
        break;
      }
      case 2: {
        numero = 2
        this.num = numero
        break;
      }
      case 3: {
        numero = 3
        this.num = numero
        break;
      }
      case 4: {
        numero = 4
        this.num = numero
        break;
      }
      default: {
        numero = 1
        this.num = numero
        break;
      }
    }
  }
  openDialogCommandes() {
    const dialogRef = this.dialog.open(DialogCommandesComponent, {
      data: {
        //A refaire
          num: this.myReceipts[0].num
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openDialogAdresse() {
    const dialogRef = this.dialog.open(DialogAdresseComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openDialogPay() {
    const dialogRef = this.dialog.open(DialogPayComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  logout() {
    localStorage.removeItem('email');
    localStorage.setItem('isConnected', 'false');
    this.router.navigate(['app-home']);
      setTimeout(() => {
        window.location.reload();
      }, 100);
  }
}

export interface receiptList{
  num:string;
  price: number;
  desc:string;
}

@Component({
  selector: 'app-dialog-commandes',
  templateUrl: 'dialog-commandes.component.html',
})
export class DialogCommandesComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: receiptList) {}
}

@Component({
  selector: 'app-dialog-adresse',
  templateUrl: 'dialog-adresse.component.html',
})
export class DialogAdresseComponent {}

@Component({
  selector: 'app-dialog-pay',
  templateUrl: 'dialog-pay.component.html',
})
export class DialogPayComponent {}
