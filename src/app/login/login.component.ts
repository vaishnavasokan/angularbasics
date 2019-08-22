import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  uname:String;
  password:String;
  view:Boolean=false;
  constructor() { }

  ngOnInit() {
  }

  public signup()
  {
      this.view=!this.view;
  }

}
