import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/core/config.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private configSvc: ConfigService) { }

  ngOnInit(): void {
    console.log(this.configSvc.config);
  }

}
