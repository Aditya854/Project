import { Component, OnInit,Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Serv1Service } from '../services/serv1.service';
@Component({
  selector: 'app-navbarcomp',
  templateUrl: './navbarcomp.component.html',
  styleUrls: ['./navbarcomp.component.scss'],
})
export class NavbarcompComponent  implements OnInit {

  @Input() val1=true;
  @Input() val2=true;
  @Input() val3=true;
   userInput!: string;
   Input!:number;
  //  selectedRule!:string;
   selectedValue!: string;
   selectedRule!:string;
   mapData: Map<number, object> = new Map<number, object>();

  constructor(private myserv1:Serv1Service) { }
  items = this.myserv1.seritems;
  ngOnInit() {}

  onInpch()
  {
    console.log(this.userInput);
  }

  onInpch2()
  {
    console.log(this.Input);
  }

  onclick3()
  {
    console.log('Save');
    // console.log(this.items);
  }
  

  onclick4()
  {
    // console.log('Execute');
    // console.log(this.myserv1.myMap);

    const mapArray = JSON.parse(localStorage.getItem('mapData') || '{}');
    this.mapData = new Map<number,object>(mapArray);
        // console.log(this.mapData);

     this.items.forEach((item:number)=>{
         const temp = this.mapData.get(item);
         const a = Number((temp as any).discount);
         const type = Number((temp as any).discount_type);
         if(type==1)
         {
          this.Input = this.Input - ((a*0.01)*this.Input);
         }
         else if(type==2)
         {
          this.Input = this.Input - a;
         }
     });

     console.log(this.Input);
    //  this.Input=0;
  }

  onOptionSelected(event: Event) {
    const value = (event.target as HTMLSelectElement).value;
    console.log(value);
  }

}
