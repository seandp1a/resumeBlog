import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { io } from 'socket.io-client'

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  ws!: WebSocket;
  constructor() { }
  public url = 'ws://localhost:8001'
  public channel :any;
  private socket: any;


  sendMessage(message: any) {
    this.socket.emit('aaa', message);
  }

  setNickName(name:string){
    this.socket.emit('setnickname',name);
  }
  setChannel(channel:any){
    this.socket.emit('join',channel);
  }

  getMessages(): Observable<any> {
    return new Observable(observer => {
      this.socket = io(this.url, { withCredentials: true });
      this.socket.on('nicknamesuccess', (data:any) => {
        observer.next(data);
      });
      this.socket.on('nicknamefail', (data:any) => {
        observer.next(data);
      });
      this.socket.on('joinroomsuccess', (data:any) => {
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      }
    })
  }

  createObservableSocket(url: string): Observable<any> {

    this.ws = new WebSocket(url)
    return new Observable(
      observer => {
        this.ws.onopen = (event) => observer.next(event)
        this.ws.onmessage = (event) => observer.next(event)
        this.ws.onerror = (event) => observer.error(event)
        this.ws.onclose = (event) => { observer.next(event); observer.complete(); }
      })

  }
  test() {
    const wss = webSocket('wss://localhost:8000');
    wss.subscribe(res => {
      console.log('message', res)
    });
    wss.next('content')
  }


}


