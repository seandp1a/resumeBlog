import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    private route: Router
  ) { }
  navExpand = false;

  public urlMatch(url: string) {
    if (this.route.url.match(url)) {
      return true;
    } else {
      return false;
    }
  }
  public toggleNavExpand() {
    this.navExpand = !this.navExpand;
  }
  ngOnInit(): void {
  }

}
