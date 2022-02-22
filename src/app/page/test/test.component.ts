import { SocketService } from './../../core/socket.service';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  msg: string[] = [];
  inputMsg: string = '';
  socketUrl: string = 'wss://echo.websocket.events/';
  nickName: string = '';
  channel:  any= 0;

  isNameReady:boolean = false;
  isChannelReady:boolean = false;
  isConnected = false;



  constructor(public socketSvc: SocketService) { }

  public setName(){
    if(!this.nickName) return;
    this.isNameReady = true;
  }

  public selectChannel(){
    if(Number(this.channel)  === 0){
      this.isChannelReady = false;
    }else{
      this.isChannelReady = true;
    }
  }

  public connect() {
    this.isConnected = true;

  }

  private resetData(){
    this.nickName = '';
    this.channel = '0';
    this.isNameReady = false;
    this.isChannelReady = false;
  }

  public disConnect() {
    this.isConnected = false;
    this.resetData();
  }

  public send() {

  }

  public disableConnect() {
    return (!this.isNameReady||!this.isChannelReady||this.isConnected);
  }




  ngOnInit(): void {
    this.socketSvc.channel.bind('App\\Events\\GetRequestEvent',(data:any)=>{
      console.log(data)
    })
  }

}
export interface Data {
  id: number,
  name: string,
  email: string,
  introduction: string,
  image: string,
  created_at: string,
  email_verified_at: string
}
