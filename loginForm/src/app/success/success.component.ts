import { Component, OnInit, Input, Output } from '@angular/core';
import { AuthService } from '../auth.service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {

  constructor(public auth:AuthService) { }

  @Input() public parentData={
    "name":"",
    "pwd":""
  };
  @Output() public childData=new EventEmitter;
  @Output() public childName=new EventEmitter;
  @Output() public childPassword=new EventEmitter;




  public person={
    "NAME":"",
    "PASSWORD":""
  };
  public details={
    "name":"",
    "password":""
  }
  Event()
  {
    this.childData.emit("child to parent emitter");
    this.childName.emit(this.parentData.name);
    this.childPassword.emit(this.parentData.pwd);


  }
  

  ngOnInit() {
    
    this.person=this.auth.getDetail();
    console.log(this.person.NAME);
    console.log("parent information ......",this.parentData.name);
  }


}
