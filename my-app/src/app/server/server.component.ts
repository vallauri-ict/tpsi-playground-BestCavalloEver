import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.css']
})

export class ServerComponent {
    serverId:number; // in type script possiamo definire il tipo
    serverStatus:string;

    constructor(){
        this.serverId = this.getRandomInt(1,100);
        this.getServerStatus();
    }

    getServerStatus(){
        this.serverStatus = this.getRandomInt(0,1) == 0 ? 'offline':'online';
        return this.serverStatus;
    }

    getRandomInt(min, max){
        return Math.floor(Math.random() * (max-min+1)) + min;
    }

    getColor(){
        return this.serverStatus == "online" ? "#009900" : "red";
    }
}