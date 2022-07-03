import { Component } from '@angular/core';
import {Service} from '../config/service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent {
  public loaded: boolean = false;
  email = "";
  password = "";

  constructor(private userService: Service) {}

  login = () => {
    this.loaded = true;
    this.userService.login(this.email, this.password)
      .subscribe(
        (data: any) => {
          console.log(data.data)
          this.loaded = false;
        });
  }
}



