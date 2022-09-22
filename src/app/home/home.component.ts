import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  addTakeAway(){
    localStorage.setItem('eatMod', 'takeaway');
  }

  addDelivery(){
    localStorage.setItem('eatMod', 'delivery');
  }
}
