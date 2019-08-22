import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  cname:String;
  msg:boolean=true;
  constructor() { }

  ngOnInit() {
  }

  public show()
  {
    
  }
}
