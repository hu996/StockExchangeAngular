import { Component, OnInit } from '@angular/core';
import { StockDataService } from 'src/app/Shared/Services/stock-data.service';
import { Product } from 'src/app/Shared/interfaces/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

Products:Product[]=[];
searchsymbole:string='';
errormessage:string='';

constructor(private _productser:StockDataService) {


}



test(search:string):void{
  this._productser.DisplayProductHistory(search).subscribe({
    next:(response)=>{
     if(response !=null){
      this.Products=response;
     }

else{
  this.errormessage="this symbole not found";
}

    },
    error:(err)=>{
      this.errormessage=err.error.message;

    }
    })}

ngOnInit(): void {
  this._productser.GetProduct().subscribe({
    next:(response)=>{
      this.Products=response;

    }
  })

}
}



