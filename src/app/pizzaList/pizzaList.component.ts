import {Component, Inject, OnInit} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import {Service} from '../config/service';

@Component({
  selector: 'app-pizzaList',
  templateUrl: './pizzaList.component.html',
  styleUrls: ['./pizzaList.component.css']
})
export class PizzalistComponent implements OnInit {
  public lesPizzas:pizzaList[] = [];
  public unePizza:pizzaList = {
    id: 0,
    name: '',
    price: 0,
    image: '',
    description: ''
  };
  public loaded: boolean = false;

  constructor(private pizzaService: Service, private _snackBar: MatSnackBar, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.getPizzas();
  }

  addPizza(idPizza:number){
    let value = localStorage.getItem(idPizza.toString())!;
    let quantite:number = 0;
    if(value == '' || value == null){
      localStorage.setItem(idPizza.toString(), '0');
    }
    else{
      quantite = parseInt(value);
    }
    quantite += 1;
    localStorage.setItem(idPizza.toString(), quantite.toString());
    this.openSnackBar(); 
  }

  openSnackBar() {
    this._snackBar.open("Pizza ajoutée !", "Fermer", {
      duration: 3000,
    });
  }

  openDialogAddPizza() {
    const dialogRef = this.dialog.open(DialogAddPizzaComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openDialogDetailPizza(id: number) {
    this.lesPizzas.forEach(uPizza => {
        if(id == uPizza.id){
          this.unePizza.id = uPizza.id
          this.unePizza.name = uPizza.name
          this.unePizza.price = uPizza.price
          this.unePizza.image = uPizza.image
          this.unePizza.description = uPizza.description
        }
      console.log(this.unePizza);
      return this.unePizza
    })

    const dialogRef = this.dialog.open(DialogDetailPizzaComponent, {
      width: '250px',
      data : {
        id: this.unePizza.id,
        name: this.unePizza.name,
        price: this.unePizza.price,
        image: this.unePizza.image,
        description: this.unePizza.description
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  getPizzas(): void {
    this.loaded = true;
    this.pizzaService.getPizzas(1)
      .subscribe(
        (data: any) => {
          this.lesPizzas = data.data
          this.loaded = false;
        });
  }
}

export interface pizzaList{
  id:number;
  name:string;
  price: number;
  image: string;
  description:string;
}

@Component({
  selector: 'app-dialog-add-pizza',
  templateUrl: 'dialog-addpizza.component.html',
})
export class DialogAddPizzaComponent {}

@Component({
  selector: 'app-dialog-detail-pizza',
  templateUrl: 'dialog-detailpizza.component.html',
})
export class DialogDetailPizzaComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: pizzaList,
  ) {}

  ngOnInit(): void {
    console.log(this.data.id);
    console.log(this.data);
  }

}
