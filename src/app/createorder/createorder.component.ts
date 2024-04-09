import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { OrderService } from '../Shared/Services/order.service';
import { Route, Router } from '@angular/router';
import { StockDataService } from '../Shared/Services/stock-data.service';

@Component({
  selector: 'app-createorder',
  templateUrl: './createorder.component.html',
  styleUrls: ['./createorder.component.css']
})
export class CreateorderComponent implements OnInit{

CreateOrderForm:FormGroup=new FormGroup({
 ItemPrice:new FormControl('',[Validators.required]),
 Quantity:new FormControl('',[Validators.required]),
CreatedAt:new FormControl(Date.now),
OrderType:new FormControl('',[Validators.required]),
symbole:new FormControl('',[Validators.required])
})


stockData:any[]=[];

constructor(private _orderservices:OrderService,private _stockservices:StockDataService,private _router:Router) {}

SendOrderData():void{

  console.log(this.CreateOrderForm);


  this._orderservices.createorder(this.CreateOrderForm.value).subscribe({
next:(reasponse)=>{

if(reasponse.message=='Sucsess'){
this._router.navigate(['/order']);
}


}

  })


}


ngOnInit(): void {




  this._stockservices.GetProduct().subscribe({
    next:(reasponse)=>{
      this.stockData=reasponse;


    }
  })


  }





}


