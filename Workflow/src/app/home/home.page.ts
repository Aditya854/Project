import { Component } from '@angular/core';
import { Serv1Service } from '../services/serv1.service';
import { 
  Firestore,
  addDoc,
  collection,
  collectionData
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  data: any[] = [];
  Listdata!: Observable<any>;
  constructor(private service:Serv1Service,private firestore:Firestore) {
    localStorage.clear();
  }

  ngOnInit(){
    //  this.service.getall();
    this.getall();

  }

  getall(){
    const collectionInstance = collection(this.firestore,'users');
    collectionData(collectionInstance)
    .subscribe(val=>{
      console.log(val);
      console.log(typeof(val));
    })

    this.Listdata = collectionData(collectionInstance);
    console.log(this.Listdata);
    // console.log(typeof(this.Listdata));
  }

  Redirectingfn(){
    console.log('hello');
  }
}
