import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import { Router } from '@angular/router';
import {Service} from '../config/service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})

export class AccountComponent implements OnInit {
  constructor(public dialog: MatDialog, private userService: Service, private router: Router) {}
  public loaded: boolean = false;
  public leUser: userModel | undefined;
  public myReceipts:receiptList[] = [
    {id: '3A192374', price: 22, desc: 'P-Reine ; P-Saumon'},
    {id: '4Z218463', price: 18, desc: 'P-Raclette'},
  ];
  num: number = 1;

  ngOnInit(): void {
    this.getUser();
  }

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
    console.log(this.myReceipts[0].id);
    const dialogRef = this.dialog.open(DialogCommandesComponent, {
      data: {
        //A refaire
        id: this.myReceipts[0].id,
        price: this.myReceipts[0].price,
        desc: this.myReceipts[0].desc,
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

  getUser(): void {
    this.loaded = true;
    let aName = 'Tom';
    this.userService.getUser(aName)
      .subscribe(
        (data: any) => {
          this.leUser = data
          this.loaded = false;
        });
    console.log(this.leUser);
  }
}

export interface receiptList{
  id:string;
  price: number;
  desc:string;
}

export interface userModel{
  id: number;
  name: string;
  lastname: string;
  phone: string;
  email: string;
  password: string;
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
