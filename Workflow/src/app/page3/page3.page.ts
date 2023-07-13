import { Component, OnInit } from '@angular/core';
import { Serv1Service } from '../services/serv1.service';
import { myData } from '../data';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.page.html',
  styleUrls: ['./page3.page.scss'],
})


export class Page3Page implements OnInit {
  selectedval1:any;
  id : number=1;
  myMap: Map<number, object> = new Map<number, object>();
  myobj = {
    id:0,
    discount: 0,
    discount_type : 0,
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
  editindex:number=0;
  paramsSub!: Subscription;
 
  constructor(private myserv1:Serv1Service,private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.myInitialisation();
    this.paramsSub = this.activateRoute.params.subscribe(params =>{
       if(this.myserv1.editIndex!=0)
       {
        this.Callme();
       }
    })

  }

  Callme():void{
    //  console.log(this.myserv1.editIndex);
     const i = this.myserv1.editIndex;
     this.editindex=i;
     const mapArray = JSON.parse(localStorage.getItem('mapData') || '{}');
      this.myMap = new Map<number,object>(mapArray);

      const obj = this.myMap.get(i);
      // console.log(obj);
      const a = Number((obj as any).discount);
      this.discnt = a;
  }

  

  myInitialisation():void{
    // console.log('hello from my initialization');

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

  onOptionSelected5(event: Event) {
    const value = (event.target as HTMLSelectElement).value;
    // console.log(value);
    this.myobj.discount_type= value as unknown as number;
    console.log(this.myobj.discount_type);
    // console.log(this.myobj.product);
  }

  update()
  {
    this.myobj.id = this.editindex;
    console.log(this.myobj);
    this.myMap.set(this.myobj.id,this.myobj);
    console.log(this.myMap);

    const mapArray = Array.from(this.myMap.entries());
    localStorage.setItem('mapData',JSON.stringify(mapArray));
  }

  onclick() {
    this.myobj.id = this.myobj.id+1;
    this.myserv1.myMap.set(this.id,this.myobj);
    this.id = this.id + 1;
    console.log(this.myserv1.myMap);

    //reset the inputs
    this.discnt=0;
    this.myobj = {
      id : this.myobj.id,
      discount: 0,
      discount_type : 0,
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

  onclick3()
  {
    
  }


  public ngOnDestroy(): void {
    // Prevent memory leaks
    this.paramsSub.unsubscribe();
}

}
