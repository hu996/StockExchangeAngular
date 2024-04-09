import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Shared/Services/auth.service';

@Component({
  selector: 'app-nav-blank',
  templateUrl: './nav-blank.component.html',
  styleUrls: ['./nav-blank.component.css']
})
export class NavBlankComponent {

  constructor(private _authServices:AuthService) {


  }

  SignOutUser():void{

    this._authServices.Logout();
  }
}
