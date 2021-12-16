import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { ConfigService } from 'src/app/core/config/config.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private configSvc: ConfigService,
    private meta: Meta
  ) {
    const metaConfig = this.configSvc.config.metaTag as any;
    for (const metaTag in metaConfig) {
      if (Object.prototype.hasOwnProperty.call(metaConfig, metaTag)) {
        if(metaTag==='metaUrl'){
          meta.addTag({name:'URL',content:metaConfig[metaTag]});
          break;
        }
        meta.addTag({ name: metaTag, content: metaConfig[metaTag] });
      }
    }
  }

  ngOnInit(): void {
  }

}
