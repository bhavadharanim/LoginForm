import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public detailz={
    "NAME":"",
    "PASSWORD":""
  }
  public name;
  public pwd;

  constructor() { }
  setDetail(detail) {
    localStorage.setItem("Username",detail.name);
    localStorage.setItem("Password",detail.password);
    console.log("setting the detail......",detail);
  }
  
  
 public getDetail()
  {
    this.name=localStorage.getItem("Username");
    this.pwd=localStorage.getItem("Password");

    this.detailz.NAME=this.name;
    this.detailz.PASSWORD=this.pwd;
   
    return this.detailz;
  }
  
  
}
