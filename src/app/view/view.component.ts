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
  projects:[{}];
  constructor() { 
    this.Name="Abc";
    this.Age=20;
    this.Email= "abcd@gmail.com";
    this.Hobbies=["Painting","Singing"];
    this.Address={Hno:"HRA123",Street:"Line1",Dist:"Ekm"}
    this.projects=[{name:"p1",duration:"30days",enddate:"22/08/2019"}];
  }

  ngOnInit() {

  
  }

  public Add()
  {
    let data={name:"p2",duration:"30days",enddate:"25/08/2019"};
    this.projects.push(data);
  }

}
