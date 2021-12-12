import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor() { }
  public data: Data[] = [
    {
      "id": 1,
      "name": "kein",
      "email": "king.merritt@example.com",
      "introduction": "",
      "image": "https://scontent.ftpe8-3.fna.fbcdn.net/v/t31.18172-8/15585447_1211863898899213_6568816567366879625_o.jpg?_nc_cat=111&ccb=1-4&_nc_sid=a9b1d2&_nc_ohc=SpqyiYDw880AX_HzbDB&_nc_ht=scontent.ftpe8-3.fna&oh=366e6c7c3a399e72cf2d9836c821106a&oe=61362253",
      "created_at": "2021-08-08 16:26:27",
      "email_verified_at": "2021-08-08 16:26:27"
    },
    {
      "id": 2,
      "name": "Usonggg",
      "email": "cristobal04@example.org",
      "introduction": "",
      "image": "https://tse2.mm.bing.net/th?id=OIP.miUoKTqAeJabacygxSjI9QHaHa&pid=Api&P=0&w=300&h=300",
      "created_at": "2021-08-08 16:26:27",
      "email_verified_at": "2021-08-08 16:26:27"
    },
    {
      "id": 3,
      "name": "ekub",
      "email": "ekub@example.org",
      "introduction": "",
      "image": "https://scontent.ftpe8-1.fna.fbcdn.net/v/t31.18172-8/13962827_1092796270805977_3924550336020176000_o.jpg?_nc_cat=108&ccb=1-4&_nc_sid=a9b1d2&_nc_ohc=3DusaTBMHx8AX8-Tt1M&_nc_ht=scontent.ftpe8-1.fna&oh=9a446c2932ad4ab8c379a876bccbb1b8&oe=6137EBD8",
      "created_at": "2021-08-08 16:26:27",
      "email_verified_at": "2021-08-08 16:26:27"
    },
    {
      "id": 4,
      "name": "hollysh1t",
      "email": "holly11@example.net",
      "introduction": "",
      "image": "https://roy.usongrat.tw/storage/images/2021/08/12/這什麼髒東西.png",
      "created_at": "2021-08-08 16:26:27",
      "email_verified_at": "2021-08-08 16:26:27"
    },
    {
      "id": 5,
      "name": "jast",
      "email": "jast.brando@example.com",
      "introduction": "",
      "image": "https://roy.usongrat.tw/storage/images/default.png",
      "created_at": "2021-08-08 16:26:27",
      "email_verified_at": "2021-08-08 16:26:27"
    },
    {
      "id": 6,
      "name": "wahtupbro",
      "email": "lueilwitz.andreanne@example.org",
      "introduction": "",
      "image": "https://roy.usongrat.tw/storage/images/2021/08/12/喜勒哈囉.png",
      "created_at": "2021-08-08 16:26:27",
      "email_verified_at": "2021-08-08 16:26:27"
    },
    {
      "id": 8,
      "name": "Jarvis",
      "email": "jarvis08@example.com",
      "introduction": "",
      "image": "https://roy.usongrat.tw/storage/images/2021/08/12/頭貼.jpg",
      "created_at": "2021-08-08 16:26:27",
      "email_verified_at": "2021-08-08 16:26:27"
    },
    {
      "id": 9,
      "name": "yeeeee",
      "email": "rashad.anderson@example.net",
      "introduction": "",
      "image": "https://roy.usongrat.tw/storage/images/2021/08/12/我不要R.png",
      "created_at": "2021-08-08 16:26:27",
      "email_verified_at": "2021-08-08 16:26:27"
    },
    {
      "id": 11,
      "name": "spark",
      "email": "terry.jordane@example.com",
      "introduction": "",
      "image": "https://roy.usongrat.tw/storage/images/2021/08/12/1628781549282.jpg",
      "created_at": "2021-08-08 16:26:39",
      "email_verified_at": "2021-08-08 16:26:39"
    },
    {
      "id": 12,
      "name": "Marlee Waelchi",
      "email": "jayda.jacobson@example.net",
      "introduction": "",
      "image": "https://roy.usongrat.tw/storage/images/default.png",
      "created_at": "2021-08-08 16:26:39",
      "email_verified_at": "2021-08-08 16:26:39"
    },
    {
      "id": 13,
      "name": "Mrs. Freda Bergnaum",
      "email": "lurline66@example.com",
      "introduction": "",
      "image": "https://roy.usongrat.tw/storage/images/default.png",
      "created_at": "2021-08-08 16:26:39",
      "email_verified_at": "2021-08-08 16:26:39"
    },
    {
      "id": 17,
      "name": "Ulises Connelly",
      "email": "fahey.bruce@example.org",
      "introduction": "",
      "image": "https://roy.usongrat.tw/storage/images/default.png",
      "created_at": "2021-08-08 16:26:39",
      "email_verified_at": "2021-08-08 16:26:39"
    },
    {
      "id": 18,
      "name": "Kathlyn Kohler",
      "email": "jayden25@example.net",
      "introduction": "",
      "image": "https://roy.usongrat.tw/storage/images/default.png",
      "created_at": "2021-08-08 16:26:39",
      "email_verified_at": "2021-08-08 16:26:39"
    },
    {
      "id": 19,
      "name": "Chanelle Mills",
      "email": "brody.christiansen@example.net",
      "introduction": "",
      "image": "https://roy.usongrat.tw/storage/images/default.png",
      "created_at": "2021-08-08 16:26:39",
      "email_verified_at": "2021-08-08 16:26:39"
    },
    {
      "id": 20,
      "name": "Aida Sauer",
      "email": "giovani61@example.com",
      "introduction": "",
      "image": "https://roy.usongrat.tw/storage/images/default.png",
      "created_at": "2021-08-08 16:26:39",
      "email_verified_at": "2021-08-08 16:26:39"
    },
    {
      "id": 21,
      "name": "Norris Lueilwitz DVM",
      "email": "pattie.smith@example.net",
      "introduction": "",
      "image": "https://roy.usongrat.tw/storage/images/default.png",
      "created_at": "2021-08-08 16:26:57",
      "email_verified_at": "2021-08-08 16:26:57"
    },
    {
      "id": 22,
      "name": "Dr. Buford Graham",
      "email": "yhahn@example.org",
      "introduction": "",
      "image": "https://roy.usongrat.tw/storage/images/default.png",
      "created_at": "2021-08-08 16:26:57",
      "email_verified_at": "2021-08-08 16:26:57"
    },
    {
      "id": 23,
      "name": "Dianna Walker",
      "email": "lily54@example.net",
      "introduction": "",
      "image": "https://roy.usongrat.tw/storage/images/default.png",
      "created_at": "2021-08-08 16:26:57",
      "email_verified_at": "2021-08-08 16:26:57"
    },
    {
      "id": 24,
      "name": "Halie Conn",
      "email": "edmond.ryan@example.net",
      "introduction": "",
      "image": "https://roy.usongrat.tw/storage/images/default.png",
      "created_at": "2021-08-08 16:26:57",
      "email_verified_at": "2021-08-08 16:26:57"
    },
    {
      "id": 25,
      "name": "Julio Parker II",
      "email": "milton.mayer@example.org",
      "introduction": "",
      "image": "https://roy.usongrat.tw/storage/images/default.png",
      "created_at": "2021-08-08 16:26:57",
      "email_verified_at": "2021-08-08 16:26:57"
    },
    {
      "id": 26,
      "name": "Antoinette Kihn",
      "email": "louvenia.oberbrunner@example.net",
      "introduction": "",
      "image": "https://roy.usongrat.tw/storage/images/default.png",
      "created_at": "2021-08-08 16:26:57",
      "email_verified_at": "2021-08-08 16:26:57"
    },
    {
      "id": 27,
      "name": "Destany Runolfsdottir",
      "email": "nolan.jaren@example.net",
      "introduction": "",
      "image": "https://roy.usongrat.tw/storage/images/default.png",
      "created_at": "2021-08-08 16:26:57",
      "email_verified_at": "2021-08-08 16:26:57"
    },
    {
      "id": 28,
      "name": "Dr. Rashad Metz Sr.",
      "email": "braulio.kirlin@example.net",
      "introduction": "",
      "image": "https://roy.usongrat.tw/storage/images/default.png",
      "created_at": "2021-08-08 16:26:57",
      "email_verified_at": "2021-08-08 16:26:57"
    },
    {
      "id": 29,
      "name": "Keven Mayer",
      "email": "hosea.crooks@example.org",
      "introduction": "",
      "image": "https://roy.usongrat.tw/storage/images/default.png",
      "created_at": "2021-08-08 16:26:57",
      "email_verified_at": "2021-08-08 16:26:57"
    },
    {
      "id": 31,
      "name": "Roy",
      "email": "roy@smartm.com.tw",
      "introduction": "",
      "image": "https://tse2.mm.bing.net/th?id=OIP.miUoKTqAeJabacygxSjI9QHaHa&pid=Api&P=0&w=300&h=300",
      "created_at": "2021-08-09 10:05:33",
      "email_verified_at": ""
    },
    {
      "id": 32,
      "name": "冠融",
      "email": "cc711612@gmail.com",
      "introduction": "<p><strong>我是ROY</strong></p>\r\n<p>我是ROY<strong></strong></p>\r\n<p><strong>我是ROY</strong><strong></strong></p>\r\n<p>我是ROY<strong></strong></p>\r\n<p><strong>我是ROY</strong><strong></strong></p>\r\n<p>我是ROY<strong></strong></p>\r\n<p><strong>我是ROY</strong><strong></strong></p>\r\n<p>我是ROY<strong></strong></p>",
      "image": "https://roy.usongrat.tw/storage/images/2021/08/23/162479862017978_P12409715.jpg",
      "created_at": "2021-08-09 11:51:09",
      "email_verified_at": ""
    },
    {
      "id": 33,
      "name": "嬰兒ROY",
      "email": "roy@test.com.tw",
      "introduction": "",
      "image": "https://roy.usongrat.tw/storage/images/2021/08/12/162479862017978_P12409715.jpg",
      "created_at": "2021-08-11 04:28:52",
      "email_verified_at": ""
    },
    {
      "id": 34,
      "name": "巨垂",
      "email": "aaaaaa@example.com",
      "introduction": "",
      "image": "https://roy.usongrat.tw/storage/images/2021/08/23/要我等多久.png",
      "created_at": "2021-08-11 20:02:03",
      "email_verified_at": ""
    },
    {
      "id": 39,
      "name": "李冠融",
      "email": "roy22887@yahoo.com.tw",
      "introduction": "",
      "image": "https://graph.facebook.com/v3.3/6676696075689515/picture?width=1920",
      "created_at": "2021-08-21 02:38:23",
      "email_verified_at": ""
    },
    {
      "id": 40,
      "name": "菘",
      "email": "seandp1a@gmail.com",
      "introduction": "",
      "image": "https://profile.line-scdn.net/0h_R5EEDa3AH0IPCmR1oN_KjR5DhB_EgY1cFxHHno4V052WRIvY14aG3k_VkogDU8pYV5OGn9uDkl1",
      "created_at": "2021-08-21 06:00:39",
      "email_verified_at": ""
    },
    {
      "id": 41,
      "name": "張友菘",
      "email": "a29816760@yahoo.com.tw",
      "introduction": "",
      "image": "https://graph.facebook.com/v3.3/4281151838637055/picture?width=1920",
      "created_at": "2021-08-21 06:37:50",
      "email_verified_at": ""
    },
    {
      "id": 42,
      "name": "巨垂",
      "email": "ee@ww.ww",
      "introduction": "",
      "image": "https://roy.usongrat.tw/storage/images/2021/10/06/883a447411963358c2a0b5c78681adcd.jpg",
      "created_at": "2021-10-06 13:34:32",
      "email_verified_at": ""
    }
  ];
  public sortType: keyof Data = 'id'; // 紀錄當前使用哪個欄位排序
  public sortReverse: boolean = false; // true：昇冪　／false：降冪

  // 回傳經排序過後的陣列
  public sortBy(type: keyof Data, reverse: boolean) {
    return this.data.sort((a: Data, b: Data) => {
      if (reverse) {
        return a[type] > b[type] ? -1 : a[type] === b[type] ? 0 : 1
      } else {
        return a[type] > b[type] ? 1 : a[type] === b[type] ? 0 : -1
      }
    });
  }

  // 切換排序規則&升降冪
  public changeSortType(type: keyof Data) {
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
export interface Data {
  id: number,
  name: string,
  email: string,
  introduction: string,
  image: string,
  created_at: string,
  email_verified_at: string
}
