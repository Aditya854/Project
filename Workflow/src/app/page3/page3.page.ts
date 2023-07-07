import { Component, OnInit } from '@angular/core';
import { Serv1Service } from '../services/serv1.service';
import { myData } from '../data';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.page.html',
  styleUrls: ['./page3.page.scss'],
})


export class Page3Page implements OnInit {
  selectedval1:any;
  id : number=1;
  // myMap: Map<number, object> = new Map<number, object>();
  myobj = {
    discount: 0,
    district : "",
    channel: "",
    season: "",
    product: "", 
  }
  discnt!:number;
  dist_Set: Set<string> = new Set<string>();
  chan_Set: Set<string> = new Set<string>();
  seas_Set: Set<string> = new Set<string>();
  prod_Set: Set<string> = new Set<string>();
  myArray = myData;
 
  constructor(private myserv1:Serv1Service) { }

  ngOnInit() {
    this.myInitialisation();
  }

  myInitialisation():void{
    console.log('hello from my initialization');

    //adding to the district set
    this.myArray.forEach((obj)=>{
      this.dist_Set.add(obj.district);
    })

    //adding to the channel set
    this.myArray.forEach((obj)=>{
      this.chan_Set.add(obj.channel);
    })

    //adding to the season set
    this.myArray.forEach((obj)=>{
      this.seas_Set.add(obj.season);
    })

    //adding to the product set
    this.myArray.forEach((obj)=>{
      this.prod_Set.add(obj.product);
    })

    // console.log(this.seas_Set);
    // console.log(this.prod_Set);
    // console.log(this.chan_Set);
    // console.log(this.dist_Set);

  }

  onOptionSelected()
  {
    const value = this.discnt;
    // console.log(value);
     this.myobj.discount=value;
     console.log(this.myobj.discount);
  }

  onOptionSelected1(event: Event) {
    const value = (event.target as HTMLSelectElement).value;
    // console.log(value);
     this.myobj.district=value;
     console.log(this.myobj.district);
  }

  onOptionSelected2(event: Event) {
    const value = (event.target as HTMLSelectElement).value;
    // console.log(value);
    this.myobj.channel=value;
    console.log(this.myobj.channel);
  }

  onOptionSelected3(event: Event) {
    const value = (event.target as HTMLSelectElement).value;
    // console.log(value);
    this.myobj.season=value;
    console.log(this.myobj.season);
  }

  onOptionSelected4(event: Event) {
    const value = (event.target as HTMLSelectElement).value;
    // console.log(value);
    this.myobj.product=value;
    console.log(this.myobj.product);
  }

  onclick() {
    // this.myserv1.arrayData = ['Item 1', 'Item 2', 'Item 3','Item 4'];
    // console.log(this.myserv1.arrayData);
    // console.log(myData);
    // console.log(this.myobj);
    this.myserv1.myMap.set(this.id,this.myobj);
    this.id = this.id + 1;
    console.log(this.myserv1.myMap);

    //reset the inputs
    this.discnt=0;
    this.myobj = {
      discount: 0,
      district : "",
      channel: "",
      season: "",
      product: "", 
    }
  }

  onclick2()
  {
    const mapArray = Array.from(this.myserv1.myMap.entries());
    // this.storage.set('mapData',JSON.stringify(mapArray));
    console.log("hello");

    localStorage.setItem('mapData',JSON.stringify(mapArray));
  }

}
