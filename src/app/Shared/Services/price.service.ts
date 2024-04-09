import { Injectable } from '@angular/core';
import { HttpClient, HubConnection, HubConnectionBuilder } from '@microsoft/signalr';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PriceService {
  private hubConnection: HubConnection;
  private priceUpdatesSubject = new Subject<{ symbol: string, price: number }>();
  constructor(private http:HttpClient) {

    this.hubConnection = new HubConnectionBuilder()
    .withUrl('https://example.com/priceHub') // Replace with your SignalR server URL
    .build();

    this.hubConnection.start()
    .then(() => console.log('SignalR connection established'))
    .catch(err => console.error('Error while establishing SignalR connection:', err));

  }

  sendPriceUpdate(symbol: string, price: number) {
    this.hubConnection.invoke('SendPriceUpdate', symbol, price)
      .catch(err => console.error('Error sending price update:', err));
  }


  }



