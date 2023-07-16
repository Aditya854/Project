import { Injectable } from '@angular/core';
import { getFirestore } from '@angular/fire/firestore';
import {AngularFireDatabase} from '@angular/fire/compat/database';
import { 
  Firestore,
  addDoc,
  collection,
  collectionData
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class Serv1Service {
  // arrayData!: any[];
  myMap: Map<number, object> = new Map<number, object>();
  seritems: Array<number> = [];
  inpch_array: Array<number> = [];
  editIndex:number=0;
  constructor(private firestore:Firestore) { }
   
getall(){
  const collectionInstance = collection(this.firestore,'users');
  collectionData(collectionInstance)
  .subscribe(val=>{
    console.log(val);
    console.log(typeof(val));
  })
}


}
