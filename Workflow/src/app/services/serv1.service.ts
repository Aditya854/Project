import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Serv1Service {
  // arrayData!: any[];
  myMap: Map<number, object> = new Map<number, object>();
  seritems: Array<number> = [];
  inpch_array: Array<number> = [];
  editIndex:number=0;
  constructor() { }


}
