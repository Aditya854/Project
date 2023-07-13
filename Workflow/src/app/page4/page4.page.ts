import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Serv1Service } from '../services/serv1.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page4',
  templateUrl: './page4.page.html',
  styleUrls: ['./page4.page.scss'],
})
export class Page4Page implements OnInit {
  mapData: Map<number, object> = new Map<number, object>();
  ruleArr: number[]=[];
  objArr: any[]=[];
  paramsSub: any;

  constructor(private router: Router,private myser:Serv1Service, private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    // window.location.reload();
    this.paramsSub = this.activateRoute.params.subscribe(params =>{
      this.callmee();
   })
    
  }

  callmee(){

    // window.location.reload();
    const mapArray = JSON.parse(localStorage.getItem('mapData') || '{}');
    this.mapData = new Map<number,object>(mapArray);
     
    this.mapData.forEach((value: object, key: number) => {
      this.objArr.push(value);
      this.ruleArr.push(key);
    });
    console.log(this.mapData);
    console.log(this.ruleArr);
    console.log(this.objArr);
  }

  deleteRow(value: any)
  {
    console.log(value);
    this.mapData.delete(value);
    console.log(this.mapData);
    console.log(this.objArr);
    const mapArray = Array.from(this.mapData.entries());
    localStorage.setItem('mapData',JSON.stringify(mapArray));
    window.location.reload();
  }

  editRow(value: any)
  {
    const dataToSend = value;
    this.myser.editIndex = dataToSend;
    this.router.navigate(['/page3']);
  }
}
