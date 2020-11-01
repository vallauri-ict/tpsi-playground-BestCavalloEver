import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practising-databinding',
  templateUrl: './practising-databinding.component.html',
  styleUrls: ['./practising-databinding.component.css']
})
export class PractisingDatabindingComponent implements OnInit {

  username:string;
  usernameEmpty:boolean = true;
  constructor() { 
  };

  ngOnInit(): void {
  }

  onResetUsername(){
    this.username = "";
    this.usernameEmpty = true;
  }

  checkUsername(){
    if(this.username != "")
      this.usernameEmpty = false;
    else
      this.usernameEmpty = true;
  }
}
