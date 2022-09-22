import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})

export class NavbarComponent implements OnInit {
  public value:string|null = '';
  public status:boolean = false;

  ngOnInit() {
    this.getStatus();
  }

  getStatus(){
    this.value = localStorage.getItem('isConnected')
    console.log(this.value);
  
    if(this.value == null || this.value == ''){
      localStorage.setItem('isConnected', 'false');
      this.status = false;
    }
    else if(this.value == 'false'){
      this.status = false;
    }
    else {
      this.status = true;
    }
  }
}
