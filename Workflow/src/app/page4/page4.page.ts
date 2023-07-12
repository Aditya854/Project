import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page4',
  templateUrl: './page4.page.html',
  styleUrls: ['./page4.page.scss'],
})
export class Page4Page implements OnInit {
  mapData: Map<number, object> = new Map<number, object>();
  ruleArr: number[]=[];
  objArr: any[]=[];
  constructor() { }

  ngOnInit() {
    console.log("hie");
    console.log(typeof(localStorage.getItem('mapData')));
    const mapArray = JSON.parse(localStorage.getItem('mapData') || '{}');
      this.mapData = new Map<number,object>(mapArray);
       
      this.mapData.forEach((value: object, key: number) => {
        this.objArr.push(value);
        this.ruleArr.push(key);
      });
      console.log(this.ruleArr);
      console.log(this.objArr);
  }

}
