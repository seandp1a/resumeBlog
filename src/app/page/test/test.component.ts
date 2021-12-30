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

  isNameReady:boolean = true;
  isChannelReady:boolean = false;
  isConnected = false;


  constructor(public socketSvc: SocketService) { }

  public connect() {

  }
  public disConnect() {

  }
  public send() {

  }

  public disconnectIo() {
    this.isConnected = false;
  }

  public disableConnect() {
    const noNickName = this.nickName === '';
    const noChannel = this.channel === 0;
    const noUrl = this.socketUrl ==='';
    return (noChannel||noUrl||noNickName);
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
