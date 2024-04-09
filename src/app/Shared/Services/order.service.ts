import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private _httpclient:HttpClient) { }



GetOrders():Observable<any>{
return this._httpclient.get('https://localhost:44352/api/Orders/DisplayOrders');
}


createorder(orderData:any):Observable<any>{
return this._httpclient.post('https://localhost:44352/api/Orders/AddOrder',{
  order:
    orderData

});

}





}
