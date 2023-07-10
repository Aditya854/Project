import { Component, OnInit,Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Serv1Service } from '../services/serv1.service';
@Component({
  selector: 'app-navbarcomp',
  templateUrl: './navbarcomp.component.html',
  styleUrls: ['./navbarcomp.component.scss'],
})
export class NavbarcompComponent  implements OnInit {
  // onclick(value : string)
  // {
  //    console.log(value);
  // }
  

  @Input() val1=true;
  @Input() val2=true;
  @Input() val3=true;
   userInput!: string;
   Input!:number;
  //  selectedRule!:string;
   selectedValue!: string;
   selectedRule!:string;
   mapData: Map<number, object> = new Map<number, object>();
  //  public dataField: Object = {text:'Rule', value:'Id'};

  //  public ruledata :Object[] = [
  //    {Id: 1, Rule: 'X'},
  //    {Id: 2, Rule: 'N'},
  //    {Id: 3, Rule: 'M'}
  //  ];

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
    console.log('Execute');
    console.log(this.myserv1.myMap);

    const mapArray = JSON.parse(localStorage.getItem('mapData') || '{}');
    this.mapData = new Map<number,object>(mapArray);
        console.log(this.mapData);

    // for(const [key,value] of this.mapData){
    //     const a = Number((value as any).discount);
    //     this.Input = this.Input - ((a*0.01)*this.Input);
    // }
    // console.log(this.Input);

    //  this.items.forEach((item:number)=>{
    //      const temp = map.get(item);
    //      const a = Number((temp as any).discount);
    //      this.Input = this.Input - ((a*0.01)*this.Input);
    //  });

    //  console.log(this.Input);

  }

  // func1(){
  //   console.log(this.val1);
  //    this.val1=!this.val1;
  //    console.log(this.val1);
  // }

  // func2(){
  //   console.log(this.val2);
  //   this.val2=!this.val2;
  //   console.log(this.val2);
  // }

  // func3(){
  //   console.log(this.val3);
  //   this.val3=!this.val3;
  //   console.log(this.val3);
  // }

  onOptionSelected(event: Event) {
    const value = (event.target as HTMLSelectElement).value;
    console.log(value);
  }

  

}
