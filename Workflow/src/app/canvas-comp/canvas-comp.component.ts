import { Component,ElementRef ,ViewChild,OnInit } from '@angular/core';
import {fabric} from 'fabric';
import { DragDropModule} from '@angular/cdk/drag-drop';
import {
  CdkDragDrop,
  CdkDragEnter,
  CdkDragMove,
  moveItemInArray,
} from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-canvas-comp',
  templateUrl: './canvas-comp.component.html',
  styleUrls: ['./canvas-comp.component.scss'],

})
export class CanvasCompComponent  implements OnInit {
  @ViewChild('dropListContainer') dropListContainer?: ElementRef;

  public items: Array<number> = [];

  dropListReceiverElement?: HTMLElement;
  dragDropInfo?: {
    dragIndex: number;
    dropIndex: number;
  };


  myArray:number[]=[];
  val1=true;
  val2=true;
  val3=true;
  isShowDiv = true;
  @ViewChild('canvas',{static:true}) myCanvas!:ElementRef;
  constructor() { }


  ngOnInit():void{

  }

  // toggledisp()
  // {
  //   this.isShowDiv=!this.isShowDiv;
  //   console.log("hie");
  // }

    // func1()
    // {
    //   // console.log(this.val1);
    //   this.val1=false;
    //   // console.log(this.val1);
    // }

    // func2()
    // {
    //   // console.log(this.val2);
    //   this.val2=false;
    //   // console.log(this.val2);
    // }

    // func3()
    // {
    //   // console.log(this.val3);
    //   this.val3=false;
    //   // console.log(this.val3);
    //   console.log(this.myArray);
    // }

    onOptionSelected(event: Event) {
      const value = (event.target as HTMLSelectElement).value;
      console.log(typeof(value));
      if(this.items.length<3)
      {
        this.items.push(parseInt(value));
      }
    }
    //   if(value=="1")
    //   {
    //     this.func1();
    //   }
    //   else if(value=="2")
    //   {
    //     this.func2();
    //   }
    //   else{
    //     this.func3();
    //   }
    // }
  



    add() {
      this.items.push(this.items.length + 1);
    }
  
    shuffle() {
      this.items.sort(function () {
        return 0.5 - Math.random();
      });
    }
  
    dragEntered(event: CdkDragEnter<number>) {
      const drag = event.item;
      const dropList = event.container;
      const dragIndex = drag.data;
      const dropIndex = dropList.data;
  
      this.dragDropInfo = { dragIndex, dropIndex };
      console.log('dragEntered', { dragIndex, dropIndex });
  
      const phContainer = dropList.element.nativeElement;
      const phElement = phContainer.querySelector('.cdk-drag-placeholder');
  
      if (phElement) {
        phContainer.removeChild(phElement);
        phContainer.parentElement?.insertBefore(phElement, phContainer);
  
        moveItemInArray(this.items, dragIndex, dropIndex);
      }
    }
  
    dragMoved(event: CdkDragMove<number>) {
      if (!this.dropListContainer || !this.dragDropInfo) return;
  
      const placeholderElement =
        this.dropListContainer.nativeElement.querySelector(
          '.cdk-drag-placeholder'
        );
  
      const receiverElement =
        this.dragDropInfo.dragIndex > this.dragDropInfo.dropIndex
          ? placeholderElement?.nextElementSibling
          : placeholderElement?.previousElementSibling;
  
      if (!receiverElement) {
        return;
      }
  
      receiverElement.style.display = 'none';
      this.dropListReceiverElement = receiverElement;
    }
  
    dragDropped(event: CdkDragDrop<number>) {
      if (!this.dropListReceiverElement) {
        return;
      }
  
      this.dropListReceiverElement.style.removeProperty('display');
      this.dropListReceiverElement = undefined;
      this.dragDropInfo = undefined;
    }
  }

  

  

