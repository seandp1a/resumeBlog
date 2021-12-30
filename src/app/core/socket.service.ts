
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Pusher from 'pusher-js';
import { Observable } from 'rxjs';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { io } from 'socket.io-client'

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  pusher:any;
  public channel :any;

  constructor(private http :HttpClient) {
    this.pusher = new Pusher('roy',{
      cluster:'mt1',
      wsHost:'roy.usongrat.tw',
      wsPort:6001
    });
    this.channel = this.pusher.subscribe('EventTriggered')
  }


  getPusher(){
    return this.pusher;
  }



  sendMessage(message: any) {

  }

  setNickName(name:string){

  }
  setChannel(channel:any){

  }

  // getMessages(): Observable<any> {
  //   return new Observable(observer => {
  //     this.socket = io(this.url, { withCredentials: true });
  //     this.socket.on('nicknamesuccess', (data:any) => {
  //       // observer.next(data);
  //       console.log(data);
  //     });
  //     this.socket.on('nicknamefail', (data:any) => {
  //       observer.next(data);
  //     });
  //     this.socket.on('joinroomsuccess', (data:any) => {
  //       observer.next(data);
  //     });
  //     return () => {
  //       this.socket.disconnect();
  //     }
  //   })
  // }


  test() {
    const wss = webSocket('wss://localhost:8000');
    wss.subscribe(res => {
      console.log('message', res)
    });
    wss.next('content')
  }


}


