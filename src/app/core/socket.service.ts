import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  ws!: WebSocket;
  constructor() { }
  createObservableSocket(url: string): Observable<any> {

    this.ws = new WebSocket(url)
    return new Observable(
      observer => {
        this.ws.onopen=(event)=>observer.next(event)
        this.ws.onmessage = (event) => observer.next(event)
        this.ws.onerror = (event) => observer.error(event)
        this.ws.onclose = (event) => {observer.next(event); observer.complete();}
      })

  }
  test(){
    const wss = webSocket('wss://localhost:8000');
    wss.subscribe(res=>{
      console.log('message',res)
    });
    wss.next('content')
  }


}


