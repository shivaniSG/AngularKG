import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { RegisterService } from 'services/register.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate  {
  
  constructor(private router: Router,private registerServer:RegisterService) { }
 
  canActivate() {
      if(this.registerServer.getLoggedIn())
      {
        return true;
      }
      else
      {
        this.router.navigate(["/login"]);
      }
  }
}
