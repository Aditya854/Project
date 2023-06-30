import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
   userInput!: string;
   Input!:number;
  //  selectedRule!:string;
   selectedValue!: string;
   selectedRule!:string;

   public dataField: Object = {text:'Rule', value:'Id'};

   public ruledata :Object[] = [
     {Id: 1, Rule: 'X'},
     {Id: 2, Rule: 'N'},
     {Id: 3, Rule: 'M'}
   ];

  constructor() { }

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
  }
  

  onclick4()
  {
    console.log('Execute');
  }

  onOptionSelected(event: Event) {
    const value = (event.target as HTMLSelectElement).value;
    console.log(value);
  }

  

}
