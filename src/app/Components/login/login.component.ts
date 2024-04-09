import { AuthService } from './../../Shared/Services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

errormessage:string='';

  constructor(private _authservices:AuthService,private _router:Router) {


  }

LoginForm:FormGroup=new FormGroup({

username:new FormControl('',[Validators.required]),

password:new FormControl('',[Validators.required])

});


SendLoginData():void{

 if(this.LoginForm.valid){
  this._authservices.SetLogin(this.LoginForm.value).subscribe({
    next:(resp)=>{



        localStorage.setItem('eToken',resp.token)

        this._authservices.saveUserData();

        this._router.navigate(['/home'])

      console.log(resp);

    },
    error:(err)=>{
      this.errormessage=err.error.message;
    }
      })
 }


}



}
