import { Component,ElementRef ,ViewChild,OnInit } from '@angular/core';
import {fabric} from 'fabric';


@Component({
  selector: 'app-canvas-comp',
  templateUrl: './canvas-comp.component.html',
  styleUrls: ['./canvas-comp.component.scss'],

})
export class CanvasCompComponent  implements OnInit {
  myArray:number[]=[];
  val1=true;
  val2=true;
  val3=true;
  isShowDiv = true;
  @ViewChild('canvas',{static:true}) myCanvas!:ElementRef;
  constructor() { }


  ngOnInit():void{
    
    // if(context)
    // {
    //   this.#drawRect(context);
    // }
  }

  // addRectangle(ctx:CanvasRenderingContext2D)
  // {
  //   // var canvas = document.getElementById('stage');
  //   // if (canvas.getContext) {
  //     // var ctx = canvas.getContext('2d');

  //     ctx.fillStyle = "blue";
  //     ctx.fillRect(50,50,20,10);
  //     console.log("hie")
  //   }

  toggledisp()
  {
    this.isShowDiv=!this.isShowDiv;
    console.log("hie");
  }

    func1()
    {
      // console.log(this.val1);
      this.val1=false;
      // console.log(this.val1);
    }

    func2()
    {
      // console.log(this.val2);
      this.val2=false;
      // console.log(this.val2);
    }

    func3()
    {
      // console.log(this.val3);
      this.val3=false;
      // console.log(this.val3);
      console.log(this.myArray);
    }

    onOptionSelected(event: Event) {
      const value = (event.target as HTMLSelectElement).value;
      console.log(typeof(value));
      if(this.myArray.length<3)
      {
        this.myArray.push(parseInt(value));
      }
      if(value=="1")
      {
        this.func1();
      }
      else if(value=="2")
      {
        this.func2();
      }
      else{
        this.func3();
      }
    }



    //test
    
    
  }

  

  

