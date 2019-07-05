import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public info="";
  public pwd="";
  public nm="";
    public bv;
   public person={
     "NAME":"",
     "PASSWORD":""
   };
   public information={
     "name":"",
     "pwd":""
   }
   name(event){
     this.nm=event;

   }
   pass(event){
     this.pwd=event;

   }
  

  constructor(public detail:AuthService) { }
   
   
  ngOnInit() {  
  }
   public details={
    "name":"",
    "password":""
  }

  
  
  login(){
    console.log(this.details);
    // console.log("inside login function....", this.name, this.password);
    // this.detail.setDetail(this.name, this.password);
    // this.Username=this.name;
    // this.PassWord=this.password;
    // /*
    //  Username=this.detail.getName();
    //  PassWord=this.detail.getPassword();
    //  */
    //  console.log("After login function.........",this.Username,this.PassWord);
     this.detail.setDetail(this.details); 
     this.person=this.detail.getDetail();
     console.log(this.person.NAME);
     this.bv="bhava";
     this.information.name=localStorage.getItem("Username");
     this.information.pwd=localStorage.getItem("Password");
     console.log("parent detail"+this.information.name);

    
  }
  

}
