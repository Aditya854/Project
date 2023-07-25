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

hierar1(){
  return [
    {
      id:1,
      name:"Level 1"
    },
    {
      id:2,
      name:"Level 2"
    },
    {
      id:3,
      name:"Level 3"
    }
  ]
}

hierar2(){
  return [
    {
      idL1:1,
      idL2:1,
      name:"Business"
    },
    {
      idL1:2,
      idL2:1,
      name:"category 1"
    },
    {
      idL1:2,
      idL2:2,
      name:"category 2"
    },
    {
      idL1:3,
      idL2:1,
      name:"sub-category 1"
    },
    {
      idL1:3,
      idL2:2,
      name:"sub-category 2"
    },
    {
      idL1:3,
      idL2:3,
      name:"sub-category 3"
    }
  ]
}


hierar3(){
  return [
    {
      idL1:1,
      idL2:1,
      idL3:1,
      name:"item 1",
      valuee:2000,
    },
    {
      idL1:1,
      idL2:1,
      idL3:1,
      name:"item 2",
      valuee:1200
    },
    {
      idL1:1,
      idL2:1,
      idL3:1,
      name:"item 3",
      valuee:1100
    },
    {
      idL1:1,
      idL2:1,
      idL3:2,
      name:"item 4",
      valuee:1800
    },
    {
      idL1:1,
      idL2:1,
      idL3:2,
      name:"item 5",
      valuee:1650
    },
    {
      idL1:1,
      idL2:1,
      idL3:2,
      name:"item 6",
      valuee:1100
    },
    {
      idL1:1,
      idL2:1,
      idL3:2,
      name:"item 7",
      valuee:900
    },
    {
      idL1:1,
      idL2:2,
      idL3:3,
      name:"item 8",
      valuee:1860
    },
    {
      idL1:1,
      idL2:2,
      idL3:3,
      name:"item 9",
      valuee:1190
    },
    {
      idL1:1,
      idL2:2,
      idL3:3,
      name:"item 10",
      valuee:1550
    }
  ]
}

customer_hierar1(){
  return [
    {
      id:1,
      name:"Level 1"
    },
    {
      id:2,
      name:"Level 2"
    },
    {
      id:3,
      name:"Level 3"
    }
  ]
}

customer_hierar2(){
  return [
    {
      idL1:1,
      idL2:1,
      name:"Business"
    },
    {
      idL1:2,
      idL2:1,
      name:"North India"
    },
    {
      idL1:2,
      idL2:2,
      name:"South India"
    },
    {
      idL1:3,
      idL2:1,
      name:"Delhi"
    },
    {
      idL1:3,
      idL2:2,
      name:"UP"
    },
    {
      idL1:3,
      idL2:3,
      name:"Hyderabad"
    }
  ]
}

customer_hierar3(){
  return [
    {
      idL1:1,
      idL2:1,
      idL3:1,
      name:"customer 1",
    },
    {
      idL1:1,
      idL2:1,
      idL3:1,
      name:"customer 2",
    },
    {
      idL1:1,
      idL2:1,
      idL3:1,
      name:"customer 3",
    },
    {
      idL1:1,
      idL2:1,
      idL3:2,
      name:"customer 4",
    },
    {
      idL1:1,
      idL2:1,
      idL3:2,
      name:"customer 5",
    },
    {
      idL1:1,
      idL2:1,
      idL3:2,
      name:"customer 6",
    },
    {
      idL1:1,
      idL2:1,
      idL3:2,
      name:"customer 7",
    },
    {
      idL1:1,
      idL2:2,
      idL3:3,
      name:"customer 8",
    },
    {
      idL1:1,
      idL2:2,
      idL3:3,
      name:"customer 9",
    },
    {
      idL1:1,
      idL2:2,
      idL3:3,
      name:"customer 10",
    }
  ]
}

}
