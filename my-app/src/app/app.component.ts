import { Component } from '@angular/core';
//import { threadId } from 'worker_threads';
//import { isGeneratedFile } from '@angular/compiler/src/aot/util';

@Component({
  selector: 'app-main',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  names = ["Barack Obama","Nicolo Frighi","Mia Khalifa","DumboRepper00","Johnny Sins","Alberto Albertino","Matteo Salvinini","Mamma Mia Marcello","JvstNav","Paolino"];
  title = 'my-app';
  myName = "Luca Cavallo";

  changeName(){
    var indice = 
    this.myName = this.names[this.getRandomInt(0,9)];
  }

  getRandomInt(min, max)
  {
    return Math.floor((Math.random() * max+1));
  }
  
}

