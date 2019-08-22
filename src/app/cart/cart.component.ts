import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  view:Boolean=false;
  product=[];
  cart=[];
  constructor() {
    this.product=[{Name:"Printer",Price:"8000",Company:"HP"},
                {Name:"Scanner",Price:"12000",Company:"HP"},
                {Name:"Keyboard",Price:"1800",Company:"HP"}];
   }

  ngOnInit() {
  }

  public Add(i)
  {
    let data=this.product[i];
    this.cart.push(data);
  }

  public Remove(j)
  {
      this.cart.splice(j,1);
  }

  public viewcart(view)
  {
      if(this.view==false)
        this.view=true;
  }
  

}
