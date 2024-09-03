import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  
  login = {
    email:"",
    password:"",
  }
  type: boolean = true;

  constructor() { }

  changeType() {
    this.type = !this.type;
  }
}
