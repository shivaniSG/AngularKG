import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  userList: any = [];
  isLoggedIn=false;
  constructor() { }

  SetData(d) {
    this.userList.push(d);
  }

  GetData() {
    // console.log(this.userList)
    return this.userList;
  }

  setLoggedIn()
  {
    this.isLoggedIn=true;
  }

  getLoggedIn()
  {
    return this.isLoggedIn;
  }

  LogOut()
  {
    this.isLoggedIn=false;
  }
}
