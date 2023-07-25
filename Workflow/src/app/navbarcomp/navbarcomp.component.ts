import { Component, OnInit,Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Serv1Service } from '../services/serv1.service';
import { AlertController } from '@ionic/angular';
import { Firestore,addDoc,collection,collectionData } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
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
   final_ddarray:any;

   // dependent dropdowns variables
   hierar1:any=[];
   hierar2:any=[];
   produc_arr:any=[];
   product_selected:any=[];
   minVal:any=[];
   level1!:number;
   level2!:number;

   customer_hierar1:any=[];
   customer_hierar2:any=[];
   customer_arr:any=[];
   customer_selected:any=[];
   final_matrix:any=[];
   cust_level1!:number;
   cust_level2!:number;

  constructor(private myserv1:Serv1Service, private alertcontroller:AlertController, private firestore:Firestore,private toastr:ToastrService) { }
  items = this.myserv1.seritems;
  ngOnInit() {
    this.hierar1 = this.myserv1.hierar1();
    //  console.log(this.hierar1);
    this.customer_hierar1=this.myserv1.customer_hierar1();
  }

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

    const dropdown = JSON.parse(localStorage.getItem('dropdown_table') || '{}');
    this.final_ddarray = dropdown;

    console.log(this.final_mapData);
    console.log(this.final_inpch_arr);
    console.log(this.final_ruleArr);
    console.log(this.final_username);
    console.log(this.final_ddarray);

    

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
      mapdata:mapObject,
      dropdown_data:this.final_ddarray
    }
    addDoc(collectionInstance,(data))
    .then(()=>{
      console.log('Data saved succesfully');
    })
    .catch(()=>{
      console.log('error');
    })



    //   CODE FOR FIREBASE ENDS HERE
    this.toastr.success('Workflow saved succesfully');
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

        this.Input = Number(this.Input.toFixed(2));
    console.log(this.Input);
    //  this.myserv1.inpch_array = this.inpvalu_array;
    console.log(this.myserv1.inpch_array);
    localStorage.setItem('inpch_Data',JSON.stringify(this.inpvalu_array));
    // seting the dropdow data to ls
    this.onSelect5();
    localStorage.setItem('dropdown_table',JSON.stringify(this.final_matrix));


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

  onSelect1(state: any){
    // console.log(state.target.value);
    this.level1 = state.target.value;
    this.hierar2 = this.myserv1.hierar2().filter(e=> e.idL1 == state.target.value);

  }

  onSelect2(state:any)
  {
    this.level2 = state.target.value;
    // console.log(this.level1);
    // console.log(this.level2);
    
    if(this.level1==1)
    {
      this.produc_arr = this.myserv1.hierar3().filter(e=>e.idL1==this.level2);
    }
    else if(this.level1==2)
    {
      this.produc_arr = this.myserv1.hierar3().filter(e=>e.idL2==this.level2);
    }
    else if(this.level1==3)
    {
      this.produc_arr = this.myserv1.hierar3().filter(e=>e.idL3==this.level2);
    }

    // console.log(this.produc_arr);
    for( const obj of this.produc_arr)
    {
      this.product_selected.push(obj.name);
      this.minVal.push(obj.valuee);
    }
    const minValue = Math.min(...this.minVal);
    console.log(this.product_selected);
    // console.log(minValue);
    this.Input = minValue;
  }

  onSelect3(state: any){
    // console.log(state.target.value);
    this.cust_level1 = state.target.value;
    this.customer_hierar2 = this.myserv1.customer_hierar2().filter(e=> e.idL1 == state.target.value);
  }

  onSelect4(state:any)
  {
    this.cust_level2 = state.target.value;
    // console.log(this.level1);
    // console.log(this.level2);
    
    if(this.cust_level1==1)
    {
      this.customer_arr = this.myserv1.customer_hierar3().filter(e=>e.idL1==this.cust_level2);
    }
    else if(this.cust_level1==2)
    {
      this.customer_arr = this.myserv1.customer_hierar3().filter(e=>e.idL2==this.cust_level2);
    }
    else if(this.cust_level1==3)
    {
      this.customer_arr = this.myserv1.customer_hierar3().filter(e=>e.idL3==this.cust_level2);
    }

    // console.log(this.produc_arr);
    for( const obj of this.customer_arr)
    {
      this.customer_selected.push(obj.name);
      // this.minVal.push(obj.valuee);
    }
    // const minValue = Math.min(...this.minVal);
    console.log(this.customer_selected);
    // console.log(minValue);
    // this.Input = minValue;
  }

  onSelect5(){
    const arr1 = this.customer_selected;
    const arr2 = this.produc_arr;
    const final_price = this.Input;

    for(const customer of arr1)
    {
      const cstmr = customer;
      for(const product of arr2)
      {
        const item = product;
        const item_name = item.name;
        const item_price = item.valuee;
        const obj = {
          customer : cstmr,
          item : item_name,
          item_i_price:item_price,
          item_f_price:final_price
        };
        this.final_matrix.push(obj);
      }
    }

    console.log(this.final_matrix);
  }

}
