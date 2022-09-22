import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {Service} from '../config/service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css'],
})

export class ConnexionComponent {
  public loaded: boolean = false;
  email:string = "";
  password = "";
  constMail = "camille.dupont@gmail.com"

  constructor(private userService: Service, private router: Router) {}

  checkMail(mail:string){
    if(mail == this.constMail){
      localStorage.setItem('email', mail);
      localStorage.setItem('isConnected', 'true');
      this.router.navigate(['app-home']);
      setTimeout(() => {
        window.location.reload();
      }, 100);
    }
    else{
      alert("Identifiant ou mot de passe incorrect !")
    }
  }

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