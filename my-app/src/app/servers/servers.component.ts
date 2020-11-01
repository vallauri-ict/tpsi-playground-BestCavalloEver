import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-servers', // crea un vero selettore html, si usa senza elemento html come "appoggio"
 // selector: '[app-servers]', // come attributo, per usarlo in app.component.html bisognerebbe usare <div app-servers></div>
 // selector: '.app-servers', // diventa una classe, in app.component.html devo usarlo come classe
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer:boolean = false;
  serverCreationStatus:string = "No server was created";
  serverName:string = "Digita qui il nome del nuovo server";

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
   };

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreationStatus = "Server "+this.serverName+" was created";
    this.serverName = "Digita qui il nome del nuovo server";
  }

  onUpdateServerName(event:any){
    console.log(event.target.value);
    this.serverName = event.target.value;
  }
}
