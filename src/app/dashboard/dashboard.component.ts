import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../../../services/register.service';

import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
name:string;
  constructor(private objRegister: RegisterService, private router: Router) { }

  ngOnInit() {
    this.objRegister.GetData().find(data=>{
      this.name=data.FirstName;
    });
  }

  onLogout() {
    this.objRegister.LogOut();
    this.router.navigate(['/login']);
  }

}
