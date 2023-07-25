import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page6',
  templateUrl: './page6.page.html',
  styleUrls: ['./page6.page.scss'],
})
export class Page6Page implements OnInit {
  p: number = 1;
  final_matrix:any=[];
  constructor() { }

  ngOnInit() {
    const serArray = JSON.parse(localStorage.getItem('dropdown_table') || '{}');
    this.final_matrix = serArray;

    console.log(this.final_matrix)
  }



}
