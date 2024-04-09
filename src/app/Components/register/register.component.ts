import { AuthService } from './../../Shared/Services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

errormessage:string='';

  constructor(private _authservices:AuthService,private _router:Router) {


  }

RegisterForm:FormGroup=new FormGroup({
name:new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
username:new FormControl('',[Validators.required]),
email:new FormControl('',[Validators.required,Validators.email]),
password:new FormControl('',[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{5,20}$/)])

});


SendRegisterData():void{

 if(this.RegisterForm.valid){
  this._authservices.SetRegister(this.RegisterForm.value).subscribe({
    next:(resp)=>{

      if(resp.message=="success"){

        this._router.navigate(['/login'])
      }
      // console.log(resp);

    },
    error:(err)=>{
      this.errormessage=err.error.message;
    }
      })
 }


}



}
