import { Component,ElementRef ,ViewChild,OnInit } from '@angular/core';
import {fabric} from 'fabric';

@Component({
  selector: 'app-canvas-comp',
  templateUrl: './canvas-comp.component.html',
  styleUrls: ['./canvas-comp.component.scss'],
})
export class CanvasCompComponent  implements OnInit {
  @ViewChild('canvas',{static:true}) myCanvas!:ElementRef;
  constructor() { }

  ngOnInit():void{
    const canvas: HTMLCanvasElement = this.myCanvas.nativeElement;
    const context = canvas.getContext('2d');
    if(context)
    {
      this.#drawRect(context);
    }
  }

  #drawRect(context:CanvasRenderingContext2D)
  {
    context.fillRect(20,20,20,20);
  }

  

}
