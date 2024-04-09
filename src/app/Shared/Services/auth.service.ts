import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userdata:any;

  constructor(private _httpclient:HttpClient,private _router:Router) { }



  saveUserData(){


    if(localStorage.getItem('eToken')!=null){

      let encodedtoken:any=localStorage.getItem('eToken');
      this.userdata=jwtDecode(encodedtoken);
    }
  }

  SetRegister(UserData:object):Observable<any>{

   return this._httpclient.post('https://localhost:44352/api/Accounts/Register',UserData);
  }

  SetLogin(LoginData:object):Observable<any>{
    return this._httpclient.post('https://localhost:44352/api/Accounts/Login',LoginData);
  }

Logout():void{


    localStorage.removeItem('eToken');

    this._router.navigate(['/login']);


}





}
