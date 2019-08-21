import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  Name:String;
  Age:Number;
  Email;
  Address;
  Hobbies:String[]  ;
  constructor() { 
    this.Name="Abc";
    this.Age=20;
    this.Email= "abcd@gmail.com";
    this.Hobbies=["Painting","Singing"];
    this.Address={Hno:"HRA123",Street:"Line1",Dist:"Ekm"}
  }

  ngOnInit() {

  
  }

}
