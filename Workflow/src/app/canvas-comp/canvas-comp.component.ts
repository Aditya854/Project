import { Component,ElementRef ,ViewChild,OnInit } from '@angular/core';
import {fabric} from 'fabric';
import { DragDropModule} from '@angular/cdk/drag-drop';
import { Serv1Service } from '../services/serv1.service';
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

  // public items: Array<number> = [];

  dropListReceiverElement?: HTMLElement;
  dragDropInfo?: {
    dragIndex: number;
    dropIndex: number;
  };
  // arrayData!: any[];
  mapData: Map<number, object> = new Map<number, object>();
  ruleArr: number[]=[];
  objArr: any[]=[];

  myArray:number[]=[];
  val1=true;
  val2=true;
  val3=true;
  isShowDiv = true;
  @ViewChild('canvas',{static:true}) myCanvas!:ElementRef;
  constructor(private sharedService: Serv1Service) { }
  items = this.sharedService.seritems;

  ngOnInit():void{
    this.mapData = this.sharedService.myMap;
    console.log(this.mapData);
  }

  onclick4()
  { 
      // this.mapData = this.sharedService.myMap;
      
      // this.mapData.forEach((value: object, key: number) => {
      //   this.objArr.push(value);
      //   this.ruleArr.push(key);
      // });
      // console.log(this.ruleArr);
      // console.log(this.objArr);

      // var str = localStorage.getItem('mapData');
      const mapArray = JSON.parse(localStorage.getItem('mapData') || '{}');
      this.mapData = new Map<number,object>(mapArray);
       
      this.mapData.forEach((value: object, key: number) => {
        this.objArr.push(value);
        this.ruleArr.push(key);
      });
      console.log(this.ruleArr);
      console.log(this.objArr);

  }

  onclick5()
  {
    console.log(this.items);
  }


    onOptionSelected(event: Event) {
      const value = (event.target as HTMLSelectElement).value;
      // console.log(typeof(value));
        this.items.push(parseInt(value));
    }

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

  

  

