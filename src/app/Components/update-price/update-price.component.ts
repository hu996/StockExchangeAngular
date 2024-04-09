import { PriceService } from './../../Shared/Services/price.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-update-price',
  templateUrl: './update-price.component.html',
  styleUrls: ['./update-price.component.css']
})
export class UpdatePriceComponent {

  constructor(private _priceserv:PriceService) { }


  updatePrice(symbol: string, price: number) {
    this._priceserv.sendPriceUpdate(symbol, price);
  }

}
