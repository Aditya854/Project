import { Component, OnInit } from '@angular/core';
import { Serv1Service } from '../services/serv1.service';
import { myData } from '../data';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

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

  //changing dd 
  discount_type=0;
  dd_district='';
  dd_channel='';
  dd_season='';
  dd_product='';
 
  constructor(private myserv1:Serv1Service,private activateRoute: ActivatedRoute,private toastr: ToastrService) { }

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
    //  console.log(this.discount_type);
    //  this.discount_type=0;
  }

  onOptionSelected1() {
    // const value = (event.target as HTMLSelectElement).value;
    // console.log(value);
     this.myobj.district=this.dd_district;
     console.log(this.myobj.district);
  }

  onOptionSelected2() {
    // const value = (event.target as HTMLSelectElement).value;
    // console.log(value);
    this.myobj.channel=this.dd_channel;
    console.log(this.myobj.channel);
  }

  onOptionSelected3() {
    // const value = (event.target as HTMLSelectElement).value;
    // console.log(value);
    this.myobj.season=this.dd_season;
    console.log(this.myobj.season);
  }

  onOptionSelected4() {
    // const value = (event.target as HTMLSelectElement).value;
    // console.log(value);
    this.myobj.product=this.dd_product;
    console.log(this.myobj.product);
  }

  onOptionSelected5() {
    // const value = (event.target as HTMLSelectElement).value;
    // console.log(value);
    this.myobj.discount_type= this.discount_type;
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

    this.toastr.success('Rule Updated Succesfully');
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

    
    this.discount_type=0;
  this.dd_district='';
  this.dd_channel='';
  this.dd_season='';
  this.dd_product='';

  }

  onclick2()
  {
    const mapArray = Array.from(this.myserv1.myMap.entries());
    // this.storage.set('mapData',JSON.stringify(mapArray));
    console.log("hello");

    localStorage.setItem('mapData',JSON.stringify(mapArray));
    
    // toast code here
    this.toastr.success('Rules succesfully stored to LS');
  }

  onclick3()
  {
    
  }


  public ngOnDestroy(): void {
    // Prevent memory leaks
    this.paramsSub.unsubscribe();
}

}
