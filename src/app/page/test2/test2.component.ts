import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.scss']
})
export class Test2Component implements OnInit {

  constructor() { }

  public data:Data3[]=[];

  public sortType: keyof Data3 = 'uid'; // 紀錄當前使用哪個欄位排序
  public sortReverse: boolean = false; // true：昇冪　／false：降冪

  // 回傳經排序過後的陣列
  public sortBy(type: keyof Data3, reverse: boolean) {
    return this.data.sort((a: Data3, b: Data3) => {
      if (reverse) {
        return  +a[type] > +b[type] ? -1 : +a[type] === +b[type] ? 0 : 1
      } else {
        return +a[type] > +b[type] ? 1 : +a[type] === +b[type] ? 0 : -1
      }
    });
  }

  // 切換排序規則&升降冪
  public changeSortType(type: keyof Data3) {
    if (this.sortType === type) {
      this.sortReverse = !this.sortReverse;
      return;
    }
    this.sortType = type;
    this.sortReverse = false;
  }



  ngOnInit(): void {
    console.log(this.data);

  }

}
export interface Data3 {
  uid: string,
  useCount: number,
  useTime: number,
  openStaytime: number
}

