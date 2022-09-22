import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  hide = true;
  nom:string = "";
  prenom:string = "";
  email:string = "";
  password:string = "";
  telephone:string = "";
  adresse:string = "";
  codepostal:string = "";
  ville:string = "";
  pays:string = "";

  constructor(private router: Router) {}

  signin(nom:string, prenom:string, email:string, password:string, telephone:string, adresse:string, codepostal:string, ville:string, pays:string){
    if(nom != '' && prenom != '' && email != '' && password != '' && telephone != '' && adresse != '' && codepostal != '' && ville != '' && pays != ''){
      localStorage.setItem('nom', nom);
      localStorage.setItem('prenom', prenom);
      localStorage.setItem('email', email);
      localStorage.setItem('password', password);
      localStorage.setItem('telephone', telephone);
      localStorage.setItem('adresse', adresse);
      localStorage.setItem('codepostal', codepostal);
      localStorage.setItem('ville', ville);
      localStorage.setItem('pays', pays);
      localStorage.setItem('isConnected', 'true');
      this.router.navigate(['app-home']);
      setTimeout(() => {
        window.location.reload();
      }, 100);
    }
    else{
      alert("Un ou plusieurs renseignements sont vides.");
    }
  }
}



