import { Component, OnInit,Input } from '@angular/core';
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

  @Input() val1=true;
  @Input() val2=true;
  @Input() val3=true;
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
