import { SocketService } from './../../core/socket.service';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  msg:string[] = [];
  inputMsg:string = '';
  socketUrl:string = 'wss://echo.websocket.events/';
  isConnected = false;

  constructor(public socketSvc:SocketService) { }

  public connect(){
    if(this.socketSvc.ws&&this.socketSvc.ws.readyState===WebSocket.OPEN){
      return;
    }
    this.socketSvc.createObservableSocket(this.socketUrl)
    // .pipe(map(event => JSON.parse(event)))
    .subscribe((event)=>{
      switch(event.type){
        case 'open' :{
          this.msg.push('--- connected ---');
          this.isConnected = true;
          break;
        }
        case 'message' :{
          this.msg.push(`msg：${event.data} `) ;
          break;
        }
        case 'close':{
          this.msg.push('--- disconnected ---');
          this.isConnected = false;
          break;
        }

      }
      // this.msg = event;
      console.log(event)
    });
  }
  public disConnect(){
    if(this.socketSvc.ws&&this.socketSvc.ws.readyState===WebSocket.OPEN){
      this.socketSvc.ws.close();
    }
  }
  public send(){
    if(this.socketSvc.ws&&this.socketSvc.ws.readyState===WebSocket.OPEN){
      this.socketSvc.ws.send(this.inputMsg);
      this.inputMsg = '';
    }
  }

  ngOnInit(): void {

    // console.log(this.data);
    // this.socketSvc.test();
    // var socket = new WebSocket('ws://localhost:9000')
    // socket.onopen = function(event){
    //   socket.send('hi');
    //   socket.onmessage = function (event) {            // 监听消息
    //     console.log('Message listener')
    //   }
    //   socket.onclose = function (event) {              // 监听 socket 的关闭
    //     console.log('closed')
    //   }
    //   socket.close()
    // }

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
