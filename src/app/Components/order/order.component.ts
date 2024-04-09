import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/Shared/Services/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {


  OrdersData:any[]=[];


constructor(private _orderservice:OrderService) {}



ngOnInit(): void {
this._orderservice.GetOrders().subscribe({
  next:(response)=>{
    console.log(response);
    this.OrdersData=response;

  },
  error:(err)=>{
console.log(err);

  }
})
}

}
