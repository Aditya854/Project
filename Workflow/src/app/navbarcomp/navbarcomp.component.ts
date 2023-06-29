import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-navbarcomp',
  templateUrl: './navbarcomp.component.html',
  styleUrls: ['./navbarcomp.component.scss'],
})
export class NavbarcompComponent  implements OnInit {
   userInput!: string;
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

  onRule()
  {
    console.log(this.selectedRule);
  }

}
