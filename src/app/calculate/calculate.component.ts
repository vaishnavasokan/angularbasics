import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculate',
  templateUrl: './calculate.component.html',
  styleUrls: ['./calculate.component.css']
})
export class CalculateComponent implements OnInit {

  num1;
  num2;
  result:Number;

  constructor() { }

  ngOnInit() {
  }

  public Add()
  {
    this.result= this.num1+this.num2;
  }

  public diff()
  {
    this.result= parseInt(this.num1)-parseInt(this.num2);
  }

}
