import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 constructor() { }
 headername = "Angular Tutorial";
 birthday = new Date(1988, 3, 15);
 iscolor="red";

 isdisabled = true;

 colors=["green","red","yellow","black","blue"];
classname="headclass";
stylevalue={"color":"grey", "font-size":"30px"};

 ngOnInit(): void {
 }
 Functionclick(name:string){
  alert(name)
 }
 functionclick(){

 }
}
