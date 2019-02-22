import { Component, OnInit } from '@angular/core';
import { UserDetail } from '../userdetail';
import { Router }  from '@angular/router'
import { RegisterService } from '../../../services/register.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName:string="admin@gmail.com";
  password:string="123";
  IsLoggined:boolean=true;
  // public model: UserDetail= new UserDetail() ;
  model:any={};
  constructor(private router: Router,private objregister:RegisterService) {    
   }

  ngOnInit() {
  }

  onSubmit()
  {
    // debugger;
    console.log(this.model);
    this.objregister.GetData().find(data => {
      console.log(data);
      if(data.Email == this.model.userName && data.Password==this.model.password)
      {
        this.objregister.setLoggedIn();
        this.router.navigate(['/dashboard']);
      }
      else{
        this.IsLoggined=false;
        return false;
      }
    });
   
  }

}
