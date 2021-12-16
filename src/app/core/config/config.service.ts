import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  public config!: Config;
  constructor(private http: HttpClient) { }

  loadConfig() {
    return this.http
      .get<any>('./config/config.json')
      .toPromise()
      .then(config => {
        this.config = new Config(config);
      });
  }
}

export class Config {
  metaTag={
    title : "UsongRat Web Develope",
    keyword : "Usong Usongrat",
    description : "UI/UX Design, Web Develop, Front-End, Back-End",
    author : "Sean Roy Lauren",
    copyright : "Copyright belongs Usongrat Team. If you dare to do anything illegal, we will give you some color see see.",
    metaUrl : "https://www.usongrat.tw"
  }

  constructor(config: any) {
    this.metaTag = config.metaTag?config.metaTag: this.metaTag;
  }
}
