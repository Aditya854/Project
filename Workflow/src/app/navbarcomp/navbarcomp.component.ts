import { Component, OnInit,Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Serv1Service } from '../services/serv1.service';
import { AlertController } from '@ionic/angular';
import { Firestore,addDoc,collection,collectionData } from '@angular/fire/firestore';
// import { error } from 'console';

// import {app} from '../firebaseconfig';
@Component({
  selector: 'app-navbarcomp',
  templateUrl: './navbarcomp.component.html',
  styleUrls: ['./navbarcomp.component.scss'],
})
export class NavbarcompComponent  implements OnInit {
  inpvalu_array:number[]=[];
  @Input() val1=true;
  @Input() val2=true;
  @Input() val3=true;
   userInput:string="";
   Input!:number;
  //  selectedRule!:string;
   selectedValue!: string;
   selectedRule!:string;
   mapData: Map<number, object> = new Map<number, object>();
   final_mapData!: Map<number, object>;
   final_ruleArr: any;
   final_inpch_arr: any;
   final_username:any;

  constructor(private myserv1:Serv1Service, private alertcontroller:AlertController, private firestore:Firestore) { }
  items = this.myserv1.seritems;
  ngOnInit() {}

  onInpch()
  {
    console.log(this.userInput);
    this.final_username=this.userInput;
    localStorage.setItem('Username',JSON.stringify(this.final_username));
  }

  onInpch2()
  {
    console.log(this.Input);
  }

  onclick3()
  {
    console.log('Save');

    //getting everything from the local storage which needs to be put to the database

    const mapArray = JSON.parse(localStorage.getItem('mapData') || '{}');
    this.final_mapData = new Map<number,object>(mapArray);

    const serArray = JSON.parse(localStorage.getItem('serData') || '{}');
    this.final_ruleArr = serArray;

    const inpch_array = JSON.parse(localStorage.getItem('inpch_Data') || '{}');
    this.final_inpch_arr = inpch_array;

    const username = JSON.parse(localStorage.getItem('Username') || '{}');
    this.final_username = username;

    console.log(this.final_mapData);
    console.log(this.final_inpch_arr);
    console.log(this.final_ruleArr);
    console.log(this.final_username);
    

    //   CODE FOR FIREBASE INTEGRATION
    const collectionInstance = collection(this.firestore,'users');
    const mapObject: { [key: number]: object } = {};
    this.final_mapData.forEach((value, key) => {
      mapObject[key] = value;
    });

    console.log(typeof(mapObject));
    console.log(typeof(this.userInput));
    const data={
      name:this.final_username as unknown as string,
      array1:this.final_inpch_arr,
      array2:this.final_ruleArr,
      mapdata:mapObject
    }
    addDoc(collectionInstance,(data))
    .then(()=>{
      console.log('Data saved succesfully');
    })
    .catch(()=>{
      console.log('error');
    })



    //   CODE FOR FIREBASE ENDS HERE
  }






  inpch_arr(inpch_arr: any) {
    throw new Error('Method not implemented.');
  }

  ruleArr(ruleArr: any) {
    throw new Error('Method not implemented.');
  }
  

  async onclick4() {

    this.inpvalu_array.push(this.Input as number);
    const serArray = this.items;

    localStorage.setItem('serData',JSON.stringify(serArray));
    const mapArray = JSON.parse(localStorage.getItem('mapData') || '{}');

    this.mapData = new Map<number,object>(mapArray);
     this.items.forEach((item:number)=>{
         const temp = this.mapData.get(item);
         const a = Number((temp as any).discount);
         const type = Number((temp as any).discount_type);
         if(type==1)
         {
          this.Input = this.Input - ((a*0.01)*this.Input);
          this.inpvalu_array.push(this.Input);
         }
         else if(type==2)
         {
          this.Input = this.Input - a;
          this.inpvalu_array.push(this.Input);
         }
        });

    console.log(this.Input);
    //  this.myserv1.inpch_array = this.inpvalu_array;
    console.log(this.myserv1.inpch_array);
    localStorage.setItem('inpch_Data',JSON.stringify(this.inpvalu_array));



    const a = this.Input as unknown as string;
    const alert = await this.alertcontroller.create({
      header: 'Workflow Executed',
      message: 'Output is '+ a,
      buttons: [
        {
          text: 'Download',
          handler: () => {
            // Handle the redirect action here
            // Replace 'destination' with the URL of the page you want to redirect to
            window.location.href = 'page5';
          }
        },
        {
          text: 'Dismiss',
          role: 'cancel',
          handler: () => {
            // Handle the dismiss action here
            // You can leave this blank if you don't need any specific action
          }
        }
      ]
    });
  
    await alert.present();
  }

  onOptionSelected(event: Event) {
    const value = (event.target as HTMLSelectElement).value;
    console.log(value);
  }

}
