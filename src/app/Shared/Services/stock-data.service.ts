import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StockDataService {

  constructor(private _httpclient:HttpClient) { }


GetProduct():Observable<any>{
return this._httpclient.get('https://localhost:44352/api/Stock/stocks');
}

DisplayProductHistory(symbole:string):Observable<any>{
  return this._httpclient.get(`https://localhost:44352/api/Stock/Stocks/${symbole}/history`);
  }



}
